"use client";

import { motion } from "framer-motion";
import CountdownSection from "./CountdownSection";
import { InvitationSlug } from "@/lib/types";
import { invitations } from "@/lib/invitations";

type Props = {
  slug: InvitationSlug;
};

export function EventSection({slug}: Props) {

  const data = invitations[slug];

  if(!data) return null;

  return (
    <section className="w-full bg-black/30 backdrop-blur-sm py-14 sm:py-16 md:py-20 px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-playfair tracking-[0.25em] sm:tracking-[0.3em] text-white mb-6"
        >
          SAVE THE DATE
        </motion.h2>

        {/* COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-white mb-6 sm:mb-8"
        >
          <CountdownSection />
        </motion.div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-lora mb-8 sm:mb-10 text-white/90 max-w-md mx-auto leading-relaxed"
        >
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
        </motion.p>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            backdrop-blur-lg
            px-6 py-7 sm:px-8 sm:py-8
            rounded-t-full shadow-xl
            max-w-md sm:max-w-lg mx-auto
            border border-white/20 bg-white/10
          "
        >
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-3 sm:mb-4"
          >
            <img
              src={data.logoImage}
              alt="Wedding Logo"
              className="
                w-25 h-25 sm:w-20 sm:h-20
                object-contain opacity-90
                saturate-200 hue-rotate-45 brightness-110
              "
            />
          </motion.div>

          {/* TITLE CARD */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-playfair font-semibold text-white"
          >
            Akad Nikah &amp; Resepsi
          </motion.h3>

          {/* DATE & TIME */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 space-y-1"
          >
            <p className="text-sm sm:text-sm font-lora text-white/90 ">
              {data.event.dayLabel}
            </p>
            <p className="text-xs sm:text-sm font-lora text-white/90">
              {data.event.time}
            </p>
          </motion.div>

          {/* PLACE */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 text-xs sm:text-sm font-lora text-white/90 leading-relaxed"
          >
            {data.event.location}
          </motion.p>

          {/* MAPS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 w-full flex flex-col items-center"
          >
            <div className="w-full">
              <iframe
                src={data.event.mapEmbed}
                className="w-full h-56 sm:h-64 md:h-72 rounded-xl shadow-lg border border-white/40"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* BUTTON OPEN MAPS */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={data.event.mapLink}
              target="_blank"
              className="
                mt-4
                px-5 sm:px-6 py-2  
                bg-white text-black 
                font-lora text-xs sm:text-sm
                shadow-md 
                hover:bg-gray-800 hover:text-white 
                transition-all 
                duration-300
                rounded-md
              "
            >
              Buka Maps
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
