"use client";

import { useState } from "react";
import { Search, X, GraduationCap, HeartPulse, TrendingUp, Scale, Factory, Users, Radio, LayoutGrid } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AcceleratorCard } from "@/components/ui/accelerator-card";
import { CTABanner } from "@/components/ui/cta-banner";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { accelerators } from "@/content/accelerators";
import { cn } from "@/lib/utils";

const DOMAIN_CONFIG = [
  { label: "All",            icon: LayoutGrid  },
  { label: "Education",      icon: GraduationCap },
  { label: "Healthcare",     icon: HeartPulse  },
  { label: "Finance",        icon: TrendingUp  },
  { label: "Legal",          icon: Scale       },
  { label: "Manufacturing",  icon: Factory     },
  { label: "HR & Workforce", icon: Users       },
  { label: "Telecom",        icon: Radio       },
];

function hasLiveDemo(acc: (typeof accelerators)[number]) {
  return acc.demoAvailable && acc.demoUrl && !acc.demoUrl.includes("{{");
}

export default function SolutionsPage() {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("All");

  const filtered = accelerators.filter((acc) => {
    const matchesDomain = domain === "All" || acc.category === domain;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      acc.name.toLowerCase().includes(q) ||
      acc.description.toLowerCase().includes(q) ||
      acc.capabilities.some((c) => c.toLowerCase().includes(q));
    return matchesDomain && matchesSearch;
  });

  const liveAccelerators = filtered.filter(hasLiveDemo);
  const comingSoon = filtered.filter((a) => !hasLiveDemo(a));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-widest text-brand mb-4 block">
              Accelerator Library
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-[3.5rem] text-foreground leading-[0.95] mb-4">
              The Right Accelerator<br />for Every Industry
            </h1>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Pre-built solutions that fit how your business actually works.
              Live demos available — no sign-up required.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-background/90 backdrop-blur-xl border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Domain tabs */}
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {DOMAIN_CONFIG.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setDomain(label)}
                className={cn(
                  "shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all",
                  domain === label
                    ? "bg-brand text-brand-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}

            {/* Search */}
            <div className="relative ml-auto shrink-0 w-52">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search accelerators…"
                className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-8 text-xs text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Live Demos */}
        {liveAccelerators.length > 0 && (
          <section>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                      Available Now
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Try these accelerators live — no sign-up required</p>
                </div>
              </div>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {liveAccelerators.map((acc) => (
                <StaggerItem key={acc.slug}>
                  <AcceleratorCard accelerator={acc} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </section>
        )}

        {/* Coming Soon */}
        {comingSoon.length > 0 && (
          <section>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                    Coming Soon
                  </p>
                  <p className="text-xs text-muted-foreground">
                    In development — contact us to get early access or request a specific domain
                  </p>
                </div>
              </div>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {comingSoon.map((acc) => (
                <StaggerItem key={acc.slug}>
                  <AcceleratorCard accelerator={acc} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </section>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-border p-20 text-center bg-card/50">
            <p className="text-sm text-muted-foreground mb-4">No accelerators match your search.</p>
            <button
              onClick={() => { setSearch(""); setDomain("All"); }}
              className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <CTABanner
        title="Don't see your industry?"
        subtitle="We build accelerators for any enterprise workflow. Tell us your domain and we'll scope a custom solution."
      />
    </>
  );
}
