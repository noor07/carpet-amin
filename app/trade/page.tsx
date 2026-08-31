import type { Metadata } from "next";
import Hero from "@/components/Hero";
import InquiryForm from "@/components/InquiryForm";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Trade — SUNDUS",
  description: "Trade partnerships for designers, architects, and studios.",
};

const benefits = [
  {
    title: "Trade Pricing",
    text: "Tiered trade pricing based on project scope, with net payment terms available for approved accounts. Contact us for current rates.",
  },
  {
    title: "Custom Sizing",
    text: "Every design can be produced to custom dimensions, palettes, and pile heights for your project.",
  },
  {
    title: "Sample Program",
    text: "Request a physical material and colorway sample before committing to a full production run — ask when you apply.",
  },
  {
    title: "Dedicated Support",
    text: "A direct point of contact for lead times, specification sheets, and project coordination.",
  },
];

const process = [
  {
    title: "Consultation & Brief",
    text: "Share your project, space, and vision. We'll help you choose from an existing design or scope a fully custom piece.",
  },
  {
    title: "Design & Material Selection",
    text: "Review color, size, pile height, and material options, and approve a final specification before production begins.",
  },
  {
    title: "Deposit & Production",
    text: "A 50% deposit begins hand-knotting in our Bhadohi workshop. Standard collection pieces run 8–10 weeks; fully custom designs may take longer depending on complexity.",
  },
  {
    title: "Balance & Delivery",
    text: "The remaining balance is due before your rug ships. We coordinate delivery to your project site.",
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
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
          How Custom Ordering Works
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {process.map((p, i) => (
            <div key={p.title}>
              <div className="text-[11px] tracking-[0.15em] text-muted">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-serif text-xl">{p.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

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
