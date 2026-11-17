import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CatalogExplorer from "@/components/CatalogExplorer";
import { CATALOG, PRODUCT_FAMILIES } from "@/lib/produits";
import { FOURNISSEURS } from "@/lib/fournisseurs";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Nos produits",
  description:
    "Catalogue Matériaux de Lagny : parpaings, ciment, armatures, bois, plaques BA13, laine de verre, enduits, colles, visserie. Vente au comptoir et livraison à Lagny-sur-Marne.",
};

export default function ProduitsPage() {
  return (
    <>
      <section className="relative bg-dark text-white overflow-hidden">
        <Image src="/images/placo-stock.jpg" alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
        <div className="relative container mx-auto py-14 lg:py-20">
          <nav className="text-xs text-gray-400 mb-4 font-heading uppercase tracking-wider flex items-center gap-2" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-orange-300 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Produits</span>
          </nav>
          <h1 className="heading-xl text-white">Nos produits</h1>
          <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
            Du gros œuvre aux finitions, tout pour vos chantiers de construction et de rénovation. Recherchez un produit ou
            parcourez nos familles, puis demandez un prix en un clic.
          </p>
          <dl className="mt-8 grid grid-cols-3 max-w-md divide-x divide-white/20 border border-white/20 rounded">
            {[
              { v: PRODUCT_FAMILIES.length, l: "familles" },
              { v: CATALOG.length, l: "catégories" },
              { v: FOURNISSEURS.length - 1, l: "marques" },
            ].map((s) => (
              <div key={s.l} className="p-3 text-center">
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-heading text-3xl text-orange-300">{s.v}</dd>
                <dd className="text-xs text-gray-300 uppercase tracking-wider">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CatalogExplorer />

      <section className="py-12 bg-white border-t border-warm-border">
        <div className="container mx-auto">
          <div className="bg-dark rounded p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="font-heading text-white text-2xl uppercase font-semibold">Besoin d&apos;un conseil ?</h2>
              <p className="text-gray-300 text-sm mt-2 max-w-xl">
                Vous hésitez entre deux produits ? Notre équipe vous oriente au comptoir ou par téléphone selon votre projet
                et votre budget.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 flex-shrink-0">
              <Link href="/devis" className="btn-primary">Demander un devis</Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/60 text-white font-heading text-sm uppercase tracking-wider rounded hover:bg-white/10 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
