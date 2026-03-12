export const runtime = "edge";

import CoverHeroClient from "@/components/CoverHeroClient";
import { invitations } from "@/lib/invitations";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ---------------- METADATA (SEO) ---------------- */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } = await params;
  const data = invitations[slug as keyof typeof invitations];

  if (!data) {
    return {
      title: "Wedding Invitation",
    };
  }

  const title = `The Wedding of ${data.bride.name} & ${data.groom.name}`;

  return {
    title,
    description: `Undangan pernikahan ${data.bride.name} dan ${data.groom.name} pada ${data.dateLabel}.`,

    openGraph: {
      title,
      description: `Undangan pernikahan ${data.bride.name} & ${data.groom.name}`,
      images: [
  {
    url: `/api/og/${slug}`,
    width: 1200,
    height: 630,
  },
],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: `Undangan pernikahan ${data.bride.name} & ${data.groom.name}`,
      images: [`/api/og/${slug}`],
    },
  };
}

/* ---------------- PAGE ---------------- */

export default async function Page({ params }: Props) {

  const { slug } = await params;

  const data = invitations[slug as keyof typeof invitations];

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Undangan tidak ditemukan
      </div>
    );
  }

  return (
    <CoverHeroClient
      slug={slug as keyof typeof invitations}
    />
  );
}