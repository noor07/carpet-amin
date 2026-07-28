import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "In The Room — SUNDUS",
  description:
    "A closer look at how SUNDUS rugs live in a room — texture, scale, and material presence in context.",
};

const rooms = [
  {
    image: "/images/interiors/product-page-livingroom.jpg",
    title: "A Living Room, Grounded",
    text: "In a room built around natural materials and quiet color, a hand-knotted rug becomes the surface everything else is measured against.",
  },
  {
    image: "/images/interiors/cta-rattan-chair.jpg",
    title: "Texture Against Texture",
    text: "Wool and silk pile read differently next to rattan, linen, and stone — the kind of material layering our Material Memory collection is designed for.",
  },
  {
    image: "/images/interiors/about-story.jpg",
    title: "Still Life, Everyday",
    text: "A rug is a background for daily life as often as it's a focal point. We design for both.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Hero
        image="/images/interiors/hero-interior.jpg"
        eyebrow="In Context"
        title="IN THE ROOM"
        subtitle="Material presence, seen where it's meant to be seen."
        description="Photography and styling from our own studio — a look at how SUNDUS rugs read in a real interior, not just on a loom."
        height="h-[58vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 gap-16">
          {rooms.map((room, i) => (
            <div
              key={room.title}
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  {room.title}
                </h2>
                <div className="mt-4 h-px w-10 bg-ink/40" />
                <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted">
                  {room.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-6 border-t border-line pt-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Working on a Project?
          </h2>
          <p className="max-w-lg text-[14px] leading-relaxed text-muted">
            If you&apos;re a designer or architect specifying for a client space,
            our Trade team can help you find the right piece — or develop a
            custom one.
          </p>
          <Link
            href="/trade"
            className="mt-2 inline-flex items-center border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
          >
            Visit Trade
          </Link>
        </div>
      </section>
    </>
  );
}
