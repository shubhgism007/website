import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../animations/fade-in";
import { Section } from "./section";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTABanner({
  title = "Ready to Explore Enterprise AI for Your Organization?",
  subtitle = "Leverage proven, business-ready accelerators to launch AI solutions customized for your exact workflows and infrastructure.",
  primaryCTA = { text: "Schedule Discovery Session", href: "/contact" },
  secondaryCTA = { text: "Explore Accelerators", href: "/accelerators" },
}: CTABannerProps) {
  return (
    <Section variant="dots" className="relative z-10 border-t border-border">
      <div className="relative rounded-2xl bg-card border border-border px-6 py-16 sm:px-12 sm:py-20 md:py-24 text-center overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-80 pointer-events-none" />

        <div className="relative max-w-2xl mx-auto z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-sm hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-all duration-200 gap-2"
              >
                {primaryCTA.text}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-foreground shadow-sm hover:bg-secondary/80 border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border transition-all duration-200"
              >
                {secondaryCTA.text}
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
