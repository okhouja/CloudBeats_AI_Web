import type { Metadata } from "next";
import { ImpressumContent } from "@/components/ImpressumContent";
import Footer from "@/components/Footer";
import { v2 } from "@/components/v2/ui";

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
        <div className={`${v2.sectionInner} max-w-4xl`}>
          <h1 className={`mb-2 text-center ${v2.headingSmall}`}>
            Legal
          </h1>
          <p className={`mb-10 text-center ${v2.textMuted} md:mb-12`}>
            Impressum and legal information
          </p>
          <ImpressumContent
            wrapperClassName={`${v2.cardLarge} p-8 md:p-12`}
            titleClassName={`${v2.headingPage} text-3xl md:text-4xl`}
            bodyClassName={`mt-10 space-y-8 ${v2.textMuted} leading-relaxed`}
            labelClassName="text-sm uppercase tracking-wider text-[var(--cb-text-muted)]/80"
            linkClassName={v2.linkSecondary}
            buttonClassName={`mt-6 ${v2.buttonPrimary}`}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
