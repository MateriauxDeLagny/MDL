// Photos d'illustration (banques d'images libres, via Openverse / Wikimedia Commons / Flickr)
// pour les catégories sans photo réelle du dépôt. Licences Creative Commons : crédit obligatoire.
// Fichiers : public/images/illustrations/<slug>.jpg (redimensionnés, métadonnées supprimées).
// À remplacer par de vraies photos du dépôt dès que possible.

export type PhotoCredit = {
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
  alt: string;
};

export const ILLUSTRATIONS: Record<string, PhotoCredit> = {
  "briques": {
    title: "Stacks of Bricks",
    author: "mikecogh",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://www.flickr.com/photos/89165847@N00/5046760353",
    alt: "Palettes de briques en terre cuite",
  },
  "voirie-assainissement": {
    title: "Reinforced Concrete Pipe",
    author: "Pam_Broviak",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://www.flickr.com/photos/23870457@N06/2268776991",
    alt: "Buses en béton sur un chantier de terrassement",
  },
  "terrasse-bois": {
    title: "Teak garden furniture and wooden decking",
    author: "Crinklecrankle.com",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://www.flickr.com/photos/35589815@N02/3294841707",
    alt: "Terrasse en bois avec salon de jardin",
  },
  "ba13-coupe-feu": {
    title: "Drywall is up.",
    author: "BoneDaddy.P7",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://www.flickr.com/photos/39397690@N00/2940783890",
    alt: "Pièce en cours de doublage en plaques de plâtre",
  },
  "ba13-acoustique": {
    title: "Drywall installed ina Garage",
    author: "Sery Content Development",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://www.flickr.com/photos/142136365@N08/27548943482",
    alt: "Mur en plaques de plâtre jointoyées",
  },
  "actis-hybris": {
    title: "Empty Office Space",
    author: "chrstphre",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://www.flickr.com/photos/12457246@N03/3205180397",
    alt: "Isolant mince réfléchissant posé en plafond",
  },
  "imperfond": {
    title: "Priming Plywood",
    author: "mrsdkrebs",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://www.flickr.com/photos/56041749@N02/6728827979",
    alt: "Application d'un primaire au rouleau",
  },
  "outillage-epi": {
    title: "it's a trowel, not a bird",
    author: "erix!",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://www.flickr.com/photos/68387408@N00/9376644286",
    alt: "Platoir cranté de carreleur",
  },
  "peinture-exterieure": {
    title: "Houses on High",
    author: "Cindy Funk",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://www.flickr.com/photos/84858864@N00/2398851599",
    alt: "Façade de maison fraîchement repeinte",
  },
  "amenagement-exterieur": {
    title: "NCC permeable pavers 2012 2012-03-26 7",
    author: "Sam Beebe",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://www.flickr.com/photos/28585409@N04/7178219595",
    alt: "Allée en pavés béton",
  },
  "panneaux-contreplaques": {
    title: "Oriented strand board at Courtabœuf 2011.jpg",
    author: "Lionel Allorge",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: "https://commons.wikimedia.org/w/index.php?curid=15146095",
    alt: "Gros plan d'un panneau OSB",
  },
  "produits-sika": {
    title: "Caulking",
    author: "Achim Hering",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source: "https://commons.wikimedia.org/w/index.php?curid=3140696",
    alt: "Mastic extrudé d'une cartouche au pistolet",
  },
  "systeme-ite": {
    title: "Insulation boards on a building facade",
    author: "Cjp24",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/w/index.php?curid=38920932",
    alt: "Pose d'une isolation thermique par l'extérieur sur une façade",
  },
  "mortier-imper": {
    title: "Applying waterproofing material to the outside of a tunnel.jpg",
    author: "Siamsens",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: "https://commons.wikimedia.org/w/index.php?curid=50165930",
    alt: "Projection d'un revêtement d'étanchéité sur un mur en béton",
  },
  "lambris-bardage": {
    title: "Stacked cedar siding",
    author: "Marshmallow",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://www.flickr.com/photos/69487319@N00/10585974804",
    alt: "Lames de bardage bois empilées",
  },
  "ossature-metallique": {
    title: "Construction worker on steel framing of hollywoodHUB at Hollywood Transit Center, Portland, Oregon (January 2026)",
    author: "PortlandAppraisalBlog",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/w/index.php?curid=181767223",
    alt: "Ossature métallique en cours de montage",
  },
};
