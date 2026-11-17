// Fournisseurs distribués par Matériaux de Lagny.
// Descriptions rédigées à partir des sites officiels des marques (consultés en novembre 2026).
// `logo` absent => affichage du nom en logotype texte (logo officiel non récupéré).
// `aVerifier` => identité ou gamme non confirmée : à valider avec le dépôt.

export type Fournisseur = {
  slug: string;
  name: string;
  logo?: string;
  /** Logo étroit/carré : affiché un peu plus grand dans les bandeaux. */
  logoTall?: boolean;
  category: string;
  description: string;
  specialites: string[];
  origine?: string;
  site?: string;
  familles: string[];
  aVerifier?: boolean;
};

export const FOURNISSEURS: Fournisseur[] = [
  {
    slug: "wienerberger",
    name: "Wienerberger",
    logo: "/images/fournisseurs/wienerberger.svg",
    category: "Briques & tuiles terre cuite",
    description:
      "Leader mondial de la terre cuite, Wienerberger propose des solutions en brique pour les murs, la toiture et la façade, en construction neuve comme en rénovation.",
    specialites: ["Briques de mur (Porotherm)", "Briques de parement", "Tuiles et accessoires de toiture"],
    origine: "Groupe international",
    site: "https://www.wienerberger.fr",
    familles: ["gros-oeuvre"],
  },
  {
    slug: "heidelberg-materials",
    name: "Heidelberg Materials",
    logo: "/images/fournisseurs/heidelberg-materials.svg",
    category: "Ciment, granulats & béton",
    description:
      "L'un des premiers producteurs mondiaux de matériaux de construction, présent en France dans le ciment, les granulats et le béton.",
    specialites: ["Ciments en sac", "Granulats et sables", "Bétons"],
    origine: "Groupe international",
    site: "https://www.heidelbergmaterials.fr",
    familles: ["gros-oeuvre"],
  },
  {
    slug: "cimalux",
    name: "Cimalux",
    logo: "/images/fournisseurs/cimalux.webp",
    category: "Ciments",
    description:
      "Cimentier luxembourgeois fondé en 1920, filiale du groupe Buzzi, Cimalux produit des ciments et liants pour le gros œuvre.",
    specialites: ["Ciments", "Liants hydrauliques"],
    origine: "Luxembourg · groupe Buzzi",
    site: "https://www.cimalux.lu",
    familles: ["gros-oeuvre"],
  },
  {
    slug: "fimurex",
    name: "Fimurex",
    logo: "/images/fournisseurs/fimurex.webp",
    category: "Armatures pour béton",
    description:
      "Fabricant français d'armatures standard, Fimurex conçoit des solutions techniques pour la maison individuelle, le bâtiment et les aménagements extérieurs.",
    specialites: ["Armatures standard", "Solutions pour la maison individuelle", "Aménagements extérieurs"],
    origine: "Fabricant français",
    site: "https://www.fimurex.com",
    familles: ["gros-oeuvre"],
  },
  {
    slug: "slm",
    name: "SLM",
    category: "Éléments préfabriqués en béton",
    description:
      "Saint Léonard Matériaux, fabricant seine-et-marnais d'éléments préfabriqués en béton installé à Poigny depuis 1958.",
    specialites: ["Éléments en béton préfabriqués", "Planchers"],
    origine: "Poigny (77)",
    familles: ["gros-oeuvre"],
    aVerifier: true,
  },
  {
    slug: "prb",
    name: "PRB",
    logo: "/images/fournisseurs/prb.svg",
    logoTall: true,
    category: "Mortiers, enduits & ITE",
    description:
      "Les Produits de Revêtement du Bâtiment, marque du groupe Holcim : enduits de façade, systèmes d'isolation par l'extérieur, mortiers, colles et ragréages.",
    specialites: ["Enduits de façade", "Isolation thermique par l'extérieur", "Colles à carrelage et ragréages"],
    origine: "Fabricant français · groupe Holcim",
    site: "https://www.prb.fr",
    familles: ["revetement-ite", "colles-produits"],
  },
  {
    slug: "semin",
    name: "Semin",
    logo: "/images/fournisseurs/semin.webp",
    category: "Plâtres, enduits & colles",
    description:
      "Fabricant français de plâtres, d'enduits et de colles destinés aux professionnels du bâtiment, plâtriers et peintres.",
    specialites: ["Enduits de lissage et de finition", "Enduits joints pour plaques de plâtre", "Colles et mortiers"],
    origine: "Fabricant français",
    site: "https://www.semin.com",
    familles: ["platre-isolation", "colles-produits"],
  },
  {
    slug: "isolava",
    name: "Isolava",
    logo: "/images/fournisseurs/isolava.webp",
    category: "Aménagement intérieur",
    description:
      "Fabricant de solutions pour l'aménagement intérieur : plaques de plâtre, carreaux de plâtre, doublages et finitions.",
    specialites: ["Plaques de plâtre", "Carreaux de plâtre", "Doublages"],
    site: "https://isolava.fr",
    familles: ["platre-isolation"],
  },
  {
    slug: "ursa",
    name: "URSA",
    logo: "/images/fournisseurs/ursa.svg",
    logoTall: true,
    category: "Isolation laine minérale",
    description:
      "Spécialiste de l'isolation thermique et acoustique, URSA (groupe Etex) fabrique des laines minérales pour la toiture, les murs et les cloisons.",
    specialites: ["Laine de verre", "Isolation des combles et toitures", "Isolation acoustique des cloisons"],
    origine: "Groupe Etex",
    site: "https://www.ursa.fr",
    familles: ["platre-isolation"],
  },
  {
    slug: "actis",
    name: "Actis",
    logo: "/images/fournisseurs/actis.webp",
    category: "Isolants minces réfléchissants",
    description:
      "Fabricant d'isolants minces multicouches réfléchissants, dont la gamme Hybris, pour isoler mieux avec moins d'épaisseur.",
    specialites: ["Hybris", "Isolants minces réfléchissants", "Solutions toiture (Triso)"],
    origine: "Fabricant français",
    site: "https://www.actis-isolation.com",
    familles: ["platre-isolation"],
  },
  {
    slug: "illbruck",
    name: "illbruck",
    logo: "/images/fournisseurs/illbruck.webp",
    category: "Étanchéité & collage",
    description:
      "Solutions d'étanchéité, de collage et d'isolation pour les fenêtres, les portes et les façades : mousses, mastics et membranes.",
    specialites: ["Mousses polyuréthane", "Mastics et colles", "Membranes et joints de menuiserie"],
    origine: "Groupe Tremco CPG",
    site: "https://www.illbruck.com",
    familles: ["colles-produits"],
  },
  {
    slug: "dalep",
    name: "Dalep",
    logo: "/images/fournisseurs/dalep.webp",
    category: "Traitement & protection du bâtiment",
    description:
      "Fabricant de produits de traitement, de remise en état et de protection du bâtiment, avec une gamme en phase aqueuse et sans solvant.",
    specialites: ["Traitement et remise en état des toitures et façades", "Revêtements de toiture (Protectoit)", "Gamme sans solvant"],
    origine: "Fabricant français",
    site: "https://www.dalep.net",
    familles: ["revetement-ite", "colles-produits"],
  },
  {
    slug: "talia",
    name: "Talia",
    logo: "/images/fournisseurs/talia.svg",
    category: "Outillage maçon & plaquiste",
    description:
      "Taliaplast, fabricant français d'outillage depuis 1968, conçoit des outils pour maçons, façadiers, plaquistes, carreleurs et peintres.",
    specialites: ["Taloches et outils de maçon", "Outillage de plaquiste", "Outils de façadier"],
    origine: "Fabricant français depuis 1968",
    site: "https://www.taliaplast.com",
    familles: ["outillage-visserie"],
  },
  {
    slug: "ing-fixations",
    name: "I.N.G Fixations",
    logo: "/images/fournisseurs/ing-fixations.svg",
    category: "Chevilles & fixations",
    description:
      "Fabricant et inventeur de fixations pour tous les corps de métier depuis 1985, installé au Puy-en-Velay.",
    specialites: ["Chevilles tous supports", "Vis et pitons", "Scellement chimique"],
    origine: "Fabricant français depuis 1985",
    site: "https://www.ingfixations.fr",
    familles: ["outillage-visserie"],
  },
  {
    slug: "fist",
    name: "FIST",
    category: "Fixations",
    description: "Fixations et accessoires de pose pour la construction et la rénovation.",
    specialites: ["Fixations", "Accessoires de pose"],
    familles: ["outillage-visserie"],
    aVerifier: true,
  },
  {
    slug: "wurth",
    name: "Würth",
    category: "Visserie, fixation & outillage",
    description:
      "Référence mondiale de la visserie, de la fixation et de l'outillage professionnel, avec une gamme complète pour les artisans du bâtiment.",
    specialites: ["Vis et boulonnerie", "Chevilles et ancrages", "Outillage et consommables"],
    origine: "Groupe international",
    site: "https://www.wurth.fr",
    familles: ["outillage-visserie"],
  },
  {
    slug: "starmat",
    name: "Starmat",
    logo: "/images/fournisseurs/starmat.svg",
    category: "Groupement de négoces",
    description:
      "Groupement de négoces indépendants en matériaux de construction, né du regroupement de négociants franciliens.",
    specialites: ["Réseau de négoces indépendants", "Référencement fournisseurs"],
    origine: "Île-de-France",
    site: "https://starmat.fr",
    familles: [],
  },
];

export const getFournisseur = (slug: string) => FOURNISSEURS.find((f) => f.slug === slug);
