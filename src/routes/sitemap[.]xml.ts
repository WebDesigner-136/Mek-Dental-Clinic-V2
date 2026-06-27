import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES } from "@/lib/site";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/services", priority: "0.9" },
          ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, priority: "0.8" })),
          { path: "/gallery", priority: "0.9" },
          { path: "/contact", priority: "0.9" },
          { path: "/privacy-policy", priority: "0.3" },
          { path: "/terms-of-service", priority: "0.3" },
        ];
        const urls = entries.map((e) =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
