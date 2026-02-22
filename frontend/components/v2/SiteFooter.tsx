"use client";

import Link from "next/link";
import { ArrowUp, Music, Youtube, Instagram } from "lucide-react";

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)] rounded";

const navLinkClass = `text-white/50 hover:text-[var(--cb-cyan)] transition-colors duration-300 text-sm font-light px-1 -ml-1 ${focusRing}`;

export function SiteFooter({ id }: { id?: string }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      id={id}
      className="relative w-full mt-auto border-t border-white/10 bg-[var(--cb-bg-1)] backdrop-blur-md scroll-mt-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl tracking-tight text-white font-light">
                CloudBeats <span className="text-[var(--cb-cyan)]">AI</span>
              </h2>
              <p className="text-white/60 font-light italic text-[var(--cb-text-muted)]">
                Where systems shape sound.
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white/40 border border-white/10 rounded-full bg-white/[0.02]">
                Electronic Music & Sonic Systems
              </span>
            </div>
          </div>

          {/* Column 2: Listen */}
          <nav aria-label="Listen" className="flex flex-col space-y-6">
            <p className="text-white/40 uppercase tracking-widest text-xs font-medium">
              Listen
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className={`group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 rounded-sm ${focusRing}`}
                >
                  <Youtube size={18} className="text-white/40 group-hover:text-red-500 transition-colors" />
                  <span className="font-light">YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 rounded-sm ${focusRing}`}
                >
                  <Music size={18} className="text-white/40 group-hover:text-green-500 transition-colors" />
                  <span className="font-light">Spotify</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 rounded-sm ${focusRing}`}
                >
                  <Instagram size={18} className="text-white/40 group-hover:text-pink-500 transition-colors" />
                  <span className="font-light">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 rounded-sm ${focusRing}`}
                >
                  <span className="w-[18px] h-[18px] border border-white/40 rounded-full flex items-center justify-center group-hover:border-[var(--cb-cyan)] transition-colors">
                    <span className="w-1 h-1 bg-white/40 group-hover:bg-[var(--cb-cyan)] rounded-full" />
                  </span>
                  <span className="font-light">TikTok</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 3: System */}
          <nav aria-label="System" className="flex flex-col space-y-6">
            <p className="text-white/40 uppercase tracking-widest text-xs font-medium">
              System
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              <li>
                <Link href="/" className={navLinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/music" className={navLinkClass}>
                  Releases
                </Link>
              </li>
              <li>
                <Link href="/about" className={navLinkClass}>
                  Behind the Beats
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className={navLinkClass}>
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/audio-system" className={navLinkClass}>
                  Architecture
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-white/30 font-light">
            <span>© {year} CloudBeats AI · Systemic Precision.</span>
            <div className="hidden md:block w-px h-3 bg-white/10" />
            <div className="flex gap-6">
              <Link href="/impressum" className={`hover:text-white transition-colors px-1 -ml-1 ${focusRing}`}>
                Impressum
              </Link>
              <Link href="/privacy" className={`hover:text-white transition-colors px-1 -ml-1 ${focusRing}`}>
                Privacy
              </Link>
              <a
                href="mailto:info@cloudbeats.ai"
                className={`hover:text-white transition-colors px-1 -ml-1 ${focusRing}`}
              >
                info@cloudbeats.ai
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={`group flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 ${focusRing}`}
            aria-label="Back to top"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
              Top
            </span>
            <ArrowUp size={14} className="text-white/40 group-hover:text-[var(--cb-cyan)] group-hover:-translate-y-0.5 transition-all duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
