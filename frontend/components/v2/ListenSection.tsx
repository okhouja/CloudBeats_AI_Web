import { Music2, Youtube } from "lucide-react";
import { v2 } from "./ui";

const YOUTUBE_URL = "https://www.youtube.com/@CloudBeatsAI";
const SPOTIFY_URL = "https://open.spotify.com/artist/1ruWoz5hU3ThyZnNa5L2s5";

const cardBase = "flex flex-col items-center gap-3 px-6 py-5 text-[var(--cb-text)]";

/**
 * Listen section for /v2 home. id="listen" for navbar anchor.
 * Links: YouTube, Spotify, Latest Release (scrolls to #now).
 */
export function ListenSection() {
  return (
    <section
      id="listen"
      className={`scroll-mt-24 ${v2.sectionWrapper}`}
      aria-labelledby="listen-heading"
    >
      <div className={`${v2.sectionInner} max-w-3xl`}>
        <h2
          id="listen-heading"
          className={`mb-8 text-center ${v2.headingLarge}`}
        >
          Listen
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open CloudBeats AI YouTube channel"
            className={`${v2.card} ${cardBase} ${v2.cardHover}`}
          >
            <Youtube className="h-8 w-8 shrink-0" strokeWidth={1.5} aria-hidden />
            <span className="text-center font-medium">YouTube</span>
            <span className={`text-center ${v2.textMutedSm}`}>Channel</span>
          </a>
          <a
            href={SPOTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open CloudBeats AI Spotify artist profile"
            className={`${v2.card} ${cardBase} ${v2.cardHover}`}
          >
            <Music2 className="h-8 w-8 shrink-0" strokeWidth={1.5} aria-hidden />
            <span className="text-center font-medium">Spotify</span>
            <span className={`text-center ${v2.textMutedSm}`}>Artist profile</span>
          </a>
          <a
            href="#now"
            aria-label="Go to latest release section"
            className={`${v2.card} ${cardBase} ${v2.cardHoverPink}`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--cb-pink-strong)]/20 text-sm font-semibold text-[var(--cb-pink-strong)]">
              •
            </span>
            <span className="text-center font-medium">Latest Release</span>
            <span className={`text-center ${v2.textMutedSm}`}>
              Chapter IV — Motion
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
