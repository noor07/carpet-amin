import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
        404
      </div>
      <h1 className="mt-4 font-serif text-4xl md:text-5xl">Page Not Found</h1>
      <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist, or may have moved. Explore
        our collections or head back home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.15em] transition hover:bg-ink hover:text-white"
        >
          Back to Home
        </Link>
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] hover:text-muted"
        >
          View Collections
        </Link>
      </div>
    </div>
  );
}
