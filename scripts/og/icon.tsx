import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";
export const dynamic = "force-static";

/**
 * Favicon del equipo: la inicial sobre el rosa de marca.
 *
 * A 16 px no se lee una palabra, así que la marca se reduce a la letra que ya
 * va destacada en el logotipo del sitio.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff375f",
          color: "#ffffff",
          fontSize: 340,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: -8,
        }}
      >
        A
      </div>
    ),
    size,
  );
}
