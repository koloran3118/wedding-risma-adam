// app/page.tsx
import { Suspense } from "react";
import CoverHeroClient from "@/components/CoverHeroClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <CoverHeroClient />
    </Suspense>
  );
}
