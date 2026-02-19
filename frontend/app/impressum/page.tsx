import Link from "next/link";

const LEGAL_URL = "https://mein.online-impressum.de/cloudbeatsai/";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-6xl items-center px-4 py-3"
          aria-label="Impressum navigation"
        >
          <Link
            href="/"
            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            ← Back
          </Link>
        </nav>
      </header>

      <div className="px-4 py-12">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-2xl font-semibold text-[var(--cb-text)]">
            Impressum
          </h1>
          <p className="mt-2 text-sm text-[var(--cb-text-muted)]">
            Legal information is hosted externally for address protection.
          </p>
          <a
            href={LEGAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-[var(--cb-pink-strong)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
          >
            View legal information
          </a>
          <p className="mt-3 text-center text-xs text-[var(--cb-text-muted)]">
            Opens in a new tab.
          </p>
        </div>
      </div>
    </div>
  );
}
