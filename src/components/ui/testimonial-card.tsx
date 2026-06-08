import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-card border border-border p-6 md:p-8 shadow-sm">
      <blockquote className="text-base text-foreground leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center font-bold text-brand uppercase text-sm">
          {testimonial.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">
            {testimonial.role}, <span className="font-medium text-foreground/80">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
