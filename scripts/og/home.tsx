import { ImageResponse } from "next/og";
import { translations } from "@/lib/i18n/translations";

export const alt = translations.es.studio.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Obligatorio con `output: "export"`: sin esto el build no sabe que la imagen
// se resuelve una sola vez, en tiempo de compilación, y falla al recolectarla.
export const dynamic = "force-static";

// Se genera en el build (el sitio es un export estático), así que estos colores
// van literales: aquí no hay CSS ni variables de tema que resolver.
const EZ = "#ff375f";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 100px",
          background: "linear-gradient(160deg, #000000 55%, #0b1f3a 100%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: -0.5 }}>
          <span style={{ color: EZ }}>A</span>
          <span>nomalit&nbsp;</span>
          <span style={{ color: EZ }}>T</span>
          <span>eam</span>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          {translations.es.studio.hero.tagline}
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 30,
            color: "#98989d",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {translations.es.studio.meta.description}
        </div>
      </div>
    ),
    size,
  );
}
