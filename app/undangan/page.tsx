// app/undangan/page.tsx
"use client";

import { Suspense } from "react";
import QuotesSection from "../../components/QuotesSection";
import { BrideGroomSection } from "../../components/BrideGroomSection";
import { EventSection } from "../../components/EventSection";
import { GallerySection } from "../../components/GallerySection";
import { RSVPSection } from "../../components/RSVPSection";
import { GiftSection } from "../../components/GiftSection";
import { ClosingSection } from "@/components/ClosingSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import InviteHeroClient from "@/components/InviteHeroClient";


export default function UndanganPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background animasi global */}
      <AnimatedBackground />

      {/* HERO selalu full width, di atas background */}
      <div className="relative z-10">
        <Suspense fallback={null}>
        <InviteHeroClient />
        </Suspense>
      </div>

      {/* CONTENT */}
      <main className="relative z-10 max-w-3xl mx-auto">
        <QuotesSection />
        <BrideGroomSection />
        <EventSection />
        <GallerySection />
        <GiftSection />
        <RSVPSection />
        <ClosingSection />
      </main>
    </div>
  );
}
