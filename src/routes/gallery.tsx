import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CLINIC, GALLERY_CASES, GALLERY_CATEGORIES } from "@/lib/site";
import { Eyebrow, SectionHeader, Shell, Core } from "@/components/Primitives";
import { LinkButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CATEGORY_BA, BEFORE_AFTER } from "@/lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery — Before & After" },
      { name: "description", content: "Real before & after transformations from Mek Dental Clinic, Hadath, Baabda." },
      { property: "og:title", content: "Smile Gallery — Before & After" },
      { property: "og:description", content: "Real before & after transformations from Mek Dental Clinic." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [cat, setCat] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const filtered = cat === "All" ? GALLERY_CASES : GALLERY_CASES.filter((c) => c.category === cat);

  return (
    <>
      <section className="container-edge pt-10 sm:pt-16">
        <Reveal><Eyebrow>REAL PATIENTS, REAL RESULTS</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display mt-6 max-w-4xl">The Smiles Speak for Themselves.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="serif-accent mt-6 max-w-2xl text-2xl text-[color:var(--color-ink-muted)] sm:text-3xl">
            Every photo here is a person who stopped hiding.
          </p>
        </Reveal>
      </section>

      <section className="section-pad container-edge">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-500 [transition-timing-function:var(--ease-house)] ${
                  cat === c
                    ? "border-transparent bg-[color:var(--color-accent)] text-white"
                    : "border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-canvas-alt)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
          {filtered.map((c, i) => {
            const pair = CATEGORY_BA[c.category] ?? BEFORE_AFTER["hollywood-smile"];
            return (
            <Reveal key={`${c.label}-${i}`} delay={(i % 2) * 0.06}>
              <figure>
                <BeforeAfterSlider label={c.label} iconKey="smile" beforeSrc={pair.before} afterSrc={pair.after} />
                <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent-dark)]">
                      {c.category}
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold tracking-tight">{c.label}</p>
                  </div>
                  <p className="font-mono text-xs text-[color:var(--color-ink-muted-sm)]">
                    drag to reveal
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-edge pb-24">
        <Shell>
          <Core className="grid items-center gap-6 p-10 sm:flex sm:justify-between sm:p-14">
            <div>
              <h3 className="h-section">Your Transformation Could Be Next.</h3>
              <p className="mt-3 text-[color:var(--color-ink-muted-sm)]">
                Tell us what you'd like to change — we'll show you what's possible.
              </p>
            </div>
            <LinkButton href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" size="lg">
              Book Appointment
            </LinkButton>
          </Core>
        </Shell>
      </section>
    </>
  );
}
