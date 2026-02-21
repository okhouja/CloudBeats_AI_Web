import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <main className="overflow-hidden px-4 py-24 md:py-32">
        <div className="mx-auto min-w-0 max-w-xl text-center">
          <h1 className="text-2xl font-semibold text-[var(--cb-text)] md:text-3xl">
            Page not found
          </h1>
          <p className="mt-3 text-[var(--cb-text-muted)]">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-block rounded-xl border border-white/10 bg-[var(--cb-pink-strong)] px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              Go Home
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 py-3 text-sm font-medium text-[var(--cb-text)] transition-colors hover:bg-white/10"
            >
              Behind the Beats
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
