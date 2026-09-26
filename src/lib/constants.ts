type SiteConfig = {
  /** Nombre del estudio, no de ningún producto. */
  name: string;
  url: string;
  /** Días de prueba de EazyShot antes de la compra dentro de la app. */
  trialDays: number;
  /**
   * Año del aviso de copyright del pie.
   *
   * Es un literal y no `new Date().getFullYear()` a propósito: el `Footer` es un
   * componente cliente de un sitio exportado, así que el servidor escribía el año
   * de la construcción y el navegador recalculaba el suyo — el HTML publicado se
   * quedaba con un año viejo hasta la siguiente construcción, y al pasar de año
   * había además desajuste al hidratar. Se sube a mano, una línea al año.
   */
  copyrightYear: number;
};

export const SITE: SiteConfig = {
  name: "Anomalit Team",
  url: "https://anomalitteam.github.io",
  trialDays: 3,
  copyrightYear: 2026,
};
