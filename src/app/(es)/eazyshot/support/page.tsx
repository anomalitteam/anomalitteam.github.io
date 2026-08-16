import type { Metadata } from "next";
import { SupportContent } from "@/components/pages/SupportContent";
import { translations } from "@/lib/i18n/translations";
import { localeAlternates } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: `${translations.es.support.title} — EazyShot`,
  alternates: localeAlternates("es", "/eazyshot/support"),
};

export default function SupportPage() {
  return <SupportContent />;
}
