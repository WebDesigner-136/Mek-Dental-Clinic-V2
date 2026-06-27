"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import { Shell, Core } from "./Primitives";

export function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || reduced) return;
    timer.current = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduced]);

  const t = TESTIMONIALS[idx];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Shell>
        <Core className="relative p-8 sm:p-12">
          <div className="flex items-center gap-1 text-[color:var(--color-accent)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={reduced ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            >
              <p className="serif-accent mt-6 text-2xl leading-[1.5] text-[color:var(--color-ink)] sm:text-3xl">
                "{t.text}"
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-canvas-alt)] font-display text-sm font-semibold text-[color:var(--color-accent-dark)]">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted-sm)]">Verified Google Review</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 [transition-timing-function:var(--ease-house)] ${
                    i === idx ? "w-8 bg-[color:var(--color-accent)]" : "w-1.5 bg-[color:var(--color-hairline)]"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-hairline)] transition-colors hover:bg-[color:var(--color-canvas-alt)]"
              >
                <ChevronLeft strokeWidth={1.75} className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-hairline)] transition-colors hover:bg-[color:var(--color-canvas-alt)]"
              >
                <ChevronRight strokeWidth={1.75} className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Core>
      </Shell>
    </div>
  );
}
