// Catalogue : familles de produits et catégories.
// `image` : photo réelle du dépôt ou des produits en stock. Sans image, la carte
// affiche un visuel graphique aux couleurs de la famille (photo à fournir).
// `brands` : slugs de lib/fournisseurs.ts disponibles pour cette catégorie.
// `keywords` : termes de recherche supplémentaires (synonymes, références).

import { ILLUSTRATIONS, type PhotoCredit } from "@/lib/illustrations";

export type SubCategory = {
  slug: string;
  name: string;
  description: string;
  image?: string;
  imageAlt?: string;
  /** Photo produit détourée (fond blanc) : affichée en entier, sans recadrage. */
  packshot?: boolean;
  brands?: string[];
  keywords?: string[];
  /** Renseigné automatiquement : crédit de la photo d'illustration (banque d'images libre). */
  illustration?: PhotoCredit;
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
      {
        slug: "blocs-parpaings",
        name: "Blocs & Parpaings",
        description: "Blocs béton creux, blocs pleins, hourdis, éléments de chaînage.",
        image: "/images/go-parpaing-stock.jpg",
        imageAlt: "Palettes de parpaings en stock au dépôt",
        keywords: ["parpaing", "agglo", "bloc béton", "hourdis", "chaînage"],
      },
      {
        slug: "briques",
        name: "Briques",
        description: "Briques monomur, briques creuses, briques de parement.",
        brands: ["wienerberger"],
        keywords: ["brique", "monomur", "porotherm", "terre cuite", "parement"],
      },
      {
        slug: "fers-armatures",
        name: "Fers & Armatures",
        description: "Armatures de chaînage et de semelle, treillis soudés, fers à béton pour le ferraillage.",
        image: "/images/go-ferraille.jpg",
        imageAlt: "Armatures et fers à béton au dépôt",
        brands: ["fimurex"],
        keywords: ["ferraille", "ferraillage", "treillis", "armature", "fer à béton", "chaînage", "semelle"],
      },
      {
        slug: "agregats",
        name: "Agrégats",
        description: "Gravillons, sable de chantier, ballast, concassés et tout-venant, en big bag.",
        image: "/images/livraison-sunset.jpg",
        imageAlt: "Big bags d'agrégats et palettes de parpaings au dépôt",
        brands: ["heidelberg-materials"],
        keywords: ["sable", "gravier", "gravillon", "big bag", "ballast", "tout-venant", "granulat"],
      },
      {
        slug: "planchers",
        name: "Planchers",
        description: "Poutrelles béton, hourdis, prédalles et dalle de compression.",
        image: "/images/placo-fibrangyps.jpg",
        imageAlt: "Camion chargé de poutrelles béton",
        brands: ["slm"],
        keywords: ["poutrelle", "prédalle", "hourdis", "dalle", "plancher"],
      },
      {
        slug: "ciment",
        name: "Ciment",
        description: "Ciment CEM I, CEM II, chaux hydraulique et liants hydrauliques.",
        image: "/images/go-ciment.jpg",
        imageAlt: "Sacs de ciment et de mortier en stock",
        brands: ["heidelberg-materials", "cimalux"],
        keywords: ["ciment", "chaux", "liant", "cem", "sac"],
      },
      {
        slug: "mortiers-enduits",
        name: "Mortiers, colles, enduits & produits techniques",
        description: "Mortiers-colles, ragréages, mortiers de maçonnerie, enduits de finition.",
        image: "/images/produit-prb-mortier.jpg", packshot: true,
        imageAlt: "Sac de mortier PRB prise rapide",
        brands: ["prb", "semin"],
        keywords: ["mortier", "prise rapide", "scellement", "maçonnerie"],
      },
      {
        slug: "amenagement-exterieur",
        name: "Aménagement extérieur",
        description: "Bordures, pavés, dalles de terrasse, murets, clôtures.",
        keywords: ["pavé", "bordure", "dalle", "terrasse", "muret", "clôture", "jardin"],
      },
      {
        slug: "voirie-assainissement",
        name: "Voirie, réseaux & assainissement",
        description: "Regards, buses, caniveaux, tuyaux PVC, géotextile.",
        keywords: ["regard", "buse", "caniveau", "pvc", "tuyau", "géotextile", "assainissement", "évacuation"],
      },
    ],
  },
  {
    slug: "bois",
    name: "Bois",
    shortName: "Bois",
    description: "Charpente, ossature, menuiserie extérieure et bois de construction pour tous types de travaux.",
    emoji: "🪵",
    color: "#8B6F47",
    image: "/images/bois-planches.jpg",
    subcategories: [
      {
        slug: "charpente-structure",
        name: "Charpente & structure",
        description: "Bois de charpente KVH, fermettes industrielles, madriers et chevrons.",
        image: "/images/bois-madriers.jpg",
        imageAlt: "Madriers et bois de charpente au dépôt",
        keywords: ["charpente", "madrier", "chevron", "kvh", "fermette", "poutre", "solive"],
      },
      {
        slug: "panneaux-contreplaques",
        name: "Panneaux & contreplaqués",
        description: "OSB, contreplaqué CTB-X, aggloméré, MDF.",
        keywords: ["osb", "contreplaqué", "ctbx", "aggloméré", "mdf", "panneau"],
      },
      {
        slug: "lambris-bardage",
        name: "Lambris & bardage",
        description: "Bardage bois traité, lambris sapin/pin, frises.",
        keywords: ["bardage", "lambris", "frise", "clin"],
      },
      {
        slug: "terrasse-bois",
        name: "Terrasse bois",
        description: "Lames de terrasse pin traité, exotique ou composite.",
        keywords: ["terrasse", "lame", "composite", "lambourde", "pin traité"],
      },
      {
        slug: "bois-coffrage",
        name: "Bois de coffrage",
        description: "Planches et panneaux de coffrage, tasseaux, étais.",
        image: "/images/bois-planches.jpg",
        imageAlt: "Planches de bois en stock",
        keywords: ["coffrage", "planche", "tasseau", "étai", "voligeage"],
      },
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
      {
        slug: "ba13-standard",
        name: "Plaques BA13 Standard",
        description: "Plaques de plâtre standard pour cloisons et plafonds.",
        image: "/images/placo-stock.jpg",
        imageAlt: "Piles de plaques de plâtre BA13 au dépôt",
        brands: ["isolava"],
        keywords: ["ba13", "placo", "plaque de plâtre", "cloison", "plafond"],
      },
      {
        slug: "ba13-hydro",
        name: "Plaques BA13 Hydro",
        description: "Plaques hydrofuges pour pièces humides (salle de bain, cuisine).",
        image: "/images/go-predellas.jpg",
        imageAlt: "Plaques de plâtre hydrofuges vertes en stock",
        brands: ["isolava"],
        keywords: ["hydro", "hydrofuge", "salle de bain", "plaque verte", "ba13 h"],
      },
      {
        slug: "ba13-coupe-feu",
        name: "Plaques BA13 Coupe-feu",
        description: "Plaques résistantes au feu pour protection incendie.",
        brands: ["isolava"],
        keywords: ["coupe-feu", "feu", "incendie", "ba13 f"],
      },
      {
        slug: "ba13-acoustique",
        name: "Plaques BA13 Acoustique",
        description: "Plaques haute densité pour l'isolation phonique.",
        brands: ["isolava"],
        keywords: ["acoustique", "phonique", "bruit", "haute densité"],
      },
      {
        slug: "ossature-metallique",
        name: "Ossature métallique",
        description: "Rails, montants, fourrures, suspentes et accessoires de pose.",
        keywords: ["rail", "montant", "fourrure", "suspente", "ossature", "m48", "f530"],
      },
      {
        slug: "laine-de-verre",
        name: "Laine de verre",
        description: "Rouleaux et panneaux de laine de verre toutes épaisseurs.",
        image: "/images/isolation-ursa.jpg", packshot: true,
        imageAlt: "Rouleau de laine de verre URSA",
        brands: ["ursa"],
        keywords: ["laine", "laine de verre", "laine minérale", "rouleau", "combles", "isolant"],
      },
      {
        slug: "actis-hybris",
        name: "Actis Hybris",
        description: "Isolation mince multicouche réflectrice Actis Hybris.",
        brands: ["actis"],
        keywords: ["hybris", "isolant mince", "réflecteur", "multicouche"],
      },
      {
        slug: "isolation-sol",
        name: "Isolation sol",
        description: "Polystyrène expansé, polyuréthane, complexes d'isolation.",
        image: "/images/produit-semin.jpg",
        imageAlt: "Panneaux d'isolant polystyrène en stock",
        keywords: ["polystyrène", "pse", "polyuréthane", "pu", "isolation sol", "dalle"],
      },
      {
        slug: "enduits-platre",
        name: "Enduits de plâtre",
        description: "Enduits de lissage, enduits joints, plâtres de finition.",
        image: "/images/produit-enduit-joint.jpg", packshot: true,
        imageAlt: "Seaux d'enduit Semin",
        brands: ["semin"],
        keywords: ["enduit", "joint", "lissage", "plâtre", "bande"],
      },
    ],
  },
  {
    slug: "revetement-ite",
    name: "Revêtement & ITE",
    shortName: "Revêtement / ITE",
    description: "Systèmes d'isolation par l'extérieur, peintures façade, ravalement et enduits décoratifs.",
    emoji: "🎨",
    color: "#D35400",
    image: "/images/hero-isolation.jpg",
    subcategories: [
      {
        slug: "ravalement",
        name: "Ravalement",
        description: "Enduits de ravalement monocouche, bicouche, fibré.",
        image: "/images/produit-prb-tradiclair.jpg", packshot: true,
        imageAlt: "Sac d'enduit de façade PRB Tradiclair",
        brands: ["prb", "dalep"],
        keywords: ["façade", "enduit", "monocouche", "ravalement", "crépi"],
      },
      {
        slug: "systeme-ite",
        name: "Système ITE",
        description: "Polystyrène graphite, laine de roche façade, treillis, profilés.",
        brands: ["prb"],
        keywords: ["ite", "isolation extérieure", "polystyrène graphite", "façade", "profilé"],
      },
      {
        slug: "peinture-exterieure",
        name: "Peinture extérieure",
        description: "Peintures façade acrylique, microporeuses, saturantes.",
        keywords: ["peinture", "façade", "acrylique", "saturateur", "lasure"],
      },
    ],
  },
  {
    slug: "colles-produits",
    name: "Colles & Produits Techniques",
    shortName: "Colles & Produits",
    description:
      "Colles à carrelage, ragréages, mastics, produits d'imperméabilisation et gamme Sika pour tous les chantiers.",
    emoji: "🧪",
    color: "#0F6B3C",
    image: "/images/produit-illbruck.jpg",
    subcategories: [
      {
        slug: "colle-carrelage",
        name: "Colle à carrelage",
        description: "Flexibel C2, déformable S1 et S2 pour tous supports.",
        image: "/images/produit-prb-colsouple.png", packshot: true,
        imageAlt: "Sac de colle à carrelage PRB Col Souple",
        brands: ["prb"],
        keywords: ["colle", "carrelage", "c2", "s1", "faïence"],
      },
      {
        slug: "ragreage",
        name: "Ragréage",
        description: "Ragréage autonivelant, fibré, pour sols intérieurs.",
        image: "/images/produit-prb-planifibre.jpg", packshot: true,
        imageAlt: "Sac de ragréage fibré PRB Planifibre",
        brands: ["prb"],
        keywords: ["ragréage", "autonivelant", "sol", "chape"],
      },
      {
        slug: "mastics-mousses",
        name: "Mastics & mousses",
        description: "Mousses polyuréthane, mastics et colles d'étanchéité pour menuiseries et façades.",
        image: "/images/produit-illbruck.jpg", packshot: true,
        imageAlt: "Cartouches de mastic illbruck",
        brands: ["illbruck"],
        keywords: ["mastic", "mousse", "silicone", "étanchéité", "joint", "pu"],
      },
      {
        slug: "imperfond",
        name: "Imperfond",
        description: "Primaire d'accrochage et de consolidation Imperfond.",
        keywords: ["primaire", "accrochage", "imperfond"],
      },
      {
        slug: "mortier-imper",
        name: "Mortier Imper",
        description: "Mortier d'imperméabilisation pour caves, cuvelages, piscines.",
        keywords: ["imperméabilisation", "cave", "cuvelage", "piscine", "étanchéité"],
      },
      {
        slug: "produits-sika",
        name: "Produits Sika",
        description: "Sikaflex, SikaFill, Sika Primer, Sika MonoTop et gamme Sika.",
        keywords: ["sika", "sikaflex", "sikafill", "monotop"],
      },
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
      {
        slug: "outillage-epi",
        name: "Outillage & EPI",
        description: "Casques, gants, lunettes, combinaisons, outils de maçonnerie et de plaquiste.",
        brands: ["talia", "wurth"],
        keywords: ["outil", "truelle", "taloche", "gants", "casque", "epi", "lunettes"],
      },
      {
        slug: "visserie-fixation",
        name: "Visserie & fixation",
        description: "Vis, chevilles, tiges filetées, platines, boulonnerie.",
        image: "/images/produit-visserie.jpg", packshot: true,
        imageAlt: "Boîte de vis Würth",
        brands: ["wurth", "ing-fixations", "fist"],
        keywords: ["vis", "cheville", "tige filetée", "boulon", "fixation", "scellement"],
      },
    ],
  },
];

export function getFamilyBySlug(slug: string): ProductFamily | undefined {
  return PRODUCT_FAMILIES.find((f) => f.slug === slug);
}

export type CatalogItem = SubCategory & { family: ProductFamily };

/** Toutes les catégories à plat, chacune avec sa famille.
 *  Sans photo réelle, on utilise la photo d'illustration créditée si elle existe. */
export const CATALOG: CatalogItem[] = PRODUCT_FAMILIES.flatMap((family) =>
  family.subcategories.map((s) => {
    const ill = s.image ? undefined : ILLUSTRATIONS[s.slug];
    return ill
      ? { ...s, family, image: `/images/illustrations/${s.slug}.jpg`, imageAlt: ill.alt, illustration: ill }
      : { ...s, family };
  })
);

export const getCatalogItem = (slug: string) => CATALOG.find((i) => i.slug === slug);
