import Link from "next/link";
import { getImpressum, IMPRESSUM_URL } from "@/lib/getImpressum";

export default async function ImpressumPage() {
  let data: Awaited<ReturnType<typeof getImpressum>> | null = null;
  try {
    data = await getImpressum();
  } catch {
    data = null;
  }

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

      <div className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
          <h1 className="text-2xl font-semibold text-[var(--cb-text)]">
            Impressum
          </h1>
          <p className="mt-2 text-sm text-[var(--cb-text-muted)]">
            Legal information is hosted externally for address protection. A
            mirrored preview is shown below.
          </p>
          <p className="mt-1 text-xs text-[var(--cb-text-muted)]/80">
            This page is mirrored from the official external source for
            convenience.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={IMPRESSUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--cb-pink-strong)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              View legal information
            </a>
            <Link
              href="/impressum"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-[var(--cb-text)] transition-colors hover:bg-white/10"
            >
              Refresh
            </Link>
          </div>

          <div className="mt-8">
            {data ? (
              <div
                className="prose prose-invert max-w-none text-[var(--cb-text-muted)] prose-p:text-sm prose-a:text-[var(--cb-cyan)] prose-a:underline prose-headings:text-[var(--cb-text)]"
                dangerouslySetInnerHTML={{ __html: data.html }}
              />
            ) : (
              <p className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-[var(--cb-text-muted)]">
                Couldn&apos;t load the mirrored version right now. Please use
                the official link below.
              </p>
            )}
          </div>

          {!data && (
            <div className="mt-4">
              <a
                href={IMPRESSUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[var(--cb-pink-strong)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
              >
                View legal information
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
