import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { AboutPageContent } from "@/components/v2/AboutPageContent";

export const metadata: Metadata = {
  title: "Behind the Beats · v2 Preview | CloudBeats AI",
  description:
    "CloudBeats AI v2 preview — the story behind CloudBeats AI and where cloud systems, sound design, and AI experimentation converge.",
  robots: { index: false, follow: false },
};

export default function V2AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <main className="overflow-hidden px-4 py-12 md:py-16">
        <div className="mx-auto min-w-0 max-w-5xl">
          <h1 className="mb-2 text-center text-sm font-medium uppercase tracking-[0.35em] text-[var(--cb-text-muted)]">
            About
          </h1>
          <p className="mb-10 text-center text-[var(--cb-text-muted)] md:mb-12">
            The narrative behind the project
          </p>
          <AboutPageContent backHref="/v2" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
