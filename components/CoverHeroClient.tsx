"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { invitations } from "@/lib/invitations";

type InvitationSlug = keyof typeof invitations;

export default function CoverHeroClient({ slug }: { slug: InvitationSlug }) {
  const params = useSearchParams();
  const invite = params?.get("invite") ?? "Tamu Undangan";

  const data = invitations[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Undangan tidak ditemukan
      </div>
    );
  }

  return (
    <main className="w-full h-screen overflow-hidden relative font-lora">

      {/* Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.heroBackground})` }}
      />

      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center"
      >

        {/* The Wedding Of */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm tracking-[0.5em] uppercase opacity-90 mb-3 absolute top-8"
        >
          The Wedding Of
        </motion.p>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mb-4 absolute top-16"
        >
          <img
            src={data.logoImage}
            alt="Logo"
            className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] object-contain mx-auto sepia saturate-200 hue-rotate-45 brightness-110"
          />
        </motion.div>

        {/* Nama mempelai */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-4xl md:text-6xl font-playfair font-semibold mb-2 absolute bottom-44 md:bottom-56"
        >
          {data.bride.uname} & {data.groom.uname}
        </motion.h1>

        {/* Tanggal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-sm md:text-base font-light tracking-wide mb-6 absolute bottom-36 md:bottom-44"
        >
          {data.dateLabel}
        </motion.p>

        {/* Nama tamu */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-sm italic leading-relaxed absolute bottom-24 md:bottom-32"
        >
          Kepada Yth:
          <br />
          <span className="text-lg font-semibold">
            {invite}
          </span>
        </motion.p>

      </motion.div>

      {/* Tombol buka */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 w-full flex justify-center z-10"
      >
        <Link
          href={`/undangan/${slug}${invite ? `?invite=${encodeURIComponent(invite)}` : ""}`}
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="px-2 py-1 bg-white text-black shadow-md font-lora tracking-wide"
          >
            Buka Undangan
          </motion.button>
        </Link>
      </motion.div>

      {/* Hint */}
      <div className="absolute bottom-4 w-full text-center z-10 text-white/70 text-xs">
        Tekan "Buka Undangan" untuk melihat isi undangan
      </div>

    </main>
  );
}