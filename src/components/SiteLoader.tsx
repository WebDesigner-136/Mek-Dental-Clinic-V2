"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CLINIC } from "@/lib/site";

const STORAGE_KEY = "mek_loader_seen";

export function SiteLoader() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only show once per session for a luxurious feel without annoyance
    const seen = typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY);
    if (seen) return;

    setVisible(true);
    document.body.style.overflow = "hidden";
    const dur = reduced ? 600 : 2200;
    const t = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    }, dur);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduced]);

  if (!mounted) return null;

  const ease = [0.32, 0.72, 0, 1] as const;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="site-loader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease }}
          aria-hidden
        >
          {/* Background — clinic palette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 40%, #3a3a3a 0%, #232323 55%, #161616 100%)",
            }}
          />
          {/* Slate orb glow */}
          <motion.div
            className="absolute h-[60vmin] w-[60vmin] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(109,118,125,0.45) 0%, rgba(109,118,125,0) 70%)",
              filter: "blur(20px)",
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1.6, ease }}
          />

          {/* Curtain reveal — splits open at the end */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#faf8f5]"
            initial={{ x: "-101%" }}
            animate={{ x: "-101%" }}
            exit={{ x: 0 }}
            transition={{ duration: 1.1, ease }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#faf8f5]"
            initial={{ x: "101%" }}
            animate={{ x: "101%" }}
            exit={{ x: 0 }}
            transition={{ duration: 1.1, ease }}
          />

          {/* Logo + name */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
          >
            {/* Monogram mark */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 0 60px 10px rgba(109,118,125,0.35)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
              />
              <div
                className="relative grid h-20 w-20 place-items-center rounded-full border border-white/15"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#faf8f5]">
                  <span
                    className="text-2xl font-bold tracking-tight text-[#232323]"
                    style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    M
                  </span>
                </div>
              </div>
            </div>

            {/* Wordmark */}
            <div className="flex flex-col items-center gap-1.5">
              <motion.h1
                className="text-center text-white"
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  fontSize: "clamp(1.5rem, 3vw + 0.5rem, 2.25rem)",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.35 }}
              >
                {CLINIC.name}
              </motion.h1>

              {/* Animated hairline */}
              <motion.div
                className="h-px bg-white/30"
                initial={{ width: 0 }}
                animate={{ width: 140 }}
                transition={{ duration: 1.2, ease, delay: 0.45 }}
              />

              <motion.p
                className="text-[11px] uppercase tracking-[0.32em] text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, ease, delay: 0.7 }}
              >
                {CLINIC.doctor}
              </motion.p>
            </div>

            {/* Bottom progress line */}
            <motion.div
              className="mt-6 h-[2px] w-44 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.div
                className="h-full w-full origin-left bg-gradient-to-r from-white/40 via-white/80 to-white/40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduced ? 0.4 : 1.6, ease, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
