import Link from "next/link";
import { ArrowRight, Play, Lock } from "lucide-react";
import type { Accelerator } from "@/types/content";
import { cn } from "@/lib/utils";

function hasLiveDemo(acc: Accelerator) {
  return acc.demoAvailable && acc.demoUrl && !acc.demoUrl.includes("{{");
}

export function AcceleratorCard({ accelerator }: { accelerator: Accelerator }) {
  return hasLiveDemo(accelerator) ? (
    <LiveCard accelerator={accelerator} />
  ) : (
    <ComingSoonCard accelerator={accelerator} />
  );
}

function LiveCard({ accelerator }: { accelerator: Accelerator }) {
  return (
    <Link
      href={`/accelerators/${accelerator.slug}`}
      className="group relative flex flex-col rounded-2xl bg-card border border-border hover:border-brand/50 transition-all duration-300 hover:shadow-[0_0_40px_-8px_hsl(var(--brand)/0.2)] overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-brand via-blue-400 to-brand/0" />

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 px-2.5 py-1 rounded-full border border-brand/20">
              {accelerator.category}
            </span>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-800/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Demo
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-brand transition-colors mb-3">
          {accelerator.name}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3 mb-6">
          {accelerator.description}
        </p>

        {/* Key outcome */}
        {accelerator.outcomes[0] && (
          <div className="mt-auto mb-6 flex items-start gap-2.5 p-3 rounded-lg bg-secondary/50 border border-border/50">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
            <span className="text-xs text-muted-foreground leading-relaxed">
              {accelerator.outcomes[0]}
            </span>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground group-hover:bg-brand/90 transition-colors">
            <Play className="h-3 w-3 fill-current" />
            Try Demo
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            Details
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ComingSoonCard({ accelerator }: { accelerator: Accelerator }) {
  return (
    <div className="relative flex flex-col rounded-2xl bg-card/50 border border-border/50 overflow-hidden">
      {/* Lock overlay */}
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 bg-secondary/80 px-2.5 py-1 rounded-full border border-border/50">
          <Lock className="h-2.5 w-2.5" />
          Coming Soon
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6 opacity-70">
        {/* Category */}
        <div className="mb-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 bg-secondary/50 px-2.5 py-1 rounded-full border border-border/40">
            {accelerator.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground/70 mb-3 pr-20">
          {accelerator.name}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground/60 line-clamp-3 mb-6">
          {accelerator.description}
        </p>

        {/* Teaser outcomes */}
        <ul className="mt-auto space-y-2 mb-6">
          {accelerator.outcomes.slice(0, 2).map((o, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30 shrink-0 mt-1.5" />
              <span className="text-xs text-muted-foreground/50 leading-relaxed">{o}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground/70",
            "hover:text-brand transition-colors w-fit"
          )}
        >
          Get notified when live
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
