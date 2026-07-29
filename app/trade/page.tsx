import type { Metadata } from "next";
import Hero from "@/components/Hero";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Trade — SUNDUS",
  description: "Trade partnerships for designers, architects, and studios.",
};

const benefits = [
  {
    title: "Trade Pricing",
    text: "Preferred pricing structures for qualified interior designers, architects, and studios.",
  },
  {
    title: "Custom Sizing",
    text: "Every design can be produced to custom dimensions, palettes, and pile heights for your project.",
  },
  {
    title: "Sample Program",
    text: "Request physical material and colorway samples before committing to a full production run.",
  },
  {
    title: "Dedicated Support",
    text: "A direct point of contact for lead times, specification sheets, and project coordination.",
  },
];

const whyTrade = [
  {
    title: "Manufacturer-Direct",
    text: "Our rugs are hand-knotted in our own workshop in Bhadohi, India — you work with the maker, not a distributor or reseller.",
  },
  {
    title: "Every Technique on Request",
    text: "Beyond our standing collections, our workshop can execute hand-knotted, hand-tufted, and flat-weave construction across wool, silk, and blended fibers for bespoke commissions.",
  },
  {
    title: "Built for Real Projects",
    text: "Specification sheets, knot density, and lead times are provided upfront so your project timeline is never a guessing game.",
  },
];

export default function TradePage() {
  return (
    <>
      <Hero
        image="/images/interiors/product-page-livingroom.jpg"
        eyebrow="For the Design Trade"
        title="TRADE"
        subtitle="Partnership rooted in craft."
        description="SUNDUS collaborates with interior designers, architects, and studios to bring collectible, hand-knotted rugs into considered spaces."
        height="h-[58vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title}>
              <h3 className="font-serif text-xl">{b.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {b.text}
              </p>
            </div>
          ))}
        </div>

      </section>

      <section className="border-t border-line bg-paper-warm">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
            Why Designers Choose SUNDUS
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
            {whyTrade.map((w, i) => (
              <div key={w.title}>
                <div className="text-[11px] tracking-[0.15em] text-muted">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-serif text-xl">{w.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 gap-16 border-t border-line pt-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Apply for a Trade Account
            </h2>
            <div className="mt-4 h-px w-10 bg-ink/40" />
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted">
              Tell us about your studio and current project, and our team
              will follow up with pricing, lead times, and sample access.
              Already know which piece you&apos;d like a material sample of?
              Mention it in your message.
            </p>
          </div>
          <InquiryForm
            subject="Trade Account Application"
            roleOptions={["Interior Designer", "Architect", "Design Studio", "Other"]}
            submitLabel="Apply for Trade Account"
          />
        </div>
      </section>
    </>
  );
}
