// Curated imagery for the clinic site.

import teethWhitening from "@/assets/services/teeth-whitening.jpg.asset.json";
import hollywoodSmile from "@/assets/services/hollywood-smile.webp.asset.json";
import oralSurgery from "@/assets/services/oral-surgery.jpg.asset.json";
import braces from "@/assets/services/braces.jpg.asset.json";
import dentalImplants from "@/assets/services/dental-implants.jpg.asset.json";
import periodontics from "@/assets/services/periodontics.jpg.asset.json";
import drMariana from "@/assets/dr-mariana.jpg.asset.json";
import team2 from "@/assets/team-2.jpg.asset.json";
import team3 from "@/assets/team-3.jpg.asset.json";
import teamNada from "@/assets/team-nada.webp.asset.json";

// Before / After generated dental imagery (local bundled assets)
import baWhiteningBefore from "@/assets/ba/whitening-before.jpg";
import baWhiteningAfter from "@/assets/ba/whitening-after.jpg";
import baHollywoodBefore from "@/assets/ba/hollywood-before.jpg";
import baHollywoodAfter from "@/assets/ba/hollywood-after.jpg";
import baSurgeryBefore from "@/assets/ba/surgery-before.jpg";
import baSurgeryAfter from "@/assets/ba/surgery-after.jpg";
import baBracesBefore from "@/assets/ba/braces-before.jpg";
import baBracesAfter from "@/assets/ba/braces-after.jpg";
import baImplantBefore from "@/assets/ba/implant-before.jpg";
import baImplantAfter from "@/assets/ba/implant-after.jpg";
import baPerioBefore from "@/assets/ba/perio-before.jpg";
import baPerioAfter from "@/assets/ba/perio-after.jpg";

const U = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80${h ? `&h=${h}` : ""}`;

export const SERVICE_IMAGES: Record<string, string> = {
  "teeth-whitening": teethWhitening.url,
  "hollywood-smile": hollywoodSmile.url,
  "oral-surgery": oralSurgery.url,
  "braces": braces.url,
  "dental-implants": dentalImplants.url,
  "periodontics": periodontics.url,
};

export interface BeforeAfterPair {
  before: string;
  after: string;
}

export const BEFORE_AFTER: Record<string, BeforeAfterPair> = {
  "teeth-whitening": { before: baWhiteningBefore, after: baWhiteningAfter },
  "hollywood-smile": { before: baHollywoodBefore, after: baHollywoodAfter },
  "oral-surgery": { before: baSurgeryBefore, after: baSurgeryAfter },
  "braces": { before: baBracesBefore, after: baBracesAfter },
  "dental-implants": { before: baImplantBefore, after: baImplantAfter },
  "periodontics": { before: baPerioBefore, after: baPerioAfter },
};

// Map gallery category labels → a before/after pair.
export const CATEGORY_BA: Record<string, BeforeAfterPair> = {
  "Whitening": BEFORE_AFTER["teeth-whitening"],
  "Hollywood Smile": BEFORE_AFTER["hollywood-smile"],
  "Smile Makeover": BEFORE_AFTER["hollywood-smile"],
  "Implants": BEFORE_AFTER["dental-implants"],
  "Braces": BEFORE_AFTER["braces"],
};

// Pool of smile/case photography, cycled across gallery entries.
export const GALLERY_IMAGES: string[] = [
  baHollywoodAfter,
  baWhiteningAfter,
  baImplantAfter,
  baBracesAfter,
  baSurgeryAfter,
  baPerioAfter,
];

export const SECTION_IMAGES = {
  clinicInterior: U("1606811841689-23dfddce3e95"),
  doctorPortrait: drMariana.url,
  smileHero: U("1581595220892-b0739db3ba8c"),
};

export const TEAM_IMAGES: string[] = [
  drMariana.url,
  teamNada.url,
  team2.url,
  team3.url,
];

// Real Instagram posts from @dr.marianakaram. Thumbnails are bundled locally
// (Instagram CDN URLs are signed & short-lived, so hotlinking is not viable).
import igC1 from "@/assets/instagram/C-kvlVBscrV.jpg";
import igC2 from "@/assets/instagram/C17kQassxeH.jpg";
import igC3 from "@/assets/instagram/C8uVQ7oMjxH.jpg";
import igC4 from "@/assets/instagram/C8KUirys-gK.jpg";
import igC5 from "@/assets/instagram/C8XHQuCMSr9.jpg";
import igC6 from "@/assets/instagram/C9e6id7sW3G.jpg";

export interface InstagramPost {
  url: string;
  image: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { url: "https://www.instagram.com/p/C-kvlVBscrV/", image: igC1 },
  { url: "https://www.instagram.com/p/C17kQassxeH/", image: igC2 },
  { url: "https://www.instagram.com/p/C8uVQ7oMjxH/", image: igC3 },
  { url: "https://www.instagram.com/p/C8KUirys-gK/", image: igC4 },
  { url: "https://www.instagram.com/p/C8XHQuCMSr9/", image: igC5 },
  { url: "https://www.instagram.com/p/C9e6id7sW3G/", image: igC6 },
];

// Back-compat: image list for anywhere still reading INSTAGRAM_IMAGES.
export const INSTAGRAM_IMAGES: string[] = INSTAGRAM_POSTS.map((p) => p.image);

