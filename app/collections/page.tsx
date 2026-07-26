import type { Metadata } from "next";
import Image from "@/components/Image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RugCard from "@/components/RugCard";
import { collections, rugsIn } from "@/lib/rugs";

export const metadata: Metadata = {
  title: "Collections — SUNDUS",
  description: "Rugs shaped by material, memory, and time.",
};

export default function CollectionsPage() {
  return (
    <>
      <Hero
        image="/images/interiors/hero-interior.jpg"
        eyebrow=""
        title="COLLECTIONS"
        subtitle="Rugs shaped by material, memory, and time."
        description="Each collection explores a dialogue between landscape and heritage—hand-knotted by artisans in Bhadohi, India."
        height="h-[62vh]"
      />

      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        {collections.map((collection, i) => {
          const items = rugsIn(collection.slug);
          return (
            <section
              key={collection.slug}
              id={collection.slug}
              className={i > 0 ? "mt-24 border-t border-line pt-20" : ""}
            >
              <SectionHeading
                title={collection.name.toUpperCase()}
                description={collection.description}
                count={`${items.length} DESIGNS`}
              />
              <div className="mt-4 h-px w-full bg-line" />
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((rug, idx) => (
                  <RugCard key={rug.slug} rug={rug} eager={i === 0 && idx < 4} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="relative overflow-hidden bg-ink">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">
          <div className="relative h-72 md:h-auto">
            <Image
              src="/images/craft/hands-weaving-loom.jpg"
              alt="Artisan hand-knotting a rug"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 text-white md:px-16">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">
              The Craft Behind Every Rug
            </div>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
              Each SUNDUS rug is hand-knotted in Bhadohi, India, where
              generations of artisans carry forward centuries of weaving
              knowledge.
            </p>
            <a
              href="/about"
              className="mt-6 inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.15em]"
            >
              Discover Our Process
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path
                  d="M0 4.5H13M13 4.5L9 0.5M13 4.5L9 8.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
