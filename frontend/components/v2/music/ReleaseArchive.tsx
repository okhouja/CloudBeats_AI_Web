"use client";

import { useState } from "react";
import { v2 } from "@/components/v2/ui";
import { releases, getStatusColorClass } from "./releases";
import type { ReleaseStatus } from "./releases";
import { ReleaseCard } from "./ReleaseCard";

const TABS: readonly ReleaseStatus[] = [
  "Active",
  "In Development",
  "Experimental",
];

export function ReleaseArchive() {
  const [filter, setFilter] = useState<ReleaseStatus>("Active");
  const filteredReleases = releases.filter((r) => r.status === filter);

  return (
    <div className="min-h-screen pb-32 pt-12">
      {/* Header */}
      <div
        className={`flex flex-col gap-4 mb-16 border-b border-white/5 pb-8 ${v2.sectionInner}`}
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[var(--cb-text)]">
          Release Archive
        </h1>
        <p className={`font-mono tracking-wide ${v2.textMuted}`}>
          All sonic systems deployed across the network.
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-6 md:gap-8 mb-12 border-b border-white/5 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className="relative pb-4 text-xs md:text-sm font-mono uppercase tracking-widest transition-colors duration-300 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cb-bg-1)] rounded"
            style={{
              color:
                filter === tab
                  ? "var(--cb-text)"
                  : "rgba(255,255,255,0.3)",
            }}
          >
            {tab}
            {filter === tab && (
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${getStatusColorClass(tab)} shadow-[0_0_10px_currentColor]`}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredReleases.map((release) => (
          <ReleaseCard key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
}
