"use client";

import Image from "@/components/Image";
import { useState } from "react";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        {images.map((img, i) => (
          <button
            key={img + i}
            onClick={() => setActive(i)}
            className={`relative h-20 w-16 shrink-0 overflow-hidden border ${
              active === i ? "border-ink" : "border-transparent opacity-70"
            } transition`}
          >
            <Image src={img} alt={`${alt} view ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
      <div className="relative aspect-[4/5] w-[calc(100vw-6.5rem)] max-w-[420px] shrink-0 overflow-hidden bg-paper-warm md:w-[420px]">
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
