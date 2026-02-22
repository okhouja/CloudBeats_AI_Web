"use client";

import type { LucideIcon } from "lucide-react";

interface FlowNodeProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isPast?: boolean;
}

export function FlowNode({ icon: Icon, label, isActive = false, isPast = false }: FlowNodeProps) {
  return (
    <div className="relative flex flex-col items-center gap-5 w-full">
      <div
        className={`w-14 h-14 rounded-full border flex items-center justify-center backdrop-blur-sm z-10 transition-all duration-500 ${
          isActive ? "scale-110 border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)]" : isPast ? "border-white/20 bg-[#0a0b14]" : "border-white/10 bg-[#0a0b14]"
        }`}
      >
        <Icon size={20} strokeWidth={1.5} className={isActive ? "text-cyan-400" : isPast ? "text-white/60" : "text-white/20"} />
      </div>
      <span className={`text-[10px] font-mono uppercase tracking-wider text-center transition-colors duration-500 absolute top-20 w-32 ${isActive ? "text-cyan-400" : "text-white/30"}`}>
        {label}
      </span>
      {isActive && <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full -z-10" aria-hidden />}
    </div>
  );
}
