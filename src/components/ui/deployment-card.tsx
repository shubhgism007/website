import { Cloud, Shield, Server, HardDrive, GitBranch, Check, HelpCircle } from "lucide-react";
import type { DeploymentModel } from "@/types/content";

const iconMap = {
  Cloud: Cloud,
  Shield: Shield,
  Server: Server,
  HardDrive: HardDrive,
  GitBranch: GitBranch,
};

export function DeploymentCard({ model }: { model: DeploymentModel }) {
  const IconComponent = iconMap[model.icon as keyof typeof iconMap] || HelpCircle;

  return (
    <div className="flex flex-col justify-between rounded-xl bg-card border border-border p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-brand/40">
      <div>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-brand">
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">
          {model.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {model.description}
        </p>

        {model.features && model.features.length > 0 && (
          <ul className="mt-6 space-y-3">
            {model.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
