import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/site";

function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.7 4.5 1.9 6.4L4 29l7.9-1.9c1.8 1 3.9 1.5 6.1 1.5h.1c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8h-.1c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.7 1.1 1.2-4.6-.3-.4c-1-1.6-1.6-3.4-1.6-5.4 0-5.5 4.5-10 10-10 5.6 0 10.1 4.4 10.1 10s-4.5 10-9.9 10z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-alt)]/60">
      <div className="container-edge py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-accent)] text-white font-display font-bold">
                M
              </span>
              <span className="font-display text-lg font-semibold">Mek Dental Clinic</span>
            </Link>
            <p className="serif-accent mt-5 max-w-sm text-xl text-[color:var(--color-ink-muted)]">
              A calm clinic, a specialist endodontist, and a smile you'll stop hiding.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={CLINIC.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-accent)] hover:text-white"
              >
                <Instagram strokeWidth={1.5} className="h-4 w-4" />
              </a>
              <a
                href={CLINIC.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-accent)] hover:text-white"
              >
                <Linkedin strokeWidth={1.5} className="h-4 w-4" />
              </a>
              <a
                href={CLINIC.whatsapp}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-accent)] hover:text-white"
              >
                <WhatsAppGlyph className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink-muted-sm)]">
              Visit
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[color:var(--color-ink-muted-sm)]">
              <li className="flex gap-3"><MapPin strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent)]" /><span>{CLINIC.address}</span></li>
              <li className="flex gap-3"><Phone strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent)]" /><a href={`tel:${CLINIC.phoneTel}`} className="hover:text-[color:var(--color-accent)]">{CLINIC.phone}</a></li>
              <li className="flex gap-3"><Mail strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent)]" /><a href={`mailto:${CLINIC.email}`} className="hover:text-[color:var(--color-accent)]">{CLINIC.email}</a></li>
              <li className="flex gap-3"><Clock strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent)]" /><span>{CLINIC.hours}</span></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink-muted-sm)]">
              Explore
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--color-hairline)] pt-8 text-xs text-[color:var(--color-ink-muted-sm)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Mek Dental Clinic. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-[color:var(--color-accent)]">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[color:var(--color-accent)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
