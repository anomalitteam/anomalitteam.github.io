import type { Metadata } from "next";
import { StudioHero } from "@/components/sections/StudioHero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <StudioHero />
      <ProjectGrid />
    </>
  );
}
