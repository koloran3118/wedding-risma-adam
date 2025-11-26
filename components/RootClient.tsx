// components/RootClient.tsx
"use client";

import { ReactNode } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import AudioPlayer from "@/components/AudioPlayer";

export default function RootClient({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background & Musik global */}
      <AnimatedBackground />
      <AudioPlayer />

      {/* Semua halaman dibungkus di atas background+musik */}
      <div className="relative z-0">{children}</div>
    </div>
  );
}
