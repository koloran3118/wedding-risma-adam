"use client";

import { ReactNode } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import AudioPlayer from "@/components/AudioPlayer";

type Props = {
  children: ReactNode;
};

export default function RootClient({ children }: Props) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background global */}
      <AnimatedBackground />

      {/* Musik langsung aktif */}
      <AudioPlayer />

      {/* Konten halaman */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}