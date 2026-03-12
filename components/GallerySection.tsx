"use client";

import { motion } from "framer-motion";
import { InvitationSlug } from "@/lib/types";
import { invitations } from "@/lib/invitations";

type Props = {
  slug: InvitationSlug;
};

export function GallerySection({slug}: Props) {

  const data = invitations[slug];
  
  if(!data) return null;

  const images = [
    { src: data.galery.ft1, alt: "Wedding moment 1" },
    { src: data.galery.ft2, alt: "Wedding moment 2" },
    { src: data.galery.ft3, alt: "Wedding moment 3" },
    { src: data.galery.ft4, alt: "Wedding moment 4" },
    { src: data.galery.ft5, alt: "Wedding moment 5" },
    { src: data.galery.ft6, alt: "Wedding moment 6" },
  ];

  return (
    <section className="relative z-10 w-full bg-black/30 backdrop-blur-sm py-12 sm:py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-center text-white
            text-2xl sm:text-3xl md:text-4xl
            font-playfair  mb-6 sm:mb-8 md:mb-10
            tracking-wide
          "
        >
          OUR GALLERY
        </motion.h2>

        {/* Grid Gallery */}
        <div
          className="
            grid
            grid-cols-2 md:grid-cols-3
            gap-3 sm:gap-4 md:gap-5
            auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[210px]
          "
        >
          {/* ITEM 1 – normal */}
          <GalleryItem
            src={images[0].src}
            alt={images[0].alt}
            delay={0}
            className=""
          />

          {/* ITEM 2 – normal */}
          <GalleryItem
            src={images[1].src}
            alt={images[1].alt}
            delay={0.1}
            className=""
          />

          {/* ITEM 3 – wide di mobile (col-span-2), normal di md+ */}
          <GalleryItem
            src={images[2].src}
            alt={images[2].alt}
            delay={0.2}
            className="col-span-2 md:col-span-1"
          />

          {/* ITEM 4 – normal */}
          <GalleryItem
            src={images[3].src}
            alt={images[3].alt}
            delay={0.3}
            className=""
          />

          {/* ITEM 5 – tall di mobile (row-span-2), normal di md+ */}
          <GalleryItem
            src={images[4].src}
            alt={images[4].alt}
            delay={0.4}
            className="row-span-2 md:row-span-1"
          />

          {/* ITEM 6 – normal */}
          <GalleryItem
            src={images[5].src}
            alt={images[5].alt}
            delay={0.5}
            className=""
          />
        </div>
      </div>
    </section>
  );
}

type GalleryItemProps = {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
};

function GalleryItem({ src, alt, delay = 0, className = "" }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
      className={`
        ${className}
        overflow-hidden rounded-xl
        bg-white/5
        shadow-[0_14px_40px_rgba(0,0,0,0.65)]
      `}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{
          scale: 1.05,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}
