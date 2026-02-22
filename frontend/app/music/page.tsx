import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { ReleaseArchive } from "@/components/v2/music/ReleaseArchive";
import { v2 } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "Release Archive | CloudBeats AI",
  description:
    "All sonic systems deployed across the network. Browse releases by status: Active, In Development, Experimental.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Release Archive | CloudBeats AI",
    description:
      "All sonic systems deployed across the network.",
    url: "/music",
    siteName: "CloudBeats AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Release Archive | CloudBeats AI",
    description: "All sonic systems deployed across the network.",
  },
};

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)]">
      <main className="overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className={`${v2.sectionInner} max-w-7xl`}>
          <ReleaseArchive />
        </div>
      </main>
      <Footer />
    </div>
  );
}
