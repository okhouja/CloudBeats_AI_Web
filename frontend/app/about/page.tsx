import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { AboutPageContent } from "@/components/v2/AboutPageContent";

export const metadata: Metadata = {
  title: "Behind the Beats | CloudBeats AI",
  description:
    "The story behind CloudBeats AI — where cloud systems, sound design, and AI experimentation converge.",
  openGraph: {
    title: "Behind the Beats | CloudBeats AI",
    description:
      "The story behind CloudBeats AI — where cloud systems, sound design, and AI experimentation converge.",
    url: "/about",
    images: [
      {
        url: "/about/Omar-Khouja.webp",
        width: 630,
        height: 828,
        alt: "Portrait of Omar Khouja, founder of CloudBeats AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behind the Beats | CloudBeats AI",
    description:
      "The story behind CloudBeats AI — where cloud systems, sound design, and AI experimentation converge.",
    images: ["/about/Omar-Khouja.webp"],
  },
};

export default function AboutPage() {
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
          <AboutPageContent backHref="/" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
