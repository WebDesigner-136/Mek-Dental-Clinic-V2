import type { ReactNode } from "react";
import { Sparkles, Smile, Scissors, Wand2, AlignJustify, Anchor, Shield } from "lucide-react";
import type { Service } from "@/lib/site";

export function ServiceIcon({ k, className = "h-5 w-5" }: { k: Service["iconKey"]; className?: string }) {
  const map: Record<Service["iconKey"], ReactNode> = {
    sparkles: <Sparkles strokeWidth={1.5} className={className} />,
    smile: <Smile strokeWidth={1.5} className={className} />,
    scissors: <Scissors strokeWidth={1.5} className={className} />,
    wand: <Wand2 strokeWidth={1.5} className={className} />,
    alignJustify: <AlignJustify strokeWidth={1.5} className={className} />,
    anchor: <Anchor strokeWidth={1.5} className={className} />,
    shield: <Shield strokeWidth={1.5} className={className} />,
  };
  return <>{map[k]}</>;
}
