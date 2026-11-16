export type SubCategory = {
  name: string;
  description: string;
  emoji: string;
};

export type ProductFamily = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  emoji: string;
  color: string;
  image: string;
  subcategories: SubCategory[];
};

export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    slug: "gros-oeuvre",
    name: "Gros Œuvre",
    shortName: "Gros Œuvre",
    description:
      "Tous les matériaux pour les fondations, élévations et structures porteuses : blocs, briques, agrégats, ciment et armatures.",
    emoji: "🏗️",
    color: "#6B7280",
    image: "/images/go-armatures.jpg",
    subcategories: [
      { name: "Blocs & Parpaings", description: "Blocs béton creux, blocs pleins, hourdis, éléments de chaînage.", emoji: "🧱" },
      { name: "Briques", description: "Briques monomur, briques creuses, briques de parement.", emoji: "🟥" },
      { name: "Agrégats", description: "Gravillons, sable de chantier, ballast, concassés et tout-venant.", emoji: "⚙️" },
      { name: "Planchers", description: "Poutrelles béton, hourdis, dalle de compression.", emoji: "📐" },
      { name: "Ciment", description: "Ciment CEM I, CEM II, chaux hydraulique et liants hydrauliques.", emoji: "🪣" },
      { name: "Mortiers, colles, enduits & produits techniques", description: "Mortiers-colles, ragréages, mortiers de maçonnerie, enduits de finition.", emoji: "🪣" },
      { name: "Aménagement extérieur", description: "Bordures, pavés, dalles de terrasse, murets, clôtures.", emoji: "🌿" },
      { name: "Voirie, réseaux & assainissement", description: "Regards, buses, caniveaux, tuyaux PVC, géotextile.", emoji: "🔩" },
    ],
  },
  {
    slug: "bois",
    name: "Bois",
    shortName: "Bois",
    description:
      "Charpente, ossature, menuiserie extérieure et bois de construction pour tous types de travaux.",
    emoji: "🪵",
    color: "#8B6F47",
    image: "/images/bois-planches.jpg",
    subcategories: [
      { name: "Charpente & structure", description: "Bois de charpente KVH, fermettes industrielles, madriers et chevrons.", emoji: "🏠" },
      { name: "Panneaux & contreplaqués", description: "OSB, contreplaqué CTB-X, aggloméré, MDF.", emoji: "📋" },
      { name: "Lambris & bardage", description: "Bardage bois traité, lambris sapin/pin, frises.", emoji: "🌲" },
      { name: "Terrasse bois", description: "Lames de terrasse pin traité, exotique ou composite.", emoji: "🪑" },
      { name: "Bois de coffrage", description: "Panneaux de coffrage, tasseaux, étais.", emoji: "🔨" },
    ],
  },
  {
    slug: "platre-isolation",
    name: "Plâtre & Isolation",
    shortName: "Plâtre / Isolation",
    description:
      "Plaques de plâtre, ossature métallique, laines minérales et systèmes d'isolation thermique et acoustique.",
    emoji: "🏠",
    color: "#64748B",
    image: "/images/placo-stock.jpg",
    subcategories: [
      { name: "Plaques BA13 Standard", description: "Plaques de plâtre standard pour cloisons et plafonds.", emoji: "🟦" },
      { name: "Plaques BA13 Hydro", description: "Plaques hydrofuges pour pièces humides (salle de bain, cuisine).", emoji: "💧" },
      { name: "Plaques BA13 Coupe-feu", description: "Plaques résistantes au feu pour protection incendie.", emoji: "🔥" },
      { name: "Plaques BA13 Acoustique", description: "Plaques haute densité pour l'isolation phonique.", emoji: "🎵" },
      { name: "Ossature métallique", description: "Rails, montants, fourrures, suspentes et accessoires de pose.", emoji: "⚡" },
      { name: "Laine de verre", description: "Rouleaux et panneaux de laine de verre toutes épaisseurs.", emoji: "🌡️" },
      { name: "Actis Hybris", description: "Isolation mince multi-couches réflectrice Actis Hybris.", emoji: "✨" },
      { name: "Isolation sol", description: "Polystyrène expansé, polyuréthane, complexes d'isolation.", emoji: "🏠" },
      { name: "Enduits de plâtre", description: "Enduits de lissage, plâtres de finition, Prégydro.", emoji: "🪣" },
    ],
  },
  {
    slug: "revetement-ite",
    name: "Revêtement & ITE",
    shortName: "Revêtement / ITE",
    description:
      "Systèmes d'isolation par l'extérieur, peintures façade, ravalement et enduits décoratifs.",
    emoji: "🎨",
    color: "#D35400",
    image: "/images/hero-isolation.jpg",
    subcategories: [
      { name: "Ravalement", description: "Enduits de ravalement monocouche, bi-couche, fibré.", emoji: "🏢" },
      { name: "Système ITE", description: "Polystyrène graphite, laine de roche façade, treillis, profilés.", emoji: "🏗️" },
      { name: "Peinture extérieure", description: "Peintures façade acrylique, microporeuses, saturantes.", emoji: "🎨" },
    ],
  },
  {
    slug: "colles-produits",
    name: "Colles & Produits Techniques",
    shortName: "Colles & Produits",
    description:
      "Colles à carrelage, ragréages, produits d'imperméabilisation et gamme Sika pour tous les chantiers.",
    emoji: "🧪",
    color: "#0F6B3C",
    image: "/images/produit-prb-mortier.jpg",
    subcategories: [
      { name: "Colle à carrelage", description: "Flexibel C2, déformable S1 et S2 pour tous supports.", emoji: "🔷" },
      { name: "Ragréage", description: "Ragréage autonivelant, fibré, pour sols intérieurs.", emoji: "🪣" },
      { name: "Imperfond", description: "Primaire d'accrochage et de consolidation Imperfond.", emoji: "🔬" },
      { name: "Mortier Imper", description: "Mortier d'imperméabilisation pour caves, cuvelages, piscines.", emoji: "💧" },
      { name: "Produits Sika", description: "Sikaflex, SikaFill, Sika Primer, Sika MonoTop et gamme Sika.", emoji: "✅" },
    ],
  },
  {
    slug: "outillage-visserie",
    name: "Outillage & Visserie",
    shortName: "Outillage",
    description:
      "Équipements de protection individuelle, outillage de chantier, visserie et fixations pour professionnels.",
    emoji: "🔧",
    color: "#1E40AF",
    image: "/images/produit-visserie.jpg",
    subcategories: [
      { name: "Outillage & EPI", description: "Casques, gants, lunettes, combinaisons, outils de maçonnerie.", emoji: "🦺" },
      { name: "Visserie & fixation", description: "Vis, chevilles, tiges filetées, platines, boulonnerie.", emoji: "🔩" },
    ],
  },
];

export function getFamilyBySlug(slug: string): ProductFamily | undefined {
  return PRODUCT_FAMILIES.find((f) => f.slug === slug);
}
