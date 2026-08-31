import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-warm">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div>
            <div className="font-serif text-lg tracking-widest-xl">SUNDUS</div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">
              Collectible Rugs &amp; Interiors
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              Designed in Florida, USA.
              <br />
              Handcrafted in Bhadohi, India.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-[12px] uppercase tracking-[0.12em] text-muted">
            <div className="mb-1 text-[10px] tracking-[0.15em] text-muted/70">Explore</div>
            <Link href="/collections" className="hover:text-ink">Collections</Link>
            <Link href="/projects" className="hover:text-ink">In The Room</Link>
            <Link href="/rug-placement-studio" className="hover:text-ink">Placement Studio</Link>
            <Link href="/journal" className="hover:text-ink">Journal</Link>
            <Link href="/about" className="hover:text-ink">About</Link>
          </nav>

          <nav className="flex flex-col gap-3 text-[12px] uppercase tracking-[0.12em] text-muted">
            <div className="mb-1 text-[10px] tracking-[0.15em] text-muted/70">Trade &amp; Support</div>
            <Link href="/trade" className="hover:text-ink">Trade</Link>
            <Link href="/wholesale" className="hover:text-ink">Wholesale</Link>
            <Link href="/care" className="hover:text-ink">Care Guide</Link>
            <Link href="/faq" className="hover:text-ink">FAQ</Link>
            <Link href="/contact" className="hover:text-ink">Contact</Link>
            <Link href="/press" className="hover:text-ink">Press</Link>
            <Link href="/policies" className="hover:text-ink">Policies</Link>
          </nav>

          <div className="text-[13px] leading-relaxed text-muted">
            <NewsletterSignup />
            <div className="mt-8 border-t border-line pt-6">
              <p>info@houseofsundus.com</p>
              <p>Jacksonville, Florida, USA</p>
              <div className="mt-4 flex gap-4 uppercase tracking-[0.12em] text-[11px]">
                <a
                  href="https://www.instagram.com/houseofsundus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-center text-[11px] text-muted">
          © {new Date().getFullYear()} House of Sundus LLC
        </div>
      </div>
    </footer>
  );
}
