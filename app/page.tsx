import { invitations } from "@/lib/invitations";
import HeroLanding from "@/components/HeroLanding";
import InvitationCard from "@/components/InvitationCard";
import FeaturesSection from "@/components/FeaturesSection";
import BackgroundGlow from "@/components/BackgroundGlow";
import { InvitationSlug } from "@/lib/types";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function Page() {

  const invitationList = Object.entries(invitations);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      <BackgroundGlow />

      <HeroLanding demoSlug={invitationList[0]?.[0]} />

      {/* Demo Invitations */}
      <section className="max-w-6xl mx-auto px-6 pb-28">

        <h2 className="text-center text-3xl font-playfair mb-14">
          Demo Invitations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {invitationList.map(([slug, data]) => (
            <InvitationCard
              key={slug}
              slug={slug}
              bride={data.bride.name}
              groom={data.groom.name}
              date={data.dateLabel}
              image={data.heroBackground}
            />
          ))}

        </div>

      </section>

      <FeaturesSection />

      <footer className="text-center text-xs text-white/40 pb-10">
        © {new Date().getFullYear()} Wedding Invitation
      </footer>

    </main>
  );
}