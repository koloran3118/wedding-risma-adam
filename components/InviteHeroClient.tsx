"use client";

import HeroSmall from "@/components/HeroSection";
import { useSearchParams } from "next/navigation";

export default function InviteHeroClient() {
  const params = useSearchParams();
  const invite = params?.get("invite") ?? "";

  return <HeroSmall guestName={invite} />;
}
