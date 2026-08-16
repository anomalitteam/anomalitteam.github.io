type SiteConfig = {
  /** Nombre del estudio, no de ningún producto. */
  name: string;
  url: string;
  /** Días de prueba de EazyShot antes de la compra dentro de la app. */
  trialDays: number;
};

export const SITE: SiteConfig = {
  name: "Anomaly Team",
  url: "https://anomalyteam.github.io",
  trialDays: 3,
};
