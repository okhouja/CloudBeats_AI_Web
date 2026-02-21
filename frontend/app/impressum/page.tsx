import type { Metadata } from "next";
import { ImpressumContent } from "@/components/ImpressumContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | CloudBeats AI",
  description: "Legal information for CloudBeats AI.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <main className="overflow-hidden px-4 py-12 md:py-16">
        <div className="mx-auto min-w-0 max-w-4xl">
          <h1 className="mb-2 text-center text-sm font-medium uppercase tracking-[0.35em] text-[var(--cb-text-muted)]">
            Legal
          </h1>
          <p className="mb-10 text-center text-[var(--cb-text-muted)] md:mb-12">
            Impressum and legal information
          </p>
          <ImpressumContent
            wrapperClassName="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-sm md:p-12"
            titleClassName="text-3xl font-semibold text-[var(--cb-text)] md:text-4xl"
            bodyClassName="mt-10 space-y-8 text-[var(--cb-text-muted)] leading-relaxed"
            labelClassName="text-sm uppercase tracking-wider text-[var(--cb-text-muted)]/80"
            linkClassName="text-[var(--cb-cyan)] underline underline-offset-4 hover:opacity-90"
            buttonClassName="mt-6 inline-block rounded-xl bg-[var(--cb-pink-strong)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
