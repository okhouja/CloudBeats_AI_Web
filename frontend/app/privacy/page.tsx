import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { v2 } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | CloudBeats AI",
  description: "Privacy policy and Datenschutzerklärung for CloudBeats AI.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <main className="overflow-hidden px-4 py-12 md:py-16">
        <div className={`${v2.sectionInner} max-w-3xl`}>
          <h1 className={`mb-2 text-center ${v2.headingSmall}`}>
            Privacy
          </h1>
          <h2 className={`mb-2 text-center ${v2.headingPage}`}>
            Privacy Policy
          </h2>
          <p className={`mb-8 text-center ${v2.textMuted}`}>
            Datenschutzerklärung
          </p>
          <p className={`mb-10 ${v2.textMuted}`}>
            Privacy policy will be published soon.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" aria-label="Related links">
            <a href="/impressum" className={v2.linkPrimary}>
              Impressum
            </a>
            <span className={v2.textMuted}>·</span>
            <a href="mailto:info@cloudbeats.ai" className={v2.linkPrimary}>
              info@cloudbeats.ai
            </a>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
