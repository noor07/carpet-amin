import Image from "next/image";
import Link from "next/link";
import { Rug } from "@/lib/rugs";

export default function RugCard({
  rug,
  eager = false,
}: {
  rug: Rug;
  eager?: boolean;
}) {
  return (
    <Link href={`/collections/${rug.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-warm">
        <Image
          src={rug.image}
          alt={rug.name}
          fill
          loading={eager ? "eager" : "lazy"}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="mt-4 text-[13px] uppercase tracking-[0.12em]">
        {rug.name}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">
        {rug.description}
      </p>
      <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-ink">
        View Details
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
          <path
            d="M0 4.5H13M13 4.5L9 0.5M13 4.5L9 8.5"
            stroke="currentColor"
            strokeWidth="1.1"
          />
        </svg>
      </span>
    </Link>
  );
}
