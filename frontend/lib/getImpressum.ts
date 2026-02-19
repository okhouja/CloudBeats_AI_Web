/**
 * Server-side fetch, parse, and sanitize of external Impressum HTML.
 * Used by app/api/impressum/route.ts and app/impressum/page.tsx.
 */

import * as cheerio from "cheerio";
import sanitizeHtml from "sanitize-html";

const IMPRESSUM_URL = "https://mein.online-impressum.de/cloudbeatsai/";

export type GetImpressumResult = {
  html: string;
  sourceUrl: string;
  fetchedAt: string;
  error?: string;
};

const REMOVE_SELECTORS =
  "script, style, noscript, iframe, header, footer, nav, aside, form, button, svg";

const ANCHOR_PHRASES = [
  "Angaben gemäß",
  "Impressum",
  "Kontakt",
  "USt",
  "Register",
  "Haftung",
];

const LEGAL_KEYWORDS = [
  "impressum",
  "angaben gemäß",
  "kontakt",
  "vertreten",
  "ust",
  "register",
  "haftung",
  "anschrift",
  "verantwortlich",
];

const S3_CANDIDATES = ["main", "article", "#content", ".content", ".entry-content", "body"];
const MIN_LEGAL_TEXT_LENGTH = 120;

const ALLOWED_TAGS = [
  "p", "a", "strong", "em", "b", "i", "ul", "ol", "li", "br",
  "h1", "h2", "h3", "h4", "div", "span",
];
const ALLOWED_ATTRS: Record<string, string[]> = {
  a: ["href", "target", "rel"],
  "*": ["class"],
};

function getText($: cheerio.CheerioAPI, el: unknown): string {
  return $(el as never).text().replace(/\s+/g, " ").trim();
}

function getOuterHtml($: cheerio.CheerioAPI, el: unknown): string {
  const sel = $(el as never);
  if (!sel.length) return "";
  return $("<div>").append(sel.clone()).html()?.trim() ?? "";
}

function isLegalLooking(text: string): boolean {
  if (text.length < MIN_LEGAL_TEXT_LENGTH) return false;
  const lower = text.toLowerCase();
  const hasKeyword =
    LEGAL_KEYWORDS.some((kw) => lower.includes(kw)) || lower.includes("impressum");
  if (!hasKeyword) return false;
  const socialOnly =
    /youtube|facebook|tiktok|instagram|dark\s*mode/i.test(lower) &&
    !LEGAL_KEYWORDS.some((kw) => lower.includes(kw)) &&
    text.length < 300;
  return !socialOnly;
}

function scoreNode($: cheerio.CheerioAPI, el: unknown): number {
  const text = getText($, el);
  if (text.length < 80) return 0;
  let score = text.length;
  const lower = text.toLowerCase();
  if (lower.includes("angaben gemäß") || lower.includes("impressum")) score += 600;
  for (const kw of LEGAL_KEYWORDS) {
    if (lower.includes(kw)) score += 60;
  }
  return score;
}

export async function getImpressum(): Promise<GetImpressumResult> {
  const res = await fetch(IMPRESSUM_URL, {
    next: { revalidate: 3600 },
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "de-DE,de;q=0.9,en;q=0.8",
      Referer: "https://cloudbeats.ai/impressum",
    },
  });

  const statusCode = res.status;
  if (!res.ok) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[getImpressum] status", statusCode, "fetch failed");
    }
    return {
      html: "",
      error: "EXTRACTION_FAILED",
      sourceUrl: IMPRESSUM_URL,
      fetchedAt: new Date().toISOString(),
    };
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  $(REMOVE_SELECTORS).remove();
  $(
    '[class*="social"], [class*="share"], [class*="toggle"], [class*="theme"], [class*="cookie"], [class*="consent"]'
  ).remove();
  $(
    '[id*="social"], [id*="share"], [id*="toggle"], [id*="theme"], [id*="cookie"], [id*="consent"]'
  ).remove();

  let chosenHtml = "";
  let strategy = "";

  // S1: keyword anchor
  for (const phrase of ANCHOR_PHRASES) {
    const anchor = $("*").filter((_, el) => $(el).text().includes(phrase)).first();
    if (!anchor.length) continue;
    let container = anchor.closest("main, article, section, div");
    if (!container.length) container = anchor.parent();
    if (!container.length) continue;
    const raw = getOuterHtml($, container.get(0));
    const text = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (isLegalLooking(text)) {
      chosenHtml = raw;
      strategy = "S1";
      break;
    }
  }

  // S2: heading-based
  if (!chosenHtml) {
    const heading = $("h1, h2, h3")
      .filter((_, el) => $(el).text().includes("Impressum"))
      .first();
    if (heading.length) {
      let container = heading.closest("main, article, section, div");
      if (!container.length) container = heading.parent();
      if (container.length) {
        const raw = getOuterHtml($, container.get(0));
        const text = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
        if (isLegalLooking(text)) {
          chosenHtml = raw;
          strategy = "S2";
        }
      }
    }
  }

  // S3: largest legal-text block
  if (!chosenHtml) {
    let bestScore = 0;
    let bestEl: unknown = null;
    for (const sel of S3_CANDIDATES) {
      $(sel).each((_, el) => {
        const score = scoreNode($, el);
        if (score > bestScore) {
          const text = getText($, el);
          if (isLegalLooking(text)) {
            bestScore = score;
            bestEl = el;
          }
        }
      });
    }
    if (bestEl) {
      chosenHtml = getOuterHtml($, bestEl);
      strategy = "S3";
    }
  }

  const plainText = chosenHtml
    ? chosenHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
    : "";

  if (!chosenHtml || !isLegalLooking(plainText)) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[getImpressum] status", statusCode, "strategy none | validation failed", {
        length: plainText.length,
        preview: plainText.slice(0, 200),
      });
    }
    return {
      html: "",
      error: "EXTRACTION_FAILED",
      sourceUrl: IMPRESSUM_URL,
      fetchedAt: new Date().toISOString(),
    };
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[getImpressum] status", statusCode, "strategy", strategy, "| preview:", plainText.slice(0, 200));
  }

  const withExternalLinks = chosenHtml.replace(
    /<a\s+/gi,
    "<a target=\"_blank\" rel=\"noopener noreferrer\" "
  );

  const cleanedHtml = sanitizeHtml(withExternalLinks, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRS,
    allowedSchemes: ["http", "https", "mailto"],
  });

  return {
    html: cleanedHtml,
    sourceUrl: IMPRESSUM_URL,
    fetchedAt: new Date().toISOString(),
  };
}

export { IMPRESSUM_URL };
