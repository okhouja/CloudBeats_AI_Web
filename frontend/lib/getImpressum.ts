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

const SELECTORS = ["main", "#content", ".content", "body"];
const REMOVE_SELECTORS = "script, style, noscript, iframe, header, footer, nav";

const ALLOWED_TAGS = [
  "p", "a", "strong", "em", "b", "i", "ul", "ol", "li", "br",
  "h1", "h2", "h3", "h4", "div", "span",
];
const ALLOWED_ATTRS: Record<string, string[]> = {
  a: ["href", "target", "rel"],
  "*": ["class"],
};

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
  let rawHtml = "";
  for (const sel of SELECTORS) {
    const el = $(sel).first();
    if (el.length && el.html()?.trim()) {
      rawHtml = el.html()?.trim() ?? "";
      break;
    }
  }
  if (!rawHtml) rawHtml = $.html("body")?.trim() ?? "";
  rawHtml = rawHtml.trim() || "<p>No content found.</p>";

  const withExternalLinks = rawHtml.replace(
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
