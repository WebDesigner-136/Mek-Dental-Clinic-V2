"use client";

import { useRef, useState, useCallback } from "react";
import { ImageFrame } from "./ImageFrame";
import type { Service } from "@/lib/site";

interface Props {
  label: string;
  iconKey?: Service["iconKey"];
}

export function BeforeAfterSlider({ label, iconKey = "smile" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  return (
    <div
      ref={ref}
      className="group relative aspect-[5/4] w-full touch-none select-none overflow-hidden rounded-[1.5rem] border border-[color:var(--color-hairline)] shadow-[0_25px_60px_-30px_rgba(50,50,50,0.4)]"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* AFTER (base layer) */}
      <div className="absolute inset-0">
        <ImageFrame label={`AFTER · ${label}`} iconKey={iconKey} className="h-full w-full" rounded="rounded-none" />
        <span className="absolute right-4 top-4 rounded-full bg-[color:var(--color-accent)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white">After</span>
      </div>
      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <ImageFrame label={`BEFORE · ${label}`} iconKey={iconKey} className="h-full w-full" rounded="rounded-none" />
        <span className="absolute left-4 top-4 rounded-full bg-[color:var(--color-ink)]/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">Before</span>
      </div>
      {/* Handle */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-10 -translate-x-1/2"
        style={{ left: `${pos}%` }}
      >
        <div className="h-full w-px bg-white/90 shadow-[0_0_0_1px_rgba(50,50,50,0.15)]" />
        <div className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[color:var(--color-ink)] shadow-[0_10px_30px_-8px_rgba(50,50,50,0.4)]">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
