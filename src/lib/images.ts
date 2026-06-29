// Curated Unsplash imagery for the clinic site.
// All IDs verified reachable on images.unsplash.com.

const U = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80${h ? `&h=${h}` : ""}`;

export const SERVICE_IMAGES: Record<string, string> = {
  "teeth-whitening": U("1588776814546-1ffcf47267a5"),
  "hollywood-smile": U("1629909613654-28e377c37b09"),
  "oral-surgery": U("1606811971618-4486d14f3f99"),
  "aesthetic-dentistry": U("1612277795421-9bc7706a4a34"),
  "braces": U("1598256989800-fe5f95da9787"),
  "dental-implants": U("1609840114035-3c981b782dfe"),
  "periodontics": U("1571772996211-2f02c9727629"),
};

// Pool of smile/case photography, cycled across gallery entries.
export const GALLERY_IMAGES: string[] = [
  U("1629909613654-28e377c37b09"),
  U("1588776814546-1ffcf47267a5"),
  U("1612277795421-9bc7706a4a34"),
  U("1609840114035-3c981b782dfe"),
  U("1598256989800-fe5f95da9787"),
  U("1576091160550-2173dba999ef"),
  U("1622253692010-333f2da6031d"),
  U("1631815589968-fdb09a223b1e"),
  U("1606811971618-4486d14f3f99"),
];

export const SECTION_IMAGES = {
  clinicInterior: U("1606811841689-23dfddce3e95"),
  doctorPortrait: U("1559511260-66a654ae982a"),
  smileHero: U("1581595220892-b0739db3ba8c"),
};

export const TEAM_IMAGES: string[] = [
  U("1559511260-66a654ae982a"),
  U("1607613009820-a29f7bb81c04"),
  U("1578496781985-452d4a934d50"),
  U("1556228720-195a672e8a03"),
];

export const INSTAGRAM_IMAGES: string[] = [
  U("1588776814546-1ffcf47267a5", 600),
  U("1629909613654-28e377c37b09", 600),
  U("1622253692010-333f2da6031d", 600),
  U("1631815589968-fdb09a223b1e", 600),
  U("1576091160550-2173dba999ef", 600),
  U("1612277795421-9bc7706a4a34", 600),
];
