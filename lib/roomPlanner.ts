export type RoomType = "living" | "bedroom" | "dining";

export type FurniturePiece = {
  x: number;
  y: number;
  w: number;
  d: number;
  label: string;
};

export type PlacementOption = { id: string; label: string };

export const PLACEMENT_OPTIONS: Record<RoomType, PlacementOption[]> = {
  living: [
    { id: "front", label: "Front legs on rug" },
    { id: "all", label: "All legs on rug" },
    { id: "float", label: "Floating, rug clear of furniture" },
  ],
  bedroom: [
    { id: "front", label: "Rug peeks out from under bed (2/3 exposed)" },
    { id: "all", label: "Bed fully on rug" },
    { id: "float", label: "Runners at bedside instead" },
  ],
  dining: [
    { id: "front", label: "Chairs stay on rug when pulled out" },
    { id: "all", label: "Rug matches table footprint only" },
    { id: "float", label: "Floating, rug clear of table" },
  ],
};

export const ROOM_DEFAULTS: Record<RoomType, { w: number; l: number }> = {
  living: { w: 14, l: 16 },
  bedroom: { w: 12, l: 13 },
  dining: { w: 13, l: 14 },
};

export const RUG_PRESETS = [
  { w: 5, l: 8 },
  { w: 6, l: 9 },
  { w: 8, l: 10 },
  { w: 9, l: 12 },
  { w: 10, l: 14 },
];

export function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

export function furnitureFor(
  type: RoomType,
  roomW: number,
  roomL: number
): { pieces: FurniturePiece[]; anchorIdx: number } {
  if (type === "living") {
    const sofaW = Math.min(7, roomW * 0.55),
      sofaD = 3;
    const sofa: FurniturePiece = { x: roomW / 2 - sofaW / 2, y: roomL - sofaD, w: sofaW, d: sofaD, label: "SOFA" };
    const chairW = 2.4,
      chairD = 2.4;
    const chairL: FurniturePiece = {
      x: Math.max(0.6, sofa.x - chairW - 1.3),
      y: sofa.y - 2.6,
      w: chairW,
      d: chairD,
      label: "CHAIR",
    };
    const chairR: FurniturePiece = {
      x: Math.min(roomW - chairW - 0.6, sofa.x + sofa.w + 1.3),
      y: sofa.y - 2.6,
      w: chairW,
      d: chairD,
      label: "CHAIR",
    };
    const tableW = 3.6,
      tableD = 1.8;
    const table: FurniturePiece = {
      x: roomW / 2 - tableW / 2,
      y: sofa.y - tableD - 1.3,
      w: tableW,
      d: tableD,
      label: "TABLE",
    };
    return { pieces: [sofa, chairL, chairR, table], anchorIdx: 0 };
  }
  if (type === "bedroom") {
    const bedW = Math.min(5.2, roomW * 0.5),
      bedD = 6.6;
    const bed: FurniturePiece = { x: roomW / 2 - bedW / 2, y: 0.6, w: bedW, d: bedD, label: "BED" };
    const nsW = 1.4,
      nsD = 1.4;
    const nsL: FurniturePiece = { x: bed.x - nsW - 0.3, y: 0.6, w: nsW, d: nsD, label: "" };
    const nsR: FurniturePiece = { x: bed.x + bed.w + 0.3, y: 0.6, w: nsW, d: nsD, label: "" };
    return { pieces: [bed, nsL, nsR], anchorIdx: 0 };
  }
  const tableW = 3.6,
    tableD = 6.0;
  const table: FurniturePiece = {
    x: roomW / 2 - tableW / 2,
    y: roomL / 2 - tableD / 2,
    w: tableW,
    d: tableD,
    label: "TABLE",
  };
  const chairs: FurniturePiece[] = [];
  const chairW = 1.4,
    chairD = 1.4;
  for (let i = 0; i < 2; i++) {
    chairs.push({ x: table.x + tableW * 0.18 + i * tableW * 0.46, y: table.y - chairD - 0.5, w: chairW, d: chairD, label: "" });
    chairs.push({ x: table.x + tableW * 0.18 + i * tableW * 0.46, y: table.y + tableD + 0.5, w: chairW, d: chairD, label: "" });
  }
  return { pieces: [table, ...chairs], anchorIdx: 0 };
}

export type Rug = { x: number; y: number; w: number; l: number };
export type Fit = { status: "good" | "warn"; text: string };

function rectOverlap(
  a: { x: number; y: number; w: number; l: number },
  b: { x: number; y: number; w: number; l: number }
): boolean {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.l && a.y + a.l > b.y;
}

