import RootClient from "@/components/RootClient";

export default function CoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootClient>{children}</RootClient>;
}