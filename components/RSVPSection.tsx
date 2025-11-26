"use client";

import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";

// --------------------
// TYPES
// --------------------
type Wish = {
  id?: string;
  name: string;
  message: string;
  attend: "Hadir" | "Tidak Hadir" | string;
  createdAt?: any;
};

// --------------------
// MAIN COMPONENT
// --------------------
export function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  // Ambil data ucapan dari Firestore (real-time)
  useEffect(() => {
    const wishesRef = collection(db, "wishes");
    const q = query(wishesRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const data: Wish[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Wish, "id">),
        }));
        setWishes(data);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement).value;
    const attend = (form.elements.namedItem(
      "attend"
    ) as HTMLSelectElement).value;

    if (!name || !message || !attend) return;

    try {
      await addDoc(collection(db, "wishes"), {
        name,
        message,
        attend,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 2500);
    } catch (err) {
      console.error("Gagal menyimpan ucapan:", err);
    }
  };

  return (
    <section className="w-full py-16 bg-black/30 px-6 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl font-playfair text-white tracking-wide mb-6"
      >
        RSVP & Wishes
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white/70 text-xs font-lora font-bold max-w-md mx-auto mb-10"
      >
        UCAPAN & KONFIRMASI KEHADIRAN.
      </motion.p>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          max-w-2xl mx-auto space-y-5 
         backdrop-blur-xl border-white/10
        "
      >
        {/* Nama */}
        <div className="text-left">
          <label className="text-white text-sm">Nama</label>
          <input
            required
            name="name"
            type="text"
            className="
              w-full mt-1 p-3  text-white 
              placeholder-white/40
              rounded-md border border-white 
              focus:ring-2 focus:ring-white/80 outline-none
            "
            placeholder="Nama Anda"
          />
        </div>

        {/* Pesan */}
        <div className="text-left">
          <label className="text-white text-sm">Ucapan</label>
          <textarea
            required
            name="message"
            rows={3}
            className="
              w-full mt-1 p-3  text-white 
              placeholder-white/40
              rounded-md border border-white 
              focus:ring-1 focus:ring-white/80 outline-none
            "
            placeholder="Tulis ucapan terbaik Anda..."
          />
        </div>

        {/* Kehadiran */}
        <div className="text-left">
          <label className="text-white text-sm">Konfirmasi Kehadiran</label>
          <select
            required
            name="attend"
            className="
              w-full mt-1 p-3  text-white 
              placeholder-white/40
              rounded-md border border-white 
              focus:ring-1 focus:ring-white/80 outline-none
            "
          >
            <option className="text-black" value="Hadir">
              Hadir
            </option>
            <option className="text-black" value="Tidak Hadir">
              Tidak Hadir
            </option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full py-3 rounded-md 
            bg-white text-black 
            font-semibold
            shadow-lg hover:bg-neutral-200 
            transition-all duration-300
          "
        >
          Kirim
        </button>

        {/* Success */}
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-300 text-sm mt-3"
          >
            Terima kasih! Ucapan Anda tersimpan.
          </motion.p>
        )}
      </motion.form>

      {/* WISHES LIST */}
      {loading ? (
        <p className="text-white/60 text-xs mt-8">Memuat ucapan tamu...</p>
      ) : wishes.length > 0 ? (
        <WishesList wishes={wishes} />
      ) : (
        <p className="text-white/40 text-xs mt-8">
          Belum ada ucapan. Jadilah yang pertama meninggalkan ucapan. ✨
        </p>
      )}
    </section>
  );
}
// --------------------
// WISHES CARD COMPONENT
// --------------------
function WishesList({ wishes }: { wishes: Wish[] }) {
  return (
    <div className="max-w-2xl mx-auto mt-14">
      <h3 className="text-white/80 text-sm mb-3 text-left">Ucapan Tamu</h3>

      {/* Scroll container */}
      <div
        className="
          max-h-96
          overflow-y-auto
          space-y-4
          pr-1
        "
      >
        {wishes.map((w) => (
          <motion.div
            key={w.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              bg-white/20 rounded-lg p-5 text-left
              shadow-lg
            "
          >
            <div className="flex items-center justify-between mb-2 gap-2">
              <h3 className="font-semibold text-white text-sm sm:text-base">
                {w.name}
              </h3>
              <span
                className={`
                  text-[10px] sm:text-xs px-2.5 py-1 rounded-lg whitespace-nowrap
                  ${
                    w.attend === "Hadir"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }
                `}
              >
                {w.attend}
              </span>
            </div>

            {/* Garis pemisah responsif */}
            <div className="h-px w-full bg-white/20 mb-3" />

            <p className="text-white text-sm leading-relaxed">
              {w.message}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
