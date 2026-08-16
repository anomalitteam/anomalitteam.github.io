import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { translations } from "@/lib/i18n/translations";

export const metadata: Metadata = {
  title: translations.es.meta.title,
  description: translations.es.meta.description,
  keywords: [
    "screenshot",
    "macOS",
    "captura de pantalla",
    "EazyShot",
    "anotaciones",
    "editor",
    "annotation",
  ],
  alternates: { canonical: "/eazyshot" },
  openGraph: {
    title: translations.es.meta.title,
    description: translations.es.meta.description,
    type: "website",
    url: "/eazyshot",
  },
};

export default function EazyShotPage() {
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
