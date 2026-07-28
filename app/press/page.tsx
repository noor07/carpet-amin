import type { Metadata } from "next";
import Image from "@/components/Image";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Press — SUNDUS",
  description:
    "Press resources and media contact for SUNDUS, a collectible hand-knotted rug studio designed in Florida and handcrafted in Bhadohi, India.",
};

export default function PressPage() {
  return (
    <>
      <Hero
        image="/images/interiors/founder-portrait.jpg"
        eyebrow="Media & Press"
        title="PRESS"
        subtitle="For editors, journalists, and press inquiries."
        height="h-[50vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
              About SUNDUS
            </div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              A Note for Editors
            </h2>
            <div className="mt-4 h-px w-10 bg-ink/40" />
            <p className="mt-5 text-[14px] leading-relaxed text-muted">
              SUNDUS is a collectible hand-knotted rug studio founded by Syed
              Aminuddin, designed in Florida, USA and handcrafted by artisans
              in Bhadohi, India. The collection explores the relationship
              between material, memory, erosion, and heritage — treating each
              rug as a textile object rather than a decorative furnishing.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              For interview requests, product imagery, or founder access, get
              in touch below — we&apos;re happy to send a press kit with
              high-resolution photography and background on the brand,
              materials, and Bhadohi weaving process.
            </p>
            <a
              href="mailto:info@houseofsundus.com?subject=Press%20Inquiry"
              className="mt-7 inline-flex w-fit items-center border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
            >
              info@houseofsundus.com
            </a>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden grayscale">
            <Image
              src="/images/interiors/founder-portrait.jpg"
              alt="Syed Aminuddin, Founder of SUNDUS"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
