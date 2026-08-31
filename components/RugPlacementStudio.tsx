"use client";

import { useMemo, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  PLACEMENT_OPTIONS,
  ROOM_DEFAULTS,
  RUG_PRESETS,
  clamp,
  computeRug,
  evaluateFit,
  fmt,
  furnitureFor,
  type FurniturePiece,
  type Rug,
  type RoomType,
} from "@/lib/roomPlanner";

const VIEW_W = 700;
const VIEW_H = 600;
const PAD = 70;

type DragState = {
  target: number | "rug";
  startClientX: number;
  startClientY: number;
  origX: number;
  origY: number;
};

export default function RugPlacementStudio() {
  const [roomType, setRoomType] = useState<RoomType>("living");
  const [roomW, setRoomW] = useState(ROOM_DEFAULTS.living.w);
  const [roomL, setRoomL] = useState(ROOM_DEFAULTS.living.l);
  const [rugW, setRugW] = useState(8);
  const [rugL, setRugL] = useState(10);
  const [placement, setPlacement] = useState("front");
  const [furniture, setFurniture] = useState<FurniturePiece[]>(() => furnitureFor("living", ROOM_DEFAULTS.living.w, ROOM_DEFAULTS.living.l).pieces);
  // The rug's position is only ever recomputed explicitly (room/rug size changes,
  // switching room type, or Reset layout) — never derived live from furniture, so
  // dragging a piece (including the anchor) never drags the rug along with it.
  const [rug, setRug] = useState<Rug>(() =>
    computeRug("living", ROOM_DEFAULTS.living.w, ROOM_DEFAULTS.living.l, 8, 10, furnitureFor("living", ROOM_DEFAULTS.living.w, ROOM_DEFAULTS.living.l).pieces[0])
  );
  const [drag, setDrag] = useState<DragState | null>(null);

  const anchorIdx = 0;
  const isCustomRug = !RUG_PRESETS.some((p) => p.w === rugW && p.l === rugL);

  function resetLayout(nextType: RoomType = roomType, w = roomW, l = roomL) {
    const pieces = furnitureFor(nextType, w, l).pieces;
    setFurniture(pieces);
    setRug(computeRug(nextType, w, l, rugW, rugL, pieces[0]));
  }

  function handleRoomType(type: RoomType) {
    setRoomType(type);
    setPlacement("front");
    const d = ROOM_DEFAULTS[type];
    setRoomW(d.w);
    setRoomL(d.l);
    resetLayout(type, d.w, d.l);
  }

  function handleRoomDim(which: "w" | "l", value: number) {
    const v = Math.max(8, value || 8);
    const nextW = which === "w" ? v : roomW;
    const nextL = which === "l" ? v : roomL;
    if (which === "w") setRoomW(v);
    else setRoomL(v);
    setFurniture((prev) => {
      const clamped = prev.map((p) => ({
        ...p,
        x: clamp(p.x, 0, Math.max(0, nextW - p.w)),
        y: clamp(p.y, 0, Math.max(0, nextL - p.d)),
      }));
      setRug(computeRug(roomType, nextW, nextL, rugW, rugL, clamped[anchorIdx]));
      return clamped;
    });
  }

  function handleRugSize(w: number, l: number) {
    setRugW(w);
    setRugL(l);
    setRug(computeRug(roomType, roomW, roomL, w, l, furniture[anchorIdx]));
  }

  const scale = useMemo(() => {
    const availW = VIEW_W - 2 * PAD;
    const availH = VIEW_H - 2 * PAD;
    return Math.min(availW / roomW, availH / roomL);
  }, [roomW, roomL]);

  const { status, text } = useMemo(
    () => evaluateFit(roomType, rug, placement, furniture, anchorIdx),
    [roomType, rug, placement, furniture]
  );

  const drawW = roomW * scale;
  const drawH = roomL * scale;
  const ox = (VIEW_W - drawW) / 2;
  const oy = (VIEW_H - drawH) / 2 + 10;
  const px = (ft: number) => ft * scale;

  const rx = ox + px(Math.max(0, rug.x));
  const ry = oy + px(Math.max(0, rug.y));
  const rw = px(Math.min(rug.w, roomW - Math.max(0, rug.x)));
  const rl = px(Math.min(rug.l, roomL - Math.max(0, rug.y)));
  const fringeCount = Math.max(6, Math.round(rw / 9));

  const coverage = Math.min(100, Math.round((rugW * rugL) / (roomW * roomL) * 100));

  function onFurnPointerDown(e: ReactPointerEvent<SVGGElement>, idx: number) {
    const f = furniture[idx];
    setDrag({ target: idx, startClientX: e.clientX, startClientY: e.clientY, origX: f.x, origY: f.y });
    e.currentTarget.ownerSVGElement?.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  function onRugPointerDown(e: ReactPointerEvent<SVGGElement>) {
    setDrag({ target: "rug", startClientX: e.clientX, startClientY: e.clientY, origX: rug.x, origY: rug.y });
    e.currentTarget.ownerSVGElement?.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  function onSvgPointerMove(e: ReactPointerEvent<SVGSVGElement>) {
    if (!drag) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = VIEW_W / rect.width;
    const scaleY = VIEW_H / rect.height;
    const dxFt = ((e.clientX - drag.startClientX) * scaleX) / scale;
    const dyFt = ((e.clientY - drag.startClientY) * scaleY) / scale;

    if (drag.target === "rug") {
      setRug((prev) => ({
        ...prev,
        x: clamp(drag.origX + dxFt, 0, Math.max(0, roomW - prev.w)),
        y: clamp(drag.origY + dyFt, 0, Math.max(0, roomL - prev.l)),
      }));
      return;
    }

    setFurniture((prev) =>
      prev.map((p, i) =>
        i === drag.target
          ? {
              ...p,
              x: clamp(drag.origX + dxFt, 0, Math.max(0, roomW - p.w)),
              y: clamp(drag.origY + dyFt, 0, Math.max(0, roomL - p.d)),
            }
          : p
      )
    );
  }

  function endDrag() {
    setDrag(null);
  }

  const placementOptions = PLACEMENT_OPTIONS[roomType];

  return (
    <div className="bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          {/* Control panel */}
          <div className="border border-white/15 bg-white/[0.03] p-6">
            <div className="mb-6">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">Room Type</span>
                <button
                  onClick={() => resetLayout()}
                  className="text-[11px] text-white/50 underline hover:text-white"
                >
                  Reset layout
                </button>
              </div>
              <div className="flex border border-white/15">
                {(["living", "bedroom", "dining"] as RoomType[]).map((t, i) => (
                  <button
                    key={t}
                    onClick={() => handleRoomType(t)}
                    className={`flex-1 py-2.5 text-[12px] capitalize transition ${
                      i < 2 ? "border-r border-white/15" : ""
                    } ${roomType === t ? "bg-gold text-ink font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <span className="mb-2.5 block text-[10px] uppercase tracking-[0.16em] text-white/50">
                Room Dimensions (ft)
              </span>
              <div className="flex items-center gap-2.5">
                <input
                  type="number"
                  min={8}
                  max={28}
                  step={0.5}
                  value={roomW}
                  onChange={(e) => handleRoomDim("w", +e.target.value)}
                  className="w-full border border-white/15 bg-white/5 px-2.5 py-2 text-[14px] text-white outline-none focus:border-gold"
                />
                <span className="text-white/40">×</span>
                <input
                  type="number"
                  min={8}
                  max={28}
                  step={0.5}
                  value={roomL}
                  onChange={(e) => handleRoomDim("l", +e.target.value)}
                  className="w-full border border-white/15 bg-white/5 px-2.5 py-2 text-[14px] text-white outline-none focus:border-gold"
                />
              </div>
            </div>

            <div className="mb-6">
              <span className="mb-2.5 block text-[10px] uppercase tracking-[0.16em] text-white/50">Rug Size</span>
              <div className="mb-2.5 grid grid-cols-2 gap-2">
                {RUG_PRESETS.map((p) => (
                  <button
                    key={`${p.w}x${p.l}`}
                    onClick={() => handleRugSize(p.w, p.l)}
                    className={`border px-1.5 py-2 text-[12px] transition ${
                      !isCustomRug && rugW === p.w && rugL === p.l
                        ? "border-gold text-gold"
                        : "border-white/15 text-white/60 hover:border-white/30"
                    }`}
                  >
                    {p.w}&apos; × {p.l}&apos;
                  </button>
                ))}
                <span
                  className={`col-span-1 flex items-center justify-center border px-1.5 py-2 text-[12px] ${
                    isCustomRug ? "border-gold text-gold" : "border-white/15 text-white/60"
                  }`}
                >
                  Custom
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <input
                  type="number"
                  min={2}
                  max={20}
                  step={0.5}
                  value={rugW}
                  onChange={(e) => handleRugSize(Math.max(2, +e.target.value || 2), rugL)}
                  className="w-full border border-white/15 bg-white/5 px-2.5 py-2 text-[14px] text-white outline-none focus:border-gold"
                />
                <span className="text-white/40">×</span>
                <input
                  type="number"
                  min={2}
                  max={24}
                  step={0.5}
                  value={rugL}
                  onChange={(e) => handleRugSize(rugW, Math.max(2, +e.target.value || 2))}
                  className="w-full border border-white/15 bg-white/5 px-2.5 py-2 text-[14px] text-white outline-none focus:border-gold"
                />
              </div>
            </div>

            <div>
              <span className="mb-2.5 block text-[10px] uppercase tracking-[0.16em] text-white/50">Placement Rule</span>
              <div className="flex flex-col gap-2">
                {placementOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex cursor-pointer items-center gap-2.5 border px-2.5 py-2 text-[13px] transition ${
                      placement === opt.id ? "border-gold text-white" : "border-white/15 text-white/60 hover:border-gold/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="placement"
                      checked={placement === opt.id}
                      onChange={() => setPlacement(opt.id)}
                      className="accent-gold"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Stage + readout */}
          <div className="flex flex-col gap-4">
            <div className="relative border border-white/15 bg-white/[0.03] p-2.5">
              <div className="pointer-events-none absolute left-6 top-5 border border-white/15 bg-ink/70 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.08em] text-white/50">
                Drag the rug or furniture to rearrange
              </div>
              <svg
                viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                className="block w-full touch-none select-none"
                onPointerMove={onSvgPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
              >
                <rect x={ox} y={oy} width={drawW} height={drawH} fill="var(--paper-warm)" opacity={0.94} />
                <rect x={ox} y={oy} width={drawW} height={drawH} fill="none" stroke="#3a3222" strokeWidth={2} />

                {Array.from({ length: Math.floor(roomW) + 1 }).map((_, i) => (
                  <line
                    key={i}
                    x1={ox + px(i)}
                    y1={oy - 6}
                    x2={ox + px(i)}
                    y2={oy}
                    stroke="var(--muted)"
                    strokeWidth={1}
                  />
                ))}
                <text x={ox + drawW / 2} y={oy - 16} fill="var(--muted)" fontSize={10} textAnchor="middle" letterSpacing="0.05em">
                  {roomW}&apos; WIDE
                </text>
                <text
                  x={ox - 16}
                  y={oy + drawH / 2}
                  fill="var(--muted)"
                  fontSize={10}
                  textAnchor="middle"
                  letterSpacing="0.05em"
                  transform={`rotate(-90 ${ox - 16} ${oy + drawH / 2})`}
                >
                  {roomL}&apos; LONG
                </text>

                <defs>
                  <pattern id="weave" width={7} height={7} patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                    <rect width={7} height={7} fill="#7c2e2a" />
                    <line x1={0} y1={0} x2={0} y2={7} stroke="#5c211e" strokeWidth={1.6} />
                  </pattern>
                </defs>
                <g className="cursor-grab active:cursor-grabbing" onPointerDown={onRugPointerDown}>
                  <rect x={rx} y={ry} width={rw} height={rl} fill="url(#weave)" stroke="var(--gold)" strokeWidth={1.6} />
                  {[0, 1].map((side) =>
                    Array.from({ length: fringeCount + 1 }).map((_, i) => {
                      const fx = rx + (i / fringeCount) * rw;
                      const fy = side === 0 ? ry : ry + rl;
                      return (
                        <line
                          key={`${side}-${i}`}
                          x1={fx}
                          y1={fy}
                          x2={fx}
                          y2={fy + (side === 0 ? -5 : 5)}
                          stroke="var(--gold)"
                          strokeWidth={1}
                          opacity={0.75}
                        />
                      );
                    })
                  )}
                </g>

                {furniture.map((p, i) => {
                  const fx = ox + px(p.x),
                    fy = oy + px(p.y),
                    fw = px(p.w),
                    fd = px(p.d);
                  return (
                    <g key={i} className="cursor-grab active:cursor-grabbing" onPointerDown={(e) => onFurnPointerDown(e, i)}>
                      <rect x={fx} y={fy} width={fw} height={fd} fill="var(--ink)" stroke="var(--gold)" strokeWidth={1.2} opacity={0.95} />
                      <rect x={fx + 3} y={fy + 3} width={Math.max(0, fw - 6)} height={Math.max(0, fd * 0.4)} fill="#fff" opacity={0.06} />
                      {p.label && (
                        <text
                          x={fx + fw / 2}
                          y={fy + fd / 2 + 3}
                          fill="var(--muted)"
                          fontSize={9}
                          textAnchor="middle"
                          letterSpacing="0.05em"
                        >
                          {p.label}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="grid grid-cols-1 gap-px border border-white/15 bg-white/15 sm:grid-cols-3">
              <div className="bg-ink px-4 py-4 sm:px-5">
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/50">Rug Size</div>
                <div className="mt-1.5 font-serif text-xl">
                  {fmt(rugW)} × {fmt(rugL)}
                </div>
              </div>
              <div className="bg-ink px-4 py-4 sm:px-5">
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/50">Floor Covered</div>
                <div className="mt-1.5 font-serif text-xl">{coverage}%</div>
              </div>
              <div className="bg-ink px-4 py-4 sm:px-5">
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/50">Room</div>
                <div className="mt-1.5 font-serif text-xl">
                  {fmt(roomW)} × {fmt(roomL)}
                </div>
              </div>
              <div className="col-span-1 flex items-center gap-3 border-t border-white/15 bg-ink px-4 py-4 sm:col-span-3 sm:px-5">
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${status === "good" ? "bg-[#8fae7d]" : "bg-gold"}`}
                />
                <span className="text-[13px] text-white/85">{text}</span>
              </div>
            </div>

            <p className="text-center text-[11.5px] leading-relaxed text-white/40">
              A guide for planning purposes — for exact fabrication sizing, confirm dimensions with our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
