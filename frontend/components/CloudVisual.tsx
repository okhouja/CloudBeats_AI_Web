/* cloudbeats-web/components/CloudVisual.tsx */
"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import svgPaths from "@/imports/svg-nj9fwfyfth";

function generateSparkles() {
  return [...Array(20)].map(() => ({
    cx: 40 + Math.random() * 220,
    cy: 40 + Math.random() * 110,
    duration: 2 + Math.random() * 2,
    delay: Math.random() * 2,
  }));
}

export function CloudVisual() {
  const [mounted, setMounted] = useState(false);
  const sparkles = useMemo(() => (mounted ? generateSparkles() : []), [mounted]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative w-44 h-28 md:w-64 md:h-40 lg:w-80 lg:h-48">

      {/* Glow effect behind cloud */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(218, 67, 196, 0.5) 0%, rgba(6, 182, 212, 0.4) 100%)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.75, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cloud shape from Figma with breathing animation */}
      <motion.svg
        viewBox="0 0 294 184"
        className="relative z-10 w-full h-full drop-shadow-2xl"
        fill="none"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient
            id="cloudGradient"
            x1="260.5"
            x2="-236.5"
            y1="128.5"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#85D7F6" />
            <stop offset="0.5" stopColor="#9d5fc9" />
            <stop offset="1" stopColor="#da43c4" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated cloud path from Figma */}
        <motion.path
          d={svgPaths.p33875d00}
          fill="url(#cloudGradient)"
          filter="url(#glow)"
          animate={{
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Particle sparkles inside cloud - stable per session */}
        {sparkles.map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r="1.5"
            fill="white"
            opacity="0.70"
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scale: [0.05, 1.0, 0.5],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.svg>

      {/* Pulsing ring around cloud - synced with breathing */}
<motion.div
  className="absolute inset-0 rounded-full border border-cyan-300/25"
  animate={{
    scale: [1, 1.18, 1],
    opacity: [0.25, 0, 0.25],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

    </div>
  );
}
