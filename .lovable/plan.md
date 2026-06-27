# Mek Dental Clinic — Build Plan

A production site for Dr. Mariana Karam's dental clinic in Hadath, Baabda. 13 routes, premium "calm-clinic" aesthetic, WhatsApp-first conversion. Built on the existing TanStack Start stack (the brief assumes Vite+React Router or Next.js; I'll use TanStack Start file-based routing instead — same route list, same outcome).

## Tech & libraries to add
- `framer-motion` — reveals, staggered nav, hover physics
- `lenis` — smooth scroll
- `gsap` — heading split + clip-path hero reveals
- `@react-three/fiber` + `@react-three/drei` + `three` — abstract ceramic-molar 3D layer (with static WebP fallback on mobile/low-end)
- Plus Jakarta Sans, Cormorant Garamond, JetBrains Mono via `<link>` in `__root.tsx`
- Existing: TanStack Router, Tailwind v4, shadcn/ui, lucide-react

## Design system (src/styles.css)
Replace template tokens with the brief's exact palette (eucalyptus teal `#3F6B63`, off-white `#FAF8F5`, terracotta error `#C97B63`, no red anywhere). Wire as Tailwind v4 `@theme inline` tokens so utilities like `bg-accent`, `text-ink`, `bg-canvas` work. House easing `cubic-bezier(0.32,0.72,0,1)` exposed as a CSS variable. Fluid type via `clamp()`.

## Global components (src/components/)
- `Nav.tsx` — floating glass pill, 5 links + phone + Book CTA, hamburger morph
- `Footer.tsx` — NAP, hours, socials, legal links
- `WhatsAppFAB.tsx` + `ScrollToTopFAB.tsx` — bottom-right stack
- `ToothCanvas3D.tsx` — R3F ceramic molar, mobile static fallback
- `Button.tsx` — pill + nested icon circle, magnetic hover
- `Card.tsx` — Double-Bezel shell+core
- `Eyebrow.tsx`, `SectionHeader.tsx`, `StatBlock.tsx`
- `TestimonialSlider.tsx` — all 7 verified reviews
- `BeforeAfterSlider.tsx` — drag-to-reveal
- `FAQAccordion.tsx`, `ServiceCard.tsx`, `BookingForm.tsx`, `MapEmbed.tsx`
- `SmoothScroll.tsx` — Lenis provider, respects `prefers-reduced-motion`
- `Reveal.tsx` — Framer `whileInView` fade-up-and-unblur wrapper

## Routes (13, all in src/routes/)
1. `index.tsx` — Home (hero, about teaser, services grid, why-us, clinical cases teaser, how it works, doctor spotlight, testimonials, FAQ, closing CTA)
2. `about.tsx` — story, team grid, mission/vision, Instagram grid
3. `services.tsx` — hub w/ all 7 cards
4–10. Seven `services.<slug>.tsx` files using a shared `ServiceDetailLayout` data-driven template
11. `gallery.tsx` — Before/After centerpiece with category filters
12. `contact.tsx` — NAP, booking form → WhatsApp deep link, map embed
13. `privacy-policy.tsx` + `terms-of-service.tsx` — boilerplate w/ legal-review disclaimer

Plus: `__root.tsx` updated with fonts, JSON-LD `Dentist` schema injected on every page via a small helper, per-route `head()` meta from Section 9.1. `sitemap[.]xml.ts` + `public/robots.txt`.

## Content
All copy from Section 7 of the brief, used verbatim. Doctor credentials kept as bracketed `[ ]` placeholders. Image slots = elegant labeled placeholder frames (icon + treatment label), never broken-image boxes.

## Motion (capped at intensity 6)
- Lenis smooth scroll, no horizontal pin (W9 disabled)
- Hero clip-path reveal + GSAP line-split on H1
- `Reveal` wrapper for all in-view fade-up-and-unblur
- Button magnetic hover, nested icon translate+scale
- 3D molar idle rotation ~6s/rev
- Every animation gated by `prefers-reduced-motion`

## QA
- No red, anywhere (override browser default invalid styling)
- Lebanese phone regex on form
- Alt text on all images, semantic HTML, keyboard focus rings
- AA contrast: `--color-text-secondary-sm` for body <18px
- WhatsApp FAB on every page

## Build order
1. Tokens + fonts + global CSS
2. Atomic + composite components
3. Global chrome (Nav, Footer, FABs, SmoothScroll) wired in `__root.tsx`
4. Home page (highest weight)
5. About, Services hub, Gallery, Contact
6. 7 service detail pages (templated)
7. Legal pages, sitemap, robots, JSON-LD
8. Final pass against Section 10.4 checklist

This will be a large multi-turn build. After your approval I'll execute it straight through and check in at major milestones (after global chrome, after home, after services, after final pass).
