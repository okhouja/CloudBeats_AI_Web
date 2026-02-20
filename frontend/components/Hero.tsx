/* cloudbeats-web/components/Hero.tsx */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CloudVisual } from "./CloudVisual";
import { SoundWaves } from "./SoundWaves";
import { StarField } from "./StarField";

function CloudWithWaves({ cloudWidthClass }: { cloudWidthClass: string }) {
  return (
    <div className="relative mx-auto w-fit">
      {/* Cloud: fixed-size aspect-ratio container so it always has height on desktop */}
      <div className="relative z-10 mx-auto">
        <div
          className={`relative aspect-[294/184] min-h-[120px] md:min-h-[160px] ${cloudWidthClass}`}
        >
          <CloudVisual />
        </div>
      </div>
      {/* Left waves — tighter spacing */}
      <div
        className="pointer-events-none absolute top-1/2 right-full z-0 -translate-y-1/2 opacity-90 mr-3 md:mr-5"
        aria-hidden
      >
        <SoundWaves side="left" />
      </div>
      {/* Right waves */}
      <div
        className="pointer-events-none absolute top-1/2 left-full z-0 -translate-y-1/2 opacity-90 ml-3 md:ml-5"
        aria-hidden
      >
        <SoundWaves side="right" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="relative h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-[#0a0015] via-[#0f0525] to-[#051525]">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #da43c4 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[900px] w-[900px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Star field particles */}
      <StarField />

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-6 md:pt-14">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 md:mb-8"
        >
          <Image
            src="/logo.png"
            alt="CloudBeats AI"
            width={320}
            height={120}
            className="h-auto w-[240px] md:w-[280px] lg:w-[320px]"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 text-center text-lg text-gray-300 md:mb-16 md:text-xl lg:text-2xl"
        >
          Where systems shape sound.
        </motion.p>

        {/* Cloud + Waves — same unit for mobile and desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="relative mx-auto mb-8 w-full max-w-7xl px-0 md:mb-16"
        >
          <div className="mx-auto mt-10 w-full max-w-[900px] overflow-hidden">
            <CloudWithWaves cloudWidthClass="w-[240px] md:w-[320px] lg:w-[360px]" />
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0015] to-transparent" />
    </div>
  );
}

export default Hero;
