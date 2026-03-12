"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroLanding({ demoSlug }: { demoSlug?: string }) {
  return (
    <section className="relative pt-36 pb-28 px-6 text-center">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-playfair tracking-wide mb-6"
      >
        Digital Wedding Invitation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white/70 max-w-xl mx-auto mb-10"
      >
        Platform undangan pernikahan digital modern
        dengan desain elegan, RSVP interaktif,
        dan pengalaman premium untuk tamu Anda.
      </motion.p>

      {demoSlug && (
        <Link
          href={`/${demoSlug}`}
          className="px-7 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
        >
          Lihat Demo Undangan
        </Link>
      )}

    </section>
  );
}