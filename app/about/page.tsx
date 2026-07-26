import type { Metadata } from "next";
import Image from "@/components/Image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { collections, rugsIn } from "@/lib/rugs";

export const metadata: Metadata = {
  title: "About — SUNDUS",
  description: "Woven through material, hand, and time.",
};

const philosophy = [
  {
    title: "Material",
    text: "We explore natural materials in their most honest form—wool, silk, texture, and time. Each imperfection is part of the story.",
  },
  {
    title: "Hand",
    text: "Every rug is hand-knotted by skilled artisans using techniques passed down through generations.",
  },
  {
    title: "Memory",
    text: "Our designs are inspired by geological time, cultural heritage, and the beauty found in erosion and age.",
  },
  {
    title: "Time",
    text: "A SUNDUS rug is made to be lived with, to soften, to evolve, and to become part of your space for generations.",
  },
];

const process = [
  { label: "Hand Knotting", image: "/images/craft/hand-knotting-macro.jpg" },
  { label: "Natural Wools & Silks", image: "/images/craft/wool-silk-skeins.jpg" },
  { label: "Traditional Looms", image: "/images/craft/traditional-loom.jpg" },
  { label: "Hand Clipping", image: "/images/craft/hands-clipping-tool.jpg" },
  { label: "Made With Care", image: "/images/craft/rolled-rug-fringe.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        image="/images/craft/rolled-rug-fringe.jpg"
        eyebrow="About SUNDUS"
        title="MATERIAL. MEMORY. MEANING."
        description={
          <>
            Collectible rugs shaped by material, hand, and time.
            <br />
            <br />
            SUNDUS creates collectible hand-knotted rugs that explore the
            relationship between material, memory, erosion, and heritage.
            Each piece is designed in Florida, USA and handcrafted in
            Bhadohi, India.
          </>
        }
        height="h-[68vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
              Our Story
            </div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Material. Memory. Meaning.
            </h2>
            <div className="mt-4 h-px w-10 bg-ink/40" />
            <p className="mt-5 text-[14px] leading-relaxed text-muted">
              The word &ldquo;Sundus&rdquo; refers to the finest silk garments
              described in the Quran—garments of beauty, purity, and
              timeless value.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              SUNDUS was founded on this idea: that true luxury is not loud,
              but lasting. That beauty lives in material, in hand, in
              restraint, and in time.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              Each rug is a study of memory—of landscapes, heritage, erosion,
              and the quiet poetry of the past. We design in Florida and
              collaborate with master artisans in Bhadohi, India to bring
              these stories to life through craft.
            </p>
            <Link
              href="/collections"
              className="mt-7 inline-flex w-fit items-center border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
            >
              Our Collections
            </Link>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/interiors/about-story.jpg"
              alt="A still life of a vase and marble on a SUNDUS rug"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <h2 className="text-center font-serif text-3xl md:text-4xl">
            Our Philosophy
          </h2>
          <div className="mx-auto mt-4 h-px w-10 bg-ink/40" />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            {philosophy.map((p) => (
              <div key={p.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-ink/30">
                  <span className="font-serif text-lg">{p.title[0]}</span>
                </div>
                <h3 className="mt-5 text-[12px] uppercase tracking-[0.15em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="text-center text-[11px] uppercase tracking-[0.2em] text-muted">
          The Founder
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch">
          <div className="relative aspect-[4/5] w-full overflow-hidden grayscale">
            <Image
              src="/images/interiors/founder-portrait.jpg"
              alt="Syed Aminuddin, Founder of SUNDUS"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-2xl">Syed Aminuddin</h3>
            <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted">
              Founder, SUNDUS
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-muted">
              Growing up in India, surrounded by art, architecture, and
              craft, I developed a deep fascination with materials and the
              stories they carry.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              Years of living in Australia and the USA as an artist and
              observer shaped my aesthetic and deepened my love for nature,
              history, and cultural memory.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              My travels across remote landscapes and ancient cities revealed
              a common thread that comes from time, erosion, and human touch.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              SUNDUS is my way of bridging contemporary design with the
              generational craftsmanship of Bhadohi, creating rugs that are
              not just made, but remembered.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <h2 className="text-center font-serif text-3xl md:text-4xl">
            Rooted in Bhadohi
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[14px] leading-relaxed text-muted">
            Bhadohi, India has been one of the world&apos;s greatest centers
            of hand-knotted carpet weaving for centuries. We work closely
            with master weavers and their families, supporting traditional
            techniques and preserving a craft that continues to shape homes
            around the world.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {process.map((p) => (
              <div key={p.label}>
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 text-center text-[10px] uppercase tracking-[0.1em] text-muted">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <h2 className="text-center font-serif text-3xl md:text-4xl">
            Our Collections
          </h2>
          <div className="mx-auto mt-4 h-px w-10 bg-ink/40" />
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            {collections.map((collection) => {
              const items = rugsIn(collection.slug);
              return (
                <div key={collection.slug}>
                  <div className="flex gap-1.5">
                    {items.map((rug) => (
                      <Link
                        key={rug.slug}
                        href={`/collections/${rug.slug}`}
                        className="group relative aspect-[3/5] flex-1 overflow-hidden"
                      >
                        <Image
                          src={rug.image}
                          alt={rug.name}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-110"
                          sizes="20vw"
                        />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.08em] text-muted">
                    {items.map((rug) => (
                      <span key={rug.slug}>{rug.name}</span>
                    ))}
                  </div>
                  <div className="mt-2 text-center text-[11px] uppercase tracking-[0.15em]">
                    {collection.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 text-center md:px-10">
        <p className="font-serif text-xl italic leading-relaxed md:text-2xl">
          &ldquo;We do not design rugs as decoration.
          <br />
          We create textile objects shaped by material, atmosphere, memory,
          and time.&rdquo;
        </p>
        <div className="mt-4 text-[11px] uppercase tracking-[0.15em] text-muted">
          SUNDUS
        </div>
      </section>
    </>
  );
}
