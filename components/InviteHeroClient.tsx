"use client";

import HeroSection from "@/components/HeroSection";
import { useSearchParams } from "next/navigation";
import { invitations } from "@/lib/invitations";

type InvitationSlug = keyof typeof invitations;

export default function InviteHeroClient({ slug }: { slug: InvitationSlug }) {
  const params = useSearchParams();
  const invite = params?.get("invite") ?? "Tamu Undangan";

  const data = invitations[slug];

  if (!data) {
    return (
      <div className="text-center py-20 text-white">
        Undangan tidak ditemukan
      </div>
    );
  }

  return (
    <HeroSection
      guestName={invite}
      bride={data.bride.name}
      groom={data.groom.name}
      logoImage={data.logoImage}
      heroBackground= {data.heroBackground}
      weddingDate={data.dateISO}
      weddingDateLabel={data.dateLabel}
    />
  );
}