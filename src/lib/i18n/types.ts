import type { ProductId } from "@/lib/products";

export type Language = "es" | "en";

export interface NavLinks {
  features: string;
  howItWorks: string;
  comparison: string;
  pricing: string;
  faq: string;
  download: string;
}

export interface Meta {
  title: string;
  description: string;
}

export interface HeroTranslations {
  tagline: string;
  description: string;
  cta: string;
  priceNote: string;
}

export interface Section {
  label: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  ez: boolean;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  image: string;
}

export interface ComparisonRow {
  feature: string;
  native: string | boolean;
  eazyshot: string | boolean;
  competition: string | boolean;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingTranslations {
  label: string;
  title: string;
  description: string;
  badge: string;
  planName: string;
  price: string;
  cta: string;
  trial: string;
  includesTitle: string;
  features: string[];
}

export interface FooterTranslations {
  features: string;
  pricing: string;
  faq: string;
  support: string;
  privacy: string;
  copyright: string;
  oneTime: string;
}

export interface PrivacySection {
  title: string;
  body: string[];
}

export interface PrivacyTranslations {
  title: string;
  lastUpdated: string;
  sections: PrivacySection[];
  contact: string;
  contactEmail: string;
}

export interface SupportTranslations {
  title: string;
  intro: string;
  emailLabel: string;
  email: string;
  infoTitle: string;
  infoItems: string[];
  responseTime: string;
}

export interface CtaTranslations {
  /** Etiqueta del CTA mientras el producto no tenga `appStoreUrl`. */
  comingSoon: string;
}

/** Textos del escaparate: la home del estudio y las tarjetas de producto. */
export interface StudioTranslations {
  meta: Meta;
  hero: {
    tagline: string;
    description: string;
  };
  projects: Section;
  /** Badge de la tarjeta de un producto aún sin publicar. */
  comingSoon: string;
  /** CTA de la tarjeta. */
  viewProject: string;
  products: Record<ProductId, { tagline: string; description: string }>;
  nav: {
    projects: string;
    support: string;
  };
}

export interface Translations {
  meta: Meta;
  nav: NavLinks;
  cta: CtaTranslations;
  studio: StudioTranslations;
  hero: HeroTranslations;
  features: Section & { items: FeatureItem[] };
  howItWorks: Section & { items: StepItem[] };
  comparison: Section & {
    headers: { functionality: string; macOS: string; eazyShot: string; competition: string };
    rows: ComparisonRow[];
  };
  pricing: PricingTranslations;
  faq: Section & { items: FaqItem[] };
  footer: FooterTranslations;
  privacy: PrivacyTranslations;
  support: SupportTranslations;
}
