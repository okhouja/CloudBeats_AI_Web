"use client";

import { motion } from "framer-motion";

interface SoundWavesProps {
  side: "left" | "right";
}

export function SoundWaves({ side }: SoundWavesProps) {
  // More bars for fuller EQ visualization
  const bars = side === "left"
    ? [4, 6, 9, 5, 7, 4, 8, 6, 5]
    : [5, 6, 4, 8, 7, 5, 9, 6, 4];
  const isLeft = side === "left";

  return (
    <div
      className={`m-0 block flex items-center gap-1 p-0 md:gap-1.5 ${isLeft ? "flex-row-reverse" : "flex-row"}`}
    >
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-1 md:w-1.5 lg:w-2 rounded-full"
          style={{
            height: `${height * 5}px`,
            background: `linear-gradient(to ${isLeft ? "left" : "right"},
              ${isLeft ? "#da43c4" : "#85D7F6"},
              ${isLeft ? "#9d5fc9" : "#4facfe"})`,
            boxShadow: `0 0 15px ${isLeft ? "rgba(218, 67, 196, 0.6)" : "rgba(133, 215, 246, 0.6)"}`,
          }}
          animate={{
            height: [
              `${height * 5}px`,
              `${height * 7.5}px`,
              `${height * 4}px`,
              `${height * 8}px`,
              `${height * 5}px`,
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

      {/* Extended fading waves */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`fade-${i}`}
          className="w-0.5 md:w-1 rounded-full"
          style={{
            height: `${(4 - i) * 6}px`,
            background: `linear-gradient(to ${isLeft ? "left" : "right"},
              ${isLeft ? "rgba(218, 67, 196, 0.7)" : "rgba(133, 215, 246, 0.7)"},
              transparent)`,
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
