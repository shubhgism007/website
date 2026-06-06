"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Play, GraduationCap, Users, Target, Headphones, BookOpen, Building2, HelpCircle } from "lucide-react";
import type { Category } from "@/types/content";
import { cn } from "@/lib/utils";

const iconMap = {
  GraduationCap: GraduationCap,
  Users: Users,
  Target: Target,
  Headphones: Headphones,
  BookOpen: BookOpen,
  Building2: Building2,
};

interface SolutionExplorerProps {
  categories: Category[];
}

export function SolutionExplorer({ categories }: SolutionExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);

  // Translate accelerator slugs to formatted display names
  const formatAcceleratorName = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto border border-border bg-card/40 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl">
      
      {/* Left Column: Business Areas Menu list */}
      <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border/80 p-6 md:p-8 space-y-2">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
          Business Focus Areas
        </h3>
        <div className="flex flex-col gap-1.5">
          {categories.map((cat) => {
            const IconComponent = iconMap[cat.icon as keyof typeof iconMap] || HelpCircle;
            const isActive = activeCategory.slug === cat.slug;
            
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat)}
                onMouseEnter={() => setActiveCategory(cat)}
                className={cn(
                  "flex items-center gap-3.5 w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all outline-none",
                  isActive
                    ? "bg-brand text-brand-foreground shadow-md font-semibold"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                )}
              >
                <IconComponent className={cn("h-4 w-4 shrink-0", isActive ? "text-brand-foreground" : "text-brand")} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Dynamic Explorer Panel */}
      <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between min-h-[360px] transition-all duration-300">
        <div>
          {/* Header */}
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand mb-2 block">
            Solution Blueprint
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">
            {activeCategory.name}
          </h3>

          {/* Outcomes */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Example Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeCategory.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground leading-relaxed">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Accelerators */}
          {activeCategory.acceleratorSlugs && activeCategory.acceleratorSlugs.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                Proven Accelerator foundations
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeCategory.acceleratorSlugs.map((slug) => (
                  <span
                    key={slug}
                    className="group inline-flex items-center gap-1.5 rounded bg-secondary px-2.5 py-1 text-xs font-medium text-foreground border border-border hover:border-brand/40 hover:bg-brand/5 transition-colors cursor-default"
                  >
                    <span className="h-1 w-1 bg-brand rounded-full shrink-0" />
                    {formatAcceleratorName(slug)}
                    <ArrowRight className="h-3 w-3 text-brand opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5" />
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href={`/solutions/${activeCategory.slug}`}
            className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-brand px-5 py-2.5 text-xs font-semibold text-brand-foreground shadow-sm hover:bg-brand/90 transition-colors gap-1.5"
          >
            View Solution Details
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-secondary px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary/80 border border-border transition-colors gap-1.5"
          >
            <Play className="h-3 w-3 fill-current text-brand" />
            Watch Live Demo
          </Link>
        </div>

      </div>
    </div>
  );
}
