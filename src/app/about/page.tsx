import type { Metadata } from "next";
import { CheckCircle2, Star, ShieldCheck, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "About Us | Avyu.ai",
  description:
    "Learn about Avyu's mission to bridge the gap between custom AI projects and generic SaaS products using business-ready enterprise accelerators.",
};

const pillars = [
  {
    title: "Why Avyu Exists",
    description:
      "Most enterprise AI initiatives stall during the pilot stage. Building bespoke models is prohibitively slow, while off-the-shelf SaaS apps are too rigid for nuanced workflows. Avyu exists to provide the middle ground — pre-built, tested, and secure baseline accelerators that can be customized and deployed in days.",
    icon: Star,
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to accelerate the real-world adoption of AI in enterprise workflows, helping organizations transition from speculative AI experimentation to production deployment.",
    icon: Zap,
  },
  {
    title: "Our Enterprise Philosophy",
    description:
      "We believe data belongs to the customer, software layouts should adapt to the organization, and hosting should support compliance guidelines, whether in private clouds or on-premises configs.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="grid" className="pt-24 pb-16">
        <SectionHeader
          title="Bridging the Gap in Enterprise AI Adoption"
          subtitle="We believe organizations shouldn't have to choose between expensive custom development and generic off-the-shelf tools."
          label="Our Story"
        />
      </Section>

      {/* Narrative Section */}
      <Section variant="muted" className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={idx} className="p-8 bg-card border border-border rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-brand mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{pillar.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Philosophy Details */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          <FadeIn className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Our Approach to Enterprise AI</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Traditional custom software begins with a blank slate, leading to long development timelines and high execution risk. Off-the-shelf SaaS products require companies to reshape their workflows to fit the vendor's software conventions.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Avyu provides functional starting templates called **Accelerators**. They represent 80% of the core software capability needed for specific business categories. The remaining 20% is customized by our integration engineers to align with your organization's API schemas, compliance constraints, and security requirements.
            </p>
          </FadeIn>

          <FadeIn className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-foreground">Our Core Beliefs</h3>
            <ul className="space-y-3">
              {[
                "Software must serve real-world workflows, not the other way around.",
                "AI systems must adapt to your proprietary databases and authentication schemas.",
                "Governance, security, and query audits should be native components, not an afterthought.",
                "The customer owns their training datasets and LLM deployment models.",
              ].map((belief, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span>{belief}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <CTABanner
        title="Want to See Our Accelerators in Action?"
        subtitle="Learn how we can demonstrate, customize, and deploy a production-ready AI solution inside your organization's environment."
      />
    </>
  );
}
