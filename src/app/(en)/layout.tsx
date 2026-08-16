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

// El gemelo inglés de `(es)/layout.tsx`. Ver la nota de allí sobre por qué hay
// dos root layouts en vez de uno.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: translations.en.studio.meta.title,
  description: translations.en.studio.meta.description,
  alternates: localeAlternates("en"),
  openGraph: {
    title: translations.en.studio.meta.title,
    description: translations.en.studio.meta.description,
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
          <LanguageProvider language="en">{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