/**
 * Where the rug sits, given the anchor piece's position at the moment this is called.
 * This is deliberately NOT re-run on every render — only when the room type, room
 * dimensions, or rug size change (or the layout is reset) — so the rug stays put
 * while you drag furniture around it instead of chasing the anchor piece.
 */
export function computeRug(
  type: RoomType,
  roomW: number,
  roomL: number,
  rugW: number,
  rugL: number,
  anchor: FurniturePiece
): Rug {
  if (type === "living") {
    const bottom = anchor.y + anchor.d;
    return {
      x: clamp(anchor.x + anchor.w / 2 - rugW / 2, 0, Math.max(0, roomW - rugW)),
      y: Math.max(0, bottom - rugL),
      w: rugW,
      l: rugL,
    };
  }
  if (type === "bedroom") {
    return {
      x: clamp(anchor.x + anchor.w / 2 - rugW / 2, 0, Math.max(0, roomW - rugW)),
      y: anchor.y,
      w: rugW,
      l: rugL,
    };
  }
  // dining
  return {
    x: clamp(anchor.x + anchor.w / 2 - rugW / 2, 0, Math.max(0, roomW - rugW)),
    y: clamp(anchor.y + anchor.d / 2 - rugL / 2, 0, Math.max(0, roomL - rugL)),
    w: rugW,
    l: rugL,
  };
}

/**
 * How well the (fixed) rug fits given the furniture's CURRENT positions — safe to
 * re-run on every render, including mid-drag, since it never moves the rug itself.
 */
export function evaluateFit(
  type: RoomType,
  rug: Rug,
  placement: string,
  furniture: FurniturePiece[],
  anchorIdx: number
): Fit {
  const anchor = furniture[anchorIdx];

  if (type === "living") {
    const rugBottom = rug.y + rug.l;
    let status: "good" | "warn", text: string;
    if (rugBottom < anchor.y - 0.3) {
      status = "warn";
      text = `This size leaves a gap before the sofa — floats short of the seating area.`;
    } else if (rugBottom < anchor.y + anchor.d - 0.2) {
      status = placement === "front" ? "good" : "warn";
      text = `Rug reaches the sofa's front legs only, back legs stay on bare floor. ${
        placement === "front"
          ? "Matches your placement rule."
          : `Try a larger rug to satisfy "${PLACEMENT_OPTIONS.living.find((p) => p.id === placement)!.label}."`
      }`;
    } else {
      status = placement === "all" ? "good" : "warn";
      text = `Rug runs the full depth of the sofa, all legs sit on the rug. ${
        placement === "all"
          ? "Matches your placement rule."
          : `Try a smaller rug to satisfy "${PLACEMENT_OPTIONS.living.find((p) => p.id === placement)!.label}."`
      }`;
    }
    if (placement === "float") {
      const overlapsAny = furniture.some((p) => rectOverlap(rug, { x: p.x, y: p.y, w: p.w, l: p.d }));
      status = overlapsAny ? "warn" : "good";
      text = overlapsAny
        ? `Rug currently touches furniture — pull the size down or drag pieces apart to keep it floating clear.`
        : `Rug floats clear of every piece, as intended.`;
    }
    return { status, text };
  }

  if (type === "bedroom") {
    const rugBottom = rug.y + rug.l;
    const bedBottom = anchor.y + anchor.d;
    let status: "good" | "warn", text: string;
    if (rugBottom >= bedBottom + 0.2) {
      status = placement === "all" ? "good" : "warn";
      text = `Rug extends past the foot of the bed — full coverage. ${placement === "all" ? "Matches your placement rule." : ""}`;
    } else if (rugBottom > anchor.y + anchor.d * 0.5) {
      status = placement === "front" ? "good" : "warn";
      text = `About a third of the bed sits on the rug, the rest peeks out at the foot — the classic two-thirds-exposed look. ${
        placement === "front" ? "Matches your placement rule." : ""
      }`;
    } else {
      status = "warn";
      text = `Rug is quite shallow under the bed — consider a longer size, or pair with bedside runners instead.`;
    }
    return { status, text };
  }

  // dining
  const pulloutClear = rug.w >= anchor.w + 4.4 && rug.l >= anchor.d + 4.4;
  const status: "good" | "warn" = pulloutClear ? "good" : "warn";
  const text = pulloutClear
    ? `Chairs stay on the rug even pulled fully out from the table.`
    : `Chairs will roll off the rug edge when pulled out — add at least 24" of rug beyond the table on every side.`;
  return { status, text };
}

export function fmt(v: number): string {
  const whole = Math.floor(v);
  const frac = v - whole;
  return frac === 0 ? `${whole}'` : `${whole}'${Math.round(frac * 12)}"`;
}
