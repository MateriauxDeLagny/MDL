import type { Metadata } from "next";
import Link from "next/link";
import FournisseursExplorer from "@/components/FournisseursExplorer";
import { FOURNISSEURS } from "@/lib/fournisseurs";
import { DEVIS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos fournisseurs",
  description:
    "Matériaux de Lagny distribue des marques reconnues : Wienerberger, Heidelberg Materials, PRB, Semin, URSA, Actis, illbruck, Würth, I.N.G Fixations et bien d'autres.",
};

export default function FournisseursPage() {
  return (
    <>
      <section className="bg-dark text-white py-12 lg:py-16">
        <div className="container mx-auto">
          <nav className="text-xs text-gray-400 mb-4 font-heading uppercase tracking-wider flex items-center gap-2" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-orange-300 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Fournisseurs</span>
          </nav>
          <h1 className="heading-xl text-white">Nos fournisseurs</h1>
          <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
            {FOURNISSEURS.length} marques reconnues par les professionnels du bâtiment, choisies pour leur qualité et leur
            fiabilité sur le terrain : du ciment à la visserie, en passant par l&apos;isolation et les finitions.
          </p>
        </div>
      </section>

      <FournisseursExplorer />

      <section className="pb-16 lg:pb-24 bg-warm-white">
        <div className="container mx-auto">
          <div className="bg-dark rounded p-8 lg:p-10 text-center">
            <p className="eyebrow text-orange-300">Produit non listé ?</p>
            <h2 className="font-heading text-white text-2xl lg:text-3xl uppercase font-semibold mb-3">
              Nous pouvons commander pour vous
            </h2>
            <p className="text-gray-300 text-sm max-w-lg mx-auto mb-6">
              Notre gamme évolue régulièrement. Si vous recherchez un produit ou une marque spécifique, contactez-nous : nous
              étudions toute demande de commande spéciale.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={DEVIS_URL} className="btn-primary">Demander un devis</Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/60 text-white font-heading text-sm uppercase tracking-wider rounded hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
