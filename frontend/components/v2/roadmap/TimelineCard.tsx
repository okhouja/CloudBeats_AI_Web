"use client";

import { ArrowRight } from "lucide-react";
import type { RoadmapPhase } from "./roadmapPhases";

const statusBadgeColors: Record<RoadmapPhase["color"], string> = {
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
  neutral: "text-white/40 bg-white/5 border-white/10 shadow-none",
};

const nodeColors: Record<RoadmapPhase["color"], string> = {
  cyan: "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]",
  purple: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]",
  blue: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]",
  neutral: "bg-white/20",
};

const bulletColors: Record<RoadmapPhase["color"], string> = {
  cyan: "bg-cyan-400",
  purple: "bg-purple-400",
  blue: "bg-blue-400",
  neutral: "bg-white",
};

interface TimelineCardProps {
  phase: RoadmapPhase;
}

export function TimelineCard({ phase }: TimelineCardProps) {
  const badgeClass = statusBadgeColors[phase.color];
  const nodeClass = nodeColors[phase.color];
  const bulletClass = bulletColors[phase.color];

  return (
    <div className="relative flex items-start gap-8 md:gap-12 group pl-8 md:pl-0">
      <div
        className={`absolute left-[-5px] md:left-[19px] top-6 w-3 h-3 rounded-full z-10 transition-transform duration-300 group-hover:scale-125 border border-white/10 ${nodeClass}`}
      >
        {phase.status === "LIVE" && (
          <span
            className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-75"
            style={{ animationDuration: "1s" }}
          />
        )}
      </div>

      <div className="flex-1 p-6 md:p-8 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.02)] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-light text-white/10 font-mono tracking-tighter select-none transition-colors group-hover:text-white/20">
              {phase.id}
            </span>
            <h3 className="text-xl font-medium text-white/90 transition-colors group-hover:text-white">
              {phase.title}
            </h3>
          </div>
          <div className={`px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest border w-fit shadow-sm ${badgeClass}`}>
            {phase.status}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
          {phase.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-white/60 font-light transition-colors hover:text-white/80">
              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full opacity-60 transition-opacity shadow-[0_0_5px_rgba(255,255,255,0.2)] ${bulletClass}`} />
              {bullet}
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-white/40 font-mono italic tracking-wide">
            &ldquo;{phase.subtext}&rdquo;
          </p>
          {phase.status !== "FUTURE" && (
            <ArrowRight size={14} className="text-white/20 transition-all duration-300 group-hover:text-white/60 group-hover:translate-x-1" />
          )}
        </div>
      </div>
    </div>
  );
}
