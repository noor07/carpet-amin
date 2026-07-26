import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RugCard from "@/components/RugCard";
import { collections, rugsIn, rugs } from "@/lib/rugs";

const featured = [
  rugs.find((r) => r.slug === "grand-canyon")!,
  rugs.find((r) => r.slug === "heritage-garden")!,
  rugs.find((r) => r.slug === "fractured-jade-tablet")!,
  rugs.find((r) => r.slug === "lotus-royale")!,
];

export default function Home() {
  return (
    <>
      <Hero
        image="/images/interiors/hero-interior.jpg"
        title="SUNDUS"
        subtitle="Woven through material, hand, and time."
        description={
          <>
            Designed in Florida, USA.
            <br />
            Handcrafted in Bhadohi, India.
          </>
        }
        height="h-[92vh]"
      >
        <Link
          href="/collections"
          className="mt-8 inline-flex w-fit items-center border border-white/70 px-7 py-3 text-[11px] uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-ink"
        >
          Explore Collection
        </Link>
      </Hero>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
              Collectible Rugs Rooted in Memory
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              SUNDUS creates collectible hand-knotted rugs that explore the
              relationship between material, memory, erosion, and heritage.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Each piece is developed as a textile object rather than a
              decorative furnishing—through wool, silk, texture, atmosphere,
              and craftsmanship, every rug becomes a study of place, time, and
              permanence.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] hover:text-muted"
            >
              About SUNDUS
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path
                  d="M0 4.5H13M13 4.5L9 0.5M13 4.5L9 8.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/interiors/cta-rattan-chair.jpg"
              alt="SUNDUS rug in a minimalist interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <SectionHeading title="Our Collections" align="center" />
          <div className="mt-4 h-px w-full bg-line" />

          <div className="mt-12 grid grid-cols-1 gap-14 md:grid-cols-2">
            {collections.map((collection) => {
              const items = rugsIn(collection.slug);
              return (
                <div key={collection.slug}>
                  <h3 className="font-serif text-2xl">{collection.name}</h3>
                  <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-muted">
                    {collection.description}
                  </p>
                  <div className="mt-6 flex gap-1.5">
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
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.08em] text-muted">
                    {items.map((rug) => (
                      <span key={rug.slug}>{rug.name}</span>
                    ))}
                  </div>
                  <Link
                    href={`/collections#${collection.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em]"
                  >
                    Explore {collection.name}
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                      <path
                        d="M0 4.5H13M13 4.5L9 0.5M13 4.5L9 8.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <SectionHeading title="Featured Pieces" align="center" />
          <div className="mt-4 h-px w-full bg-line" />
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {featured.map((rug) => (
              <RugCard key={rug.slug} rug={rug} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em]"
            >
              View All Collections
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path
                  d="M0 4.5H13M13 4.5L9 0.5M13 4.5L9 8.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">
          <div className="relative h-80 md:h-auto">
            <Image
              src="/images/craft/hands-weaving-loom.jpg"
              alt="Artisan hand-knotting a rug"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">
              The Craft
            </div>
            <h3 className="mt-3 font-serif text-3xl">
              Handmade in Bhadohi, India
            </h3>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/75">
              For generations, Bhadohi has been one of the world&apos;s great
              centers of hand-knotted carpet weaving. Every SUNDUS rug is
              handcrafted by skilled artisans using traditional techniques
              refined through centuries of practice.
            </p>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/75">
              Natural wool, silk, pile variation, hand clipping, and material
              experimentation are combined to create surfaces that feel
              atmospheric, living, and enduring.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.15em]"
            >
              Our Process
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path
                  d="M0 4.5H13M13 4.5L9 0.5M13 4.5L9 8.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Materials",
              text: "We use the finest Himalayan wool and silk, chosen for their strength, softness, and ability to age gracefully.",
              cta: "Learn More",
              image: "/images/craft/wool-silk-skeins.jpg",
            },
            {
              title: "Design Process",
              text: "Every design begins with research—landscape, texture, history, memory—transformed into form.",
              cta: "Our Process",
              image: "/images/craft/traditional-loom.jpg",
            },
            {
              title: "Made to Last",
              text: "SUNDUS rugs are created to be lived with for decades, becoming part of your story over time.",
              cta: "Care Guide",
              image: "/images/interiors/cta-rattan-chair.jpg",
            },
          ].map((card) => (
            <div key={card.title} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="mt-5 font-serif text-xl">{card.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {card.text}
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em]">
                {card.cta}
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                  <path
                    d="M0 4.5H13M13 4.5L9 0.5M13 4.5L9 8.5"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-6 py-20 text-center md:px-10">
          <h3 className="font-serif text-3xl md:text-4xl">
            Created for Spaces That Value Material Presence
          </h3>
          <p className="max-w-lg text-[14px] leading-relaxed text-muted">
            For collectors, designers, architects, and homes seeking lasting
            beauty and timelessness.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
          >
            Trade &amp; Private Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
