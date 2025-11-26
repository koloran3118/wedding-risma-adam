"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const arr: Particle[] = Array.from({ length: 10 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 6 + Math.random() * 80, 
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 12,
    }));

    setParticles(arr);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* Aurora utama */}
      <motion.div
        initial={{ opacity: 0.25, x: -80 }}
        animate={{ opacity: 0.65, x: 40 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          absolute top-1/4
          h-56 w-[70%]
          bg-linear-to-r
          from-emerald-300/25 via-amber-200/20 to-fuchsia-300/25
          blur-3xl
        "
      />

      {/* Glow kiri atas */}
      <motion.div
        initial={{ opacity: 0.3, x: -80, y: -50 }}
        animate={{ opacity: 0.7, x: -20, y: -10 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          absolute
          h-72 w-72
          -top-24 -left-24
          bg-gradient-to-br
          from-emerald-300/40 via-teal-200/30 to-transparent
          blur-9xl rounded-full
        "
      />

      {/* Glow kanan bawah */}
      <motion.div
        initial={{ opacity: 0.3, x: 50, y: 70 }}
        animate={{ opacity: 0.7, x: 0, y: 30 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          absolute
          h-80 w-80
          bottom-[-90px] right-[-40px]
          bg-gradient-to-tr
          from-amber-300/40 via-rose-200/30 to-transparent
          blur-5xl rounded-full
        "
      />

      {/* partikel floating dust */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: [0.2, 0.9, 0.2], y: [-18, 10, -18] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          className="absolute rounded-full bg-white/50"
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
    </div>
  );
}
