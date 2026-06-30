// Single source of truth for clinic data, copy, services, reviews.

export const CLINIC = {
  name: "Mek Dental Clinic",
  doctor: "Dr. Mariana Karam",
  doctorRole: "Endodontist",
  founded: 2022,
  address: "Event 2020 Center, Bloc D, 1st Floor, Hadath, Baabda, Lebanon",
  street: "Event 2020 Center, Bloc D, 1st Floor",
  city: "Hadath",
  region: "Baabda, Mount Lebanon",
  country: "LB",
  lat: 33.8434927,
  lng: 35.5349068,
  phone: "+961 71 349 369",
  phoneShort: "71 349 369",
  phoneTel: "+96171349369",
  whatsapp: "https://wa.me/96171349369?text=Hi%20Mek%20Dental%20Clinic%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20an%20appointment.",
  whatsappBase: "https://wa.me/96171349369",
  email: "drmarianakaram@gmail.com",
  instagram: "https://www.instagram.com/dr.marianakaram/",
  linkedin: "https://www.linkedin.com/in/dr-mariana-karam-1aa134235/",
  hours: "Mon–Fri, 9:00 AM – 7:00 PM · Sat–Sun, Closed",
  hoursShort: "Mon–Fri · 9–7",
  rating: "5.0",
  reviewCount: "59",
  mapsDirections: "https://www.google.com/maps/place/?q=place_id:ChIJ2fWuVgAXHxUR7GPkQlsNmZ4",
  mapsEmbed: "https://www.google.com/maps?q=33.8434927,35.5349068&hl=en&z=17&output=embed",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Smile Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export type ServiceSlug =
  | "teeth-whitening"
  | "hollywood-smile"
  | "oral-surgery"
  
  | "braces"
  | "dental-implants"
  | "periodontics";

export interface Service {
  slug: ServiceSlug;
  name: string;
  short: string;
  benefit: string;
  what: string;
  benefits: string[];
  process: string[];
  who: string;
  faq: { q: string; a: string }[];
  cta: string;
  imageLabel: string;
  iconKey:
    | "sparkles"
    | "smile"
    | "scissors"
    | "wand"
    | "alignJustify"
    | "anchor"
    | "shield";
}

export const SERVICES: Service[] = [
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    short: "Whitening",
    benefit: "A brighter smile in a single visit — safe, monitored, dramatic.",
    what: "A professional in-clinic whitening treatment that lifts years of staining from coffee, wine, and smoking in a single visit — safe, monitored, and dramatically faster than any store-bought kit.",
    benefits: [
      "Visible results in one session",
      "Safe under professional supervision",
      "Longer-lasting than at-home kits",
      "An easy confidence boost before events and photos",
    ],
    process: [
      "Shade assessment & consultation",
      "Gum protection and enamel-safe whitening gel application",
      "Activation",
      "Shade reveal and aftercare guide",
    ],
    who: "Patients with healthy enamel and gums; final candidacy confirmed in consultation, especially around current restorative work.",
    faq: [
      { q: "How long do results last?", a: "With good habits, results typically last many months to over a year." },
      { q: "Will it hurt sensitive teeth?", a: "Sensitivity is discussed and managed during your consultation." },
    ],
    cta: "Brighten My Smile — Book Whitening",
    imageLabel: "Whitening — macro smile in studio light",
    iconKey: "sparkles",
  },
  {
    slug: "hollywood-smile",
    name: "Hollywood Smile",
    short: "Hollywood Smile",
    benefit: "A custom-designed, camera-ready transformation.",
    what: "A complete smile makeover combining whitening, contouring, and veneers or bonding to design a symmetric, camera-ready smile tailored to your facial structure.",
    benefits: [
      "Total transformation",
      "Custom smile design",
      "Natural-looking results",
      "A dramatic, lasting confidence shift",
    ],
    process: [
      "Digital smile-design consultation",
      "Shade and shape planning",
      "Minimal, tooth-conserving preparation",
      "Veneer/bonding placement",
      "Final polish and bite check",
    ],
    who: "Anyone wanting a complete aesthetic transformation — uneven, gapped, or discolored smiles, or a fixed timeline before a major event.",
    faq: [
      { q: "Is it permanent?", a: "Veneers are long-lasting and built to be a permanent fixture of your smile." },
      { q: "How many visits does it take?", a: "Typically a small number of visits over a few weeks; your exact timeline is set in consultation." },
    ],
    cta: "Design My Hollywood Smile",
    imageLabel: "Hollywood Smile — full symmetric veneer smile",
    iconKey: "smile",
  },
  {
    slug: "oral-surgery",
    name: "Oral & Dental Surgery",
    short: "Surgeries",
    benefit: "Precise, comfort-first surgical care — extractions, wisdom teeth, more.",
    what: "Safe, precise surgical care for extractions, wisdom teeth, and minor oral surgical procedures, performed with the same comfort-first approach as every other treatment here.",
    benefits: [
      "Minimally invasive technique",
      "Sedation/anesthesia options for comfort",
      "Clear aftercare guidance",
      "Reduced recovery time",
    ],
    process: [
      "Diagnostic imaging and consultation",
      "Pre-op planning, with comfort options discussed upfront",
      "Procedure under local anesthesia",
      "Recovery instructions and follow-up",
    ],
    who: "Impacted wisdom teeth, teeth damaged beyond repair, pre-orthodontic extractions, and similar cases.",
    faq: [
      { q: "Will I be awake?", a: "Most procedures use local anesthesia; sedation options are discussed if needed." },
      { q: "How long is recovery?", a: "Recovery time depends on the procedure and is reviewed with you beforehand." },
    ],
    cta: "Discuss My Surgical Options",
    imageLabel: "Surgery — calm clinical precision instruments",
    iconKey: "scissors",
  },
  {
    slug: "braces",
    name: "Braces — Orthodontics",
    short: "Braces",
    benefit: "Straighter teeth, healthier bite — traditional or clear aligners.",
    what: "Teeth-straightening solutions — traditional braces or clear aligner systems — correcting misalignment, bite issues, and crowding at any age.",
    benefits: [
      "Improved function and hygiene",
      "Long-term oral health",
      "Multiple aesthetic options (clear, ceramic, or traditional)",
      "Confidence in every photo, not just the final result",
    ],
    process: [
      "Orthodontic assessment and imaging",
      "Treatment plan and system selection",
      "Fitting/placement",
      "Regular adjustment visits",
      "Retention phase",
    ],
    who: "Crowding, gaps, and bite misalignment — both teens and adults.",
    faq: [
      { q: "How long is treatment?", a: "Timelines vary by case and are set after your orthodontic assessment." },
      { q: "Are clear aligners available?", a: "Yes, discussed as an option during your consultation." },
    ],
    cta: "Start My Straightening Journey",
    imageLabel: "Braces — friendly clear aligner close-up",
    iconKey: "alignJustify",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "Implants",
    benefit: "Permanent, natural-looking replacement for missing teeth.",
    what: "A permanent, natural-looking replacement for missing teeth — a titanium root replacement topped with a custom crown, restoring full bite function and a complete smile.",
    benefits: [
      "Permanent solution",
      "Looks and feels like a natural tooth",
      "Preserves jawbone structure",
      "No impact on neighboring healthy teeth, unlike a bridge",
    ],
    process: [
      "3D imaging and bone assessment",
      "Implant placement (a minor surgical procedure)",
      "Healing/integration period",
      "Custom crown placement and final fit",
    ],
    who: "Single or multiple missing teeth, with sufficient bone density (confirmed via imaging) and good general oral health.",
    faq: [
      { q: "Does it hurt?", a: "The placement procedure is done under local anesthesia with manageable recovery." },
      { q: "How long does the full process take?", a: "Healing/integration takes time — your exact timeline is reviewed during consultation." },
    ],
    cta: "Restore My Smile — Ask About Implants",
    imageLabel: "Implants — precision titanium implant model",
    iconKey: "anchor",
  },
  {
    slug: "periodontics",
    name: "Periodontics",
    short: "Periodontics",
    benefit: "Healthy gums — the foundation of every smile.",
    what: "Specialized care for gum health — treating gum disease, receding gums, and supporting the foundation that keeps every other dental treatment successful long-term.",
    benefits: [
      "Stops gum disease progression",
      "Protects against tooth loss",
      "Fresher breath and healthier gums",
      "A stable foundation for implants or cosmetic work",
    ],
    process: [
      "Periodontal assessment and measurements",
      "Deep cleaning (scaling and root planing) as needed",
      "Maintenance plan",
      "Ongoing monitoring",
    ],
    who: "Bleeding or swollen gums, a receding gumline, tooth looseness, or persistent bad breath.",
    faq: [
      { q: "Is deep cleaning painful?", a: "Discomfort is minimized with local anesthesia where needed." },
      { q: "How often should I get a periodontal check?", a: "Frequency depends on your gum health, set at your assessment." },
    ],
    cta: "Protect My Gum Health",
    imageLabel: "Periodontics — calm gum-health close-up",
    iconKey: "shield",
  },
];

