"use client";

import { Suspense, lazy, useEffect, useState } from "react";

const Live = lazy(() => import("./ToothCanvas3D.live"));

function StaticFallback({ className }: { className?: string }) {
  // Soft abstract gradient orb — stands in for the 3D molar on mobile/low-end.
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden>
      <div
        className="absolute inset-0 rounded-full opacity-90 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #ffffff 0%, #f4f0ea 35%, #d9d1c4 70%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-8 rounded-full opacity-60 blur-xl"
        style={{
          background:
            "radial-gradient(circle at 65% 70%, var(--color-accent-light) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

export function ToothCanvas3D({ className = "" }: { className?: string }) {
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    // crude low-end heuristic
    const lowEnd =
      // @ts-expect-error deviceMemory non-standard
      (navigator.deviceMemory && navigator.deviceMemory < 4) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
    if (!reduced && !small && !lowEnd) setEnable(true);
  }, []);

  if (!enable) return <StaticFallback className={className} />;
  return (
    <Suspense fallback={<StaticFallback className={className} />}>
      <Live className={className} />
    </Suspense>
  );
}
