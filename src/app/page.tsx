import Link from "next/link";
import { ArrowRight, Cloud, ClipboardList, Link as LinkIcon, Lock, Server, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { CTABanner } from "@/components/ui/cta-banner";
import { FadeIn } from "@/components/animations/fade-in";
import type { ProcessStep } from "@/types/content";

const steps: ProcessStep[] = [
  { step: 1, title: "Discover", description: "Map the workflow and target outcome.", icon: "FileSearch" },
  { step: 2, title: "Demonstrate", description: "See a live sandbox within days.", icon: "Eye" },
  { step: 3, title: "Customize", description: "Wire in your data and governance rules.", icon: "Code" },
  { step: 4, title: "Deploy", description: "Go live inside your infrastructure.", icon: "Send" },
];

const trustIconMap = {
  Cloud,
  Lock,
  Server,
  Link: LinkIcon,
  ShieldCheck,
  ClipboardList,
} as const;

const coreTrustItems: { name: string; iconKey: keyof typeof trustIconMap }[] = [
  { name: "Customer Infrastructure", iconKey: "Cloud" },
  { name: "Private Cloud Hosting", iconKey: "Lock" },
  { name: "On-Prem Deployment", iconKey: "Server" },
  { name: "Enterprise Integrations", iconKey: "Link" },
  { name: "Security Controls", iconKey: "ShieldCheck" },
  { name: "Governance & Audits", iconKey: "ClipboardList" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-36 md:pt-44 md:pb-52 overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-8 ring-1 ring-inset ring-brand/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Demos Available
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl font-black tracking-tight leading-[0.95] sm:text-7xl lg:text-[5.5rem] lg:leading-[0.9] text-foreground">
              Enterprise AI That
              <br />
              <span className="text-gradient-brand">Works Before You Buy It</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mx-auto mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed">
              Proven AI accelerators for real business workflows — live demos, customizable, deployable in weeks.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-sm hover:bg-brand/90 transition-colors gap-2"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-card border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Schedule Discovery Session
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How Avyu Works — editorial numbered steps */}
      <Section id="how-it-works" className="py-24 md:py-36">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-foreground mb-16">
              From Idea to Deployment
            </h2>
          </FadeIn>
          <div className="divide-y divide-border">
            {steps.map((step, idx) => (
              <FadeIn key={step.step} direction="up" delay={idx * 0.08}>
                <div className="flex items-start gap-8 md:gap-12 py-10 group">
                  <span className="text-5xl md:text-6xl font-black leading-none text-muted-foreground/10 tabular-nums shrink-0 w-12 md:w-16 select-none group-hover:text-brand/20 transition-colors duration-300">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <section className="py-24 md:py-36 relative overflow-hidden border-y border-border">
        {/* Ambient glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(222_47%_7%)] to-background pointer-events-none" />
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-red-500/[0.06] blur-[100px] pointer-events-none" />
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-brand/[0.12] blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/40 mb-16 text-center">
              Bespoke vs. Avyu
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-0 items-center">

              {/* Traditional */}
              <div className="text-center md:text-right space-y-3 md:pr-16">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/50">
                  Custom Build
                </p>
                <div className="text-[5rem] md:text-[6.5rem] font-black text-foreground/25 leading-none tabular-nums">
                  6–12
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground/30">Months</div>
                <p className="text-[11px] text-muted-foreground/30 pt-2 uppercase tracking-wider">
                  Discovery → Prototype → Dev → Deploy
                </p>
              </div>

              {/* VS divider */}
              <div className="flex items-center justify-center">
                <span className="text-xs font-black text-muted-foreground/25 uppercase tracking-[0.3em] px-5 py-2.5 border border-border rounded-full">
                  vs
                </span>
              </div>

              {/* Avyu */}
              <div className="text-center md:text-left space-y-3 md:pl-16">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Avyu Accelerators
                </p>
                <div className="text-[5rem] md:text-[6.5rem] font-black text-foreground leading-none">
                  Weeks
                </div>
                <div className="text-2xl md:text-3xl font-bold text-brand">Not months</div>
                <p className="text-[11px] text-muted-foreground/40 pt-2 uppercase tracking-wider">
                  Working Accelerator → Customize → Deploy
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* Deployment & Trust — split layout */}
      <Section id="deployment" variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="left">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">
                Infrastructure & Governance
              </span>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-foreground mb-4">
                Built for Secure Environments
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Every deployment runs inside your network, under your controls.
              </p>
            </FadeIn>

            <FadeIn direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {coreTrustItems.map((item) => {
                  const Icon = trustIconMap[item.iconKey];
                  return (
                    <div key={item.name} className="flex items-center gap-3 py-4 border-b border-border/50">
                      <Icon className="h-4 w-4 text-brand shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
