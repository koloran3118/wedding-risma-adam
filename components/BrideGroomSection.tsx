"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { invitations } from "@/lib/invitations";
import { InvitationSlug } from "@/lib/types";

type Props = {
  slug: InvitationSlug;
};

export function BrideGroomSection({slug} : Props ) {
  const data = invitations[slug];

  if(!data) return null;
  return (
    <section className="w-full bg-black/30 backdrop-blur-sm overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 sm:space-y-12">
        {/* Pembuka Islami */}
        <div className="w-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-2 max-w-xl"
          >
            <span className="text-white font-playfair text-lg sm:text-xl tracking-wide">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </span>

            <p className="text-white font-lora text-sm sm:text-base">
              Assalamu`alaikum
            </p>
            <p className="text-white font-lora text-sm sm:text-base">
              Warahmatullahi Wabarakatuh
            </p>

            <p className="text-white font-lora leading-tight text-sm sm:text-base px-2">
              Maha Suci Allah yang telah menciptakan makhluk-Nya
              berpasang-pasangan. Ya Allah, semoga ridho-Mu tercurah
              mengiringi pernikahan kami:
            </p>
          </motion.div>
        </div>

        {/* === BRIDE SECTION === */}
        <div className="grid grid-cols-[1.8fr_0.2fr] sm:grid-cols-2 sm:gap-6 md:gap-10 items-center">
          {/* Foto Bride */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              -ml-7 sm:ml-8 w-full
              max-w-[360px] sm:max-w-[280px] md:max-w-[320px]
              sm:aspect-2/3
              rounded-xl overflow-hidden shadow-xl
            "
          >
            <img
              src={data.brideImage}
              alt={data.bride.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay teks – HANYA MOBILE (md ke atas disembunyikan) */}
            <div
              className="
                absolute inset-x-4 sm:inset-x-6 bottom-3 sm:bottom-4
                md:hidden
              "
            >
              <div
                className="
                  bg-black/65 backdrop-blur-sm
                  rounded-lg px-3 py-2 sm:px-4 sm:py-3
                  text-white drop-shadow-2xl leading-tight space-y-1
                "
              >
                <h1 className="text-base sm:text-lg font-playfair">
                  {data.bride.name}
                </h1>
                <p className="text-[11px] sm:text-xs">
                  {data.bride.parents}
                </p>

                <a
                  href={data.bride.instagram.iglink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center mt-1.5 sm:mt-2
                    gap-1.5 sm:gap-2
                    text-[11px] sm:text-sm font-lora
                    hover:text-amber-200 transition-colors
                  "
                >
                  <Instagram size={16} />
                  <span>{data.bride.instagram.uname}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Label Bride + teks (desktop & tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start justify-center text-white"
          >
            {/* Mobile: vertical (rotate) */}
            <h2 className="md:hidden font-playfair text-3xl sm:text-4xl rotate-90 origin-center mb-20">
              Bride&apos;s
            </h2>
            {/* Desktop: horizontal */}
            <h2 className="hidden md:block font-playfair text-4xl lg:text-5xl mb-3">
              Bride&apos;s
            </h2>

            {/* Detail pengantin – hanya tampil di md+ */}
            <div className="hidden md:flex flex-col space-y-1 text-left">
              <h3 className="text-lg md:text-xl font-playfair">
                {data.bride.name}
              </h3>
              <p className="text-xs md:text-sm text-white/80 max-w-xs">
                {data.bride.parents}
              </p>
              <a
                href={data.bride.instagram.iglink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 gap-2 text-xs md:text-sm font-lora hover:text-amber-200 transition-colors"
              >
                <Instagram size={16} />
                <span>{data.bride.instagram.uname}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* === & === */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-playfair text-white text-center"
        >
          &
        </motion.h1>

        {/* === GROOM SECTION === */}
        <div className="grid grid-cols-[0.2fr_1.8fr] sm:grid-cols-2 sm:gap-6 md:gap-10 items-center">
          {/* Label Groom – MIRROR dari Bride */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start justify-center text-white"
          >
            {/* Mobile: vertical */}
            <h2 className="md:hidden font-playfair text-3xl sm:text-4xl rotate-90 origin-center mb-20">
              Groom&apos;s
            </h2>

            {/* Desktop: horizontal */}
            <h2 className="hidden md:block font-playfair text-4xl lg:text-5xl mb-3 ml-10">
              Groom&apos;s
            </h2>

            {/* Detail pengantin – hanya md+ */}
            <div className="hidden md:flex flex-col space-y-1 text-left ml-10">
              <h3 className="text-lg md:text-xl font-playfair">
                {data.groom.name}
              </h3>
              <p className="text-xs md:text-sm text-white/80 max-w-xs">
                {data.groom.parents}
              </p>
              <a
                href={data.groom.instagram.iglink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 gap-2 text-xs md:text-sm font-lora hover:text-amber-200 transition-colors"
              >
                <Instagram size={16} />
                <span>{data.groom.instagram.uname}</span>
              </a>
            </div>
          </motion.div>

          {/* Foto Groom – MIRROR dari Bride (keluar kanan) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              -mr-7 sm:mr-8 w-full
              max-w-[360px] sm:max-w-[280px] md:max-w-[320px]
              sm:aspect-2/3
              rounded-xl overflow-hidden shadow-xl
              justify-self-end
            "
          >
            <img
              src={data.groomImage}
              alt={data.groom.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay teks – hanya mobile */}
            <div
              className="
                absolute inset-x-4 sm:inset-x-6 bottom-3 sm:bottom-4
                md:hidden
              "
            >
              <div
                className="
                  bg-black/65 backdrop-blur-sm
                  rounded-lg px-3 py-2 sm:px-4 sm:py-3
                  text-white drop-shadow-2xl leading-tight space-y-1
                "
              >
                <h1 className="text-base sm:text-lg font-playfair">
                  {data.groom.name}
                </h1>
                <p className="text-[11px] sm:text-xs">
                  {data.groom.parents}
                </p>

                <a
                  href={data.groom.instagram.iglink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center mt-1.5 sm:mt-2
                    gap-1.5 sm:gap-2
                    text-[11px] sm:text-sm font-lora
                    hover:text-amber-200 transition-colors
                  "
                >
                  <Instagram size={16} />
                  <span>{data.groom.instagram.uname}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
