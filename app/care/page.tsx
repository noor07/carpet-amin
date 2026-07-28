import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Care Guide — SUNDUS",
  description:
    "How to clean, rotate, and protect a hand-knotted SUNDUS rug so it lasts for generations.",
};

const sections = [
  {
    title: "Everyday Care",
    body: [
      "Vacuum regularly using suction only, without a beater bar or rotating brush, which can pull at hand-knotted pile over time. Vacuum in the direction of the pile, and avoid the fringe.",
      "Rotate your rug every 6–12 months so that sunlight exposure and foot traffic wear evenly across the piece.",
    ],
  },
  {
    title: "Spills & Spot Cleaning",
    body: [
      "Blot spills immediately with a clean, dry white cloth — never rub, which can push liquid deeper into the pile and spread staining.",
      "For water-based spills, blot with a cloth dampened in cold water only. Avoid household carpet cleaners and steam cleaners; natural wool and silk fibers can be damaged by harsh chemicals and heat.",
      "For anything beyond a light spill, contact a professional rug cleaner experienced with hand-knotted textiles rather than a standard carpet-cleaning service.",
    ],
  },
  {
    title: "Sunlight & Placement",
    body: [
      "Natural dyes will soften and mellow with light exposure over time — this is expected and part of how a hand-knotted rug ages. Even, gradual fading is part of the character; direct, prolonged sun on only part of a rug will fade unevenly, so rotation matters more in sun-facing rooms.",
      "Use a rug pad under your SUNDUS rug. It prevents slipping, cushions the pile against wear, and protects both the rug and the floor beneath it.",
    ],
  },
  {
    title: "Professional Cleaning",
    body: [
      "We recommend a professional hand-wash every 1–3 years depending on foot traffic, by a cleaner who specializes in hand-knotted wool and silk rugs.",
      "If you're unsure who to use in your area, contact us at info@houseofsundus.com — we're happy to point you toward cleaners we trust.",
    ],
  },
];

export default function CarePage() {
  return (
    <>
      <Hero
        image="/images/craft/rolled-rug-fringe.jpg"
        eyebrow="Living With Sundus"
        title="CARE GUIDE"
        subtitle="Made to be lived with, for generations."
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
