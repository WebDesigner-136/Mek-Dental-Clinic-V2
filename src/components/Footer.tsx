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
    <footer
      className="mt-24 relative overflow-hidden text-[#e8e9ea]"
      style={{
        background:
          "linear-gradient(180deg, #323232 0%, #2a2a2a 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 15% 0%, #6d767d 0%, transparent 45%), radial-gradient(circle at 85% 100%, #6d767d 0%, transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #6d767d, transparent)" }}
      />

      <div className="container-edge relative py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#6d767d] text-white font-display font-bold">
                M
              </span>
              <span className="font-display text-lg font-semibold text-white">Mek Dental Clinic</span>
            </Link>
            <p className="serif-accent mt-5 max-w-sm text-xl text-[#c8cacc]">
              A calm clinic, a specialist endodontist, and a smile you'll stop hiding.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: CLINIC.instagram, label: "Instagram", icon: <Instagram strokeWidth={1.5} className="h-4 w-4" /> },
                { href: CLINIC.linkedin, label: "LinkedIn", icon: <Linkedin strokeWidth={1.5} className="h-4 w-4" /> },
                { href: CLINIC.whatsapp, label: "WhatsApp", icon: <WhatsAppGlyph className="h-4 w-4" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[#e8e9ea] backdrop-blur-sm transition-all duration-300 hover:bg-[#6d767d] hover:border-[#6d767d] hover:text-white hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#6d767d]">
              Visit
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[#c8cacc]">
              <li className="flex gap-3"><MapPin strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-[#6d767d]" /><span>{CLINIC.address}</span></li>
              <li className="flex gap-3"><Phone strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-[#6d767d]" /><a href={`tel:${CLINIC.phoneTel}`} className="hover:text-white transition-colors">{CLINIC.phone}</a></li>
              <li className="flex gap-3"><Mail strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-[#6d767d]" /><a href={`mailto:${CLINIC.email}`} className="hover:text-white transition-colors">{CLINIC.email}</a></li>
              <li className="flex gap-3"><Clock strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-[#6d767d]" /><span>{CLINIC.hours}</span></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#6d767d]">
              Explore
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[#c8cacc] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#8d959c] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Mek Dental Clinic. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
