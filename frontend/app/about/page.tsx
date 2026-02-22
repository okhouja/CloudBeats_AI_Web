import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { AboutPageContent } from "@/components/v2/AboutPageContent";
import { v2 } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "Behind the Beats | CloudBeats AI",
  description:
    "The story behind CloudBeats AI — where cloud systems, sound design, and AI experimentation converge.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Behind the Beats | CloudBeats AI",
    description:
      "The story behind CloudBeats AI — where cloud systems, sound design, and AI experimentation converge.",
    url: "/about",
    siteName: "CloudBeats AI",
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
        <div className={`${v2.sectionInner} max-w-5xl`}>
          <h1 className={`mb-2 text-center ${v2.headingSmall}`}>
            About
          </h1>
          <p className={`mb-10 text-center md:mb-12 ${v2.textMuted}`}>
            The narrative behind the project
          </p>
          <AboutPageContent backHref="/" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
