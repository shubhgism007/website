import type { Metadata } from "next";
import { Cloud, Shield, Server, HardDrive, GitBranch, CheckCircle2, ShieldCheck, Lock, Activity } from "lucide-react";
import { deploymentModels } from "@/content/deployment-models";
import { deploymentFaq } from "@/content/faq";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { DeploymentCard } from "@/components/ui/deployment-card";
import { FAQAccordion } from "@/components/ui/faq";
import { CTABanner } from "@/components/ui/cta-banner";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";

export const metadata: Metadata = {
  title: "Deployment Models | Avyu.ai",
  description:
    "Review secure enterprise AI deployment hosting models: fully managed cloud, private cloud (VPC), customer infrastructure, and on-premises hosting.",
};

const iconMap = {
  Cloud: Cloud,
  Shield: Shield,
  Server: Server,
  HardDrive: HardDrive,
  GitBranch: GitBranch,
};

const corePrinciples = [
  {
    name: "Enterprise Security First",
    description: "Strict isolation policies, access auditing, and encrypted state storage built into every baseline accelerator.",
    icon: Lock,
  },
  {
    name: "Complete Data Sovereignty",
    description: "Your training weights and query vectors remain inside your chosen infrastructure boundary at all times.",
    icon: ShieldCheck,
  },
  {
    name: "Audit & Compliance Ready",
    description: "Log every inference, track LLM usage quotas, and manage query scrubbing filters for strict data policy compliance.",
    icon: Activity,
  },
];

export default function DeploymentPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="grid" className="pt-24 pb-16">
        <SectionHeader
          title="Built for Enterprise Security & Compliance"
          subtitle="Avyu accelerators are built to be hosted inside the environments you already trust and govern. Choose from fully managed hosting to air-gapped on-premises setups."
          label="Secure Deployment"
        />
      </Section>

      {/* Deployment models Grid */}
      <Section variant="muted" className="border-t border-border">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Flexible Infrastructure Models
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Choose the deployment layout that satisfies your organizational governance.
          </p>
        </div>

        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deploymentModels.map((model) => (
            <StaggerItem key={model.name}>
              <DeploymentCard model={model} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Core Principles */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {corePrinciples.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <FadeIn key={idx} className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-brand mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{principle.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Process Architecture Diagram */}
      <Section variant="dots" className="border-y border-border">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Enterprise Deployment Architecture
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            A secure gateway wrapper keeps user queries isolated, scrubbed of PII, audited, and logged before fetching LLM models.
          </p>
        </div>

        <FadeIn className="max-w-4xl mx-auto p-6 md:p-12 border border-border bg-card rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Step 1 */}
            <div className="p-4 rounded-lg bg-secondary/50 border border-border text-center">
              <span className="text-xs font-bold text-muted-foreground block mb-1">Incoming Query</span>
              <span className="text-sm font-semibold text-foreground">User / API Client</span>
            </div>
            <div className="text-center text-muted-foreground hidden md:block">→</div>
            
            {/* Step 2 */}
            <div className="p-4 rounded-lg bg-brand/5 dark:bg-brand/10 border border-brand/20 text-center">
              <span className="text-xs font-bold text-brand block mb-1">Avyu Security Shield</span>
              <span className="text-sm font-semibold text-foreground">PII Scrubbing & Auth</span>
            </div>
            <div className="text-center text-muted-foreground hidden md:block">→</div>

            {/* Step 3 */}
            <div className="p-4 rounded-lg bg-secondary/50 border border-border text-center">
              <span className="text-xs font-bold text-muted-foreground block mb-1">Execution Env</span>
              <span className="text-sm font-semibold text-foreground">Custom LLM/RAG Pipeline</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* FAQ Accordion */}
      <Section>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Deployment & Security FAQ
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Answers to typical infrastructure, licensing, and compliance questions.
          </p>
        </div>

        <FadeIn>
          <FAQAccordion items={deploymentFaq} />
        </FadeIn>
      </Section>

      <CTABanner
        title="Ready to Review Security Architecture Details?"
        subtitle="Schedule a technical briefing with our infrastructure engineers to review data flow diagrams, compliance controls, and deployment manifests."
      />
    </>
  );
}
