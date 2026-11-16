import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import ProductFamilyCard from "@/components/ProductFamilyCard";
import { PRODUCT_FAMILIES } from "@/lib/produits";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Matériaux de Lagny — Négoce de matériaux à Lagny-sur-Marne",
  description:
    "Négoce de matériaux de construction à Lagny-sur-Marne (77). Gros œuvre, isolation, bois, enduits, revêtements. Professionnels et particuliers, livraison Île-de-France.",
};

const ADVANTAGES = [
  {
    icon: (
      <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Stock disponible",
    description: "Large gamme de matériaux disponibles immédiatement au dépôt de Lagny-sur-Marne.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Conseil expert",
    description: "Une équipe de professionnels pour vous accompagner dans le choix de vos matériaux.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Livraison Île-de-France",
    description: "Livraison sur chantier en Seine-et-Marne et dans tout le bassin Île-de-France.",
  },
];

const SUPPLIERS_PREVIEW = [
  "Cimalux", "Wienerberger", "PRB", "SEMIN", "URSA", "WÜRTH", "illbruck", "ACTIS",
];

export default function HomePage() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: SITE.name,
    description: "Négoce de matériaux de construction à Lagny-sur-Marne",
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 rue Freycinet",
      addressLocality: "Lagny-sur-Marne",
      postalCode: "77400",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [SITE.facebook],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero */}
      <HeroCarousel />

      {/* Bandeau infos rapides */}
      <div className="bg-orange text-white">
        <div className="container mx-auto py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a href={SITE.phoneHref} className="font-medium hover:underline">{SITE.phone}</a>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{SITE.hoursShort}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>17 rue Freycinet, Lagny-sur-Marne</span>
          </div>
        </div>
      </div>

      {/* Avantages */}
      <section className="section-padding bg-warm-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="text-center px-4">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {a.icon}
                </div>
                <h3 className="font-heading text-lg uppercase font-semibold text-dark mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Familles de produits */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-heading text-orange text-xs uppercase tracking-[0.2em] mb-2">Catalogue</p>
            <h2 className="heading-lg text-dark mb-4">Nos familles de produits</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Du gros œuvre aux finitions, nous proposons l'ensemble des matériaux nécessaires à vos chantiers de construction et de rénovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCT_FAMILIES.map((f) => (
              <ProductFamilyCard key={f.slug} family={f} variant="grid" />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-dark text-dark font-heading text-sm uppercase tracking-wider hover:bg-dark hover:text-white transition-colors rounded"
            >
              Voir tout le catalogue
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section présentation */}
      <section className="section-padding bg-dark text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-heading text-orange text-xs uppercase tracking-[0.2em] mb-3">Notre entreprise</p>
              <h2 className="heading-lg text-white mb-5">Un négoce familial au service de vos projets</h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  Implanté à Lagny-sur-Marne depuis plusieurs décennies, Matériaux de Lagny est un négoce indépendant spécialisé dans la fourniture de matériaux de construction pour les professionnels du bâtiment et les particuliers de Seine-et-Marne.
                </p>
                <p>
                  Notre équipe maîtrise l'ensemble du cycle du chantier : de la fondation à la finition, nous vous proposons des produits des plus grandes marques (Sika, Isover, Knauf, Weber, Placoplatre…) ainsi que des conseils techniques adaptés à votre projet.
                </p>
                <p>
                  Vente au comptoir, commandes spéciales et livraison sur chantier en Île-de-France : nous nous adaptons à votre rythme de travail.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-orange text-white font-heading text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors rounded"
              >
                Nous contacter
              </Link>
            </div>
            <div className="relative rounded overflow-hidden min-h-[340px]">
              <Image
                src="/images/livraison-camion.jpg"
                alt="Livraison chantier Matériaux de Lagny"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-dark/50" />
              <div className="absolute bottom-0 inset-x-0 grid grid-cols-2">
                {[
                  { value: "40+", label: "Ans d'expérience" },
                  { value: "6", label: "Familles de produits" },
                  { value: "Pro & Particuliers", label: "Tous profils" },
                  { value: "77 & IDF", label: "Zone de livraison" },
                ].map((s) => (
                  <div key={s.label} className="bg-dark/70 backdrop-blur-sm p-4 border-t border-dark-80/50">
                    <div className="font-heading text-orange text-xl font-bold">{s.value}</div>
                    <div className="text-gray-300 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fournisseurs preview */}
      <section className="py-12 bg-warm-100 border-t border-warm-border">
        <div className="container mx-auto">
          <p className="text-center font-heading text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
            Marques et fournisseurs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {SUPPLIERS_PREVIEW.map((s) => (
              <div
                key={s}
                className="px-6 py-3 bg-white border border-warm-border rounded font-heading text-sm text-gray-600 uppercase tracking-wider"
              >
                {s}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/fournisseurs" className="text-sm text-orange hover:underline font-medium">
              Voir tous nos fournisseurs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA devis */}
      <section className="py-16 bg-orange text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl uppercase font-bold mb-4">
            Besoin d'un chiffrage rapide ?
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Envoyez-nous votre demande de devis en ligne. Nous vous répondons dans les meilleurs délais avec une estimation personnalisée.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange font-heading text-sm uppercase tracking-wider hover:bg-warm-white transition-colors rounded font-semibold"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
