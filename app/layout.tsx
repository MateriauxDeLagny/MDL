import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
