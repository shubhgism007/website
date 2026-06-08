"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AcceleratorCard } from "@/components/ui/accelerator-card";
import { CTABanner } from "@/components/ui/cta-banner";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { accelerators } from "@/content/accelerators";
import { cn } from "@/lib/utils";

const ALL = "All";
const categoryPills = [ALL, ...Array.from(new Set(accelerators.map((a) => a.category))).sort()];

export default function SolutionsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered = accelerators.filter((acc) => {
    const matchesCategory = activeCategory === ALL || acc.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      acc.name.toLowerCase().includes(q) ||
      acc.description.toLowerCase().includes(q) ||
      acc.capabilities.some((c) => c.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Section variant="grid" className="pb-0">
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">
              Solutions
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-foreground mb-4">
              Find the Right Accelerator
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Browse working AI solutions by business area, or search by name and capability.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col gap-4 mb-10">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or capability..."
                className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categoryPills.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold border transition-all",
                    activeCategory === cat
                      ? "bg-brand text-brand-foreground border-brand"
                      : "bg-card text-muted-foreground border-border hover:border-brand/40 hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-4">
        {filtered.length > 0 ? (
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((acc) => (
              <StaggerItem key={acc.slug}>
                <AcceleratorCard accelerator={acc} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        ) : (
          <div className="rounded-xl border border-border p-16 text-center bg-card">
            <p className="text-sm text-muted-foreground mb-4">No accelerators match your search.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory(ALL); }}
              className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </Section>

      <CTABanner
        title="Need a Custom Solution?"
        subtitle="We collaborate with enterprise teams to build accelerators for proprietary workflows, legacy ERPs, and compliance environments."
      />
    </>
  );
}
