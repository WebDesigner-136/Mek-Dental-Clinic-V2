import type * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import { CLINIC, HOME_FAQ, HOW_IT_WORKS, SERVICES, WHY_US, GALLERY_CASES } from "@/lib/site";
import { Eyebrow, SectionHeader, Shell, Core } from "@/components/Primitives";
import { LinkButton, RouterButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ImageFrame } from "@/components/ImageFrame";
import { CountUp } from "@/components/CountUp";
import heroSmile from "@/assets/hero-smile.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${CLINIC.name} — ${CLINIC.doctor}, Hadath` },
      { name: "description", content: "Specialist endodontic & cosmetic dentistry in Hadath, Baabda. 5.0★ rated. Book your appointment via WhatsApp today." },
      { property: "og:title", content: `${CLINIC.name} — ${CLINIC.doctor}, Hadath` },
      { property: "og:description", content: "Specialist endodontic & cosmetic dentistry in Hadath, Baabda. 5.0★ rated." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-24 min-h-[100dvh] overflow-hidden sm:-mt-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* Reference photo as hero backdrop */}
          <div
            className="absolute inset-0 bg-cover bg-center hero-image-breathe"
            style={{ backgroundImage: `url(${heroSmile.url})` }}
          />
          {/* Readability gradient overlay (preserves original tone, just adds depth on the left) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(20,20,22,0.78) 0%, rgba(20,20,22,0.55) 40%, rgba(20,20,22,0.15) 70%, rgba(20,20,22,0) 100%)",
            }}
          />
          <div
            className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle at 50% 50%, #6d767d 0%, transparent 60%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--color-canvas)] to-transparent" />
        </div>

        <div className="container-edge relative flex min-h-[100dvh] flex-col justify-center pb-24 pt-32 text-white sm:pt-36">
          <Reveal>
            <Eyebrow className="text-white/75 [&_*]:text-white/75">
              <Sparkles strokeWidth={1.5} className="h-3.5 w-3.5" />
              ENDODONTIC & COSMETIC DENTISTRY · HADATH, BAABDA
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="h-display mt-7 max-w-4xl text-white">Hiding Your Smile Stops Today.</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="serif-accent mt-6 max-w-2xl text-2xl leading-snug text-white/85 sm:text-3xl">
              Painless precision, a calm clinic, and a doctor who explains every step — so the only thing left to feel is confident.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <LinkButton href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" size="lg">
                Book Appointment
              </LinkButton>
              <RouterButton to="/services" variant="outline" size="lg">
                View Our Services
              </RouterButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP — revealed on scroll */}
      <section className="border-b border-[color:var(--color-hairline)] bg-[color:var(--color-canvas)]">
        <div className="container-edge py-10 sm:py-14">
          <Reveal>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              <TrustStat label="Google Rating">
                <CountUp value={5} duration={1400} suffix=".0★" />
              </TrustStat>
              <TrustStat label="Happy Patients">
                <CountUp value={59} duration={1800} suffix="+" />
              </TrustStat>
              <TrustStat label="Founded">
                <CountUp value={2022} duration={2200} />
              </TrustStat>
              <TrustStat label="Location" mono={false}>
                Hadath, Baabda
              </TrustStat>
            </div>
          </Reveal>
        </div>
      </section>



      {/* ABOUT TEASER */}
      <section className="section-pad bg-[color:var(--color-canvas-alt)]/60">
        <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>ABOUT THE CLINIC</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-5">Built around one belief: dental care should never be something to dread.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-ink-muted-sm)]">
                Founded in 2022 in Hadath, Baabda, Mek Dental Clinic is led by Dr. Mariana Karam — a specialist Endodontist whose practice is built on transparency, comfort, and precision. Patients describe it as the clinic that changed how they feel about going to the dentist.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8">
                <RouterButton to="/about" variant="outline" size="md">Our Full Story</RouterButton>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <Shell><Core><ImageFrame label="Mek Dental Clinic — interior, calm modern space" iconKey="sparkles" className="aspect-[4/5]" rounded="rounded-[calc(2rem-0.5rem)]" /></Core></Shell>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad container-edge">
        <Reveal>
          <SectionHeader eyebrow="WHAT WE TREAT" title="Every Reason to Smile Again." align="center" />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad bg-[color:var(--color-canvas-alt)]/60">
        <div className="container-edge">
          <Reveal><SectionHeader eyebrow="WHY PATIENTS CHOOSE US" title="The details that make the difference." /></Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.05}>
                <Shell className="h-full">
                  <Core className="flex h-full flex-col gap-3 p-7">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-canvas-alt)] text-[color:var(--color-accent)]">
                      <Check strokeWidth={1.75} className="h-4 w-4" />
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold">{w.title}</h3>
                    <p className="text-[color:var(--color-ink-muted-sm)] leading-relaxed">{w.body}</p>
                  </Core>
                </Shell>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL CASES TEASER */}
      <section className="section-pad container-edge">
        <Reveal>
          <SectionHeader eyebrow="REAL RESULTS" title="A Few of Our Favorite Transformations." />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {GALLERY_CASES.slice(0, 3).map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <Shell className="h-full">
                <Core className="flex h-full flex-col gap-4 p-5">
                  <ImageFrame label={c.label} iconKey="smile" className="aspect-square" />
                  <div className="px-1 pb-1">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent-dark)]">{c.category}</p>
                    <p className="mt-1.5 font-display text-base font-semibold">{c.label}</p>
                  </div>
                </Core>
              </Shell>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <RouterButton to="/gallery" variant="outline">See the Full Gallery</RouterButton>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad bg-[color:var(--color-canvas-alt)]/60">
        <div className="container-edge">
          <Reveal>
            <SectionHeader eyebrow="THE PROCESS" title="From first message to final smile." />
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {HOW_IT_WORKS.map((h, i) => (
              <Reveal key={h.step} delay={i * 0.06}>
                <Shell className="h-full">
                  <Core className="flex h-full flex-col gap-4 p-7">
                    <span className="font-mono text-3xl font-medium text-[color:var(--color-accent)]">{h.step}</span>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{h.title}</h3>
                    <p className="text-[color:var(--color-ink-muted-sm)] leading-relaxed">{h.body}</p>
                  </Core>
                </Shell>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR SPOTLIGHT */}
      <section className="section-pad container-edge">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <Shell><Core><ImageFrame label="Dr. Mariana Karam — portrait" iconKey="smile" className="aspect-[4/5]" rounded="rounded-[calc(2rem-0.5rem)]" /></Core></Shell>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>YOUR DOCTOR</Eyebrow></Reveal>
            <Reveal delay={0.05}><h2 className="h-section mt-5">Meet Dr. Mariana Karam.</h2></Reveal>
            <Reveal delay={0.1}>
              <p className="serif-accent mt-5 text-2xl text-[color:var(--color-ink-muted)] sm:text-3xl">
                "Endodontics is precision work — and precision is what puts people at ease."
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 leading-relaxed text-[color:var(--color-ink-muted-sm)]">
                Dr. Mariana Karam is the founder of Mek Dental Clinic and a specialist Endodontist, focused on root canal therapy and the kind of micro-dental precision that general dentistry often has to refer out. Since opening the clinic in Hadath in 2022, she's built a practice patients describe — unprompted, in their own reviews — as the place that changed how they feel about going to the dentist.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-7 space-y-2.5 text-sm text-[color:var(--color-ink-muted-sm)]">
                <li>· [ Doctorate in Dental Surgery — university name & graduation year ]</li>
                <li>· [ Endodontics specialization/certification — institution & year ]</li>
                <li>· [ Professional membership — e.g. Lebanese Order of Dentists, if applicable ]</li>
                <li>· Clinic open since 2022 — confirm total clinical experience if longer.</li>
              </ul>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8">
                <LinkButton href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" size="lg">
                  Book With Dr. Karam
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-[color:var(--color-canvas-alt)]/60">
        <div className="container-edge">
          <Reveal>
            <SectionHeader
              eyebrow="WHAT PATIENTS SAY"
              title="59+ Five-Star Reviews — Here Are a Few."
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <Reveal delay={0.05}><TestimonialSlider /></Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad container-edge">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeader
                eyebrow="COMMON QUESTIONS"
                title="Answers to what most patients ask first."
                serif="If you have a question that isn't here, WhatsApp us — we usually reply within the hour."
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}><FAQAccordion items={HOME_FAQ} /></Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="container-edge pb-24">
        <Shell>
          <Core className="grid items-center gap-6 p-10 sm:flex sm:justify-between sm:p-14">
            <div>
              <h3 className="h-section">Your Smile Has Waited Long Enough.</h3>
              <p className="serif-accent mt-3 text-xl text-[color:var(--color-ink-muted)]">
                One message is all it takes to start.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" size="lg">
                Book Appointment
              </LinkButton>
              <LinkButton href={`tel:${CLINIC.phoneTel}`} variant="outline" size="lg">
                Call {CLINIC.phoneShort}
              </LinkButton>
            </div>
          </Core>
        </Shell>
      </section>
    </>
  );
}

function TrustStat({
  label,
  children,
  mono = true,
}: {
  label: string;
  children: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div>
      <p className={`${mono ? "font-mono" : "font-display"} text-2xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-3xl`}>
        {children}
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted-sm)]">{label}</p>
    </div>
  );

}

