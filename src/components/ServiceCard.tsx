"use client";

import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";
import { Shell, Core } from "./Primitives";
import { ServiceIcon } from "./ServiceIcon";
import { ImageFrame } from "./ImageFrame";
import { SERVICE_IMAGES } from "@/lib/images";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block @container"
    >
      <Shell className="h-full transition-transform duration-500 [transition-timing-function:var(--ease-house)] group-hover:-translate-y-1">
        <Core className="flex h-full flex-col gap-5 p-5 sm:p-6">
          <ImageFrame
            label={service.imageLabel}
            iconKey={service.iconKey}
            className="aspect-[4/3]"
          />
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-canvas-alt)] text-[color:var(--color-accent)]">
                <ServiceIcon k={service.iconKey} className="h-4 w-4" />
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight">{service.name}</h3>
            </div>
            <span
              aria-hidden
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--color-canvas-alt)] text-[color:var(--color-ink)] transition-transform duration-500 [transition-timing-function:var(--ease-house)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:bg-[color:var(--color-accent)] group-hover:text-white"
            >
              <ArrowUpRight strokeWidth={1.75} className="h-4 w-4" />
            </span>
          </div>
          <p className="text-[color:var(--color-ink-muted-sm)] leading-relaxed">{service.benefit}</p>
        </Core>
      </Shell>
    </Link>
  );
}
