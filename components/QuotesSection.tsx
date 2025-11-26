"use client";

import { motion } from "framer-motion";

export default function QuotesSection() {
  const quote = `“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”`;
  const ayat = `~ Qs.Ar-Rum:21 ~`;
  return (
    <section className="relative w-full py-25 px-6 overflow-hidden">
      {/* Light floral shadow / ambience */}
      <div className="absolute inset-0 bg-black bg-center bg-no-repeat bg-contain pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        className="flex flex-col gap-2 text-sm md:text-xl leading-relaxed text-white italic font-light premium-fade px-2"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {quote}
        </motion.p>

        {/* Ayat */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        className="flex flex-col gap-2 text-sm md:text-xl leading-relaxed text-white italic font-light premium-fade px-2"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {ayat}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 h-[1.5px] w-40 mx-auto bg-linear-to-r from-transparent via-gold to-transparent"
        />
      </div>

      {/* Custom CSS */}
      <style jsx global>{`
        .premium-glow {
          background: linear-gradient(
            90deg,
            #b08c5a 0%,
            #f5e4c3 50%,
            #b08c5a 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        .premium-fade {
          animation: softFade 2.5s ease-in;
        }

        @keyframes shimmer {
          0% {
            background-position: -150% 0;
          }
          100% {
            background-position: 150% 0;
          }
        }

        @keyframes softFade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .bg-gold {
          color: #c5a46d;
        }

        .via-gold {
          background-image: linear-gradient(
            to right,
            transparent,
            #c8a97e,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
