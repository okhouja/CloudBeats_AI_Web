"use client";

import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "info@cloudbeats.ai";
const GITHUB_URL = "https://github.com/okhouja";
const LINKEDIN_URL = "https://www.linkedin.com/in/omar-khouja/";

/**
 * Contact section for /v2 home. id="contact" for navbar anchor when used on v2 (Footer omits id on v2).
 * Email + social links (GitHub, LinkedIn).
 */
export function ContactSection() {
  const pathname = usePathname();
  const basePath = pathname.startsWith("/v2") ? "/v2" : "";

  return (
    <section
      id="contact"
      className="scroll-mt-24 overflow-hidden border-t border-white/10 bg-[var(--cb-bg-1)] px-4 py-12 md:py-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto min-w-0 max-w-3xl">
        <h2
          id="contact-heading"
          className="mb-8 text-center text-xl font-semibold tracking-wide text-[var(--cb-text)] md:text-2xl"
        >
          Contact
        </h2>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email CloudBeats AI"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-5 py-4 text-[var(--cb-text)] transition-colors hover:border-[var(--cb-cyan)]/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)]"
          >
            <Mail className="h-5 w-5 shrink-0 text-[var(--cb-text-muted)]" strokeWidth={1.5} aria-hidden />
            <span className="font-medium">{EMAIL}</span>
          </a>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-5 py-4 text-[var(--cb-text-muted)] transition-colors hover:border-white/20 hover:text-[var(--cb-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)]"
            >
              <Github className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-5 py-4 text-[var(--cb-text-muted)] transition-colors hover:border-white/20 hover:text-[var(--cb-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)]"
            >
              <Linkedin className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-[var(--cb-text-muted)]">
          <a
            href={`${basePath}/impressum`}
            className="underline transition-colors hover:text-[var(--cb-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)] rounded"
          >
            Impressum
          </a>
          {" · Legal & contact"}
        </p>
      </div>
    </section>
  );
}
