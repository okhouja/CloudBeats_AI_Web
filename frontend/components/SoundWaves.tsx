"use client";

import { motion } from "framer-motion";

interface SoundWavesProps {
  side: "left" | "right";
  className?: string;
}

export function SoundWaves({ side, className = "" }: SoundWavesProps) {
  const isLeft = side === "left";

  // ONE symmetric shape for both sides (important!)
  const bars = [4, 6, 9, 5, 7, 4, 8, 6, 5];

  const primary = isLeft ? "#da43c4" : "#85D7F6";
  const secondary = isLeft ? "#9d5fc9" : "#4facfe";
  const glow = isLeft ? "rgba(218, 67, 196, 0.6)" : "rgba(133, 215, 246, 0.6)";

  return (
    <div
      className={[
        "m-0 flex w-[140px] items-center justify-center gap-1 p-0 md:w-[160px] md:gap-1.5",
        // Mirror the whole wave for left side (so it’s perfectly symmetric)
        isLeft ? "-scale-x-100" : "",
        className,
      ].join(" ")}
    >
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="block w-1 rounded-full md:w-1.5 lg:w-2"
          style={{
            height: `${h * 5}px`,
            background: `linear-gradient(to right, ${primary}, ${secondary})`,
            boxShadow: `0 0 15px ${glow}`,
          }}
          animate={{
            height: [
              `${h * 5}px`,
              `${h * 7.5}px`,
              `${h * 4}px`,
              `${h * 8}px`,
              `${h * 5}px`,
            ],
            opacity: [0.5, 0.9, 0.6, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Fading tail (always on the “outside”; mirroring handles left side automatically) */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`fade-${i}`}
          className="block w-0.5 rounded-full md:w-1"
          style={{
            height: `${(4 - i) * 6}px`,
            background: `linear-gradient(to right, ${primary}aa, transparent)`,
          }}
          animate={{
            height: [
              `${(4 - i) * 6}px`,
              `${(4 - i) * 10}px`,
              `${(4 - i) * 5}px`,
              `${(4 - i) * 11}px`,
              `${(4 - i) * 6}px`,
            ],
            opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: (bars.length + i) * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}