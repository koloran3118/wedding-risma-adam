"use client";

import React, { useEffect, useState } from "react";
import { getCountdown, CountdownResult } from "@/lib/countdown";
import { motion } from "framer-motion";


type HeroProps = {
  guestName: string;
  bride: string;
  groom: string;
  logoImage: string;
  heroBackground: string;
  weddingDate: string;
  weddingDateLabel: string;
};

export default function HeroSection({
  logoImage,
  heroBackground,
  weddingDate,
  weddingDateLabel,
}: HeroProps) {
  const [time, setTime] = useState<CountdownResult>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCountdown(weddingDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <header className="relative w-full min-h-screen h-dvh overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-slowZoom"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* LOGO PUTIH – kiri atas */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-8 z-20"
      >
        <img
          src={logoImage}
          alt="Logo"
          className="h-15 sm:h-20 md:h-30 w-auto object-contain brightness-0 invert"
        />
      </motion.div>

      {/* TANGGAL – kanan atas, warna putih */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-8 z-20"
      >
        <p
          className="text-xl sm:text-3xl md:text-2xl text-white tracking-[0.18em] uppercase mt-3"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {weddingDateLabel}
        </p>
      </motion.div>

      {/* CONTENT – countdown */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full text-white px-4 sm:px-6 py-25 sm:py-24 md:py-28 text-center">
        {/* (Bisa diisi sesuatu di tengah nanti, sekarang kosong & jadi spacer) */}
        <div className="flex-1 flex items-center justify-center" />

        {/* Label countdown */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mb-4 text-md sm:text-xs tracking-[0.16em] sm:tracking-[0.25em] uppercase opacity-90"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Menuju Hari Bahagia
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.7 }}
          className="
            flex flex-wrap items-center justify-center
            gap-4 sm:gap-6
            mb-4 sm:mb-2
          "
        >
          {[
            { label: "Hari", value: time.days },
            { label: "Jam", value: time.hours },
            { label: "Menit", value: time.minutes },
            { label: "Detik", value: time.seconds },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col min-w-[50px] items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.15 + 0.8 }}
            >
              <p
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {item.value}
              </p>
              <span className="mt-1 text-xs sm:text-xs opacity-80">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CSS */}
      <style jsx global>{`
        .premium-glow {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #fafafa 25%,
            #ffffff 50%,
            #fafafa 75%,
            #ffffff 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s infinite linear;
        }
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        @keyframes slowZoom {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1.18);
          }
        }
        .animate-slowZoom {
          animation: slowZoom 18s ease-in-out infinite alternate;
        }
      `}</style>
    </header>
  );
  
}

