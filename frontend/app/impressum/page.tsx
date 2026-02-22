import type { Metadata } from "next";
import { ImpressumContent } from "@/components/ImpressumContent";
import Footer from "@/components/Footer";

const title = "Impressum | CloudBeats AI";
const description = "Legal information for CloudBeats AI.";
const ogImage = "/og/og-image.jpg";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "/impressum",
    siteName: "CloudBeats AI",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "CloudBeats AI" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
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
            linkClassName="text-[var(--cb-cyan)] underline underline-offset-4 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)] rounded"
            buttonClassName="mt-6 inline-block rounded-xl bg-[var(--cb-pink-strong)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)] rounded"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
