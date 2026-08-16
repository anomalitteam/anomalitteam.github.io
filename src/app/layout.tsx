import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// El layout raíz solo monta los providers: la barra de navegación y el pie los
// pone cada sección del sitio, porque sus enlaces no son los mismos en el
// escaparate que en la landing de un producto.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: translations.es.studio.meta.title,
  description: translations.es.studio.meta.description,
  openGraph: {
    title: translations.es.studio.meta.title,
    description: translations.es.studio.meta.description,
    type: "website",
  },
};

export default function RootLayout({
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
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
