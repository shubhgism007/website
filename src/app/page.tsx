import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Cloud, ClipboardList, Database, Link as LinkIcon, Lock, Network, Server, ShieldCheck, Activity, Play, Eye } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SolutionExplorer } from "@/components/ui/solution-explorer";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { DeploymentCard } from "@/components/ui/deployment-card";
import { ProcessStepCard } from "@/components/ui/process-step";
import { CTABanner } from "@/components/ui/cta-banner";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { categories } from "@/content/categories";
import { deploymentModels } from "@/content/deployment-models";
import type { ProcessStep } from "@/types/content";

const steps: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    description: "Map the workflow and target outcome.",
    icon: "FileSearch",
  },
  {
    step: 2,
    title: "Demonstrate",
    description: "See a live sandbox within days.",
    icon: "Eye",
  },
  {
    step: 3,
    title: "Customize",
    description: "Wire in your data and governance rules.",
    icon: "Code",
  },
  {
    step: 4,
    title: "Deploy",
    description: "Go live inside your infrastructure.",
    icon: "Send",
  },
];

const featuredAccelerators = [
  {
    name: "UPSC AI Preparation",
    outcome: "Personalize study paths and auto-grade essays to boost exam readiness.",
    categorySlug: "learning-education",
    slug: "upsc-ai",
    visualClass: "from-blue-600/10 to-indigo-600/10 border-blue-500/20",
    dotColor: "bg-blue-500",
    bubbleClass: "bg-blue-500/20 text-blue-300",
    mockQuery: "Generate a study plan for Polity",
    mockResponse: "4-week plan: Week 1 — Constitution & Amendments...",
    dataLabel: "Readiness: 74%",
  },
  {
    name: "Teaching Assistant",
    outcome: "Cut educator admin time by 60% with automated grading and instant query responses.",
    categorySlug: "learning-education",
    slug: "teaching-assistant",
    visualClass: "from-emerald-600/10 to-teal-600/10 border-emerald-500/20",
    dotColor: "bg-emerald-500",
    bubbleClass: "bg-emerald-500/20 text-emerald-300",
    mockQuery: "Grade this essay on climate policy",
    mockResponse: "Score: 8.5/10. Strong thesis, 3 sources cited...",
    dataLabel: "Queue: 12 essays",
  },
  {
    name: "HR Operations Copilot",
    outcome: "Reduce hiring time, improve onboarding, and automate employee support at scale.",
    categorySlug: "workforce-hr",
    slug: "hr-copilot",
    visualClass: "from-purple-600/10 to-pink-600/10 border-purple-500/20",
    dotColor: "bg-purple-500",
    bubbleClass: "bg-purple-500/20 text-purple-300",
    mockQuery: "Leave policy for contractors?",
    mockResponse: "Contractors receive 10 days/year, accrued monthly...",
    dataLabel: "47 policies indexed",
  },
  {
    name: "Training Simulation Platform",
    outcome: "Risk-free scenario practice that cuts training infrastructure costs by 60%.",
    categorySlug: "training-simulation",
    slug: "training-simulation-platform",
    visualClass: "from-amber-600/10 to-orange-600/10 border-amber-500/20",
    dotColor: "bg-amber-500",
    bubbleClass: "bg-amber-500/20 text-amber-300",
    mockQuery: "Start emergency response scenario #4",
    mockResponse: "Scenario active. 45F, cardiac event. Timer: 0:00",
    dataLabel: "Scenario: Active",
  },
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
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background to-background pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-6 ring-1 ring-inset ring-brand/20">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Live Demos Available</span>
              </span>
              <span className="text-muted-foreground/50">·</span>
              Enterprise AI Accelerators
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl max-w-4xl mx-auto leading-tight">
              Enterprise AI That <span className="text-brand">Works Before You Buy It</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground">
              Explore working AI solutions built around real business workflows. Experience live demos, customize what fits, and deploy into your environment.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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

          {/* Visual representations */}
          <FadeIn direction="up" delay={0.5} className="mt-20 max-w-4xl mx-auto">
            <div className="relative rounded-xl border border-border bg-card/60 p-6 md:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="text-center md:text-left space-y-1">
                  <div className="text-xs font-bold text-brand uppercase tracking-wider">01 / Choose Baseline</div>
                  <h4 className="text-sm font-bold text-foreground">Select Reusable Foundation</h4>
                </div>
                <div className="text-center md:text-left space-y-1 border-t md:border-t-0 md:border-x border-border/60 py-4 md:py-0 md:px-6">
                  <div className="text-xs font-bold text-brand uppercase tracking-wider">02 / Customize logic</div>
                  <h4 className="text-sm font-bold text-foreground">Link Data & API Endpoints</h4>
                </div>
                <div className="text-center md:text-left space-y-1">
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider">03 / Production Host</div>
                  <h4 className="text-sm font-bold text-foreground">Deploy Into Your Infrastructure</h4>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Interactive Solution Explorer */}
      <Section id="solutions" variant="muted">
        <SectionHeader
          title="Solutions Built Around Real Business Challenges"
          subtitle="Discover relevant AI applications tailored for specific workflows without reading long text listings."
          label="Solution Explorer"
        />
        <FadeIn>
          <SolutionExplorer categories={categories} />
        </FadeIn>
      </Section>

      {/* 3. Featured Showcase Blocks (Alternating layouts, Left/Right image blocks) */}
      <Section id="featured-accelerators">
        <SectionHeader
          title="Proven Functional Baselines"
          subtitle="Explore working enterprise accelerators built for immediate sandbox demonstration."
          label="Featured Accelerators"
        />

        <div className="space-y-16 md:space-y-24">
          {featuredAccelerators.map((acc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeIn
                key={acc.slug}
                direction={isEven ? "left" : "right"}
                className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* App Window Chrome Mockup */}
                <div className={`w-full lg:w-1/2 rounded-xl border bg-gradient-to-br ${acc.visualClass} aspect-video flex flex-col shadow-lg relative overflow-hidden`}>
                  {/* Traffic-light header */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-background/70 border-b border-border/40 backdrop-blur-sm shrink-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    <span className="flex-1 mx-3 h-4 rounded bg-border/50 flex items-center justify-center">
                      <span className="text-[9px] text-muted-foreground font-mono">{acc.slug}.avyu.ai</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Demo Active
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-14 border-r border-border/30 p-3 space-y-2.5 bg-background/30 shrink-0">
                      <div className={`h-1.5 rounded-full ${acc.dotColor} opacity-70 w-full`} />
                      <div className="h-1.5 rounded-full bg-muted-foreground/20 w-full" />
                      <div className="h-1.5 rounded-full bg-muted-foreground/20 w-3/4" />
                      <div className="h-1.5 rounded-full bg-muted-foreground/15 w-5/6" />
                      <div className="h-1.5 rounded-full bg-muted-foreground/10 w-2/3" />
                    </div>

                    {/* Content area */}
                    <div className="flex-1 p-3 md:p-4 space-y-3 overflow-hidden">
                      {/* User message bubble */}
                      <div className="flex justify-end">
                        <div className={`text-[9px] md:text-[10px] px-2.5 py-1.5 rounded-lg rounded-br-none ${acc.bubbleClass} max-w-[75%] leading-relaxed`}>
                          {acc.mockQuery}
                        </div>
                      </div>
                      {/* AI response bubble */}
                      <div className="flex">
                        <div className="text-[9px] md:text-[10px] px-2.5 py-1.5 rounded-lg rounded-bl-none bg-background/60 border border-border/50 max-w-[80%] leading-relaxed text-muted-foreground">
                          {acc.mockResponse}
                        </div>
                      </div>
                      {/* Data row */}
                      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-background/40 border border-border/30">
                        <span className={`h-1.5 w-1.5 rounded-full ${acc.dotColor} shrink-0`} />
                        <span className="h-1.5 flex-1 rounded-full bg-muted-foreground/15" />
                        <span className="text-[9px] text-muted-foreground font-mono shrink-0">{acc.dataLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex justify-between items-center px-4 py-1.5 bg-background/60 border-t border-border/30 shrink-0">
                    <span className="text-[9px] text-muted-foreground">LLM Independent Layer</span>
                    <span className="text-[9px] text-muted-foreground">PII Audit Shield V2</span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    Active Accelerator
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {acc.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {acc.outcome}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-3 pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      <Play className="h-3 w-3 fill-current text-brand" />
                      Watch Demo
                    </Link>
                    <Link
                      href={`/solutions/${acc.categorySlug}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
                    >
                      View Solution
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* 4. How Avyu Works */}
      <Section id="how-it-works" variant="dots">
        <SectionHeader
          title="From Idea to Deployment"
          subtitle="Our engagement model reduces execution time by starting from working code foundations."
          label="Our Process"
        />
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-4">
          {steps.map((step, idx) => (
            <Fragment key={step.step}>
              <div className="flex-1">
                <ProcessStepCard step={step} />
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center pt-7 shrink-0">
                  <ArrowRight className="h-4 w-4 text-muted-foreground/30" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Section>

      {/* 5. Visual Comparison Timeline */}
      <Section id="comparison">
        <SectionHeader
          title="Engineered to Deploy Faster"
          subtitle="Compare standard custom engineering loops against our accelerator integration loops."
          label="Bespoke vs. Avyu"
        />
        <FadeIn>
          <ComparisonTable />
        </FadeIn>
      </Section>

      {/* 6. Deployment & Trust Section */}
      <Section id="deployment" variant="muted">
        <SectionHeader
          title="Built for Secure Environments"
          subtitle="Deploy functional templates inside the networks, security controls, and boundaries you trust."
          label="Infrastructure & Governance"
        />
        
        <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {coreTrustItems.map((item) => {
            const Icon = trustIconMap[item.iconKey];
            return (
              <StaggerItem key={item.name} className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* 7. CTA Banner */}
      <CTABanner />
    </>
  );
}
