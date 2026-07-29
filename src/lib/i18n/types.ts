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
}

export interface ComparisonRow {
  feature: string;
  native: string | boolean;
  eazyshot: string | boolean;
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

export interface Translations {
  meta: Meta;
  nav: NavLinks;
  hero: HeroTranslations;
  features: Section & { items: FeatureItem[] };
  howItWorks: Section & { items: StepItem[] };
  comparison: Section & {
    headers: { functionality: string; macOS: string; eazyShot: string };
    rows: ComparisonRow[];
  };
  pricing: PricingTranslations;
  faq: Section & { items: FaqItem[] };
  footer: FooterTranslations;
}
