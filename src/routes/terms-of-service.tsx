import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/lib/site";
import { Eyebrow } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Mek Dental Clinic" },
      { name: "description", content: "Terms governing the use of the Mek Dental Clinic website and online booking requests." },
      { property: "og:url", content: "/terms-of-service" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <article className="container-edge max-w-3xl pb-24 pt-10 sm:pt-16">
      <Reveal><Eyebrow>LEGAL</Eyebrow></Reveal>
      <Reveal delay={0.05}><h1 className="h-display mt-6">Terms of Service</h1></Reveal>

      <div className="mt-12 space-y-8 text-[color:var(--color-ink-muted-sm)] leading-relaxed">
        <p className="rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-alt)] p-5 text-sm">
          This document is a template provided as a starting point and should be reviewed by a qualified legal professional before being relied upon.
        </p>

        <Section title="1. About these terms">
          <p>By accessing or using the {CLINIC.name} website, you agree to these terms. If you do not agree, please do not use the website.</p>
        </Section>
        <Section title="2. Informational use only">
          <p>The content on this website is provided for general information about our services and is not a substitute for professional dental advice, diagnosis, or treatment. Always consult a qualified dental professional regarding any condition.</p>
        </Section>
        <Section title="3. Booking requests">
          <p>Submitting a booking form is a request, not a confirmed appointment. Your appointment is confirmed only when our team responds and agrees a date and time with you.</p>
        </Section>
        <Section title="4. Intellectual property">
          <p>All content on this website — including text, images, logos, and design — is the property of {CLINIC.name} or its licensors and may not be reproduced without written permission.</p>
        </Section>
        <Section title="5. Third-party links">
          <p>Our website may link to third-party services such as WhatsApp, Google Maps, Instagram, and LinkedIn. We are not responsible for the content or practices of those services.</p>
        </Section>
        <Section title="6. Limitation of liability">
          <p>To the fullest extent permitted by law, {CLINIC.name} is not liable for any indirect or consequential losses arising from your use of this website.</p>
        </Section>
        <Section title="7. Governing law">
          <p>These terms are governed by the laws of Lebanon. Any disputes will be resolved in the competent courts of that jurisdiction.</p>
        </Section>
        <Section title="8. Contact">
          <p>For questions about these terms, contact us at <a className="text-[color:var(--color-accent)] hover:underline" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a> or {CLINIC.phone}.</p>
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
