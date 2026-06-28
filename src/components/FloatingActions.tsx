"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { CLINIC } from "@/lib/site";

function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.7 4.5 1.9 6.4L4 29l7.9-1.9c1.8 1 3.9 1.5 6.1 1.5h.1c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8h-.1c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.7 1.1 1.2-4.6-.3-.4c-1-1.6-1.6-3.4-1.6-5.4 0-5.5 4.5-10 10-10 5.6 0 10.1 4.4 10.1 10s-4.5 10-9.9 10zm5.5-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .2.2 2 3.1 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z" />
    </svg>
  );
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, opts?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 print:hidden">
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Scroll to top"
        className={`grid h-12 w-12 place-items-center rounded-full bg-[color:var(--color-surface)] text-[color:var(--color-ink)] shadow-[0_10px_30px_-12px_rgba(50,50,50,0.3)] hairline transition-all duration-500 [transition-timing-function:var(--ease-house)] hover:scale-105 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp strokeWidth={1.75} className="h-5 w-5" />
      </button>

      <a
        href={CLINIC.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book via WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.55)] transition-transform duration-500 [transition-timing-function:var(--ease-house)] hover:scale-105 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        <span
          aria-hidden
          className="no-motion pointer-events-none absolute inset-0 rounded-full"
          style={{ backgroundColor: "#25D366", animation: "pulse-ring 2.4s var(--ease-house) infinite" }}
        />
        <WhatsAppGlyph className="relative h-7 w-7" />
      </a>
    </div>
  );
}
