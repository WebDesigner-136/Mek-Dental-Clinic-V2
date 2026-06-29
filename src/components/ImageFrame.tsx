import type { Service } from "@/lib/site";
import { ServiceIcon } from "./ServiceIcon";

interface Props {
  label: string;
  iconKey?: Service["iconKey"];
  className?: string;
  aspect?: string;
  rounded?: string;
  src?: string;
}

/**
 * Renders a real image when `src` is provided; otherwise falls back to
 * an elegant labeled placeholder. Never a broken image.
 */
export function ImageFrame({
  label,
  iconKey = "sparkles",
  className = "",
  rounded = "rounded-[1.25rem]",
  src,
}: Props) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden ${rounded} ${className} border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-alt)]`}
        role="img"
        aria-label={label}
      >
        <img
          src={src}
          alt={label}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] [transition-timing-function:var(--ease-house)] hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,20,22,0) 55%, rgba(20,20,22,0.35) 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className} border border-[color:var(--color-hairline)] bg-[linear-gradient(135deg,var(--color-canvas-alt)_0%,var(--color-surface)_100%)]`}
      role="img"
      aria-label={label}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, var(--color-accent) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--color-ink) 0%, transparent 60%)",
        }}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--color-surface)]/70 text-[color:var(--color-accent)] backdrop-blur-sm">
          <ServiceIcon k={iconKey} className="h-5 w-5" />
        </span>
        <p className="max-w-[80%] text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted-sm)]">
          {label}
        </p>
      </div>
    </div>
  );
}
