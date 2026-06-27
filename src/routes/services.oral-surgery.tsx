import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

const service = SERVICES.find((s) => s.slug === "oral-surgery")!;

export const Route = createFileRoute("/services/oral-surgery")({
  head: () => ({
    meta: [
      { title: `${service.name} in Hadath — Mek Dental Clinic` },
      { name: "description", content: service.benefit },
      { property: "og:title", content: `${service.name} in Hadath — Mek Dental Clinic` },
      { property: "og:description", content: service.benefit },
      { property: "og:url", content: `/services/${service.slug}` },
    ],
    links: [{ rel: "canonical", href: `/services/${service.slug}` }],
  }),
  component: () => <ServiceDetailLayout service={service} />,
});
