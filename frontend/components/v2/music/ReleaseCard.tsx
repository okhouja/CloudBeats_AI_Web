"use client";

import Link from "next/link";
import type { Release } from "./releases";
import {
  getStatusColorClass,
  getStatusTextColorClass,
} from "./releases";

interface ReleaseCardProps {
  release: Release;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
  const statusDotClass = getStatusColorClass(release.status);
  const statusTextClass = getStatusTextColorClass(release.status);

  return (
    <Link
      href={`/music/${release.slug}`}
      className="group block"
    >
      {/* Cover */}
      <div className="relative aspect-square mb-6 overflow-hidden rounded-lg bg-[#0a0b10] border border-white/10">
        <div className="absolute inset-0 z-20 bg-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={release.image}
          alt={release.title}
          className="w-full h-full object-cover opacity-70 grayscale-[30%] transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute top-4 right-4 z-30">
          <div
            className={`w-1.5 h-1.5 rounded-full ${statusDotClass} shadow-[0_0_8px_currentColor]`}
          />
        </div>
      </div>

      {/* Meta */}
      <div className="space-y-3 px-1">
        <h3 className="text-lg font-light text-[var(--cb-text)] transition-colors duration-300 group-hover:text-[var(--cb-cyan)]">
          {release.title}
        </h3>

        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-3">
          <div className="flex flex-col">
            <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono mb-1">
              ID
            </span>
            <span className="text-[10px] text-white/50 font-mono transition-colors group-hover:text-white">
              {release.releaseId}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono mb-1">
              Ver
            </span>
            <span className="text-[10px] text-white/50 font-mono transition-colors group-hover:text-white">
              {release.version}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 opacity-60 transition-opacity group-hover:opacity-100">
          <span className="text-[9px] text-white/30 font-mono">
            {release.year}
          </span>
          <span
            className={`text-[9px] uppercase tracking-widest ${statusTextClass}`}
          >
            {release.status}
          </span>
        </div>
      </div>
    </Link>
  );
}
