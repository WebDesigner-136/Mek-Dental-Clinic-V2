import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { CLINIC } from "@/lib/site";
import { Eyebrow, SectionHeader } from "@/components/Primitives";
import { LinkButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { MapEmbed } from "@/components/MapEmbed";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Mek Dental Clinic" },
      { name: "description", content: "Book your appointment in Hadath, Baabda. WhatsApp, call, or send a request — Mon–Fri, 9AM–7PM." },
      { property: "og:title", content: "Contact & Book — Mek Dental Clinic" },
      { property: "og:description", content: "Book your appointment in Hadath, Baabda." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="container-edge pt-10 sm:pt-16">
        <Reveal><Eyebrow>GET IN TOUCH</Eyebrow></Reveal>
        <Reveal delay={0.05}><h1 className="h-display mt-6 max-w-4xl">Let's Get You Smiling Again.</h1></Reveal>
        <Reveal delay={0.1}>
          <p className="serif-accent mt-6 max-w-2xl text-2xl text-[color:var(--color-ink-muted)] sm:text-3xl">
            WhatsApp is the fastest way to reach us — we usually reply within the hour.
          </p>
        </Reveal>
      </section>

      <section className="section-pad container-edge">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">The Clinic</h2>
              <ul className="mt-6 space-y-4 text-[color:var(--color-ink-muted-sm)]">
                <Item icon={<MapPin />} label="Address">{CLINIC.address}</Item>
                <Item icon={<Phone />} label="Phone">
                  <a className="hover:text-[color:var(--color-accent)]" href={`tel:${CLINIC.phoneTel}`}>{CLINIC.phone}</a>
                </Item>
                <Item icon={<Mail />} label="Email">
                  <a className="hover:text-[color:var(--color-accent)]" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
                </Item>
                <Item icon={<Clock />} label="Hours">{CLINIC.hours}</Item>
              </ul>
              <div className="mt-8 flex gap-3">
                <Social href={CLINIC.instagram} icon={<Instagram strokeWidth={1.5} className="h-4 w-4" />} label="Instagram" />
                <Social href={CLINIC.linkedin} icon={<Linkedin strokeWidth={1.5} className="h-4 w-4" />} label="LinkedIn" />
                <Social href={CLINIC.whatsapp} icon={<WhatsAppGlyph className="h-4 w-4" />} label="WhatsApp" />
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <LinkButton href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" size="lg">
                  WhatsApp Us
                </LinkButton>
                <LinkButton href={`tel:${CLINIC.phoneTel}`} variant="outline" size="lg">
                  Call {CLINIC.phoneShort}
                </LinkButton>
              </div>
            </Reveal>
          </aside>

          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <SectionHeader eyebrow="REQUEST A BOOKING" title="Tell us a little about your visit." />
            </Reveal>
            <div className="mt-8">
              <Reveal delay={0.1}><BookingForm /></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="container-edge pb-20">
        <Reveal>
          <SectionHeader eyebrow="FIND US" title="Event 2020 Center · Hadath." />
        </Reveal>
        <div className="mt-10">
          <Reveal delay={0.05}><MapEmbed /></Reveal>
          <div className="mt-6 flex justify-center">
            <LinkButton
              href={CLINIC.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={<ExternalLink strokeWidth={1.75} className="h-4 w-4" />}
            >
              Get Directions
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="container-edge pb-24 text-center">
        <Reveal>
          <p className="serif-accent text-2xl text-[color:var(--color-ink-muted)] sm:text-3xl">
            "Once you visit her, she'll be your new go-to dentist."
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted-sm)]">
            — Emma Haddad, Verified Google Review
          </p>
        </Reveal>
      </section>
    </>
  );
}

function Item({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--color-canvas-alt)] text-[color:var(--color-accent)]">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted-sm)]">{label}</p>
        <p className="mt-1 text-[color:var(--color-ink)]">{children}</p>
      </div>
    </li>
  );
}

function Social({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-accent)] hover:text-white"
    >
      {icon}
    </a>
  );
}

function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.7 4.5 1.9 6.4L4 29l7.9-1.9c1.8 1 3.9 1.5 6.1 1.5h.1c6.6 0 12-5.4 12-12S22.6 3 16 3z" />
    </svg>
  );
}
