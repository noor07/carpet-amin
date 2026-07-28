import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Wholesale — SUNDUS",
  description:
    "Wholesale accounts for showrooms, retailers, and distributors carrying SUNDUS hand-knotted rugs.",
};

const terms = [
  {
    title: "Volume Pricing",
    text: "Net wholesale pricing scaled to order volume, quoted per collection once we understand your typical order size and reorder cadence.",
  },
  {
    title: "Lead Times",
    text: "Standard collection pieces run 8–10 weeks from confirmed order. We'll work with you on a production schedule that fits your buying calendar.",
  },
  {
    title: "Consistent Reordering",
    text: "We'll talk through which designs suit repeat, consistent reorders versus one-off bespoke pieces, so what's on your floor matches what you can reliably restock.",
  },
  {
    title: "Line Sheet & Terms",
    text: "A full line sheet with FOB pricing, minimum order quantities, and payment terms is available on request once a wholesale conversation is underway.",
  },
];

export default function WholesalePage() {
  return (
    <>
      <Hero
        image="/images/craft/hand-knotting-macro.jpg"
        eyebrow="For Showrooms & Retailers"
        title="WHOLESALE"
        subtitle="Hand-knotted rugs, stocked and sold at scale."
        description="SUNDUS partners with showrooms, boutique retailers, and distributors who want to carry collectible, hand-knotted rugs — manufactured direct in our own workshop in Bhadohi, India."
        height="h-[58vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {terms.map((t) => (
            <div key={t.title}>
              <h3 className="font-serif text-xl">{t.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 border-t border-line pt-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Start a Wholesale Account
          </h2>
          <p className="max-w-lg text-[14px] leading-relaxed text-muted">
            Tell us about your business and typical order volume, and we&apos;ll
            follow up with a line sheet, pricing, and lead times.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
          >
            Contact Our Wholesale Team
          </Link>
          <p className="mt-2 text-[12px] text-muted">
            Sourcing for a single client project instead?{" "}
            <Link href="/trade" className="underline hover:text-ink">
              Visit our Trade page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
