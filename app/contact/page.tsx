import type { Metadata } from "next";
import Hero from "@/components/Hero";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact — SUNDUS",
  description: "Get in touch with SUNDUS for inquiries and private consultations.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        image="/images/interiors/product-page-livingroom.jpg"
        eyebrow="Get in Touch"
        title="CONTACT"
        subtitle="We'd love to hear from you."
        height="h-[50vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
              Inquiries
            </div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Let&apos;s Start a Conversation
            </h2>
            <div className="mt-4 h-px w-10 bg-ink/40" />
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted">
              Whether you&apos;re a private collector, designer, or architect,
              we&apos;re here to help you find or create the right piece for
              your space.
            </p>

            <div className="mt-10 space-y-6 text-[14px]">
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-muted">
                  Email
                </div>
                <div className="mt-1">info@houseofsundus.com</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-muted">
                  Studio
                </div>
                <div className="mt-1">Jacksonville, Florida, USA</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-muted">
                  Workshop
                </div>
                <div className="mt-1">Bhadohi, Uttar Pradesh, India</div>
              </div>
            </div>
          </div>

          <InquiryForm
            subject="Website Inquiry"
            roleOptions={[
              "Private Collector",
              "Interior Designer",
              "Architect",
              "Trade Partner",
              "Press / Media",
            ]}
            submitLabel="Send Inquiry"
          />
        </div>
      </section>
    </>
  );
}
