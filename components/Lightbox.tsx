"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "@/components/Image";

export default function Lightbox({
  images,
  alt,
  initialIndex,
  onClose,
  onIndexChange,
}: {
  images: string[];
  alt: string;
  initialIndex: number;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const next = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, next, prev]);

  function handleImageClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!zoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setOrigin(`${x}% ${y}%`);
    }
    setZoomed((z) => !z);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} image viewer`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 text-white/80 transition hover:text-white"
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M4 4L22 22M22 4L4 22" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-2 text-white/70 transition hover:text-white md:left-6"
          >
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
              <path d="M12 2L2 12L12 22" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-2 text-white/70 transition hover:text-white md:right-6"
          >
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
              <path d="M2 2L12 12L2 22" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </>
      )}

      <div
        className={`relative h-full w-full max-w-4xl overflow-hidden ${
          zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          handleImageClick(e);
        }}
      >
        <Image
          src={images[index]}
          alt={`${alt} — image ${index + 1} of ${images.length}`}
          fill
          priority
          sizes="100vw"
          className="object-contain transition-transform duration-300 ease-out"
          style={{
            transform: zoomed ? "scale(2.2)" : "scale(1)",
            transformOrigin: origin,
          }}
        />
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.15em] text-white/60">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
