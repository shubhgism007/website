import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Target, Headphones, BookOpen, Building2, HelpCircle } from "lucide-react";
import type { Category } from "@/types/content";

// Map icons statically to avoid bundle bloating and dynamic imports issues
const iconMap = {
  GraduationCap: GraduationCap,
  Users: Users,
  Target: Target,
  Headphones: Headphones,
  BookOpen: BookOpen,
  Building2: Building2,
};

export function CategoryCard({ category }: { category: Category }) {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || HelpCircle;

  return (
    <div className="group relative flex flex-col justify-between rounded-xl bg-card border border-border p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-brand/40 hover:-translate-y-1">
      <div>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-brand group-hover:bg-brand/10 transition-colors">
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
          {category.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>

        {category.outcomes && category.outcomes.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Example Outcomes
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              {category.outcomes.slice(0, 3).map((outcome, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8 pt-4 border-t border-border/60">
        <Link
          href={`/solutions/${category.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand group-hover:gap-2.5 transition-all duration-200"
        >
          Explore Solutions
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
