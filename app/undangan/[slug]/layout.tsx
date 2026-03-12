import RootClient from "@/components/RootClient";

export default function UndanganLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootClient>{children}</RootClient>;
}