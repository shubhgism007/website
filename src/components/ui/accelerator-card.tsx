import Link from "next/link";
import { ArrowRight, Play, Server } from "lucide-react";
import type { Accelerator } from "@/types/content";

export function AcceleratorCard({ accelerator }: { accelerator: Accelerator }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl bg-card border border-border p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-brand/40 hover:-translate-y-1">
      <div>
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full border border-border">
            {accelerator.category}
          </span>
          {accelerator.demoAvailable && (
            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-900/50">
              <Play className="h-2 w-2 fill-current" />
              Demo Available
            </span>
          )}
          {accelerator.deploymentReady && (
            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-brand bg-brand/10 px-2.5 py-0.5 rounded-full border border-brand/20">
              <Server className="h-2 w-2" />
              Deployment Ready
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
          {accelerator.name}
        </h3>
        
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {accelerator.description}
        </p>

        {accelerator.outcomes && accelerator.outcomes.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Key Outcomes
            </h4>
            <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
              {accelerator.outcomes.slice(0, 2).map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between">
        <Link
          href={`/accelerators/${accelerator.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-brand transition-all duration-200"
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        {accelerator.demoAvailable && (
          <Link
            href={`/accelerators/${accelerator.slug}#demo`}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-brand transition-colors"
          >
            Try Demo
          </Link>
        )}
      </div>
    </div>
  );
}
