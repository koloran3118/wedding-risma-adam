"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "RSVP System",
    desc: "Tamu dapat langsung konfirmasi kehadiran secara online.",
  },
  {
    title: "Guest Personalization",
    desc: "Nama tamu otomatis muncul pada undangan.",
  },
  {
    title: "Music Player",
    desc: "Tambahkan musik romantis di halaman undangan.",
  },
  {
    title: "Countdown Timer",
    desc: "Hitung mundur menuju hari bahagia Anda.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      <h2 className="text-center text-3xl font-playfair mb-14">
        Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
          >

            <h3 className="font-playfair text-lg mb-2">
              {f.title}
            </h3>

            <p className="text-sm text-white/60">
              {f.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}