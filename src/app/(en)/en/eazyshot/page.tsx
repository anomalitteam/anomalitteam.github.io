import type { Metadata } from "next";
import { EazyShotLanding } from "@/components/pages/EazyShotLanding";
import { translations } from "@/lib/i18n/translations";
import { localeAlternates, localePath } from "@/lib/i18n/routes";
import { PRODUCTS } from "@/lib/products";

const meta = translations.en.meta;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "screenshot",
    "macOS",
    "screen capture",
    "EazyShot",
    "annotations",
    "editor",
    "annotation",
  ],
  alternates: localeAlternates("en", PRODUCTS.eazyshot.slug),
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "en_US",
    url: localePath("en", PRODUCTS.eazyshot.slug),
  },
};

export default function EazyShotPage() {
  return <EazyShotLanding />;
}
