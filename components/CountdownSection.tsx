"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getCountdown, CountdownResult } from "@/lib/countdown";

export default function CountdownSection() {
  const [time, setTime] = useState<CountdownResult>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCountdown("2026-03-26T08:00:00"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeItem = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full py-4 text-center"
    >
      <div className="flex justify-center gap-6 text-xl font-mono">
        {/* DAYS */}
        <motion.div
          variants={fadeItem}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-4xl font-cormo font-bold text-white drop-shadow-lg">
            {time.days}
          </p>
          <span className="text-sm font-lora text-white/90">Hari</span>
        </motion.div>

        {/* HOURS */}
        <motion.div
          variants={fadeItem}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <p className="text-4xl font-playfair font-bold text-white drop-shadow-lg">
            {time.hours}
          </p>
          <span className="text-sm font-lora text-white/90">Jam</span>
        </motion.div>

        {/* MINUTES */}
        <motion.div
          variants={fadeItem}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <p className="text-4xl font-playfair font-bold text-white drop-shadow-lg">
            {time.minutes}
          </p>
          <span className="text-sm font-lora text-white/90">Menit</span>
        </motion.div>

        {/* SECONDS */}
        <motion.div
          variants={fadeItem}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center"
        >
          <p className="text-4xl font-playfair font-bold text-white drop-shadow-lg">
            {time.seconds}
          </p>
          <span className="text-sm font-lora text-white/90">Detik</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
