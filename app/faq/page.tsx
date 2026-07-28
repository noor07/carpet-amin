import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "FAQ — SUNDUS",
  description:
    "Answers to common questions about custom sizing, lead times, materials, shipping, and caring for a SUNDUS rug.",
};

const faqs = [
  {
    q: "How long does a SUNDUS rug take to make?",
    a: "Standard collection pieces are hand-knotted to order, with a typical lead time of 8–10 weeks from confirmation of order. Custom sizes, colorways, or pile specifications may extend this timeline — your point of contact will confirm an estimated completion date at the time of order.",
  },
  {
    q: "Can I order a custom size or colorway?",
    a: "Yes. Every design can be produced to custom dimensions, palettes, and pile heights. Reach out through our Trade page or Contact page with your project details and we'll follow up with options and pricing.",
  },
  {
    q: "What materials are SUNDUS rugs made from?",
    a: "Each rug is hand-knotted from natural fibers — primarily wool and silk, with the specific blend varying by design. Exact materials for each piece are listed on its product page under Details.",
  },
  {
    q: "Do you offer samples before I order a full rug?",
    a: "For trade and custom orders, we can provide a material and colorway sample so you can evaluate texture and tone in person before committing to a full production run. Request one through our Trade page.",
  },
  {
    q: "Where are SUNDUS rugs made?",
    a: "Every SUNDUS rug is hand-knotted by skilled artisans in Bhadohi, India — one of the world's great centers of hand-knotted carpet weaving. The brand is designed in Florida, USA.",
  },
  {
    q: "Will my rug look exactly like the photo?",
    a: "Because each rug is hand-knotted by individual artisans, subtle variation in color, texture, and design motif from piece to piece is expected — it's a signature of the craft, not a flaw. Product photography represents each design as accurately as possible, but natural fiber dye lots and screen displays can cause minor variation from the physical rug.",
  },
  {
    q: "What is your returns policy?",
    a: "Because each rug is made to order for a specific client, all sales are final once production has begun. If your rug arrives damaged or is not delivered, contact us and we'll work with you directly to resolve it. Full details are on our Policies page.",
  },
  {
    q: "Do you work with interior designers and architects?",
    a: "Yes — SUNDUS partners with interior designers, architects, and studios through our Trade program, which includes trade pricing, custom sizing, and a sample program. Visit our Trade page to apply.",
  },
  {
    q: "How do I care for my rug once it arrives?",
    a: "Regular light vacuuming, prompt blotting of spills, occasional rotation, and a professional hand-wash every 1–3 years will keep a SUNDUS rug looking its best for decades. See our full Care Guide for details.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        image="/images/craft/hands-clipping-tool.jpg"
        eyebrow="Questions, Answered"
        title="FAQ"
        subtitle="Everything you need to know before you order."
        height="h-[50vh]"
      />

      <section className="mx-auto max-w-[900px] px-6 py-24 md:px-10">
        <div className="divide-y divide-line border-t border-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-8">
              <h2 className="font-serif text-xl md:text-2xl">{f.q}</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                {f.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 border-t border-line pt-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl">
            Still have a question?
          </h2>
          <Link
            href="/contact"
            className="mt-1 inline-flex items-center border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
