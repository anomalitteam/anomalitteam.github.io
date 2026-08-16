import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";
import { localeAlternates } from "@/lib/i18n/routes";
import { SITE } from "@/lib/constants";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Hay dos root layouts, uno por idioma, y por eso no existe `app/layout.tsx`:
// es la única forma de que el `<html lang>` diga la verdad en cada rama. La
// navegación entre idiomas recarga la página entera, que es justo lo que se
// quiere al cambiar de idioma.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: translations.es.studio.meta.title,
  description: translations.es.studio.meta.description,
  alternates: localeAlternates("es"),
  openGraph: {
    title: translations.es.studio.meta.title,
    description: translations.es.studio.meta.description,
    type: "website",
    locale: "es_ES",
  },
};

export default function SpanishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider language="es">{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
