import type { Metadata } from "next";
import Hero from "@/components/Hero";

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

          <form className="space-y-5">
            <div>
              <label className="text-[11px] uppercase tracking-[0.15em] text-muted">
                Name
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[14px] outline-none focus:border-ink"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.15em] text-muted">
                Email
              </label>
              <input
                type="email"
                className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[14px] outline-none focus:border-ink"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.15em] text-muted">
                I am a
              </label>
              <select className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[14px] outline-none focus:border-ink">
                <option>Private Collector</option>
                <option>Interior Designer</option>
                <option>Architect</option>
                <option>Trade Partner</option>
                <option>Press / Media</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.15em] text-muted">
                Message
              </label>
              <textarea
                rows={5}
                className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[14px] outline-none focus:border-ink"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-ink py-3.5 text-[12px] uppercase tracking-[0.15em] text-white hover:bg-ink/90"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
