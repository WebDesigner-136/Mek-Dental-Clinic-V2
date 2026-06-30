import { Eyebrow, SectionHeader, Shell, Core } from "@/components/Primitives";
import { LinkButton, RouterButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ImageFrame } from "@/components/ImageFrame";
import { SERVICE_IMAGES, BEFORE_AFTER } from "@/lib/images";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CLINIC, type Service, SERVICES } from "@/lib/site";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

export function ServiceDetailLayout({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="container-edge pt-10 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>
                <ServiceIcon k={service.iconKey} className="h-3.5 w-3.5" />
                {service.short.toUpperCase()}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="h-display mt-6">{service.name}.</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="serif-accent mt-5 text-2xl text-[color:var(--color-ink-muted)] sm:text-3xl">
                {service.benefit}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                <LinkButton href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" size="lg">
                  {service.cta}
                </LinkButton>
                <LinkButton href={`tel:${CLINIC.phoneTel}`} variant="outline" size="lg">
                  Call {CLINIC.phoneShort}
                </LinkButton>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <Shell>
                <Core>
                  <ImageFrame label={service.imageLabel} iconKey={service.iconKey} className="aspect-[4/5]" rounded="rounded-[calc(2rem-0.5rem)]" src={SERVICE_IMAGES[service.slug]} />
                </Core>
              </Shell>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="section-pad container-edge">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal><SectionHeader eyebrow="WHAT IT IS" title={`What is ${service.short}?`} /></Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-[color:var(--color-ink)]">{service.what}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[color:var(--color-canvas-alt)]/60 py-20 sm:py-28">
        <div className="container-edge">
          <Reveal><SectionHeader eyebrow="THE BENEFITS" title="Why patients choose this treatment." /></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {service.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <Shell><Core className="flex items-start gap-4 p-6">
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color:var(--color-accent)] text-white">
                    <Check strokeWidth={2} className="h-4 w-4" />
                  </span>
                  <p className="text-lg leading-relaxed">{b}</p>
                </Core></Shell>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad container-edge">
        <Reveal><SectionHeader eyebrow="THE PROCESS" title="What to expect, step by step." /></Reveal>
        <div className="mt-14 grid gap-4 sm:gap-6 lg:grid-cols-2">
          {service.process.map((step, i) => (
            <Reveal key={step} delay={i * 0.05}>
              <Shell>
                <Core className="flex gap-5 p-6 sm:p-8">
                  <span className="font-mono text-2xl font-medium text-[color:var(--color-accent)]">
                    0{i + 1}
                  </span>
                  <p className="pt-1 text-lg leading-relaxed">{step}</p>
                </Core>
              </Shell>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      {BEFORE_AFTER[service.slug] && (
        <section className="section-pad container-edge">
          <Reveal>
            <SectionHeader
              eyebrow="REAL RESULTS"
              title={`See the ${service.short.toLowerCase()} difference.`}
              serif="Drag the handle to reveal the transformation."
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl">
            <Reveal delay={0.05}>
              <BeforeAfterSlider
                label={`${service.name} — before & after`}
                iconKey={service.iconKey}
                beforeSrc={BEFORE_AFTER[service.slug].before}
                afterSrc={BEFORE_AFTER[service.slug].after}
              />
              <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted-sm)]">
                drag to reveal
              </p>
            </Reveal>
          </div>
        </section>
      )}


      {/* WHO IT'S FOR */}
      <section className="bg-[color:var(--color-canvas-alt)]/60 py-20 sm:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal><SectionHeader eyebrow="WHO IT'S FOR" title="Is this right for you?" /></Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed">{service.who}</p>
              <p className="serif-accent mt-6 text-xl text-[color:var(--color-ink-muted)]">
                Final candidacy is always confirmed in your consultation — never assumed online.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad container-edge">
        <Reveal><SectionHeader eyebrow="COMMON QUESTIONS" title={`About ${service.short}.`} /></Reveal>
        <div className="mt-12">
          <Reveal delay={0.05}><FAQAccordion items={service.faq} /></Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="container-edge pb-24">
        <Shell>
          <Core className="grid items-center gap-6 p-10 sm:flex sm:justify-between sm:p-14">
            <div>
              <h3 className="h-section">{service.cta}.</h3>
              <p className="mt-3 text-[color:var(--color-ink-muted-sm)]">
                A calm consultation with Dr. Karam — no pressure, no surprises.
              </p>
            </div>
            <LinkButton href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" size="lg">
              Book Appointment
            </LinkButton>
          </Core>
        </Shell>
      </section>

      {/* OTHER SERVICES */}
      <section className="container-edge pb-24">
        <Reveal>
          <SectionHeader eyebrow="EXPLORE MORE" title="Other treatments you might consider." />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {others.map((s) => (
            <Reveal key={s.slug}>
              <Link to={`/services/${s.slug}`} className="group block">
                <Shell className="transition-transform duration-500 [transition-timing-function:var(--ease-house)] group-hover:-translate-y-0.5">
                  <Core className="flex items-center justify-between gap-5 p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-canvas-alt)] text-[color:var(--color-accent)]">
                        <ServiceIcon k={s.iconKey} className="h-4 w-4" />
                      </span>
                      <h4 className="font-display text-base font-semibold">{s.name}</h4>
                    </div>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-canvas-alt)] transition-transform duration-500 group-hover:bg-[color:var(--color-accent)] group-hover:text-white">
                      <ArrowUpRight strokeWidth={1.75} className="h-4 w-4" />
                    </span>
                  </Core>
                </Shell>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <RouterButton to="/services" variant="outline" size="md">View all services</RouterButton>
        </div>
      </section>
    </>
  );
}
