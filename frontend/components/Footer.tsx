"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkClass =
  "underline transition-colors hover:text-[var(--cb-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)] rounded";

export default function Footer() {
  const pathname = usePathname();
  const basePath = pathname.startsWith("/v2") ? "/v2" : pathname.startsWith("/v1") ? "/v1" : "";
  const year = new Date().getFullYear();
  const omitContactId = pathname === "/" || pathname.startsWith("/v2");

  return (
    <footer
      id={omitContactId ? undefined : "contact"}
      className="scroll-mt-24 overflow-hidden border-t border-white/10 bg-[var(--cb-bg-1)] px-4 py-8"
    >
      <div className="mx-auto flex min-w-0 max-w-5xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* System */}
        <nav aria-label="System" className="text-center md:text-left">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--cb-text-muted)]">
            System
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/roadmap" className={linkClass}>
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="/audio-system" className={linkClass}>
                Architecture
              </Link>
            </li>
          </ul>
        </nav>

        {/* Legal and contact */}
        <div className="flex flex-col items-center gap-4 text-center text-sm text-[var(--cb-text-muted)] md:items-end md:text-right">
          <nav aria-label="Legal and contact">
            <a href={`${basePath || ""}/impressum`} className={linkClass}>
              Impressum
            </a>
            <span className="mx-3">·</span>
            <a href="mailto:info@cloudbeats.ai" className={linkClass}>
              info@cloudbeats.ai
            </a>
          </nav>
          <p>© {year} CloudBeats AI. All rights reserved.</p>
          <p className="mt-2 text-center text-xs text-[var(--cb-text-muted)]/70 md:text-right">
            v1.0 · Building in public. More soon.
          </p>
        </div>
      </div>
    </footer>
  );
}
