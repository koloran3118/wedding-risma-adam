// app/undangan/[slug]/page.tsx

import { Suspense } from "react";

import QuotesSection from "@/components/QuotesSection";
import { BrideGroomSection } from "@/components/BrideGroomSection";
import { EventSection } from "@/components/EventSection";
import { GallerySection } from "@/components/GallerySection";
import { RSVPSection } from "@/components/RSVPSection";
import { GiftSection } from "@/components/GiftSection";
import { ClosingSection } from "@/components/ClosingSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import InviteHeroClient from "@/components/InviteHeroClient";

import { invitations } from "@/lib/invitations";

type InvitationSlug = keyof typeof invitations;

export default async function UndanganPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  if (!(slug in invitations)) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Undangan tidak ditemukan
      </div>
    );
  }

  const typedSlug = slug as InvitationSlug;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <AnimatedBackground />

      <div className="relative z-10">
        <Suspense fallback={null}>
          <InviteHeroClient slug={typedSlug} />
        </Suspense>
      </div>

      <main className="relative z-10 max-w-3xl mx-auto">
        <QuotesSection slug={typedSlug} />
        <BrideGroomSection slug={typedSlug} />
        <EventSection slug={typedSlug} />
        <GallerySection slug={typedSlug} />
        <GiftSection slug={typedSlug} />
        <RSVPSection slug={typedSlug} />
        <ClosingSection slug={typedSlug} />
      </main>

    </div>
  );
}