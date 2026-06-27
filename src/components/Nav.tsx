"use client";

import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/site";
import { LinkButton } from "./Button";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 sm:pt-6">
        <nav
          className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)]/75 px-2 py-2 pl-5 backdrop-blur-xl transition-all duration-500 [transition-timing-function:var(--ease-house)] ${
            scrolled ? "shadow-[0_10px_40px_-20px_rgba(50,50,50,0.25)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--color-accent)] text-white">
              <span className="font-display text-sm font-bold">M</span>
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              Mek Dental
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="rounded-full px-3.5 py-2 text-sm text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-canvas-alt)]"
                  activeProps={{ className: "rounded-full px-3.5 py-2 text-sm bg-[color:var(--color-canvas-alt)] font-medium" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-canvas-alt)] lg:inline-flex"
            >
              <Phone strokeWidth={1.75} className="h-4 w-4" />
              <span className="font-mono text-[13px]">{CLINIC.phoneShort}</span>
            </a>
            <LinkButton
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="hidden sm:inline-flex"
            >
              Book Appointment
            </LinkButton>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-canvas-alt)] md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-px w-5 origin-center bg-[color:var(--color-ink)] transition-transform duration-500 [transition-timing-function:var(--ease-house)] ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-5 origin-center bg-[color:var(--color-ink)] transition-transform duration-500 [transition-timing-function:var(--ease-house)] ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-[color:var(--color-canvas)]/95 backdrop-blur-2xl md:hidden"
            initial={reduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? {} : { opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex h-full flex-col px-6 pb-12 pt-28">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={reduced ? {} : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block border-b border-[color:var(--color-hairline)] py-5 font-display text-3xl font-semibold tracking-tight"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-10">
                <LinkButton
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="w-full justify-between"
                >
                  Book Appointment
                </LinkButton>
                <LinkButton
                  href={`tel:${CLINIC.phoneTel}`}
                  variant="outline"
                  size="lg"
                  className="w-full justify-between"
                  icon={<Phone strokeWidth={1.75} className="h-4 w-4" />}
                >
                  Call {CLINIC.phoneShort}
                </LinkButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
