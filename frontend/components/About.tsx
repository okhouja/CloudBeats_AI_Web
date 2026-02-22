import Link from "next/link";

export function About() {
  return (
    <section
      className="bg-[var(--cb-bg-1)] overflow-hidden px-4 py-10 md:py-14"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto min-w-0 max-w-xl">
        <h2
          id="about-heading"
          className="mb-4 text-center text-sm font-medium uppercase tracking-[0.35em] text-[var(--cb-text-muted)]"
        >
          ABOUT
        </h2>
        <p className="mx-auto text-center text-[var(--cb-text-muted)] text-[15px] leading-relaxed md:text-base">
          CloudBeats AI is an electronic music project curated by an Artist
          Engineer. AI-assisted composition, guided by human direction — exploring
          structured chaos across cinematic techno, psytrance, ambient, and
          hybrid electronic sound.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/about"
            className="inline-block rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-[var(--cb-text)] transition-all hover:border-white/20 hover:shadow-[0_0_24px_rgba(133,215,246,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)]"
          >
            Behind the Beats →
          </Link>
        </div>
      </div>
    </section>
  );
}
