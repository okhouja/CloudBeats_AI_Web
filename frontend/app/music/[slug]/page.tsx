import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { v2 } from "@/components/v2/ui";
import { releases } from "@/components/v2/music/releases";

export const metadata: Metadata = {
  title: "Release | CloudBeats AI",
  description: "Release detail — placeholder for album/slug page.",
  robots: { index: false, follow: false },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MusicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const release = releases.find((r) => r.slug === slug);

  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <main className="overflow-hidden px-4 py-12 md:py-16">
        <div className={`${v2.sectionInner} max-w-2xl`}>
          <nav className="mb-8">
            <Link
              href="/music"
              className={`text-sm font-mono ${v2.textMuted} hover:text-[var(--cb-text)] ${v2.linkPrimary}`}
            >
              ← Releases
            </Link>
          </nav>
          {release ? (
            <h1 className={`${v2.headingPage} mb-4`}>{release.title}</h1>
          ) : (
            <h1 className={`${v2.headingPage} mb-4`}>Release</h1>
          )}
          <p className={v2.textMuted}>
            Album detail page for <code className="text-white/80">{slug}</code>.
            Placeholder — full content coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
