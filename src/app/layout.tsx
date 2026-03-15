import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Movers \u2014 English Movement & Confidence Club",
  description:
    "Apprendre l\u2019anglais \u00e0 travers le mouvement, le jeu et la confiance en soi. Pour les enfants de 4 mois \u00e0 6 ans \u2014 Marseille 11/12.",
  openGraph: {
    title: "Little Movers \u2014 English Movement & Confidence Club",
    description:
      "Apprendre l\u2019anglais \u00e0 travers le mouvement, le jeu et la confiance en soi. Pour les enfants de 4 mois \u00e0 6 ans \u2014 Marseille 11/12.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
