export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tag: string;
  content: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "inside-the-looms-of-bhadohi",
    title: "Inside the Looms of Bhadohi",
    excerpt:
      "A look at the multi-generational workshops where every SUNDUS rug begins as raw wool and silk.",
    image: "/images/craft/traditional-loom.jpg",
    tag: "Craft",
    content: [
      "Bhadohi, in India's Uttar Pradesh region, has been one of the world's centers of hand-knotted carpet weaving for centuries. The town and its surrounding villages are home to generations of weaving families, many of whom learned the craft from a parent or grandparent standing at the same loom.",
      "A hand-knotted rug begins not on the loom but with the wool and silk itself — sorted, spun, and dyed before a single knot is tied. From there, a design is translated into a graph the weaver can follow row by row, tying each knot by hand and trimming the pile as the rug grows.",
      "Depending on the size and knot density of a piece, a single rug can take anywhere from a few weeks to several months to complete. It's slow, deliberate work — and it's the reason no two hand-knotted rugs, even of the same design, are ever quite identical.",
      "When we say a SUNDUS rug is handcrafted in Bhadohi, this is what that means in practice: real looms, real hands, and a technique passed down rather than taught in a factory training manual.",
    ],
  },
  {
    slug: "erosion-as-design-language",
    title: "Erosion as Design Language",
    excerpt:
      "How geological time and natural erosion inform the Material Memory collection's abstract compositions.",
    image: "/images/rugs/grand-canyon.jpg",
    tag: "Design",
    content: [
      "Erosion is slow, and it doesn't announce itself. A canyon wall, a riverbed, a stretch of weathered stone — each is shaped over centuries by forces too gradual to see happening, only to notice afterward.",
      "The Material Memory collection borrows that logic. Rather than depicting a landscape literally, each design translates the feeling of erosion — layered tone, soft transitions, texture that seems to have been worn into place rather than drawn — into a hand-knotted surface.",
      "This is part of why we describe these pieces as textile objects rather than decorative rugs. A rug like Grand Canyon isn't trying to picture a place; it's trying to hold the same quality of time that shaped one — sediment, pressure, and the slow accumulation of change.",
      "Practically, this means color transitions that shift gradually rather than in hard blocks, and pile texture that varies across the surface to suggest depth and erosion rather than a flat, uniform field.",
    ],
  },
  {
    slug: "styling-with-heritage-textiles",
    title: "Styling with Heritage Textiles",
    excerpt:
      "Pairing Mughal-inspired florals with contemporary interiors, without losing their cultural roots.",
    image: "/images/rugs/heritage-garden.jpg",
    tag: "Interiors",
    content: [
      "Rugs from our Heritage collection draw on Mughal garden design and Persian textile archives — ornate, symmetrical, and rich with color. Pieces like this can feel intimidating to place in a contemporary room, but the opposite is usually true: a strong pattern like this works best as the one loud element in an otherwise quiet space.",
      "Pair a Heritage rug with plain, textural furnishings — linen, raw wood, unlacquered brass — rather than competing patterns. The rug should read as the room's single moment of ornament, not one of several.",
      "Color is the easiest way in. Pull one secondary tone from the rug — a terracotta, a gold, a deep green — and repeat it once elsewhere in the room, in a cushion or a piece of art, so the rug feels connected to the space rather than dropped into it.",
      "Above all, resist the instinct to modernize a heritage pattern into the background. These designs carry real cultural history — Mughal garden motifs, Persian archival patterns — and they read best when given room to be seen, not muted to match a trend.",
    ],
  },
  {
    slug: "hand-knotted-vs-hand-tufted-rugs",
    title: "Hand-Knotted vs. Hand-Tufted: What's the Difference?",
    excerpt:
      "Two rugs can look similar in a photo and be entirely different objects. Here's how to tell, and why it matters.",
    image: "/images/craft/hand-knotting-macro.jpg",
    tag: "Craft",
    content: [
      "\"Handmade\" covers a wide range of construction methods, and two of the most commonly confused are hand-knotted and hand-tufted. They can look similar in a photograph, but they're built very differently — and that difference affects durability, feel, and lifespan.",
      "A hand-knotted rug is built one knot at a time on a loom, with the pile and the foundation created together as a single woven structure. There is no backing or glue holding it together — the knots themselves are the rug. This is the slower, more labor-intensive method, and it's what every SUNDUS rug is built from.",
      "A hand-tufted rug, by contrast, is made by punching yarn through a pre-stretched fabric backing using a handheld tufting gun, then securing the yarn with a layer of adhesive and a secondary backing cloth. It's faster to produce and generally less expensive, but the adhesive backing means the rug can shed more over time and typically has a shorter lifespan.",
      "Neither method is wrong — they simply serve different purposes and price points. But if you're investing in a rug meant to last decades and be passed down, the construction method is worth asking about directly, because it isn't always obvious from a listing photo alone.",
    ],
  },
  {
    slug: "how-to-choose-a-rug-size-for-a-living-room",
    title: "How to Choose a Rug Size for a Living Room",
    excerpt:
      "The most common rug mistake isn't the design — it's the size. A simple way to get it right.",
    image: "/images/interiors/product-page-livingroom.jpg",
    tag: "Interiors",
    content: [
      "More living rooms are undersized on their rug than on anything else in the space. A rug that's too small makes furniture look like it's floating, disconnected from the rest of the room — and it's the single most common styling mistake we see.",
      "The general rule: at minimum, the front legs of your sofa and chairs should rest on the rug, anchoring the seating group together. Where the room allows, all four legs of every piece resting on the rug reads as more intentional and pulls the space together further.",
      "As a starting point for a standard living room, an 8' x 10' rug suits a sofa and two chairs comfortably; a 9' x 12' or 10' x 14' gives a larger seating arrangement, or a room with a sofa and sectional, enough room to feel proportional rather than cramped.",
      "Every SUNDUS design is available in multiple standard sizes, listed on each product page, and can be produced to a fully custom dimension for a specific room. If you're unsure which size fits your space, our team is glad to help you work it out before you order.",
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
