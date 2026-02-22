import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { v2 } from "@/components/v2/ui";
import { roadmapPhases } from "@/components/v2/roadmap/roadmapPhases";
import { TimelineCard } from "@/components/v2/roadmap/TimelineCard";

export const metadata: Metadata = {
  title: "System Evolution Roadmap | CloudBeats AI",
  description:
    "Designing a modular cloud-native sonic architecture — evolving from MVP to intelligent infrastructure.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "System Evolution Roadmap | CloudBeats AI",
    description:
      "Designing a modular cloud-native sonic architecture — evolving from MVP to intelligent infrastructure.",
    url: "/roadmap",
    siteName: "CloudBeats AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Evolution Roadmap | CloudBeats AI",
    description:
      "Designing a modular cloud-native sonic architecture — evolving from MVP to intelligent infrastructure.",
  },
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[var(--cb-bg-1)] relative overflow-hidden">
      {/* Background ambience (static) */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 pt-24 pb-32 px-4 md:px-8">
        <div className={`${v2.sectionInner} max-w-4xl`}>
          {/* 1. Hero Section */}
          <header className="mb-20 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm w-fit mx-auto md:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
                Vision / Execution
              </span>
            </div>
            <h1 className={`${v2.headingPage} mb-4 text-[var(--cb-text)]`}>
              System Evolution Roadmap
            </h1>
            <p
              className={`${v2.textMuted} max-w-2xl text-lg font-light leading-relaxed mx-auto md:mx-0`}
            >
              Designing a modular cloud-native sonic architecture — evolving
              from MVP to intelligent infrastructure.
            </p>
          </header>

          {/* 2. Vertical Timeline */}
          <div className="relative pl-8 md:pl-0">
            {/* Timeline vertical line */}
            <div
              className="absolute left-0 md:left-[23px] top-4 bottom-10 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/20 to-transparent z-0"
              aria-hidden
            />
            <div className="space-y-12">
              {roadmapPhases.map((phase) => (
                <TimelineCard key={phase.id} phase={phase} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
