import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { translations } from "@/lib/i18n/translations";

export const alt = translations.es.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Ver la nota en `app/opengraph-image.tsx`: lo exige `output: "export"`.
export const dynamic = "force-static";

const EZ = "#ff375f";

// El icono se incrusta como data URI: `next/og` no resuelve rutas del sitio, y
// esto corre en el build, donde el PNG está en disco.
const icon = readFileSync(
  join(process.cwd(), "public/images/eazyshot/app-icon.png"),
).toString("base64");

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
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${icon}`}
            width={104}
            height={104}
            style={{ borderRadius: 24 }}
            alt=""
          />
          <div style={{ display: "flex", fontSize: 46, fontWeight: 700 }}>
            <span style={{ color: EZ }}>E</span>
            <span>a</span>
            <span style={{ color: EZ }}>z</span>
            <span>yShot</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 34,
            fontSize: 74,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.05,
            maxWidth: 950,
          }}
        >
          {translations.es.hero.tagline}
        </div>

        <div style={{ marginTop: 28, fontSize: 30, color: "#98989d" }}>
          {translations.es.hero.priceNote}
        </div>
      </div>
    ),
    size,
  );
}
