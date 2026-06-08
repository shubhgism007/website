"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types/content";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-xl border border-border bg-card">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="group">
            <h3>
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold text-foreground hover:bg-secondary/40 transition-colors focus-ring"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 ml-4 group-hover:text-foreground",
                    isOpen && "rotate-180 text-brand group-hover:text-brand"
                  )}
                />
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-200 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground border-t border-border/40 pt-4 bg-secondary/10">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
