import type { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  serif,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  serif?: ReactNode;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="h-section mt-5">{title}</h2>
      {serif && (
        <p className="serif-accent mt-4 text-xl text-[color:var(--color-ink-muted)] sm:text-2xl">{serif}</p>
      )}
      {intro && (
        <p className="mt-5 text-[color:var(--color-ink-muted-sm)] leading-relaxed sm:text-lg">{intro}</p>
      )}
    </div>
  );
}

export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`shell ${className}`}>{children}</div>;
}

export function Core({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`core ${className}`}>{children}</div>;
}
