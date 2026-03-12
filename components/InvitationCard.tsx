import Link from "next/link";

type Props = {
  slug: string;
  bride: string;
  groom: string;
  date: string;
  image?: string;
};

export default function InvitationCard({
  slug,
  bride,
  groom,
  date,
  image,
}: Props) {
  return (
    <Link
      href={`/${slug}`}
      className="
        group relative
        rounded-2xl overflow-hidden
        border border-white/10
        bg-white/5
        hover:border-white/30
        transition
      "
    >
      {/* IMAGE */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image ?? "/images/image5.jpeg"}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center pb-12">
        <h3 className="text-lg font-playfair">
          {bride} & {groom}
        </h3>

        <p className="text-xs text-white/60 mt-1">
          {date}
        </p>
      </div>

      {/* CTA RIGHT BOTTOM */}
      <div className="absolute bottom-4 right-5 text-xs text-white/80 group-hover:text-white transition bg-white/10 backdrop-blur px-3 py-1 rounded-full">
        Lihat Undangan →
      </div>
    </Link>
  );
}