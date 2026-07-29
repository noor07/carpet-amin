"use client";

export default function SpecSheetButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted hover:text-ink"
    >
      Download Spec Sheet ↓
    </button>
  );
}
