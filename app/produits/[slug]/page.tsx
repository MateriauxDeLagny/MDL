import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCT_FAMILIES, getFamilyBySlug } from "@/lib/produits";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRODUCT_FAMILIES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const family = getFamilyBySlug(slug);
  if (!family) return {};
  return {
    title: family.name,
    description: `${family.name} — ${family.description} Disponible au dépôt Matériaux de Lagny, Lagny-sur-Marne (77).`,
  };
}

export default async function FamilyPage({ params }: Props) {
  const { slug } = await params;
  const family = getFamilyBySlug(slug);
  if (!family) notFound();

  const currentIndex = PRODUCT_FAMILIES.findIndex((f) => f.slug === slug);
  const prev = currentIndex > 0 ? PRODUCT_FAMILIES[currentIndex - 1] : null;
  const next = currentIndex < PRODUCT_FAMILIES.length - 1 ? PRODUCT_FAMILIES[currentIndex + 1] : null;

  return (
    <>
      {/* Hero de famille */}
      <section className="bg-dark text-white py-12 lg:py-16">
        <div className="container mx-auto">
          <nav className="text-xs text-gray-500 mb-4 font-heading uppercase tracking-wider flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/produits" className="hover:text-orange transition-colors">Produits</Link>
            <span>/</span>
            <span className="text-gray-400">{family.name}</span>
          </nav>
          <div className="flex items-start gap-5">
            <div
              className="w-14 h-14 rounded flex items-center justify-center text-3xl flex-shrink-0 mt-1"
              style={{ backgroundColor: family.color + "30" }}
            >
              {family.emoji}
            </div>
            <div>
              <h1 className="heading-xl text-white">{family.name}</h1>
              <p className="text-gray-300 mt-3 max-w-2xl text-sm leading-relaxed">
                {family.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bande couleur famille */}
      <div className="h-1.5 w-full" style={{ backgroundColor: family.color }} />

      {/* Sous-catégories */}
      <section className="section-padding bg-warm-white">
        <div className="container mx-auto">
          <h2 className="heading-md text-dark mb-8">Nos références en {family.shortName}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {family.subcategories.map((sub) => (
              <div
                key={sub.name}
                className="bg-white border border-warm-border rounded p-5 hover:border-orange hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-3">{sub.emoji}</div>
                <h3 className="font-heading text-dark text-base font-medium uppercase mb-2">
                  {sub.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{sub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc devis */}
      <section className="py-12 bg-white border-t border-warm-border">
        <div className="container mx-auto">
          <div className="bg-dark rounded p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-white text-xl uppercase font-semibold mb-2">
                Besoin d'un chiffrage pour vos {family.shortName.toLowerCase()} ?
              </h3>
              <p className="text-gray-400 text-sm">
                Envoyez-nous votre demande et recevez un devis personnalisé rapidement.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/devis"
                className="px-5 py-3 bg-orange text-white font-heading text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors rounded"
              >
                Demander un devis
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 border border-gray-600 text-gray-300 font-heading text-sm uppercase tracking-wider hover:border-white hover:text-white transition-colors rounded"
              >
                Nous appeler
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation inter-familles */}
      <section className="py-8 bg-warm-white border-t border-warm-border">
        <div className="container mx-auto flex justify-between gap-4">
          {prev ? (
            <Link
              href={`/produits/${prev.slug}`}
              className="group flex items-center gap-3 text-sm hover:text-orange transition-colors"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <div className="text-xs text-gray-400 font-heading uppercase tracking-wider mb-0.5">Précédent</div>
                <div className="font-heading text-dark group-hover:text-orange uppercase font-medium">{prev.shortName}</div>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`/produits/${next.slug}`}
              className="group flex items-center gap-3 text-sm hover:text-orange transition-colors text-right"
            >
              <div>
                <div className="text-xs text-gray-400 font-heading uppercase tracking-wider mb-0.5">Suivant</div>
                <div className="font-heading text-dark group-hover:text-orange uppercase font-medium">{next.shortName}</div>
              </div>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : <div />}
        </div>
      </section>
    </>
  );
}
