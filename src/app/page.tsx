import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Database, Link as LinkIcon, Lock, Network, ShieldCheck, Activity, Play, Eye } from "lucide-react";
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
    outcome: "Personalize study paths and grade essays automatically to boost readiness metrics.",
    categorySlug: "learning-education",
    slug: "upsc-ai",
    visualClass: "from-blue-600/10 to-indigo-600/10 border-blue-500/20",
    accentColor: "text-blue-500",
  },
  {
    name: "Teaching Assistant",
    outcome: "Automate syllabus questions and homework evaluations to save hours of manual prep.",
    categorySlug: "learning-education",
    slug: "teaching-assistant",
    visualClass: "from-emerald-600/10 to-teal-600/10 border-emerald-500/20",
    accentColor: "text-emerald-500",
  },
  {
    name: "HR Operations Copilot",
    outcome: "Streamline employee onboarding checklists and search handbooks dynamically.",
    categorySlug: "workforce-hr",
    slug: "hr-copilot",
    visualClass: "from-purple-600/10 to-pink-600/10 border-purple-500/20",
    accentColor: "text-purple-500",
  },
];

const coreTrustItems = [
  { name: "Customer Infrastructure", description: "Deploy directly within your AWS, GCP, or Azure subscription." },
  { name: "Private Cloud Hosting", description: "Isolated VPC resources with strict security group boundaries." },
  { name: "On-Prem Deployment", description: "Supports air-gapped operations with no external requirements." },
  { name: "Enterprise Integrations", description: "Native connections to ERP, SQL databases, and internal systems." },
  { name: "Security Controls", description: "Enforces data encryption, PII scrubbing, and row-level controls." },
  { name: "Governance & Audits", description: "Full audit logs of prompt contexts, parameters, and query outputs." },
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
                {/* Visual Screenshot Placeholder */}
                <div className={`w-full lg:w-1/2 rounded-xl border p-8 bg-gradient-to-br ${acc.visualClass} aspect-video flex flex-col justify-between shadow-md relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2.5 py-0.5 rounded border border-border">
                      {acc.name} sandbox
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <Eye className="h-2.5 w-2.5" />
                      Demo Active
                    </span>
                  </div>
                  
                  {/* Styled Mock Sandbox Graphic */}
                  <div className="py-6 flex flex-col items-center justify-center text-center">
                    <Cpu className={`h-12 w-12 ${acc.accentColor} mb-2`} />
                    <span className="text-xs font-bold text-foreground">av-host://{acc.slug}.vy</span>
                    <span className="text-[10px] text-muted-foreground mt-1">Status: Ready to link schemas</span>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-muted-foreground border-t border-border/40 pt-3">
                    <span>LLM Independent Layer</span>
                    <span>PII Audit Shield V2</span>
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
                  
                  <div className="flex items-center gap-4 pt-2">
                    <Link
                      href={`/solutions/${acc.categorySlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-brand transition-colors"
                    >
                      View Solution Area
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-brand transition-colors"
                    >
                      Watch Walkthrough
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
        
        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {coreTrustItems.map((item) => (
            <StaggerItem key={item.name} className="flex gap-4 p-6 bg-card border border-border rounded-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* 7. CTA Banner */}
      <CTABanner />
    </>
  );
}
