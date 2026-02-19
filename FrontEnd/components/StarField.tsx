"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function generateStars() {
  return [...Array(80)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
  }));
}

export function StarField() {
  const [mounted, setMounted] = useState(false);
  const stars = useMemo(() => (mounted ? generateStars() : []), [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
