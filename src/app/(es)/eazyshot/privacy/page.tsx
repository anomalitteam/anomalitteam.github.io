import type { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/PrivacyContent";
import { translations } from "@/lib/i18n/translations";
import { localeAlternates } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: `${translations.es.privacy.title} — EazyShot`,
  alternates: localeAlternates("es", "/eazyshot/privacy"),
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
