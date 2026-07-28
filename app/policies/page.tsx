import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Policies — SUNDUS",
  description:
    "Terms & conditions, delivery information, and returns & refunds for SUNDUS hand-knotted rugs.",
};

const sections = [
  {
    title: "Terms & Conditions",
    body: [
      "Every SUNDUS rug is hand-knotted by individual artisans in Bhadohi, India. Because each piece passes through human hands rather than a machine, subtle variation in color, texture, and design motif from piece to piece is expected — it is a signature of the craft, not a flaw.",
      "Product photography is intended to represent each design as accurately as possible, but natural fiber dye lots and screen displays can cause minor variation from the physical rug.",
    ],
  },
  {
    title: "Delivery Information",
    body: [
      "Standard collection pieces are hand-knotted to order, with a typical lead time of 8–10 weeks from confirmation of order before the rug ships.",
      "Custom sizes, colorways, or pile specifications may extend this timeline depending on complexity and knot density. Your point of contact will confirm an estimated completion date at the time of order.",
      "All rugs ship from our workshop in Bhadohi, India. Shipping duration varies by destination and will be communicated once your rug is complete and ready to leave the workshop.",
    ],
  },
  {
    title: "Returns & Refunds",
    body: [
      "Because each rug is made to order for a specific client, all sales are final once production has begun.",
      "If your rug arrives damaged or is not delivered, contact us at info@houseofsundus.com and we will work with you directly to resolve the issue.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <>
      <Hero
        image="/images/craft/hand-knotting-macro.jpg"
        eyebrow="Ordering With SUNDUS"
        title="POLICIES"
        subtitle="Terms, delivery, and returns."
        height="h-[50vh]"
      />

      <section className="mx-auto max-w-[900px] px-6 py-24 md:px-10">
        {sections.map((section, i) => (
          <div
            key={section.title}
            className={i > 0 ? "mt-16 border-t border-line pt-16" : ""}
          >
            <h2 className="font-serif text-3xl md:text-4xl">
              {section.title}
            </h2>
            <div className="mt-4 h-px w-10 bg-ink/40" />
            <div className="mt-6 space-y-4">
              {section.body.map((p, idx) => (
                <p
                  key={idx}
                  className="text-[14px] leading-relaxed text-muted"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
