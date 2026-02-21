// frontend\components\Now.tsx
import Image from "next/image";

export function Now() {
  return (
    <section
      id="now"
      className="scroll-mt-24 bg-[var(--cb-bg-1)] overflow-hidden px-4 py-8 md:py-10"
      aria-labelledby="now-heading"
    >
      <div
        className="mx-auto min-w-0 max-w-2xl border-t border-white/10 pt-10 md:max-w-3xl"
        style={{
          boxShadow: "0 -1px 0 0 rgba(133, 215, 246, 0.06)",
        }}
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
          <div className="shrink-0">
            <Image
              src="/releases/vornel_remixes.webp"
              alt="Chapter IV — Motion · Vornel Remixes"
              width={240}
              height={240}
              className="max-w-[240px] rounded-xl object-cover shadow-[0_8px_32px_rgba(133,215,246,0.12)]"
            />
          </div>
          <div className="min-w-0 flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <p
              id="now-label"
              className="text-xs font-medium uppercase tracking-widest text-[var(--cb-text-muted)]"
            >
            Latest Release
            </p>
            <h2
              id="now-heading"
              className="text-2xl font-semibold text-[var(--cb-text)] md:text-3xl"
            >
              Chapter IV — Motion
            </h2>
            <p className="text-[var(--cb-text-muted)] text-[15px] md:text-base">
            Vornel Remixes · Just Released.
            </p>
            <a
              href="https://www.youtube.com/@CloudBeatsAI"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block rounded-lg bg-[var(--cb-pink-strong)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
