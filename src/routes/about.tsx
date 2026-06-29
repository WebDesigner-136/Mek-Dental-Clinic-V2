import { createFileRoute } from "@tanstack/react-router";
import { CLINIC, TESTIMONIALS } from "@/lib/site";
import { Eyebrow, SectionHeader, Shell, Core } from "@/components/Primitives";
import { LinkButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ImageFrame } from "@/components/ImageFrame";
import { TEAM_IMAGES, INSTAGRAM_IMAGES } from "@/lib/images";
import { Instagram } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mek Dental Clinic — Hadath, Baabda" },
      { name: "description", content: "Founded 2022. Meet Dr. Mariana Karam and the team behind Hadath's 5.0-star rated dental clinic." },
      { property: "og:title", content: "About Mek Dental Clinic — Hadath, Baabda" },
      { property: "og:description", content: "Founded 2022. Meet Dr. Mariana Karam and the team." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const TEAM = [
  { name: CLINIC.doctor, role: "Founder · Endodontist", lead: true },
  { name: "[Team Member Name]", role: "[Role — e.g. Dental Hygienist]" },
  { name: "[Team Member Name]", role: "[Role — e.g. Clinic Coordinator]" },
  { name: "[Team Member Name]", role: "[Role — e.g. Dental Assistant]" },
];

function About() {
  return (
    <>
      <section className="container-edge pt-10 sm:pt-16">
        <Reveal><Eyebrow>OUR STORY</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display mt-6 max-w-4xl">Built So Going to the Dentist Stops Feeling Like a Dreaded Thing.</h1>
        </Reveal>
      </section>

      <section className="section-pad container-edge">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal><SectionHeader eyebrow="SINCE 2022" title="A practice built around comfort." /></Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-[color:var(--color-ink)]">
                Founded in 2022 in Hadath, Baabda, Mek Dental Clinic was built around one belief: dental care should never be something to dread. Led by Dr. Mariana Karam, a specialist in Endodontics, the clinic was designed from day one to remove every friction point that keeps people away from the dentist — discomfort, uncertainty, and the feeling of being rushed.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-[color:var(--color-ink-muted-sm)]">
                What started as one doctor's commitment to comfort-first care has grown into a practice with a 5.0-star rating across 59+ Google reviews — patients who, in their own words, found the one dentist they were no longer afraid of.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[color:var(--color-canvas-alt)]/60 py-20 sm:py-28">
        <div className="container-edge">
          <Reveal><SectionHeader eyebrow="OUR TEAM" title="The People Behind Every Visit." /></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Shell className={m.lead ? "ring-1 ring-[color:var(--color-accent)]/30" : ""}>
                  <Core className="flex h-full flex-col gap-4 p-5">
                    <ImageFrame label={m.name} iconKey="smile" className="aspect-[4/5]" src={TEAM_IMAGES[i % TEAM_IMAGES.length]} />
                    <div className="px-1 pb-1">
                      <p className="font-display text-base font-semibold">{m.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted-sm)]">{m.role}</p>
                    </div>
                  </Core>
                </Shell>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section-pad container-edge">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Shell className="h-full">
              <Core className="flex h-full flex-col gap-5 p-10">
                <Eyebrow>OUR MISSION</Eyebrow>
                <p className="serif-accent text-2xl leading-snug text-[color:var(--color-ink)] sm:text-3xl">
                  To make world-class endodontic and cosmetic dental care feel calm, transparent, and human — so every patient leaves not just treated, but genuinely cared for.
                </p>
              </Core>
            </Shell>
          </Reveal>
          <Reveal delay={0.06}>
            <Shell className="h-full">
              <Core className="flex h-full flex-col gap-5 p-10">
                <Eyebrow>OUR VISION</Eyebrow>
                <p className="serif-accent text-2xl leading-snug text-[color:var(--color-ink)] sm:text-3xl">
                  To be the dental clinic Lebanon recommends to the people they love most — known as much for compassion as for clinical precision.
                </p>
              </Core>
            </Shell>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-[color:var(--color-canvas-alt)]/60 py-20 sm:py-28">
        <div className="container-edge">
          <Reveal>
            <SectionHeader
              eyebrow="@DR.MARIANAKARAM"
              title="Follow the Smiles."
              serif="The day-to-day of the clinic — patients, results, and behind-the-scenes."
            />
          </Reveal>
          <a
            href={CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} delay={(i % 6) * 0.04}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl border border-[color:var(--color-hairline)]">
                  <ImageFrame label="Instagram Post" iconKey="smile" className="h-full w-full" rounded="rounded-none" />
                  <div className="absolute inset-0 grid place-items-center bg-[color:var(--color-ink)]/0 opacity-0 transition-all duration-500 group-hover:bg-[color:var(--color-ink)]/40 group-hover:opacity-100">
                    <Instagram strokeWidth={1.5} className="h-5 w-5 text-white" />
                  </div>
                </div>
              </Reveal>
            ))}
          </a>
          <div className="mt-10 text-center">
            <LinkButton href={CLINIC.instagram} target="_blank" rel="noopener noreferrer" variant="outline">
              Follow @dr.marianakaram
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Footer count testament */}
      <section className="container-edge py-20">
        <Reveal>
          <p className="serif-accent mx-auto max-w-3xl text-center text-3xl leading-snug text-[color:var(--color-ink-muted)] sm:text-4xl">
            "{TESTIMONIALS[0].text.split(".")[0]}."
          </p>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted-sm)]">
            — {TESTIMONIALS[0].name}, Verified Google Review
          </p>
        </Reveal>
      </section>
    </>
  );
}
