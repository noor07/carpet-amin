export type Collection = {
  slug: string;
  name: string;
  description: string;
};

export type Rug = {
  slug: string;
  name: string;
  collection: "material-memory" | "heritage";
  description: string;
  longDescription: string;
  image: string;
  details: {
    technique: string;
    material: string;
    pileHeight: string;
    knotDensity: string;
    origin: string;
    customization: string;
    leadTime: string;
  };
  sizes: string[];
};

export const collections: Collection[] = [
  {
    slug: "material-memory",
    name: "Material Memory",
    description:
      "Landscapes shaped by erosion, compression, atmosphere, and geological time. These rugs translate natural forces into tactile, enduring forms.",
  },
  {
    slug: "heritage",
    name: "Heritage",
    description:
      "A dialogue between Indian craftsmanship, architecture, and cultural memory. Rooted in tradition, reinterpreted for today.",
  },
];

export const rugs: Rug[] = [
  {
    slug: "fractured-jade-tablet",
    name: "Fractured Jade Tablet",
    collection: "material-memory",
    description:
      "Inspired by excavated jade tablets and fractured sacred geometry. A study of mineral oxidation and ancient surfaces.",
    longDescription:
      "Fractured Jade Tablet draws on excavated jade tablets and fractured sacred geometry, translating mineral oxidation and the patina of ancient surfaces into a hand-knotted textile. Deep moss and forest greens are broken by fine cream veining, evoking stone that has weathered centuries.",
    image: "/images/rugs/fractured-jade-tablet.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "New Zealand Wool & Mulberry Silk",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
  {
    slug: "whale-compression",
    name: "Whale Compression",
    collection: "material-memory",
    description:
      "A textile interpretation of baleen, pressure, and deep-ocean atmosphere. Layered texture evokes movement beneath the surface.",
    longDescription:
      "Whale Compression is a textile interpretation of baleen, pressure, and deep-ocean atmosphere. Layered slate and charcoal tones move beneath soft cream veining, capturing the sense of weight and motion found far below the surface of the sea.",
    image: "/images/rugs/whale-compression.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "Tibetan Wool & Himalayan Wool",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
  {
    slug: "grand-canyon",
    name: "Grand Canyon",
    collection: "material-memory",
    description:
      "An abstract study of erosion, sediment, and geological time. The landscape is not depicted, but remembered.",
    longDescription:
      "An abstract study of erosion, sediment, compression, and geological time. Grand Canyon captures the layered beauty of the earth in motion — where stone, wind, and water shape the landscape over millions of years. The composition balances raw texture with soft atmospheric transitions.",
    image: "/images/rugs/grand-canyon.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "Afghan Handspun Wool & Silk",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
  {
    slug: "amazon-rainforest",
    name: "Amazon Rainforest",
    collection: "material-memory",
    description:
      "Dense, layered, and alive. This rug captures the chaos and depth of the rainforest through tone, texture, and organic fragmentation.",
    longDescription:
      "Dense, layered, and alive, Amazon Rainforest captures the chaos and depth of the rainforest through tone, texture, and organic fragmentation. Deep teal and forest greens are interrupted by gold and rust accents, echoing sunlight breaking through a dense canopy.",
    image: "/images/rugs/amazon-rainforest.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "Himalayan Wool & Bamboo Silk",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
  {
    slug: "natural-aztec",
    name: "Natural Aztec",
    collection: "material-memory",
    description:
      "Inspired by ancient tribal patterns and earthen walls. A balance of geometry and erosion, heritage and raw material.",
    longDescription:
      "Inspired by ancient tribal patterns and earthen adobe walls, Natural Aztec balances geometry and erosion, heritage and raw material. A warm gray field carries soft gold and ochre lines that feel drawn by hand across weathered stone.",
    image: "/images/rugs/natural-aztec.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "Undyed Wool & Cotton",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
  {
    slug: "eroded-light",
    name: "Eroded Light",
    collection: "material-memory",
    description:
      "An exploration of light, decay, and passage of time. Soft tonal transitions create an atmospheric, meditative surface.",
    longDescription:
      "An exploration of light, decay, and the passage of time, Eroded Light is built from soft tonal transitions across pale sand and ivory. The result is an atmospheric, meditative surface that changes character with the light of the room it lives in.",
    image: "/images/rugs/eroded-light.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "Cashmere Wool & Silk",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
  {
    slug: "heritage-garden",
    name: "Heritage Garden",
    collection: "heritage",
    description:
      "Inspired by Mughal gardens and Persian textile archives. A timeless composition of flora, symmetry, and elegance.",
    longDescription:
      "Inspired by Mughal gardens and Persian textile archives, Heritage Garden is a timeless composition of flora, symmetry, and elegance. A deep green field carries an intricate vine and medallion pattern rendered in cream, terracotta, and gold.",
    image: "/images/rugs/heritage-garden.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "Himalayan Wool & Mulberry Silk",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
  {
    slug: "lotus-royale",
    name: "Lotus Royale",
    collection: "heritage",
    description:
      "A contemporary take on classical Indian floral motifs. Graceful, balanced, and rich in cultural symbolism.",
    longDescription:
      "A contemporary take on classical Indian floral motifs, Lotus Royale is graceful, balanced, and rich in cultural symbolism. Soft cream and blush tones frame a refined lotus and vine pattern in warm taupe and gold.",
    image: "/images/rugs/lotus-royale.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "New Zealand Wool & Silk",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
  {
    slug: "dari-rug-uttar-pradesh",
    name: "Dari Rug Uttar Pradesh",
    collection: "heritage",
    description:
      "A tribute to the weaving traditions of Uttar Pradesh. Earthy, authentic, and steeped in heritage.",
    longDescription:
      "A tribute to the weaving traditions of Uttar Pradesh, this rug is earthy, authentic, and steeped in heritage. An ornate central medallion in warm camel and chocolate tones is framed by richly textured floral borders.",
    image: "/images/rugs/dari-rug-uttar-pradesh.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "Cotton & Wool Blend",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
  {
    slug: "jaipur-pink-city",
    name: "Jaipur Pink City",
    collection: "heritage",
    description:
      "Inspired by the walls, arches, and faded luxury of Jaipur. A celebration of color, history, and timeworn beauty.",
    longDescription:
      "Inspired by the walls, arches, and faded luxury of Jaipur, this rug is a celebration of color, history, and timeworn beauty. Dusty rose and terracotta tones are layered with cream and gold architectural motifs.",
    image: "/images/rugs/jaipur-pink-city.jpg",
    details: {
      technique: "Hand-Knotted",
      material: "Himalayan Wool & Viscose",
      pileHeight: "Variable",
      knotDensity: "150–200 KPSI",
      origin: "Bhadohi, India",
      customization: "Available",
      leadTime: "8–10 Weeks",
    },
    sizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
  },
];

export function getRug(slug: string): Rug | undefined {
  return rugs.find((r) => r.slug === slug);
}

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function rugsIn(collectionSlug: string): Rug[] {
  return rugs.filter((r) => r.collection === collectionSlug);
}

export function relatedRugs(slug: string, count = 4): Rug[] {
  const current = getRug(slug);
  if (!current) return rugs.slice(0, count);
  const others = rugs.filter((r) => r.slug !== slug);
  const sameCollection = others.filter((r) => r.collection === current.collection);
  const rest = others.filter((r) => r.collection !== current.collection);
  return [...sameCollection, ...rest].slice(0, count);
}
