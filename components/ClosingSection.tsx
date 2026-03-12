"use client";

import { motion } from "framer-motion";
import { InvitationSlug } from "@/lib/types";
import { invitations } from "@/lib/invitations";

type Props = {
  slug: InvitationSlug;
  creatorName?: string;
  instagramUrl?: string;
  whatsappUrl?: string;
};

export function ClosingSection({
  slug,
  creatorName = "Pakdomm",
  instagramUrl = "https://instagram.com/pakdomm",
  whatsappUrl = "https://wa.me/6281360387771",
}: Props) {

  const data = invitations[slug];

  if (!data) return null;

  const brideGroomNames = `${data.bride.name} & ${data.groom.name}`;

  return (
    <section className="relative w-full bg-black/30 backdrop-blur-sm py-20 px-6 overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-linear-to-br from-amber-500/30 via-fuchsia-500/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-linear-to-tr from-white/10 via-amber-500/25 to-transparent blur-3xl" />
        <div className="absolute -bottom-80px -left-40px h-72 w-72 rounded-full bg-linear-to-tr from-emerald-300/25 via-white/5 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">

        {/* Main message */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[15px] md:text-[17px] text-white/85 leading-relaxed font-light mb-6 mt-30"
        >
          Merupakan suatu kebahagiaan dan kehormatan bagi kami jika Bapak/Ibu
          dan teman-teman berkenan menghadiri momen spesial kami.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-6 h-px w-40 bg-linear-to-r from-transparent via-white/45 to-transparent"
        />

        {/* Inviting */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="text-xs md:text-sm text-white/60 mb-2"
        >
          Turut mengundang:
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-sm md:text-[15px] text-white/80 mb-6"
        >
          Keluarga besar kedua mempelai
        </motion.p>

        {/* Names */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs md:text-sm text-white/60 mb-1"
        >
          Kami yang berbahagia:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.23 }}
          className="text-2xl md:text-[28px] font-playfair text-white tracking-wide mb-6"
        >
          {brideGroomNames}
        </motion.p>

        {/* Creator */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.27 }}
          className="mb-7"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-1">
            Created by
          </p>
          <p className="text-sm md:text-[15px] text-white/80">
            {creatorName}
          </p>
        </motion.div>

        {/* Social buttons - ICON ONLY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex items-center justify-center gap-4"
        >
          {/* INSTAGRAM */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              h-11 w-11 flex items-center justify-center
              rounded-full border border-white/20 bg-white/5
              hover:bg-linear-to-r hover:from-rose-400 hover:to-amber-300
              hover:border-transparent hover:text-black
              transition-all duration-300 backdrop-blur-xl
              text-white/90
            "
          >
            {/* Ikon IG */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
              className='h-5 w-5'
            >
              <path d='M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z' />
            </svg>
          </a>

          {/* WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              h-11 w-11 flex items-center justify-center
              rounded-full border border-emerald-400/50 bg-emerald-500/10
              hover:bg-emerald-400 hover:text-black
              transition-all duration-300 backdrop-blur-xl
              text-emerald-200
            "
          >
            {/* Ikon WA */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path d='M20.52 3.48A11.8 11.8 0 0 0 12 .1 11.9 11.9 0 0 0 .1 12a11.8 11.8 0 0 0 3.48 8.52L2 24l3.6-1.54A11.9 11.9 0 0 0 12 24a11.9 11.9 0 0 0 12-12c0-3.12-1.22-6.06-3.48-8.52zM12 22a10 10 0 0 1-5.1-1.38l-.36-.22-2.14.9.46-2.06-.27-.33A10 10 0 1 1 22 12 10 10 0 0 1 12 22zm5.3-7.3c-.28-.14-1.65-.82-1.9-.91s-.44-.14-.63.14-.72.91-.88 1.09-.33.21-.61.07a8.2 8.2 0 0 1-2.4-1.48 9.1 9.1 0 0 1-1.68-2c-.18-.32 0-.49.13-.63.14-.14.32-.37.47-.56s.19-.32.28-.53a.56.56 0 0 0-.02-.53c-.07-.14-.63-1.52-.87-2.1-.23-.55-.47-.47-.63-.48h-.54a1 1 0 0 0-.72.33 3 3 0 0 0-.94 2.21c0 1.31.94 2.58 1.08 2.76s1.85 2.82 4.49 4c.63.27 1.12.43 1.5.55a3.6 3.6 0 0 0 1.65.1c.5-.07 1.65-.68 1.88-1.33s.23-1.22.18-1.33-.25-.18-.53-.32z' />
            </svg>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-8 text-[10px] text-white/35 tracking-[0.18em] uppercase"
        >
          Terima kasih atas doa dan kehadiran Anda
        </motion.p>
      </div>
    </section>
  );
}
