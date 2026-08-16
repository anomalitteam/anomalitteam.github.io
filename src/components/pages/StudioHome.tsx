import { StudioHero } from "@/components/sections/StudioHero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

/** La home del escaparate. Idéntica en los dos idiomas: el texto sale de `useT`. */
export function StudioHome() {
  return (
    <>
      <StudioHero />
      <ProjectGrid />
    </>
  );
}
