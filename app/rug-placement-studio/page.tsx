import type { Metadata } from "next";
import Hero from "@/components/Hero";
import RugPlacementStudio from "@/components/RugPlacementStudio";

export const metadata: Metadata = {
  title: "Rug Placement Studio — SUNDUS",
  description:
    "A working room, drawn to scale — drag the furniture into place and see exactly how a rug size sits underneath it before you order.",
};

export default function RugPlacementStudioPage() {
  return (
    <>
      <Hero
        image="/images/interiors/product-page-livingroom.jpg"
        eyebrow="Plan Before You Order"
        title="RUG PLACEMENT STUDIO"
        subtitle="See exactly how a size sits in your room."
        description="Choose a room type, set your dimensions, and drag the furniture into place — the rug resizes and rates itself against real placement rules as you go."
        height="h-[56vh]"
      />
      <RugPlacementStudio />
    </>
  );
}