export const TESTIMONIALS = [
  {
    name: "Emma Haddad",
    text: "I've been afraid of dentists my whole life, but Dr. Mariana completely changed that. From the moment you step in, she makes you feel comfortable and at ease. She takes the time to explain every step, so you always know what's going on, and you can truly feel that you're in expert hands. On top of that, everything is super clean, and parking is never a problem. Honestly, I can't recommend her enough — trust me, once you visit her, she'll be your new go-to dentist!",
  },
  {
    name: "Rita Raad",
    text: "I had the best experience at Dr. Mariana's clinic and I will be back for sure. The treatment was smooth and painless, and the service was incredibly professional and caring. I left fully satisfied and highly recommend it.",
  },
  {
    name: "Anthony Karam",
    text: "Dr. Mariana Karam is truly exceptional. From the moment you walk into her clinic, you're treated with genuine care, professionalism, and respect. She explains every step clearly, listens closely to your concerns, and always ensures you're comfortable. Her precision, gentle technique, and attention to detail are unmatched — she genuinely makes going to the dentist feel easy.",
  },
  {
    name: "Rim Kaady",
    text: "I had the best experience with Dr. Mariana! From the moment I walked in, she was welcoming and professional. The clinic was spotless, and she took the time to explain everything clearly and made sure I was comfortable throughout the entire procedure. Highly recommended.",
  },
  {
    name: "Ranine Abi Rached",
    text: "I had such a great experience with Dr. Mariana Karam. She's super professional, gentle, and really takes the time to explain everything clearly. The clinic is clean, calm, and really welcoming. Highly recommend her if you're looking for someone who truly cares about her patients!",
  },
  {
    name: "Joe Baz",
    text: "I had a great experience at Dr. Mariana Karam's clinic! The clinic was clean and modern, and she was professional, gentle, and thorough. She took the time to explain everything and made sure I was comfortable. Highly recommend for anyone looking for quality dental care!",
  },
  {
    name: "Jennifer Eid",
    text: "Dr. Mariana Karam and the team are fantastic! Friendly, professional, and thorough. I've always had a great experience with my cleanings and check-ups. Highly recommend to anyone looking for a reliable and caring dentist!",
  },
];

