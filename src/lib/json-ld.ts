import { CLINIC } from "./site";

export function dentistJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `${CLINIC.name} - ${CLINIC.doctor}`,
    description: `Specialist endodontic and cosmetic dental clinic in Hadath, Baabda, led by ${CLINIC.doctor}, open since ${CLINIC.founded}.`,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.street,
      addressLocality: CLINIC.city,
      addressRegion: CLINIC.region,
      addressCountry: CLINIC.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: CLINIC.lat, longitude: CLINIC.lng },
    sameAs: [CLINIC.instagram, CLINIC.linkedin],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CLINIC.rating,
      reviewCount: CLINIC.reviewCount,
    },
    areaServed: ["Hadath", "Baabda", "Mount Lebanon", "Beirut"],
  };
}

export function jsonLdScript() {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(dentistJsonLd()),
  };
}
