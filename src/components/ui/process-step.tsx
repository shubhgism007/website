import { Eye, FileSearch, Code, Send } from "lucide-react";
import type { ProcessStep } from "@/types/content";

const iconMap = {
  Discover: FileSearch,
  Demonstrate: Eye,
  Customize: Code,
  Deploy: Send,
};

export function ProcessStepCard({ step, active = false }: { step: ProcessStep; active?: boolean }) {
  const IconComponent = iconMap[step.title as keyof typeof iconMap] || Code;

  return (
    <div className="relative flex flex-col items-center md:items-start text-center md:text-left group">
      {/* Icon Circle */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card border-2 border-border text-muted-foreground group-hover:border-brand group-hover:text-brand transition-all duration-300 relative z-10">
        <IconComponent className="h-6 w-6" />
        <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground">
          {step.step}
        </span>
      </div>

      {/* Content */}
      <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-xs md:max-w-none">
        {step.description}
      </p>
    </div>
  );
}
