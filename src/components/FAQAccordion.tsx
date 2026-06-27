"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQ { q: string; a: string }

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  return (
    <ul className="divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[color:var(--color-accent)]"
            >
              <span className="font-display text-lg font-medium tracking-tight sm:text-xl">{item.q}</span>
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--color-canvas-alt)] transition-transform duration-500 [transition-timing-function:var(--ease-house)] ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <Plus strokeWidth={1.75} className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-[color:var(--color-ink-muted-sm)] leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
