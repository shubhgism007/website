import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Cpu, HelpCircle, Layout, ShieldAlert, Sliders } from "lucide-react";
import { accelerators } from "@/content/accelerators";
import { Section } from "@/components/ui/section";
import { FAQAccordion } from "@/components/ui/faq";
import { CTABanner } from "@/components/ui/cta-banner";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return accelerators.map((acc) => ({
    slug: acc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const accelerator = accelerators.find((acc) => acc.slug === slug);

  if (!accelerator) {
    return {
      title: "Accelerator Not Found | Avyu.ai",
    };
  }

  return {
    title: `${accelerator.name} Accelerator | Avyu.ai`,
    description: accelerator.description,
  };
}

export default async function AcceleratorDetailPage({ params }: Props) {
  const { slug } = await params;
  const accelerator = accelerators.find((acc) => acc.slug === slug);

  if (!accelerator) {
    notFound();
  }

  return (
    <>
      {/* Hero Header */}
      <Section variant="grid" className="pt-24 pb-16">
        <div className="max-w-4xl">
          <Link
            href="/accelerators"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Library
          </Link>
          
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full">
                {accelerator.category}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border">
                {accelerator.industry}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {accelerator.name}
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl">
              {accelerator.description}
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Problem Solved vs outcomes */}
      <Section variant="muted" className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Problem */}
          <FadeIn direction="left" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-destructive" />
              The Problem Solved
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground bg-card p-6 border border-border rounded-xl">
              {accelerator.problemSolved}
            </p>
          </FadeIn>

          {/* Outcomes */}
          <FadeIn direction="right" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              Business Outcomes
            </h2>
            <ul className="space-y-3 pt-2">
              {accelerator.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section>
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Core Capabilities & Modules
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            The technical logic built into this accelerator foundation.
          </p>
        </div>

        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accelerator.capabilities.map((cap, idx) => (
            <StaggerItem key={idx} className="flex gap-4 p-6 bg-card border border-border rounded-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{cap}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Reusable, performance-optimized software module ready for database linking and pipeline custom configuration.
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Integrations & Deployment Models */}
      <Section variant="muted" className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Integrations */}
          <FadeIn direction="left" className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Layout className="h-5 w-5 text-brand" />
              Supported Enterprise Integrations
            </h3>
            <ul className="space-y-3">
              {accelerator.integrations.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Deployment options */}
          <FadeIn direction="right" className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Cpu className="h-5 w-5 text-brand" />
              Deployment Infrastructure Support
            </h3>
            <ul className="space-y-3">
              {accelerator.deploymentOptions.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{item} Hosting Models</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* Customization scope */}
      <Section>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center justify-center gap-2">
            <Sliders className="h-5 w-5 text-brand" />
            Customization Scope
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            How we tailor this foundation accelerator to integrate with your existing corporate databases and custom styling preferences.
          </p>
        </div>

        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accelerator.customizationScope.map((scope, idx) => (
            <StaggerItem key={idx} className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-base font-semibold text-foreground">{scope}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Dedicated development integration and fine-tuning built directly around your operational policies and dataset rules.
              </p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Demo Section */}
      {accelerator.demoAvailable && (
        <Section id="demo" variant="dots" className="border-t border-border">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Live Demo
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Try the working accelerator below — no sign-up required.
            </p>
          </div>

          <FadeIn className="max-w-5xl mx-auto rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
            {/* Browser chrome */}
            <div className="bg-secondary/80 border-b border-border px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-border" />
                <span className="h-3 w-3 rounded-full bg-border" />
                <span className="h-3 w-3 rounded-full bg-border" />
              </div>
              <div className="flex-1 rounded-md bg-background/60 border border-border px-3 py-1 text-xs text-muted-foreground font-mono truncate">
                {accelerator.demoUrl && !accelerator.demoUrl.includes("{{") ? accelerator.demoUrl : `demo.avyu.ai/${accelerator.slug}`}
              </div>
              {accelerator.demoUrl && !accelerator.demoUrl.includes("{{") && (
                <Link
                  href={accelerator.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand hover:text-brand/80 transition-colors shrink-0"
                >
                  Open ↗
                </Link>
              )}
            </div>

            {/* iframe or placeholder */}
            {accelerator.demoUrl && !accelerator.demoUrl.includes("{{") ? (
              <iframe
                src={accelerator.demoUrl}
                className="w-full border-0"
                style={{ height: "700px" }}
                title={`${accelerator.name} Live Demo`}
                allow="clipboard-write"
              />
            ) : (
              <div className="p-12 text-center flex flex-col items-center justify-center h-80">
                <Cpu className="h-12 w-12 text-brand animate-pulse mb-4" />
                <h3 className="text-lg font-bold text-foreground">Demo Coming Soon</h3>
                <p className="text-sm text-muted-foreground max-w-md mt-2">
                  Schedule a Discovery session to see {accelerator.name} live with your own data.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            )}
          </FadeIn>
        </Section>
      )}

      {/* FAQ Accordion */}
      {accelerator.faq && accelerator.faq.length > 0 && (
        <Section className="border-t border-border">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center justify-center gap-2">
              <HelpCircle className="h-5 w-5 text-brand" />
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Learn about scaling, custom dataset security, and model swapping possibilities.
            </p>
          </div>

          <FadeIn>
            <FAQAccordion items={accelerator.faq} />
          </FadeIn>
        </Section>
      )}

      <CTABanner
        title={`Custom-Fit the ${accelerator.name} Accelerator`}
        subtitle="Let's map out your integration boundaries, required database schemas, and expected deployment timelines."
      />
    </>
  );
}
