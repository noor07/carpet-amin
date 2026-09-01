"use client";

import Link from "next/link";
import { useState } from "react";
import { collections } from "@/lib/rugs";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/trade", label: "Trade" },
  { href: "/rug-placement-studio", label: "Placement Studio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/35 to-transparent" />
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="leading-none">
          <div className="font-serif text-xl tracking-widest-xl md:text-2xl">
            SUNDUS
          </div>
          <div className="mt-1 text-[9px] tracking-[0.25em] text-white/70 md:text-[10px]">
            COLLECTIBLE RUGS &amp; INTERIORS
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-[12px] tracking-[0.15em] lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setCollectionsOpen(true)}
            onMouseLeave={() => setCollectionsOpen(false)}
          >
            <Link
              href="/collections"
              className="flex items-center gap-1 uppercase hover:text-white/70"
            >
              Collections
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path
                  d="M1 1L4.5 5L8 1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </Link>
            {collectionsOpen && (
              <div className="absolute left-0 top-full w-56 border border-white/15 bg-ink/95 py-2 text-white backdrop-blur-sm">
                {collections.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/collections#${c.slug}`}
                    className="block px-4 py-2.5 text-[11px] uppercase tracking-[0.12em] hover:bg-white/10"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="uppercase hover:text-white/70"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="border border-white/70 px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] transition hover:bg-white hover:text-ink"
          >
            Inquiry
          </Link>
        </div>

        <button
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M0 1H22" stroke="currentColor" strokeWidth="1.4" />
            <path d="M0 8H22" stroke="currentColor" strokeWidth="1.4" />
            <path d="M0 15H22" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="bg-ink px-6 pb-6 text-white lg:hidden">
          <div className="flex flex-col gap-4 pt-2 text-[12px] uppercase tracking-[0.15em]">
            <Link href="/collections" onClick={() => setMobileOpen(false)}>
              Collections
            </Link>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-fit border border-white/70 px-6 py-2.5"
            >
              Inquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
