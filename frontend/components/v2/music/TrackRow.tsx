"use client";

export interface TrackRowProps {
  index: string;
  title: string;
  duration: string;
  bpm?: number;
  active?: boolean;
}

export function TrackRow({
  index,
  title,
  duration,
  bpm,
  active = false,
}: TrackRowProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 py-3 px-4 rounded-lg border transition-colors ${
        active
          ? "bg-white/5 border-[var(--cb-pink)]/50"
          : "border-transparent hover:bg-white/5 hover:border-white/10"
      }`}
    >
      <span className="w-6 text-center text-sm font-mono text-white/40 shrink-0">
        {index}
      </span>
      <div className="flex-1 min-w-0">
        <span
          className={`text-sm font-medium tracking-wide ${
            active ? "text-[var(--cb-pink)]" : "text-[var(--cb-text)]"
          }`}
        >
          {title}
        </span>
      </div>
      {bpm != null && (
        <span className="text-xs font-mono text-white/40 shrink-0">
          {bpm} BPM
        </span>
      )}
      <span className="text-sm font-mono text-white/50 shrink-0">
        {duration}
      </span>
    </div>
  );
}
