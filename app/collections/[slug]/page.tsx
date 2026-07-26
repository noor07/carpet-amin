import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import { notFound } from "next/navigation";
import { getRug, relatedRugs, rugs, getCollection } from "@/lib/rugs";
import ProductGallery from "@/components/ProductGallery";
import RugCard from "@/components/RugCard";

export function generateStaticParams() {
  return rugs.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rug = getRug(slug);
  if (!rug) return {};
  return {
    title: `${rug.name} — SUNDUS`,
    description: rug.description,
  };
}

const detailLabels: Record<string, string> = {
  technique: "Technique",
  material: "Material",
  pileHeight: "Pile Height",
  knotDensity: "Knot Density",
  origin: "Origin",
  customization: "Customization",
  leadTime: "Lead Time",
};

const closeUps = [
  "/images/rugs/grand-canyon.jpg",
  "/images/craft/wool-silk-skeins.jpg",
  "/images/craft/rolled-rug-fringe.jpg",
  "/images/craft/hand-knotting-macro.jpg",
];

export default async function RugDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rug = getRug(slug);
  if (!rug) notFound();

  const collection = getCollection(rug.collection);
  const related = relatedRugs(slug, 4);
  const gallery = [
    rug.image,
    "/images/craft/rolled-rug-fringe.jpg",
    "/images/interiors/product-page-livingroom.jpg",
    "/images/craft/hands-clipping-tool.jpg",
    "/images/craft/hand-knotting-macro.jpg",
  ];

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted hover:text-ink"
        >
          ← Back to Collections
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[auto_1fr_420px] lg:gap-14">
          <ProductGallery images={gallery} alt={rug.name} />

          <div className="hidden lg:block" />

          <div className="lg:pl-0">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
              {collection?.name} Collection
            </div>
            <h1 className="mt-2 font-serif text-4xl md:text-5xl">
              {rug.name.toUpperCase()}
            </h1>
            <div className="mt-4 h-px w-10 bg-ink/40" />
            <p className="mt-5 text-[14px] leading-relaxed text-muted">
              {rug.longDescription}
            </p>

            <div className="mt-8 border-t border-line pt-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Details
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-y-3 text-[13px]">
                {Object.entries(rug.details).map(([key, value]) => (
                  <div key={key} className="contents">
                    <dt className="text-muted">{detailLabels[key]}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Size Options
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {rug.sizes.map((size) => (
                  <button
                    key={size}
                    className="border border-line px-4 py-2.5 text-[12px] hover:border-ink"
                  >
                    {size}
                  </button>
                ))}
                <button className="border border-line px-4 py-2.5 text-[12px] hover:border-ink">
                  Custom Size
                </button>
              </div>

              <Link
                href="/contact"
                className="mt-5 block bg-ink py-3.5 text-center text-[12px] uppercase tracking-[0.15em] text-white hover:bg-ink/90"
              >
                Request Pricing &amp; Details
              </Link>
              <button className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted hover:text-ink">
                Download Spec Sheet ↓
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-1 md:grid-cols-4">
        {closeUps.map((img, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={img}
              alt={`${rug.name} texture detail ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
              Material. Memory. Time.
            </div>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Every SUNDUS rug is hand-knotted by artisans in Bhadohi, India
              using natural wool, silk, and time-honored techniques. Subtle
              irregularities, tonal shifts, and textural depth are not
              imperfections—they are the signature of true craft.
            </p>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src="/images/craft/hands-weaving-loom.jpg"
              alt="Artisan hands weaving"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl md:text-3xl">
              You May Also Like
            </h2>
            <Link
              href="/collections"
              className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted hover:text-ink md:inline-flex"
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
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {related.map((r) => (
              <RugCard key={r.slug} rug={r} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
