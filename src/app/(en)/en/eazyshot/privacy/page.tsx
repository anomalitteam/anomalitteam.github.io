import type { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/PrivacyContent";
import { translations } from "@/lib/i18n/translations";
import { localeAlternates } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: `${translations.en.privacy.title} — EazyShot`,
  alternates: localeAlternates("en", "/eazyshot/privacy"),
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
