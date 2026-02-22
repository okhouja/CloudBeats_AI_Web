"use client";

import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";
import { v2 } from "./ui";

const EMAIL = "info@cloudbeats.ai";
const GITHUB_URL = "https://github.com/okhouja";
const LINKEDIN_URL = "https://www.linkedin.com/in/omar-khouja/";

const cardRow = "flex items-center gap-2 rounded-xl px-5 py-4";

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
      className={v2.sectionWrapperBorder}
      aria-labelledby="contact-heading"
    >
      <div className={`${v2.sectionInner} max-w-3xl`}>
        <h2
          id="contact-heading"
          className={`mb-8 text-center ${v2.headingLarge}`}
        >
          Contact
        </h2>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email CloudBeats AI"
            className={`${v2.card} flex items-center gap-3 px-5 py-4 text-[var(--cb-text)] ${v2.cardHover}`}
          >
            <Mail className={`h-5 w-5 shrink-0 ${v2.textMuted}`} strokeWidth={1.5} aria-hidden />
            <span className="font-medium">{EMAIL}</span>
          </a>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`${v2.card} ${cardRow} ${v2.textMuted} ${v2.cardHoverMuted}`}
            >
              <Github className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`${v2.card} ${cardRow} ${v2.textMuted} ${v2.cardHoverMuted}`}
            >
              <Linkedin className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
        <p className={`mt-6 text-center text-sm ${v2.textMuted}`}>
          <a href={`${basePath}/impressum`} className={v2.linkPrimary}>
            Impressum
          </a>
          {" · Legal & contact"}
        </p>
      </div>
    </section>
  );
}
