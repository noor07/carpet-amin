import Image from "@/components/Image";
import { ReactNode } from "react";

export default function Hero({
  image,
  eyebrow,
  title,
  subtitle,
  description,
  children,
  height = "h-[78vh]",
  priority = true,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  children?: ReactNode;
  height?: string;
  priority?: boolean;
}) {
  return (
    <section className={`relative ${height} min-h-[520px] w-full overflow-hidden`}>
      <Image
        src={image}
        alt={title}
        fill
        priority={priority}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/50" />
      <div className="relative z-10 flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:mx-auto md:px-10 md:pb-20">
        {eyebrow && (
          <div className="mb-3 text-[11px] uppercase tracking-[0.25em] text-white/70">
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-5xl leading-[1.05] text-white md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl font-serif text-xl italic text-white/90 md:text-2xl">
            {subtitle}
          </p>
        )}
        {description && (
          <div className="mt-5 max-w-md text-[14px] leading-relaxed text-white/80">
            {description}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
