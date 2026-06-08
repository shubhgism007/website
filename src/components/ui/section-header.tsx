import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";
import { FadeIn } from "../animations/fade-in";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  label,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      <FadeIn>
        {label && (
          <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand mb-4 ring-1 ring-inset ring-brand/20">
            {label}
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
      </FadeIn>
    </div>
  );
}
