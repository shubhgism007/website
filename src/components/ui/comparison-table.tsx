import { Clock, ShieldAlert, Zap } from "lucide-react";

export function ComparisonTable() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 1. Traditional AI Projects */}
      <div className="relative rounded-xl border border-border bg-card/40 p-6 md:p-8 backdrop-blur-sm overflow-hidden group">
        <div className="absolute top-0 left-0 h-1 w-full bg-destructive/30" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-sm">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-destructive uppercase tracking-widest">
              <ShieldAlert className="h-3.5 w-3.5" />
              Traditional AI Build
            </span>
            <h3 className="text-xl font-bold text-foreground">Custom Build From Scratch</h3>
          </div>

          <div className="flex-1 space-y-4">
            {/* Steps Visualizer */}
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="p-2.5 rounded bg-destructive/5 border border-destructive/10 text-destructive/60">Discovery</div>
              <div className="p-2.5 rounded bg-destructive/5 border border-destructive/10 text-destructive/60">Prototype</div>
              <div className="p-2.5 rounded bg-destructive/5 border border-destructive/10 text-destructive/60">Development</div>
              <div className="p-2.5 rounded bg-destructive/5 border border-destructive/10 text-destructive/60">Deployment</div>
            </div>
            
            {/* Timeline Bar */}
            <div className="relative h-6 bg-secondary rounded-full overflow-hidden border border-border flex items-center justify-between px-4 text-xs font-bold text-muted-foreground">
              <div className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-r from-destructive/10 to-destructive/20" />
              <span className="relative z-10 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-destructive" />
                Slow development loop
              </span>
              <span className="relative z-10 text-destructive font-black text-xl leading-none">6–12 Months</span>
            </div>
          </div>
        </div>
      </div>

      {/* Versus Indicator */}
      <div className="text-center relative">
        <div className="absolute inset-y-1/2 left-0 right-0 h-[1px] bg-border" />
        <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border text-xs font-bold text-muted-foreground tracking-widest uppercase">
          vs
        </span>
      </div>

      {/* 2. Avyu AI Projects */}
      <div className="relative rounded-xl border border-brand/30 bg-brand/5 p-6 md:p-8 backdrop-blur-sm overflow-hidden group shadow-lg">
        <div className="absolute top-0 left-0 h-1 w-full bg-brand" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-sm">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand uppercase tracking-widest">
              <Zap className="h-3.5 w-3.5 fill-current" />
              Avyu Deployment
            </span>
            <h3 className="text-xl font-bold text-foreground">Tailored Accelerators</h3>
          </div>

          <div className="flex-1 space-y-4">
            {/* Steps Visualizer */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-brand uppercase tracking-wider">
              <div className="p-2.5 rounded bg-brand/10 border border-brand/20">Working Accelerator</div>
              <div className="p-2.5 rounded bg-brand/10 border border-brand/20">Customization</div>
              <div className="p-2.5 rounded bg-brand/10 border border-brand/20">Deployment</div>
            </div>

            {/* Timeline Bar */}
            <div className="relative h-6 bg-secondary rounded-full overflow-hidden border border-border flex items-center justify-between px-4 text-xs font-bold text-foreground">
              <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-brand/10" />
              <span className="relative z-10 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-brand" />
                Proven baseline modular code
              </span>
              <span className="relative z-10 text-brand font-black text-xl leading-none">Weeks</span>
            </div>
            <p className="text-xs font-semibold text-brand text-center pt-1">
              Start from working code. Customize. Deploy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
