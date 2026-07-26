import type { Metadata } from "next";
import Image from "@/components/Image";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Journal — SUNDUS",
  description: "Notes on material, craft, and design from SUNDUS.",
};

const posts = [
  {
    title: "Inside the Looms of Bhadohi",
    excerpt:
      "A look at the multi-generational workshops where every SUNDUS rug begins as raw wool and silk.",
    image: "/images/craft/traditional-loom.jpg",
    tag: "Craft",
  },
  {
    title: "Erosion as Design Language",
    excerpt:
      "How geological time and natural erosion inform the Material Memory collection's abstract compositions.",
    image: "/images/rugs/grand-canyon.jpg",
    tag: "Design",
  },
  {
    title: "Styling with Heritage Textiles",
    excerpt:
      "Pairing Mughal-inspired florals with contemporary interiors, without losing their cultural roots.",
    image: "/images/rugs/heritage-garden.jpg",
    tag: "Interiors",
  },
];

export default function JournalPage() {
  return (
    <>
      <Hero
        image="/images/craft/hands-clipping-tool.jpg"
        eyebrow="Notes from the Studio"
        title="JOURNAL"
        subtitle="Material, craft, and design."
        height="h-[50vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.15em] text-muted">
                {post.tag}
              </div>
              <h3 className="mt-2 font-serif text-xl">{post.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
