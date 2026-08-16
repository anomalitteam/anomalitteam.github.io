import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";

/** La landing de EazyShot. Idéntica en los dos idiomas. */
export function EazyShotLanding() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <Faq />
    </>
  );
}
