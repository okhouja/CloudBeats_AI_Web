import { Music2, Youtube } from "lucide-react";

const YOUTUBE_URL = "https://www.youtube.com/@CloudBeatsAI";
const SPOTIFY_URL = "https://open.spotify.com/artist/1ruWoz5hU3ThyZnNa5L2s5";

/**
 * Listen section for /v2 home. id="listen" for navbar anchor.
 * Links: YouTube, Spotify, Latest Release (scrolls to #now).
 */
export function ListenSection() {
  return (
    <section
      id="listen"
      className="scroll-mt-24 overflow-hidden bg-[var(--cb-bg-1)] px-4 py-12 md:py-16"
      aria-labelledby="listen-heading"
    >
      <div className="mx-auto min-w-0 max-w-3xl">
        <h2
          id="listen-heading"
          className="mb-8 text-center text-xl font-semibold tracking-wide text-[var(--cb-text)] md:text-2xl"
        >
          Listen
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open CloudBeats AI YouTube channel"
            className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 py-5 text-[var(--cb-text)] transition-colors hover:border-[var(--cb-cyan)]/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)]"
          >
            <Youtube className="h-8 w-8 shrink-0" strokeWidth={1.5} aria-hidden />
            <span className="text-center font-medium">YouTube</span>
            <span className="text-center text-xs text-[var(--cb-text-muted)]">
              Channel
            </span>
          </a>
          <a
            href={SPOTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open CloudBeats AI Spotify artist profile"
            className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 py-5 text-[var(--cb-text)] transition-colors hover:border-[var(--cb-cyan)]/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)]"
          >
            <Music2 className="h-8 w-8 shrink-0" strokeWidth={1.5} aria-hidden />
            <span className="text-center font-medium">Spotify</span>
            <span className="text-center text-xs text-[var(--cb-text-muted)]">
              Artist profile
            </span>
          </a>
          <a
            href="#now"
            aria-label="Go to latest release section"
            className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 py-5 text-[var(--cb-text)] transition-colors hover:border-[var(--cb-pink)]/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--cb-pink-strong)]/20 text-sm font-semibold text-[var(--cb-pink-strong)]">
              •
            </span>
            <span className="text-center font-medium">Latest Release</span>
            <span className="text-center text-xs text-[var(--cb-text-muted)]">
              Chapter IV — Motion
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
