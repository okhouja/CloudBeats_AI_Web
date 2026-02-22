"use client";

import {
  Cpu,
  GitBranch,
  Layers,
  Zap,
  Database,
  Monitor,
} from "lucide-react";
import { FlowNode } from "./FlowNode";

const STEPS = [
  { icon: Cpu, label: "Generative" },
  { icon: GitBranch, label: "Structure" },
  { icon: Layers, label: "Tagging" },
  { icon: Zap, label: "Energy" },
  { icon: Database, label: "Metadata" },
  { icon: Monitor, label: "Visualizer" },
] as const;

/** Static pipeline: first step is active (no cycling). */
export function ActiveFlowPipeline() {
  const activeIndex = 0;

  return (
    <section className="mb-32 relative z-10" aria-label="Active flow pipeline">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--cb-bg-1)] via-transparent to-[var(--cb-bg-1)] z-20 pointer-events-none" />
      <div className="w-full overflow-x-auto pb-16 pt-4 scrollbar-hide">
        <div className="min-w-[900px] flex items-center justify-between relative px-12">
          <div className="absolute top-[28px] left-8 right-8 h-px bg-white/10 -z-10" />
          {STEPS.map((step, index) => (
            <div
              key={step.label}
              className="flex-1 flex items-start"
            >
              <div className="relative flex flex-col items-center gap-4 z-10 w-full">
                <FlowNode
                  icon={step.icon}
                  label={step.label}
                  isActive={index === activeIndex}
                  isPast={index < activeIndex}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
