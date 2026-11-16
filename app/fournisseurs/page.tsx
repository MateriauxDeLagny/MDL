import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos fournisseurs",
  description:
    "Matériaux de Lagny distribue des marques professionnelles reconnues : URSA, PRB, SEMIN, WÜRTH, illbruck, ACTIS, Wienerberger, Heidelberg Materials et bien d'autres.",
};

const SUPPLIERS = [
  {
    name: "Cimalux",
    category: "Chaux & liants hydrauliques",
    description: "Chaux hydrauliques, mortiers de maçonnerie et liants spéciaux pour gros œuvre et rénovation.",
    color: "#4A5568",
  },
  {
    name: "Wienerberger",
    category: "Briques & tuiles",
    description: "Briques monomur, briques creuses et de parement. Leader européen des matériaux de construction en terre cuite.",
    color: "#C8202A",
  },
  {
    name: "PRB",
    category: "Mortiers, enduits & ragréages",
    description: "Gamme complète de produits de revêtement du bâtiment : mortiers, enduits de façade, ragréages et colles.",
    color: "#E07B00",
  },
  {
    name: "SLM",
    category: "Matériaux de construction",
    description: "Matériaux de structure et produits béton pour professionnels du gros œuvre.",
    color: "#1B2A6B",
  },
  {
    name: "SEMIN",
    category: "Enduits & lissages",
    description: "Enduits de finition, plâtres de lissage, joints et produits de parement intérieur haut de gamme.",
    color: "#111827",
  },
  {
    name: "FIMUREX",
    category: "Ossature métallique",
    description: "Rails, montants et accessoires d'ossature métallique pour cloisons, plafonds et doublages.",
    color: "#6B7280",
  },
  {
    name: "Heidelberg Materials",
    category: "Ciment & granulats",
    description: "Ciments, bétons et granulats pour le gros œuvre. L'un des premiers groupes mondiaux de matériaux de construction.",
    color: "#DC2626",
  },
  {
    name: "URSA",
    category: "Isolation laine minérale",
    description: "Laines de verre et de roche haute performance pour l'isolation thermique et acoustique de toiture, façade et cloisons.",
    color: "#1B4B9A",
  },
  {
    name: "TALIA",
    category: "Matériaux de construction",
    description: "Solutions de construction et produits techniques pour les professionnels du bâtiment.",
    color: "#C8202A",
  },
  {
    name: "BOLAVA",
    category: "Matériaux & négoce",
    description: "Produits de construction sélectionnés pour leur qualité et leur rapport performance/prix.",
    color: "#2563EB",
  },
  {
    name: "STARMAT",
    category: "Solutions bâtiment",
    description: "Matériaux et produits techniques pour la construction neuve et la rénovation.",
    color: "#D97706",
  },
  {
    name: "ACTIS",
    category: "Isolation mince réflectrice",
    description: "Isolants minces multi-couches innovants, dont le célèbre Hybris, solution ultra-performante pour toitures et façades.",
    color: "#0070B8",
  },
  {
    name: "I.N.G FIXATIONS",
    category: "Chevilles & fixations",
    description: "Chevilles, tiges filetées, platines et systèmes de fixation professionnels pour tous supports.",
    color: "#374151",
  },
  {
    name: "DALEP",
    category: "Peintures & revêtements",
    description: "Peintures de sol, revêtements techniques et systèmes de protection pour l'industrie et le bâtiment.",
    color: "#059669",
  },
  {
    name: "illbruck",
    category: "Mousses & mastics techniques",
    description: "Mousses polyuréthane, mastics et rubans d'étanchéité pour la pose de menuiseries et l'isolation des joints.",
    color: "#7C3AED",
  },
  {
    name: "FIST",
    category: "Fixations & ancrages",
    description: "Systèmes d'ancrage, vis et fixations spécialisées pour la construction et la rénovation.",
    color: "#DC2626",
  },
  {
    name: "WÜRTH",
    category: "Visserie & outillage",
    description: "Référence mondiale de la visserie, fixation et outillage professionnel. Gamme complète pour les artisans du bâtiment.",
    color: "#C8202A",
  },
];

export default function FournisseursPage() {
  return (
    <>
      <section className="bg-dark text-white py-12">
        <div className="container mx-auto">
          <nav className="text-xs text-gray-500 mb-4 font-heading uppercase tracking-wider flex items-center gap-2">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-gray-400">Fournisseurs</span>
          </nav>
          <h1 className="heading-xl text-white">Nos fournisseurs</h1>
          <p className="text-gray-300 mt-3 max-w-xl text-sm leading-relaxed">
            Nous distribuons des marques reconnues par les professionnels du bâtiment, choisies pour leur qualité et leur fiabilité sur le terrain.
          </p>
        </div>
      </section>

      {/* Photo partenaires */}
      <section className="bg-white pt-10 pb-0">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg border border-warm-border p-6 lg:p-10 flex items-center justify-center">
            <Image
              src="/images/fournisseurs-logos.png"
              alt="Nos partenaires — Matériaux de Lagny"
              width={900}
              height={450}
              className="w-full max-w-2xl h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUPPLIERS.map((s) => (
              <div
                key={s.name}
                className="bg-white border border-warm-border rounded overflow-hidden hover:shadow-sm hover:border-orange/50 transition-all"
              >
                <div className="h-1.5" style={{ backgroundColor: s.color }} />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: s.color }}
                    >
                      {s.name[0]}
                    </div>
                    <div>
                      <h3 className="font-heading text-dark text-base font-semibold uppercase">{s.name}</h3>
                      <p className="text-xs text-gray-400">{s.category}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-dark rounded p-8 text-center">
            <p className="font-heading text-orange text-xs uppercase tracking-[0.2em] mb-3">Produit non listé ?</p>
            <h2 className="font-heading text-white text-2xl uppercase font-semibold mb-3">
              Nous pouvons commander pour vous
            </h2>
            <p className="text-gray-300 text-sm max-w-lg mx-auto mb-6">
              Notre gamme évolue régulièrement. Si vous recherchez un produit ou une marque spécifique, contactez-nous : nous étudions toute demande de commande spéciale.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white font-heading text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors rounded"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
