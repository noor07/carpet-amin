"use client";

import Image from "@/components/Image";
import Lightbox from "@/components/Lightbox";
import { useState } from "react";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${x}% ${y}%`);
  }

  function openLightbox() {
    setHovering(false);
    setLightboxOpen(true);
  }

  return (
    <div className="flex gap-4">
      <div className="flex shrink-0 flex-col gap-3">
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

      <div
        role="button"
        tabIndex={0}
        aria-label={`Zoom in on ${alt}`}
        className="group relative aspect-[4/5] min-w-0 max-w-[720px] flex-1 cursor-zoom-in overflow-hidden bg-paper-warm"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={handleMouseMove}
        onClick={openLightbox}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLightbox();
          }
        }}
      >
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          className="object-cover transition-transform duration-300 ease-out"
          style={
            hovering
              ? { transform: "scale(1.8)", transformOrigin: zoomOrigin }
              : undefined
          }
        />
        <div className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center border border-white/70 bg-black/40 text-white opacity-0 transition group-hover:opacity-100">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 5V1H5M9 1H13V5M13 9V13H9M5 13H1V9"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          alt={alt}
          initialIndex={active}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setActive}
        />
      )}
    </div>
  );
}
