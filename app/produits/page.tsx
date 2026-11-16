import type { Metadata } from "next";
import Link from "next/link";
import ProductFamilyCard from "@/components/ProductFamilyCard";
import { PRODUCT_FAMILIES } from "@/lib/produits";

export const metadata: Metadata = {
  title: "Nos produits",
  description:
    "Découvrez l'ensemble de nos familles de produits : gros œuvre, bois, plâtre, isolation, revêtements, colles, outillage. Vente au comptoir à Lagny-sur-Marne.",
};

export default function ProduitsPage() {
  return (
    <>
      {/* Breadcrumb + header */}
      <section className="bg-dark text-white py-12">
        <div className="container mx-auto">
          <nav className="text-xs text-gray-500 mb-4 font-heading uppercase tracking-wider flex items-center gap-2">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-gray-400">Produits</span>
          </nav>
          <h1 className="heading-xl text-white">Nos produits</h1>
          <p className="text-gray-300 mt-3 max-w-xl text-sm leading-relaxed">
            Du gros œuvre aux finitions, Matériaux de Lagny vous propose une gamme complète de matériaux pour tous vos chantiers.
          </p>
        </div>
      </section>

      {/* Grid familles */}
      <section className="section-padding bg-warm-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCT_FAMILIES.map((f) => (
              <ProductFamilyCard key={f.slug} family={f} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Bloc conseil */}
      <section className="py-12 bg-white border-t border-warm-border">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-heading text-orange text-xs uppercase tracking-[0.2em] mb-3">Besoin d'aide ?</p>
            <h2 className="heading-md text-dark mb-3">Nos conseillers sont là pour vous</h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Vous ne savez pas quel produit choisir ? Contactez-nous ou passez au comptoir : notre équipe vous conseille sur les matériaux adaptés à votre projet et votre budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/devis"
                className="px-6 py-3 bg-orange text-white font-heading text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors rounded"
              >
                Demander un devis
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-dark text-dark font-heading text-sm uppercase tracking-wider hover:bg-dark hover:text-white transition-colors rounded"
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