export const HOME_FAQ = [
  { q: "Does Dr. Karam treat anxious or nervous patients?", a: "Comfort is the entire philosophy of the clinic; every step is explained before it happens, at your pace." },
  { q: "Is root canal treatment painful?", a: "Modern endodontic technique, done by a specialist, is designed to be far more comfortable than the procedure's reputation suggests." },
  { q: "What languages does the clinic speak?", a: "Arabic, French, and English." },
  { q: "What payment methods do you accept?", a: "Cash (USD & LBP) and major payment cards." },
  { q: "Do you treat dental emergencies?", a: "Yes — contact the clinic directly via WhatsApp or phone for urgent cases." },
  { q: "How long does a typical appointment take?", a: "It depends on the treatment; your exact timeline is confirmed during your consultation." },
  { q: "Is parking available at the clinic?", a: "Yes, parking at Event 2020 Center is consistently easy — patients call it out unprompted in their reviews." },
  { q: "Do you offer teeth whitening or Hollywood Smile packages?", a: "Yes, see the Services page for both, including process and what to expect." },
  { q: "What sterilization and hygiene protocols do you follow?", a: "Clinical-grade sterilization and hygiene standards are maintained on every visit, every instrument, every time." },
  { q: "Can I book directly via WhatsApp?", a: "Yes — it's the fastest way to reach the clinic; tap the WhatsApp button anywhere on the site." },
];

export const WHY_US = [
  { title: "Specialist Endodontist", body: "Root-canal precision most general dentists have to refer elsewhere for." },
  { title: "Comfort-First, Always", body: "Every step explained before it happens; no surprises, no rushing." },
  { title: "Spotless, Modern Clinic", body: "Sterilization and hygiene standards patients consistently call out unprompted." },
  { title: "Easy Parking, Central Location", body: "Hadath/Baabda, with parking that's never a hassle — a real differentiator most Beirut clinics can't claim." },
  { title: "5.0★ Patient-Loved", body: "59+ five-star Google reviews and counting." },
  { title: "Gentle, Genuinely Painless Technique", body: "Patients describe treatment as smooth and painless, not endured." },
];

export const HOW_IT_WORKS = [
  { step: "01", title: "Book Your Visit", body: "Via WhatsApp, call, or the form below." },
  { step: "02", title: "Comfort Consultation", body: "Dr. Karam listens, examines, and explains — no pressure, no surprises." },
  { step: "03", title: "Your Personalized Plan", body: "Clear pricing and timeline before any treatment starts." },
  { step: "04", title: "Treatment & Aftercare", body: "Gentle procedure, followed by clear aftercare guidance." },
];

export const GALLERY_CASES = [
  { category: "Hollywood Smile", label: "Full Hollywood Smile Makeover" },
  { category: "Whitening", label: "Professional In-Clinic Whitening" },
  { category: "Smile Makeover", label: "Complete Smile Restoration" },
  { category: "Implants", label: "Single-Tooth Implant & Crown" },
  { category: "Braces", label: "Adult Orthodontic Alignment" },
  { category: "Whitening", label: "Coffee-Stain Lift, Single Session" },
  { category: "Hollywood Smile", label: "Symmetric Veneer Design" },
  { category: "Smile Makeover", label: "Bonding & Contouring Refresh" },
  { category: "Implants", label: "Multi-Unit Implant Restoration" },
];

export const GALLERY_CATEGORIES = ["All", "Whitening", "Hollywood Smile", "Braces", "Implants", "Smile Makeover"] as const;
