import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const GITHUB_URL = "https://github.com/okhouja";
const LINKEDIN_URL = "https://www.linkedin.com/in/omar-khouja/";

export function Creator() {
  return (
    <section
      className="border-t border-white/10 bg-[var(--cb-bg-1)] px-4 py-10 md:py-12"
      aria-labelledby="creator-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="creator-heading"
          className="mb-0.5 flex items-center justify-center gap-2"
          aria-label="CloudBeats AI"
        >
          <Image
            src="/logo_cloud.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            aria-hidden
          />
          <Image
            src="/logo.png"
            alt="CloudBeats AI"
            width={200}
            height={75}
            className="h-auto w-[180px] md:w-[200px]"
          />
        </h2>
        <p className="mb-1 text-sm text-[var(--cb-text-muted)]">
          Created by Omar Khouja
        </p>
        <p className="mb-6 text-sm text-[var(--cb-text-muted)]">
          DevOps & Multi-Cloud Engineer (AWS | Azure) · Artist Engineer
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[var(--cb-text)] transition-all hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(133,215,246,0.15)]"
            >
              <Github className="h-4 w-4" strokeWidth={1.5} />
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[var(--cb-text)] transition-all hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(133,215,246,0.15)]"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              LinkedIn
            </a>
          </div>
          <Link
            href="/about"
            className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Behind the Beats →
          </Link>
        </div>
      </div>
    </section>
  );
}
