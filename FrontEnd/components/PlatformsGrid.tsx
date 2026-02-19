import {
  Cloud,
  ExternalLink,
  Facebook,
  Instagram,
  MessageCircle,
  Music2,
  ShoppingBag,
  Video,
  Youtube,
} from "lucide-react";

const PLATFORMS = [
  { name: "YouTube", href: "https://www.youtube.com/@CloudBeatsAI", Icon: Youtube, primary: true },
  { name: "TikTok", href: "https://www.tiktok.com/@cloudbeatsai", Icon: Video, primary: false },
  { name: "Instagram", href: "https://www.instagram.com/cloudbeatsai/", Icon: Instagram, primary: false },
  { name: "Facebook", href: "https://www.facebook.com/CloudBeatsAI/", Icon: Facebook, primary: false },
  { name: "Threads", href: "https://www.threads.com/@cloudbeatsai", Icon: MessageCircle, primary: false },
  { name: "X", href: "https://x.com/CloudBeatsAI", Icon: ExternalLink, primary: false },
  { name: "Spotify", href: "https://open.spotify.com/artist/1ruWoz5hU3ThyZnNa5L2s5", Icon: Music2, primary: false },
  { name: "Amazon Music", href: "https://music.amazon.de/artists/B0GK2SYNYN/cloudbeats-ai", Icon: ShoppingBag, primary: false },
  { name: "SoundCloud", href: "https://soundcloud.com/cloudbeatsai", Icon: Cloud, primary: false },
] as const;

export function PlatformsGrid() {
  return (
    <section
      id="listen"
      className="scroll-mt-24 bg-[var(--cb-bg-1)] px-4 py-16 md:py-24"
      aria-labelledby="listen-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="listen-heading"
          className="mb-10 text-center text-2xl font-semibold text-[var(--cb-text)] md:text-3xl"
        >
          Listen everywhere
        </h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PLATFORMS.map(({ name, href, Icon, primary }) => (
            <li
              key={name}
              className={primary ? "lg:col-span-2" : undefined}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 text-[var(--cb-text)] transition-all duration-200 hover:border-[var(--cb-cyan)]/40 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(133,215,246,0.18)] ${
                  primary ? "py-6 md:py-8" : "py-5"
                }`}
              >
                {primary && (
                  <span className="absolute right-2 top-2 rounded bg-[var(--cb-pink-strong)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
                    Primary
                  </span>
                )}
                <Icon
                  className={`shrink-0 ${primary ? "h-8 w-8 md:h-9 md:w-9" : "h-6 w-6 md:h-7 md:w-7"}`}
                  strokeWidth={1.5}
                />
                <span className={`text-center font-medium ${primary ? "text-base md:text-lg" : "text-sm"}`}>
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
