import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
  variant?: "default" | "muted" | "dots" | "grid";
}

export function Section({
  children,
  className,
  containerClassName,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        variant === "muted" && "bg-muted/50 border-y border-border",
        variant === "dots" && "bg-dots border-y border-border",
        variant === "grid" && "bg-grid border-y border-border",
        className
      )}
      {...props}
    >
      {/* Background radial gradients for styling */}
      {variant === "dots" && (
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      )}
      {variant === "grid" && (
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      )}
      
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
