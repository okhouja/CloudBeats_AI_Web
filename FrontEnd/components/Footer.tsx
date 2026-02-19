export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10 bg-[var(--cb-bg-1)] px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center text-sm text-[var(--cb-text-muted)]">
        <nav aria-label="Legal and contact">
          <a
            href="/impressum"
            className="underline transition-colors hover:text-[var(--cb-text)]"
          >
            Impressum
          </a>
          <span className="mx-3">·</span>
          <a
            href="mailto:info@cloudbeats.ai"
            className="underline transition-colors hover:text-[var(--cb-text)]"
          >
            info@cloudbeats.ai
          </a>
        </nav>
        <p>© {year} CloudBeats AI. All rights reserved.</p>
        <p className="mt-2 text-center text-xs text-[var(--cb-text-muted)]/70">
          v1.0 · Building in public. More soon.
        </p>
      </div>
    </footer>
  );
}
