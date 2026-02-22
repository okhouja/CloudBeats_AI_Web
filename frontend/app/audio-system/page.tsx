import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { v2 } from "@/components/v2/ui";
import { ActiveFlowPipeline } from "@/components/v2/audio-system/ActiveFlowPipeline";
import { EngineStackSection } from "@/components/v2/audio-system/EngineStackSection";

export const metadata: Metadata = {
  title: "System Architecture | CloudBeats AI",
  description:
    "Engineered modularity. Precision control. Audio system pipeline: generative, structure, tagging, energy, metadata, visualizer.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "System Architecture | CloudBeats AI",
    description:
      "Engineered modularity. Precision control.",
    url: "/audio-system",
    siteName: "CloudBeats AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Architecture | CloudBeats AI",
    description: "Engineered modularity. Precision control.",
  },
};

export default function AudioSystemPage() {
  return (
    <div className="relative min-h-screen bg-[var(--cb-bg-1)] overflow-hidden">
      {/* Ambient background (static) */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-[var(--cb-bg-1)] via-[#0e0f1a] to-[var(--cb-bg-1)] -z-20 pointer-events-none"
        aria-hidden
      />

      <main className="relative z-10 pb-32 pt-8">
        <div className={`${v2.sectionInner} max-w-7xl px-4 md:px-8`}>
          {/* 1. Intro & Status */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 pt-12 border-b border-white/5 pb-8 gap-6">
            <div>
              <span className="inline-block px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-cyan-400/80 mb-4">
                Blueprint v2.0
              </span>
              <h1 className={`${v2.headingPage} mb-2`}>System Architecture</h1>
              <p className={`${v2.textMuted} max-w-xl text-lg font-light`}>
                Engineered modularity. Precision control.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[var(--cb-bg-1)]/80 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" style={{ animationDuration: "1s" }} />
                <span className="relative w-2 h-2 bg-green-500 rounded-full" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-green-400/90">
                Engine Online
              </span>
            </div>
          </div>

          {/* 2. Active Flow Pipeline */}
          <ActiveFlowPipeline />

          {/* 3. Engine Stack Timeline */}
          <EngineStackSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
