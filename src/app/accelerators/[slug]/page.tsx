import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Play, Lock,
  CheckCircle2, ShieldAlert, HelpCircle,
  BarChart3, Activity, MessageSquare, Sparkles,
  BookOpen, Layers, TrendingUp, Settings,
  Users, Globe, Database, Cpu,
} from "lucide-react";
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
  return accelerators.map((acc) => ({ slug: acc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const acc = accelerators.find((a) => a.slug === slug);
  if (!acc) return { title: "Not Found | Avyu.ai" };
  return {
    title: `${acc.name} | Avyu.ai`,
    description: acc.description,
  };
}

function hasLiveDemo(acc: (typeof accelerators)[number]) {
  return acc.demoAvailable && acc.demoUrl && !acc.demoUrl.includes("{{");
}

// Cycle through distinct icons for capabilities
const CAP_ICONS = [BarChart3, MessageSquare, Sparkles, BookOpen, Activity, Layers, TrendingUp, Settings, Users, Globe, Database, Cpu];

// Pull the first metric with a number/% from outcomes
function extractHeroStat(outcomes: string[]) {
  for (const o of outcomes) {
    const match = o.match(/(\d+%|\d+x|sub-\d+ms|\d+ hours?)/i);
    if (match) return { stat: match[0], label: o.replace(match[0], "").replace(/^[\s,–-]+/, "").trim() };
  }
  return null;
}

export default async function AcceleratorDetailPage({ params }: Props) {
  const { slug } = await params;
  const acc = accelerators.find((a) => a.slug === slug);
  if (!acc) notFound();

  const isLive = hasLiveDemo(acc);
  const heroStat = extractHeroStat(acc.outcomes);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/70 to-background pointer-events-none" />
        {isLive && (
          <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-brand/[0.07] blur-[120px] pointer-events-none" />
        )}

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Accelerators
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full border border-brand/20">
                {acc.category}
              </span>
              {isLive ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Demo
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border">
                  <Lock className="h-3 w-3" />
                  Coming Soon
                </span>
              )}
            </div>

            <h1 className="text-4xl font-black tracking-tight leading-[0.95] sm:text-5xl lg:text-[3.5rem] text-foreground mb-5">
              {acc.name}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {acc.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {isLive ? (
                <Link
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand/90 transition-colors shadow-lg shadow-brand/20"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Try Live Demo
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
                >
                  Request Early Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Schedule Discovery Session
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── IMPACT STATS ─────────────────────────────────────── */}
      {acc.outcomes.length > 0 && (
        <div className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
              {acc.outcomes.slice(0, 4).map((outcome, i) => {
                const m = outcome.match(/(\d+%|\d+x|sub-\d+ms|\d+\+?)/i);
                const stat = m ? m[0] : "✓";
                const label = outcome.replace(stat, "").replace(/^[\s,–-]+/, "").trim();
                return (
                  <div key={i} className="px-6 py-5">
                    <div className="text-2xl font-black text-brand leading-none mb-1">{stat}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{label || outcome}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── PROBLEM & OUTCOMES ───────────────────────────────── */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem */}
          <FadeIn direction="left">
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-7 h-full">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="h-4 w-4 text-destructive/70" />
                <span className="text-xs font-bold uppercase tracking-widest text-destructive/60">The Problem</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{acc.problemSolved}</p>
            </div>
          </FadeIn>

          {/* Outcomes */}
          <FadeIn direction="right">
            <div className="rounded-2xl border border-emerald-900/30 bg-emerald-950/20 p-7 h-full">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">What Changes</span>
              </div>
              <ul className="space-y-3">
                {acc.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── CAPABILITIES ─────────────────────────────────────── */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">What's Built In</span>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              Core Capabilities
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {acc.capabilities.map((cap, i) => {
              const Icon = CAP_ICONS[i % CAP_ICONS.length];
              return (
                <StaggerItem key={i}>
                  <div className="flex gap-4 p-5 bg-card rounded-xl border border-border hover:border-brand/30 transition-colors">
                    <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{cap}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        Reusable module — ready to wire into your data and infrastructure.
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </Section>

      {/* ── INTEGRATIONS + DEPLOYMENT ────────────────────────── */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeIn direction="left">
            <h3 className="text-lg font-bold text-foreground mb-5">Integrations</h3>
            <div className="flex flex-wrap gap-2">
              {acc.integrations.map((item, i) => (
                <span key={i} className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-3 py-1.5 rounded-lg">
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <h3 className="text-lg font-bold text-foreground mb-5">Deployment Options</h3>
            <div className="flex flex-wrap gap-2">
              {acc.deploymentOptions.map((opt, i) => (
                <span key={i} className="text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1.5 rounded-lg">
                  {opt}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              {acc.customizationScope.slice(0, 3).map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                  {s}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── LIVE DEMO ────────────────────────────────────────── */}
      {isLive && (
        <Section id="demo" variant="muted" className="border-t border-border">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">Interactive</span>
              <h2 className="text-2xl font-black tracking-tight text-foreground">Live Demo</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Try the working accelerator below. No sign-up required.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
                {/* Browser chrome */}
                <div className="bg-secondary/80 border-b border-border px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="h-3 w-3 rounded-full bg-border" />
                    <span className="h-3 w-3 rounded-full bg-border" />
                    <span className="h-3 w-3 rounded-full bg-border" />
                  </div>
                  <div className="flex-1 rounded-md bg-background/60 border border-border px-3 py-1 text-xs text-muted-foreground font-mono truncate">
                    {acc.demoUrl}
                  </div>
                  <Link
                    href={acc.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-semibold text-brand hover:opacity-80 transition-opacity"
                  >
                    Open ↗
                  </Link>
                </div>
                <iframe
                  src={acc.demoUrl}
                  className="w-full border-0"
                  style={{ height: 700 }}
                  title={`${acc.name} Live Demo`}
                  allow="clipboard-write"
                />
              </div>
            </FadeIn>
          </div>
        </Section>
      )}

      {/* ── COMING SOON PLACEHOLDER ──────────────────────────── */}
      {!isLive && (
        <Section variant="muted" className="border-t border-border">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="rounded-2xl border border-dashed border-border p-16 text-center">
                <Lock className="h-10 w-10 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Demo in Development</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                  We&apos;re building the live demo for {acc.name}. Get early access by scheduling a Discovery Session.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
                >
                  Request Early Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </Section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {acc.faq && acc.faq.length > 0 && (
        <Section className="border-t border-border">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="mb-10 text-center">
              <HelpCircle className="h-6 w-6 text-brand mx-auto mb-3" />
              <h2 className="text-2xl font-black tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <FadeIn>
              <FAQAccordion items={acc.faq} />
            </FadeIn>
          </div>
        </Section>
      )}

      <CTABanner
        title={`Deploy ${acc.name} for Your Organisation`}
        subtitle="Map out your integration boundaries, data schemas, and deployment timeline in a single Discovery Session."
      />
    </>
  );
}
