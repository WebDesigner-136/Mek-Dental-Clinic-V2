import { CLINIC } from "@/lib/site";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-alt)]">
      <iframe
        src={CLINIC.mapsEmbed}
        title="Mek Dental Clinic location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[320px] w-full sm:h-[420px]"
        style={{ border: 0 }}
      />
    </div>
  );
}
