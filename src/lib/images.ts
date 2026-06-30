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

// Pool of smile/case photography, cycled across gallery entries.
export const GALLERY_IMAGES: string[] = [
  hollywoodSmile.url,
  teethWhitening.url,
  dentalImplants.url,
  braces.url,
  oralSurgery.url,
  periodontics.url,
  U("1576091160550-2173dba999ef"),
  U("1622253692010-333f2da6031d"),
  U("1631815589968-fdb09a223b1e"),
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

export const INSTAGRAM_IMAGES: string[] = [
  teethWhitening.url,
  hollywoodSmile.url,
  U("1622253692010-333f2da6031d", 600),
  U("1631815589968-fdb09a223b1e", 600),
  U("1576091160550-2173dba999ef", 600),
  braces.url,
];
