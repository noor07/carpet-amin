import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-warm">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
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

          <nav className="flex flex-col gap-3 text-[12px] uppercase tracking-[0.12em] text-muted md:col-span-2 md:flex-row md:justify-center md:gap-10">
            <Link href="/collections" className="hover:text-ink">
              Collections
            </Link>
            <Link href="/about" className="hover:text-ink">
              About
            </Link>
            <Link href="/trade" className="hover:text-ink">
              Trade
            </Link>
            <Link href="/journal" className="hover:text-ink">
              Journal
            </Link>
            <Link href="/contact" className="hover:text-ink">
              Contact
            </Link>
          </nav>

          <div className="text-[13px] leading-relaxed text-muted md:text-right">
            <p>info@houseofsundus.com</p>
            <p>Jacksonville, Florida, USA</p>
            <div className="mt-4 flex gap-4 uppercase tracking-[0.12em] text-[11px] md:justify-end">
              <a href="#" className="hover:text-ink">
                Instagram
              </a>
              <a href="#" className="hover:text-ink">
                Pinterest
              </a>
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
