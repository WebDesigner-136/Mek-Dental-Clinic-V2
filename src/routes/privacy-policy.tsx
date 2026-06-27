import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/lib/site";
import { Eyebrow } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Mek Dental Clinic" },
      { name: "description", content: "How Mek Dental Clinic handles personal information from contact form submissions and website visits." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <article className="container-edge max-w-3xl pb-24 pt-10 sm:pt-16">
      <Reveal><Eyebrow>LEGAL</Eyebrow></Reveal>
      <Reveal delay={0.05}><h1 className="h-display mt-6">Privacy Policy</h1></Reveal>

      <div className="mt-12 space-y-8 text-[color:var(--color-ink-muted-sm)] leading-relaxed">
        <p className="rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-alt)] p-5 text-sm">
          This document is a template provided as a starting point and should be reviewed by a qualified legal professional before being relied upon.
        </p>

        <Section title="1. Who we are">
          <p>This website is operated by {CLINIC.name}, a dental practice led by {CLINIC.doctor}, located at {CLINIC.address}. For privacy-related questions you can contact us at <a className="text-[color:var(--color-accent)] hover:underline" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a> or {CLINIC.phone}.</p>
        </Section>
        <Section title="2. Information we collect">
          <p>When you submit our contact or booking form, we collect the information you provide — typically your name, phone number, email address, and any details about the appointment you're requesting. We do not collect sensitive medical information through this website; clinical information is gathered in-clinic.</p>
        </Section>
        <Section title="3. How we use your information">
          <p>We use the information you submit solely to respond to your inquiry, schedule your appointment, and follow up about your visit. We do not sell or rent personal information to third parties.</p>
        </Section>
        <Section title="4. Messaging and WhatsApp">
          <p>Our booking form opens a pre-filled WhatsApp message addressed to the clinic. When you send that message, WhatsApp's own terms and privacy practices also apply.</p>
        </Section>
        <Section title="5. Cookies and analytics">
          <p>This website may use a small number of cookies necessary for the site to function, and may include privacy-respecting analytics so we can improve the experience. You can disable cookies in your browser at any time.</p>
        </Section>
        <Section title="6. Your rights">
          <p>You may request access to, correction of, or deletion of any personal information we hold about you by contacting the clinic directly.</p>
        </Section>
        <Section title="7. Updates">
          <p>We may update this policy from time to time. The latest version will always be available on this page.</p>
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-[color:var(--color-ink)]">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
