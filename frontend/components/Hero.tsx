/* cloudbeats-web/components/Hero.tsx */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CloudVisual } from "./CloudVisual";
import { SoundWaves } from "./SoundWaves";
import { StarField } from "./StarField";

export function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0a0015] via-[#0f0525] to-[#051525]">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-20"
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
          className="absolute bottom-0 right-0 w-[900px] h-[900px] rounded-full opacity-20"
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-6 md:pt-14">
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
          className="text-center text-lg text-gray-300 md:text-xl lg:text-2xl mb-8 md:mb-16"
        >
          Where systems shape sound.
        </motion.p>

        {/* Central cloud with sound waves */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="relative mx-auto w-full max-w-7xl px-0 mb-8 md:mb-16"
        >
          <div className="mx-auto flex w-full max-w-[520px] items-center justify-center gap-6 sm:gap-8 md:max-w-none">
            {/* Left sound waves */}
            <div className="flex w-[96px] shrink-0 items-center justify-center sm:w-[120px] md:w-auto md:flex-1 md:justify-end">
              <SoundWaves side="left" />
            </div>

            {/* Central cloud */}
            <div className="mx-auto flex shrink-0 items-center justify-center">
              <div className="w-[220px] sm:w-[260px] md:w-[280px] lg:w-[320px]">
                <CloudVisual />
              </div>
            </div>

            {/* Right sound waves */}
            <div className="flex w-[96px] shrink-0 items-center justify-center sm:w-[120px] md:w-auto md:flex-1 md:justify-start">
              <SoundWaves side="right" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0015] to-transparent pointer-events-none" />
    </div>
  );
}

export default Hero;
