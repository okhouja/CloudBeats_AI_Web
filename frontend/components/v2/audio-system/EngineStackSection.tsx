import { Activity, Database, Monitor } from "lucide-react";
import { v2 } from "@/components/v2/ui";

function GlassCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className={`p-8 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group hover:border-white/20 hover:bg-white/[0.04] relative overflow-hidden ${v2.cardHoverMuted}`}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-3 mb-8 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 text-white/60 transition-all group-hover:text-white group-hover:bg-white/10">
            <Icon size={18} strokeWidth={1.5} />
          </div>
          <h3 className="text-sm font-mono uppercase tracking-widest text-white/90">{title}</h3>
        </div>
      </div>
      {children}
    </div>
  );
}

function Metric({
  label,
  value,
  color = "text-white",
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="block text-[9px] text-white/30 uppercase tracking-widest">{label}</span>
      <span className={`font-mono text-sm ${color}`}>{value}</span>
    </div>
  );
}

function TimelineItem({
  align,
  step,
  children,
}: {
  align: "left" | "right";
  step: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col md:flex-row items-center w-full relative pl-12 md:pl-0 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-[var(--cb-bg-1)] border border-white/20 flex items-center justify-center z-10 ring-4 ring-[var(--cb-bg-1)]">
        <span className="text-[9px] font-mono text-white/50">{step}</span>
      </div>
      <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:hidden" />
      <div className="w-full md:w-1/2 p-0 md:px-16">{children}</div>
      <div className="w-full md:w-1/2 hidden md:block" />
    </div>
  );
}

export function EngineStackSection() {
  return (
    <section className="mb-24 relative max-w-5xl mx-auto z-10" aria-label="Engine stack">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent -translate-x-1/2 z-0" aria-hidden />
      <div className="space-y-16 md:space-y-24 relative">
        <TimelineItem align="left" step="01">
          <GlassCard title="Input Analysis" icon={Activity}>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Metric label="BPM" value="128.0" color="text-cyan-400" />
              <Metric label="Key" value="F#m" color="text-purple-400" />
              <Metric label="Energy" value="0.85" color="text-yellow-400" />
              <Metric label="Confidence" value="99%" />
            </div>
            <p className="text-xs text-white/40 font-mono leading-relaxed border-t border-white/5 pt-4">
              Real-time spectral analysis utilizing FFT algorithms to extract temporal and harmonic data structure.
            </p>
          </GlassCard>
        </TimelineItem>

        <TimelineItem align="right" step="02">
          <GlassCard title="Data Normalization" icon={Database}>
            <div className="bg-[#05060a] rounded p-4 font-mono text-[10px] text-white/60 mb-6 border border-white/10 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-30 transition-opacity group-hover:opacity-100">
                <span className="text-[9px] uppercase tracking-widest text-cyan-400">JSON</span>
              </div>
              <pre className="relative z-10 text-white/50">{`{
  "id": "trk_92",
  "sync": true,
  "meta": {
    "v": "2.1",
    "q": "high"
  }
}`}</pre>
            </div>
            <p className="text-xs text-white/40 font-mono leading-relaxed border-t border-white/5 pt-4">
              Raw signals are converted into a standardized JSON schema, enabling decoupled rendering on any client.
            </p>
          </GlassCard>
        </TimelineItem>

        <TimelineItem align="left" step="03">
          <GlassCard title="WebGL Rendering" icon={Monitor}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-400 font-mono uppercase tracking-wide">Live Stream</span>
              </div>
              <span className="text-xs text-white/30 font-mono">60 FPS</span>
            </div>
            <div className="space-y-3 mb-6">
              <div>
                <div className="flex justify-between text-[9px] text-white/40 font-mono uppercase mb-1">
                  <span>GPU Load</span>
                  <span>32%</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[32%] bg-cyan-500 transition-all duration-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] text-white/40 font-mono uppercase mb-1">
                  <span>Buffer</span>
                  <span>12ms</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[15%] bg-purple-500 transition-all duration-500" />
                </div>
              </div>
            </div>
            <p className="text-xs text-white/40 font-mono leading-relaxed border-t border-white/5 pt-4">
              High-performance visualizer interpreting metadata into geometric motion.
            </p>
          </GlassCard>
        </TimelineItem>
      </div>
    </section>
  );
}
