/**
 * Shared v2 design tokens and class strings.
 * Use for section wrappers, cards, headings, links, and buttons across v2 pages.
 */

const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)] rounded";
const focusRingWhite = "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)] rounded";

export const v2 = {
  /** Section outer: bg, padding, overflow. Add scroll-mt-24 and id where needed. */
  sectionWrapper: "overflow-hidden bg-[var(--cb-bg-1)] px-4 py-12 md:py-16",
  /** Section with top border (e.g. Contact). */
  sectionWrapperBorder: "scroll-mt-24 overflow-hidden border-t border-white/10 bg-[var(--cb-bg-1)] px-4 py-12 md:py-16",
  /** Section inner container base. Add max-w-* (e.g. max-w-3xl, max-w-5xl). */
  sectionInner: "mx-auto min-w-0",

  /** Card: rounded, border, subtle bg. */
  card: "rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)]",
  /** Card hover + focus (cyan accent). */
  cardHover: "transition-colors hover:border-[var(--cb-cyan)]/40 hover:bg-white/10 " + focusRing,
  /** Card hover with pink accent (e.g. Latest Release). */
  cardHoverPink: "transition-colors hover:border-[var(--cb-pink)]/40 hover:bg-white/10 " + focusRing,
  /** Card hover muted (border-white/20, text). */
  cardHoverMuted: "transition-colors hover:border-white/20 hover:text-[var(--cb-text)] " + focusRing,

  /** Large content card (About, Impressum wrapper). */
  cardLarge: "rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-sm",

  /** Uppercase label (e.g. "ABOUT", "Legal"). */
  headingSmall: "text-sm font-medium uppercase tracking-[0.35em] text-[var(--cb-text-muted)]",
  /** Section heading (e.g. "Listen", "Contact"). */
  headingLarge: "text-xl font-semibold tracking-wide text-[var(--cb-text)] md:text-2xl",
  /** Page title (e.g. "Behind the Beats"). */
  headingPage: "text-2xl font-semibold text-[var(--cb-text)] md:text-3xl",

  /** Muted body text. */
  textMuted: "text-[var(--cb-text-muted)]",
  /** Muted small (captions). */
  textMutedSm: "text-xs text-[var(--cb-text-muted)]",

  /** Underline link with hover + focus. */
  linkPrimary: "underline transition-colors hover:text-[var(--cb-text)] " + focusRing,
  /** Cyan link (v2 variant). */
  linkSecondary: "text-[var(--cb-cyan)] underline underline-offset-4 hover:opacity-90 " + focusRing,

  /** Primary CTA button (pink). */
  buttonPrimary: "inline-block rounded-xl border border-white/10 bg-[var(--cb-pink-strong)] px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 " + focusRingWhite,
  /** Secondary button (outline / ghost). */
  buttonSecondary: "inline-block rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 py-3 text-sm font-medium text-[var(--cb-text)] transition-colors hover:bg-white/10 " + focusRingWhite,
} as const;
