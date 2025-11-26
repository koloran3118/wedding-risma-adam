"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type GiftMethodKey = "transfer" | "qr" | "physical";

type TransferAccount = {
  label: string;
  bank: string;
  number: string;
  name: string;
};

const giftContent: Record<GiftMethodKey, any> = {
  transfer: {
    label: "Transfer Bank",
    title: "Kado Melalui Rekening",
    accounts: [
      {
        bank: "MANDIRI",
        number: "1060017159230",
        name: "M.ADAM RIZKI IRAWAN",
      },
      {
        bank: "SEA BANK",
        number: "901745647962",
        name: "RISMA HAYATI",
      },
    ] as TransferAccount[],
    note: "THANK YOU FOR YOUR GIFT. 🤍",
  },

  qr: {
    label: "QR Code",
    title: "QRIS",
    qrImage: "/images/qr-code.jpeg", // Ganti ke src QR kamu
    note: "Thank You For Your Gift. 🤍",
  },

  physical: {
    label: "Kado",
    title: "Pengiriman Kado Fisik",
    rows: [
      { label: "Alamat", value: "Simpang Matapao (Bakso Wongso)" },
      { label: "Kota", value: "Kab. Serdang Bedagai, Kec. Teluk Mengkudu" },
      { label: "Penerima", value: "Risma Hayati" },
    ],
  },
};

export function GiftSection() {
  const [active, setActive] = useState<GiftMethodKey>("transfer");

  const data = giftContent[active];

  const copyText = (text: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <section className="relative w-full bg-black/30 backdrop-blur-sm py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-linear-to-br from-amber-400/40 via-fuchsia-500/20 to-emerald-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-linear-to-tr from-white/10 via-amber-300/25 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-playfair text-white tracking-wide mb-4"
        >
          GIFT LOVE        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/70 text-sm md:text-[15px] max-w-xl mx-auto mb-8 leading-relaxed"
        >Tanpa mengurangi rasa hormat,bagi Bapak/Ibu/Saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui:
        </motion.p>

        {/* Tabs */}
        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/15 p-1.5 mb-7 backdrop-blur-xl">
          {(
            [
              ["transfer", "Transfer"],
              ["qr", "QR Code"],
              ["physical", "Kado Fisik"],
            ] as [GiftMethodKey, string][]
          ).map(([key, label]) => {
            const activeTab = key === active;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`relative px-4 py-1.5 text-[11px] font-medium rounded-full transition-all ${
                  activeTab ? "text-black" : "text-white/65"
                }`}
              >
                {activeTab && (
                  <motion.span
                    layoutId="gift-pill"
                    className="absolute inset-0 rounded-full bg-white/90"
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-xl rounded-3xl border border-white/15 bg-linear-to-br from-white/10 via-white/5 to-white/0 p-6 md:p-7 text-left backdrop-blur-2xl shadow-[0_18px_55px_rgba(0,0,0,0.7)]"
          >
            {/* Header */}
            <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
              {data.title}
            </h3>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
              {data.subtitle}
            </p>

            {/* TRANSFER — multiple accounts */}
            {active === "transfer" && (
              <div className="space-y-4">
                {data.accounts.map((acc: TransferAccount, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/15 bg-white/5 p-4"
                  >
                    <Row label="Bank" value={acc.bank} />
                    <Row label="No. Rekening" value={acc.number} mono />
                    <Row label="Atas Nama" value={acc.name} />

                    <button
                      onClick={() => copyText(acc.number)}
                      className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/25 px-3 py-1.5 text-[11px] text-white/90 hover:bg-white hover:text-black transition"
                    >
                      Salin Rekening
                      <span className="text-[10px]">⧉</span>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* QR — Large Image Only */}
{active === "qr" && (
  <div className="flex flex-col items-center mt-3">
    <div className="h-56 w-56 md:h-64 md:w-64 rounded-2xl overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center">
      <img
        src="/images/qr-code.jpeg"    // pastikan file QR kamu ada di public/qr.png
        alt="QR Code"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Tombol Download */}
    <a
      href="/images/qr-code.jpeg"
      download="QR-Code-Mempelai.png"
      className="
        mt-4 inline-flex items-center justify-center gap-1.5
        rounded-full border border-white/25 px-4 py-2
        text-[11px] text-white/90 hover:bg-white hover:text-black
        transition-all duration-200
      "
    >
      Download QR
    </a>

    <p className="text-[11px] text-white/50 text-center mt-3 leading-relaxed">
      {data.note}
    </p>
  </div>
)}


            {/* PHYSICAL */}
            {active === "physical" && (
              <div className="mt-3 space-y-2.5">
                {data.rows.map((row: any) => (
                  <Row
                    key={row.label}
                    label={row.label}
                    value={row.value}
                    mono={row.label === "Alamat"}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col mb-1">
      <span className="text-[11px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </span>
      <span
        className={`text-sm text-white ${
          mono ? "font-mono tracking-[0.15em]" : "font-medium"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
