import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { translations } from "@/lib/i18n/translations";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EazyShot | Professional Screenshots — Capturas profesionales",
  description: translations.es.meta.description,
  keywords: [
    "screenshot",
    "macOS",
    "captura de pantalla",
    "EazyShot",
    "anotaciones",
    "editor",
    "annotation",
  ],
  openGraph: {
    title: "EazyShot | Professional Screenshots — Capturas profesionales",
    description: translations.es.meta.description,
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
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
