// Services mis en avant sur l'accueil et la page /services.
// Uniquement des engagements déjà présents sur le site : à compléter avec
// vos vrais éléments (délais de livraison, camions, moyens de paiement…).
export type ServiceIcon = "devis" | "conseil" | "stock" | "comptoir" | "commande" | "livraison";

export type Service = {
  id: string;
  icon: ServiceIcon;
  title: string;
  short: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
};

export const SERVICES: Service[] = [
  {
    id: "devis",
    icon: "devis",
    title: "Devis gratuit",
    short: "Un chiffrage personnalisé pour votre chantier, sans engagement.",
    description:
      "Envoyez-nous votre liste de matériaux ou décrivez votre projet : notre équipe établit un devis détaillé, adapté à vos quantités et à votre calendrier.",
    points: ["Demande en ligne, par téléphone ou au comptoir", "Estimation personnalisée", "Sans engagement"],
    image: "/images/go-parpaings.jpg",
    imageAlt: "Palettes de parpaings en stock au dépôt",
    cta: { label: "Demander mon devis", href: "#devis" },
  },
  {
    id: "conseil",
    icon: "conseil",
    title: "Conseil technique",
    short: "Une équipe de professionnels pour bien choisir vos matériaux.",
    description:
      "Du gros œuvre aux finitions, nos conseillers vous orientent vers les produits adaptés à votre support, à votre budget et aux contraintes de votre chantier.",
    points: ["Choix des matériaux et des quantités", "Produits de marques reconnues", "Pour les pros comme pour les particuliers"],
    image: "/images/placo-stock.jpg",
    imageAlt: "Stock de plaques de plâtre au dépôt",
    cta: { label: "Poser une question", href: "/contact" },
  },
  {
    id: "stock",
    icon: "stock",
    title: "Stock disponible",
    short: "Une large gamme disponible immédiatement au dépôt.",
    description:
      "Blocs, ciment, plaques de plâtre, isolants, bois, colles et visserie : les références courantes sont en stock au dépôt de Lagny-sur-Marne.",
    points: ["Gros œuvre, bois, plâtre, isolation", "Colles, enduits et produits techniques", "Outillage, EPI et visserie"],
    image: "/images/go-ciment.jpg",
    imageAlt: "Rayonnage de sacs de ciment et de mortier",
    cta: { label: "Voir le catalogue", href: "/produits" },
  },
  {
    id: "comptoir",
    icon: "comptoir",
    title: "Vente au comptoir",
    short: "Venez retirer vos matériaux directement au dépôt.",
    description:
      "Notre comptoir vous accueille du lundi au samedi matin pour vos achats et retraits de commande, avec un accès direct au dépôt.",
    points: ["Ouvert dès 7h30 en semaine", "Samedi matin de 8h à 12h", "Retrait de commandes préparées"],
    image: "/images/livraison-sunset.jpg",
    imageAlt: "Cour du dépôt de Lagny-sur-Marne",
    cta: { label: "Itinéraire et horaires", href: "#infos-pratiques" },
  },
  {
    id: "commande",
    icon: "commande",
    title: "Commandes spéciales",
    short: "Un produit non référencé ? Nous le commandons pour vous.",
    description:
      "Notre gamme évolue régulièrement. Si vous recherchez une marque ou une référence spécifique, nous étudions toute demande de commande spéciale auprès de nos fournisseurs.",
    points: ["Plus de 15 fournisseurs partenaires", "Références spécifiques sur demande"],
    image: "/images/livraison-sunset2.jpg",
    imageAlt: "Plaques de plâtre livrées par nos fournisseurs",
    cta: { label: "Voir nos fournisseurs", href: "/fournisseurs" },
  },
  {
    id: "livraison",
    icon: "livraison",
    title: "Livraison sur chantier",
    short: "Livraison en Seine-et-Marne et en Île-de-France.",
    description:
      "Nous livrons vos matériaux directement sur votre chantier, en Seine-et-Marne et dans tout le bassin Île-de-France, pour vous faire gagner du temps.",
    points: ["Seine-et-Marne (77) et Île-de-France", "Livraison sur chantier", "Organisation selon votre planning"],
    image: "/images/livraison-parpaings.jpg",
    imageAlt: "Déchargement de parpaings sur un chantier",
    cta: { label: "Organiser une livraison", href: "#devis" },
  },
];
