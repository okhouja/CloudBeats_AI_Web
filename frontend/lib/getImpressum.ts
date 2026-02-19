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
};

const REMOVE_SELECTORS =
  "script, style, noscript, iframe, header, footer, nav, aside, form, button, svg";

const LEGAL_SELECTORS = [
  "main",
  "article",
  "#content",
  ".content",
  ".entry-content",
  ".impressum",
  "[class*='impressum']",
  "[id*='impressum']",
  "body > .container",
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

const SOCIAL_PLATFORM_NAMES = ["youtube", "facebook", "tiktok", "instagram", "twitter", "x.com"];
const MIN_LEGAL_TEXT_LENGTH = 200;
const MIN_MEANINGFUL_LENGTH = 400;

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

function scoreNode($: cheerio.CheerioAPI, el: unknown): number {
  const text = getText($, el);
  if (text.length < 100) return 0;
  let score = text.length;
  const lower = text.toLowerCase();
  if (lower.includes("impressum")) score += 500;
  for (const kw of LEGAL_KEYWORDS) {
    if (lower.includes(kw)) score += 80;
  }
  if (text.length >= MIN_MEANINGFUL_LENGTH) score += 200;
  return score;
}

function isOnlySocialOrTheme($: cheerio.CheerioAPI, el: unknown): boolean {
  const text = getText($, el).toLowerCase();
  const hasSocialPhrase =
    /dark\s*mode|theme|social|share|toggle|youtube|facebook|tiktok|instagram/.test(text);
  if (!hasSocialPhrase) return false;
  const hasLegal = LEGAL_KEYWORDS.some((kw) => text.includes(kw)) || text.includes("impressum");
  if (hasLegal) return false;
  const platformCount = SOCIAL_PLATFORM_NAMES.filter((p) => text.includes(p)).length;
  return platformCount >= 2 || text.length < 150;
}

export async function getImpressum(): Promise<GetImpressumResult> {
  const res = await fetch(IMPRESSUM_URL, {
    next: { revalidate: 3600 },
    headers: {
      "User-Agent": "Mozilla/5.0 CloudBeatsAI/1.0",
      Accept: "text/html",
    },
  });

  if (!res.ok) {
    throw new Error(`Impressum fetch failed: ${res.status}`);
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  $(REMOVE_SELECTORS).remove();
  $('[class*="social"], [class*="share"], [class*="toggle"], [class*="theme"]').remove();
  $('[id*="social"], [id*="share"], [id*="toggle"], [id*="theme"]').remove();

  let bestHtml = "";
  let bestSelector = "";
  let bestScore = 0;

  for (const sel of LEGAL_SELECTORS) {
    const nodes = $(sel);
    nodes.each((_, el) => {
      if (isOnlySocialOrTheme($, el)) return;
      const score = scoreNode($, el);
      if (score > bestScore) {
        const raw = $(el as never).html()?.trim() ?? "";
        if (raw.length >= 50) {
          bestScore = score;
          bestHtml = raw;
          bestSelector = sel;
        }
      }
    });
  }

  if (!bestHtml) {
    const bodyHtml = $("body").html()?.trim() ?? "";
    if (bodyHtml.length >= 100) {
      bestHtml = bodyHtml;
      bestSelector = "body";
    }
  }

  const plainText = bestHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const hasLegalKeyword = LEGAL_KEYWORDS.some((kw) => plainText.toLowerCase().includes(kw)) ||
    plainText.toLowerCase().includes("impressum");

  if (plainText.length < MIN_LEGAL_TEXT_LENGTH || !hasLegalKeyword) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[getImpressum] Rejected: too short or no legal keywords", {
        length: plainText.length,
        preview: plainText.slice(0, 150),
      });
    }
    throw new Error("Impressum content validation failed");
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[getImpressum] Chosen:", bestSelector, "| preview:", plainText.slice(0, 200));
  }

  const withExternalLinks = bestHtml.replace(
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
