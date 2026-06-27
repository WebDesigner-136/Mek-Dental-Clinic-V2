import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "trailing";
  hideIcon?: boolean;
}

const base =
  "group/btn inline-flex items-center gap-3 rounded-full font-medium tracking-tight " +
  "transition-all duration-500 [transition-timing-function:var(--ease-house)] " +
  "active:scale-[0.98] focus-visible:outline-none";

const sizes = {
  md: "pl-5 pr-1.5 py-1.5 text-sm",
  lg: "pl-7 pr-2 py-2 text-base",
};

const variants = {
  primary:
    "bg-[color:var(--color-accent)] text-white hover:bg-[color:var(--color-accent-dark)] shadow-[0_10px_30px_-12px_rgba(63,107,99,0.55)]",
  ghost:
    "bg-transparent text-[color:var(--color-ink)] hover:bg-[color:var(--color-canvas-alt)] hairline",
  outline:
    "bg-[color:var(--color-surface)] text-[color:var(--color-ink)] hairline hover:bg-[color:var(--color-canvas-alt)]",
};

function IconBubble({ children, variant }: { children: ReactNode; variant: BaseProps["variant"] }) {
  const bubbleColor =
    variant === "primary"
      ? "bg-white/15 text-white"
      : "bg-[color:var(--color-canvas-alt)] text-[color:var(--color-ink)]";
  return (
    <span
      className={`grid h-8 w-8 place-items-center rounded-full ${bubbleColor} transition-transform duration-500 [transition-timing-function:var(--ease-house)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-px group-hover/btn:scale-105`}
      aria-hidden
    >
      {children ?? <ArrowUpRight strokeWidth={1.75} className="h-4 w-4" />}
    </span>
  );
}

type ButtonProps = BaseProps & ComponentPropsWithoutRef<"button">;
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  hideIcon,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      <span className="pr-1">{children}</span>
      {!hideIcon && <IconBubble variant={variant}>{icon}</IconBubble>}
    </button>
  );
}

type AnchorProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, "children"> & { href: string };
export function LinkButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  hideIcon,
  className = "",
  href,
  ...rest
}: AnchorProps) {
  return (
    <a className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} href={href} {...rest}>
      <span className="pr-1">{children}</span>
      {!hideIcon && <IconBubble variant={variant}>{icon}</IconBubble>}
    </a>
  );
}

type RouterLinkButtonProps = BaseProps & { to: string; className?: string };
export function RouterButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  hideIcon,
  className = "",
  to,
}: RouterLinkButtonProps) {
  return (
    <Link to={to} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      <span className="pr-1">{children}</span>
      {!hideIcon && <IconBubble variant={variant}>{icon}</IconBubble>}
    </Link>
  );
}
