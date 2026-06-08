import { Section } from "./section";
import { FadeIn } from "../animations/fade-in";
import { StaggerChildren, StaggerItem } from "../animations/stagger-children";

interface Metric {
  value: string;
  label: string;
  description: string;
}

const defaultMetrics: Metric[] = [
  {
    value: "10x",
    label: "Faster Deployment",
    description: "Launch functional accelerators in weeks, not years.",
  },
  {
    value: "60%",
    label: "Lower Risk",
    description: "Pre-validated core modules reduce project failure rates.",
  },
  {
    value: "3-5x",
    label: "Cost Efficiency",
    description: "Shared baseline structures dramatically lower development bills.",
  },
];

export function MetricsSection({ metrics = defaultMetrics }: { metrics?: Metric[] }) {
  return (
    <Section variant="muted" className="border-t border-border">
      <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {metrics.map((metric, idx) => (
          <StaggerItem key={idx} className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl">
            <span className="text-5xl font-extrabold tracking-tight text-brand md:text-6xl">
              {metric.value}
            </span>
            <span className="mt-4 text-lg font-semibold text-foreground">
              {metric.label}
            </span>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {metric.description}
            </p>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
