import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { categories } from "@/content/categories";
import { accelerators } from "@/content/accelerators";
import { Section } from "@/components/ui/section";
import { AcceleratorCard } from "@/components/ui/accelerator-card";
import { CTABanner } from "@/components/ui/cta-banner";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const currentCategory = categories.find((cat) => cat.slug === category);

  if (!currentCategory) {
    return {
      title: "Category Not Found | Avyu.ai",
    };
  }

  return {
    title: `${currentCategory.name} Solutions | Avyu.ai`,
    description: currentCategory.description,
  };
}

export default async function SolutionCategoryPage({ params }: Props) {
  const { category } = await params;
  const currentCategory = categories.find((cat) => cat.slug === category);

  if (!currentCategory) {
    notFound();
  }

  // Find accelerators that match the category slugs
  const relatedAccelerators = accelerators.filter((acc) =>
    currentCategory.acceleratorSlugs.includes(acc.slug)
  );

  return (
    <>
      {/* Category Hero */}
      <Section variant="grid" className="pt-24 pb-16">
        <div className="max-w-4xl">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Solutions
          </Link>
          <FadeIn>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {currentCategory.name}
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl">
              {currentCategory.description}
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Challenges & Outcomes Split */}
      <Section variant="muted" className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Challenges column */}
          <FadeIn direction="left" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Common Organizational Challenges
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Standard SaaS applications fail to handle complex internal variations, while building from scratch requires significant upfront design time.
            </p>
            <ul className="space-y-3 pt-2">
              {currentCategory.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-warning shrink-0 mt-2" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Outcomes column */}
          <FadeIn direction="right" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              Targeted Outcomes
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our accelerators serve as functional templates that we customize to achieve specific performance improvements.
            </p>
            <ul className="space-y-3 pt-2">
              {currentCategory.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* Accelerators Grid */}
      <Section>
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Available Enterprise Accelerators
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Proven baselines optimized for this operational domain, ready for deployment.
          </p>
        </div>

        {relatedAccelerators.length > 0 ? (
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedAccelerators.map((acc) => (
              <StaggerItem key={acc.slug}>
                <AcceleratorCard accelerator={acc} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        ) : (
          <div className="rounded-xl border border-border p-12 text-center bg-card">
            <p className="text-sm text-muted-foreground">
              New accelerators for {currentCategory.name} are currently in development.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:gap-2.5 transition-all duration-200"
              >
                Discuss a custom solution
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </Section>

      <CTABanner
        title={`Accelerate Your ${currentCategory.name} Deployment`}
        subtitle="Schedule a technical mapping session where we will showcase a working prototype and map your integration requirements."
      />
    </>
  );
}
