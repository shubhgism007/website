"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  categories: string[];
  selectedDeployment: string;
  setSelectedDeployment: (val: string) => void;
  deploymentOptions: string[];
}

export function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  selectedDeployment,
  setSelectedDeployment,
  deploymentOptions,
}: FilterBarProps) {
  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative rounded-lg shadow-sm max-w-lg">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
          placeholder="Search accelerators by name, description, capabilities..."
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between border-t border-border pt-4">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-semibold border transition-all duration-200",
              selectedCategory === "all"
                ? "bg-brand text-brand-foreground border-brand"
                : "bg-card text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
            )}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-semibold border transition-all duration-200",
                selectedCategory === cat
                  ? "bg-brand text-brand-foreground border-brand"
                  : "bg-card text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Deployment Option filter dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground shrink-0">Deployment:</span>
          <select
            value={selectedDeployment}
            onChange={(e) => setSelectedDeployment(e.target.value)}
            className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
          >
            <option value="all">Any Model</option>
            {deploymentOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
