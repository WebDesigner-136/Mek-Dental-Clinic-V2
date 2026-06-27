import { createFileRoute } from "@tanstack/react-router";
import { CLINIC, SERVICES } from "@/lib/site";
import { Eyebrow, SectionHeader, Shell, Core } from "@/components/Primitives";
import { LinkButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services — Mek Dental Clinic" },
      { name: "description", content: "Whitening, Hollywood Smile, implants, braces, periodontics & more — comfort-first dentistry in Hadath." },
      { property: "og:title", content: "Dental Services — Mek Dental Clinic" },
      { property: "og:description", content: "Whitening, Hollywood Smile, implants, braces, periodontics & more." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <>
      <section className="container-edge pt-10 sm:pt-16">
        <Reveal><Eyebrow>OUR SERVICES</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display mt-6 max-w-4xl">Every Treatment, Built Around Comfort.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="serif-accent mt-6 max-w-2xl text-2xl text-[color:var(--color-ink-muted)] sm:text-3xl">
            From a single whitening session to a full Hollywood Smile — every treatment here is delivered with the same explained-every-step approach.
          </p>
        </Reveal>
      </section>

      <section className="section-pad container-edge">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-edge pb-24">
        <Shell>
          <Core className="grid items-center gap-6 p-10 sm:flex sm:justify-between sm:p-14">
            <div>
              <h3 className="h-section">Not sure which treatment is right for you?</h3>
              <p className="mt-3 text-[color:var(--color-ink-muted-sm)]">
                A 15-minute consultation with Dr. Karam is the fastest way to know — no pressure, no commitment.
              </p>
            </div>
            <LinkButton href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" size="lg">
              Book Consultation
            </LinkButton>
          </Core>
        </Shell>
      </section>
    </>
  );
}
