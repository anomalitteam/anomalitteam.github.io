import type { ProductId } from "@/lib/products";

export type Language = "es" | "en";

export interface NavLinks {
  features: string;
  howItWorks: string;
  comparison: string;
  pricing: string;
  faq: string;
  download: string;
  /**
   * Etiqueta accesible del conmutador de idioma, **en el idioma de la página**:
   * quien la necesita todavía no ha cambiado. Por eso vive aquí, en cada rama, y
   * no como un condicional dentro del componente.
   */
  switchLanguage: string;
}

export interface Meta {
  title: string;
  description: string;
}

export interface HeroTranslations {
  tagline: string;
  description: string;
  priceNote: string;
  /** Captura de la app en acción. Es la imagen LCP de la landing. */
  image: string;
  imageAlt: string;
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
  /**
   * Descripción de la captura para quien no la ve. No repite `title`: el
   * encabezado ya está al lado en el mismo bloque, así que anunciarlo dos veces
   * no aporta nada y deja la imagen sin describir.
   */
  imageAlt: string;
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
  /**
   * Importe de referencia, siempre con `~` delante: Apple convierte el precio por
   * país y no cobra la misma cifra en todos. Ver `regional`.
   */
  price: string;
  /** Aviso de que el importe final lo fija el App Store según el país. */
  regional: string;
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
    /**
     * Logotipo del estudio. Es arte del autor sobre fondo gris opaco, así que se
     * presenta enmarcado: recortarlo no sale limpio (el fondo tiene degradado y
     * el glitch, bordes de ruido) y su lettering negro se perdería en oscuro.
     */
    logo: string;
    logoAlt: string;
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
    /**
     * Texto equivalente de las celdas de sí/no, que en pantalla son solo un
     * icono. Sin él, un lector anuncia la tabla entera como celdas vacías.
     */
    cells: { yes: string; no: string };
    rows: ComparisonRow[];
  };
  pricing: PricingTranslations;
  faq: Section & { items: FaqItem[] };
  footer: FooterTranslations;
  privacy: PrivacyTranslations;
  support: SupportTranslations;
}
