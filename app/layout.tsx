import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

// Polices auto-hébergées (variables, sous-ensemble latin, licence OFL) : le build
// ne dépend plus de Google Fonts, dont les réponses ont fait échouer un build Vercel.
const oswald = localFont({
  src: "./fonts/Oswald-Variable-latin.woff2",
  variable: "--font-oswald",
  weight: "200 700",
  display: "swap",
  fallback: ["Arial Narrow", "sans-serif"],
});

const inter = localFont({
  src: "./fonts/Inter-Variable-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Matériaux de Lagny — Négoce de matériaux à Lagny-sur-Marne",
    template: "%s | Matériaux de Lagny",
  },
  description:
    "Matériaux de Lagny, votre négoce de matériaux de construction à Lagny-sur-Marne (77). Gros œuvre, isolation, bois, revêtements. Ouvert aux professionnels et particuliers.",
  keywords: ["matériaux construction", "négoce", "Lagny-sur-Marne", "77", "gros œuvre", "isolation", "bois", "enduit"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    title: "Matériaux de Lagny — Négoce de matériaux à Lagny-sur-Marne",
    description: "Votre négoce de matériaux de construction à Lagny-sur-Marne.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen font-body bg-white text-dark">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
