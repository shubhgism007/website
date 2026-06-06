# Avyu.ai Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Avyu.ai's homepage so visitors understand within 5 seconds that Avyu deploys proven AI accelerators faster — replacing catalog-feel with outcome-focused narrative.

**Architecture:** Surgical in-place edits across `page.tsx` and two UI components. No new files created. All existing `FadeIn`/`StaggerChildren` animations preserved. Each task touches a discrete section and can be independently committed.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, lucide-react v1.17, framer-motion v12.

---

## File Map

| File | What changes |
|------|-------------|
| `src/app/page.tsx` | Hero badge · steps captions · process layout · featured accelerators array + visual blocks · deployment icons + items · section subtitles |
| `src/components/ui/solution-explorer.tsx` | Remove category description paragraph · chip hover arrow |
| `src/components/ui/comparison-table.tsx` | Remove paragraphs · large timeline labels · red-tint step cells · callout line |

`src/components/ui/process-step.tsx` — **no changes needed**. Layout is owned by the container in `page.tsx`.

---

## Task 1: Solution Explorer — remove description, add chip hover

**Files:**
- Modify: `src/components/ui/solution-explorer.tsx`

- [ ] **Step 1: Remove the description paragraph from the right panel**

  In `solution-explorer.tsx`, delete lines 76–78:
  ```tsx
  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
    {activeCategory.description}
  </p>
  ```
  The `h3` (category name) immediately precedes the outcomes section after this removal; add `mb-6` to the `h3` to preserve spacing:
  ```tsx
  <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">
    {activeCategory.name}
  </h3>
  ```

- [ ] **Step 2: Add hover arrow to accelerator chips**

  Replace the chip `<span>` block (lines 103–110) with:
  ```tsx
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
  ```
  `ArrowRight` is already imported at line 5.

- [ ] **Step 3: Run build to check for TypeScript errors**

  ```bash
  npm run build
  ```
  Expected: build succeeds with no type errors. If `Category` type has no `description` in use elsewhere, no issues.

- [ ] **Step 4: Commit**

  ```bash
  git add src/components/ui/solution-explorer.tsx
  git commit -m "feat: remove category description from solution explorer, add chip hover arrow"
  ```

---

## Task 2: Comparison Table — stronger visual contrast

**Files:**
- Modify: `src/components/ui/comparison-table.tsx`

- [ ] **Step 1: Remove the Traditional AI paragraph and add red tint to step cells**

  Delete lines 16–19 (the `<p>` description inside the Traditional block):
  ```tsx
  <p className="text-xs text-muted-foreground leading-relaxed">
    Requires writing custom architectures, setting up infrastructure pipelines, and debugging schemas from scratch.
  </p>
  ```

  Change the 4 step grid cells from `bg-secondary/50 border-border` to red-tinted:
  ```tsx
  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
    <div className="p-2.5 rounded bg-destructive/5 border border-destructive/10 text-destructive/60">Discovery</div>
    <div className="p-2.5 rounded bg-destructive/5 border border-destructive/10 text-destructive/60">Prototype</div>
    <div className="p-2.5 rounded bg-destructive/5 border border-destructive/10 text-destructive/60">Development</div>
    <div className="p-2.5 rounded bg-destructive/5 border border-destructive/10 text-destructive/60">Deployment</div>
  </div>
  ```

- [ ] **Step 2: Make the "6–12 Months" label large**

  In the Traditional timeline bar, replace:
  ```tsx
  <span className="relative z-10 text-destructive">6–12 Months</span>
  ```
  with:
  ```tsx
  <span className="relative z-10 text-destructive font-black text-xl leading-none">6–12 Months</span>
  ```

- [ ] **Step 3: Remove the Avyu paragraph and make "Weeks" label large**

  Delete lines 61–64 (the `<p>` description inside the Avyu block):
  ```tsx
  <p className="text-xs text-muted-foreground leading-relaxed">
    Start with pre-built modules already optimized for specific business workflows. Simply customize interfaces and deploy.
  </p>
  ```

  In the Avyu timeline bar, replace:
  ```tsx
  <span className="relative z-10 text-brand">Weeks</span>
  ```
  with:
  ```tsx
  <span className="relative z-10 text-brand font-black text-xl leading-none">Weeks</span>
  ```

- [ ] **Step 4: Add callout line below Avyu timeline bar**

  After the Avyu timeline bar `<div>` (after the closing `</div>` of the `relative h-6` bar), add:
  ```tsx
  <p className="text-xs font-semibold text-brand text-center pt-1">
    Start from working code. Customize. Deploy.
  </p>
  ```
  This goes inside the `<div className="flex-1 space-y-4">` container, as the 3rd child.

- [ ] **Step 5: Run build to check for TypeScript errors**

  ```bash
  npm run build
  ```
  Expected: build succeeds.

- [ ] **Step 6: Commit**

  ```bash
  git add src/components/ui/comparison-table.tsx
  git commit -m "feat: strengthen comparison section with larger labels and removed prose"
  ```

---

## Task 3: Hero badge update

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace the hero badge content**

  In `page.tsx`, replace the badge `<span>` at lines 88–91:
  ```tsx
  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-6 ring-1 ring-inset ring-brand/20">
    Enterprise AI That Works Before You Buy It
  </span>
  ```
  with:
  ```tsx
  <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-6 ring-1 ring-inset ring-brand/20">
    <span className="inline-flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Live Demos Available</span>
    </span>
    <span className="text-muted-foreground/50">·</span>
    Enterprise AI Accelerators
  </span>
  ```

- [ ] **Step 2: Run build**

  ```bash
  npm run build
  ```
  Expected: build succeeds with no errors.

- [ ] **Step 3: Commit**

  ```bash
  git add src/app/page.tsx
  git commit -m "feat: update hero badge to live demos indicator"
  ```

---

## Task 4: Process steps — shorter captions + horizontal desktop layout

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update the steps array with shorter captions**

  Replace the `steps` constant (lines 16–41) with:
  ```tsx
  const steps: ProcessStep[] = [
    {
      step: 1,
      title: "Discover",
      description: "Map the workflow and target outcome.",
      icon: "FileSearch",
    },
    {
      step: 2,
      title: "Demonstrate",
      description: "See a live sandbox within days.",
      icon: "Eye",
    },
    {
      step: 3,
      title: "Customize",
      description: "Wire in your data and governance rules.",
      icon: "Code",
    },
    {
      step: 4,
      title: "Deploy",
      description: "Go live inside your infrastructure.",
      icon: "Send",
    },
  ];
  ```

- [ ] **Step 2: Replace the process section container with horizontal flex layout**

  In the "How Avyu Works" section, replace the entire `<div className="relative">` container (lines 243–252):
  ```tsx
  <div className="relative">
    {/* Connecting Line for Timeline */}
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-80px)] bg-border hidden md:block" />
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
      {steps.map((step) => (
        <ProcessStepCard key={step.step} step={step} />
      ))}
    </div>
  </div>
  ```
  with:
  ```tsx
  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-4">
    {steps.map((step, idx) => (
      <>
        <div key={step.step} className="flex-1">
          <ProcessStepCard step={step} />
        </div>
        {idx < steps.length - 1 && (
          <div className="hidden md:flex items-center justify-center pt-7 shrink-0">
            <ArrowRight className="h-4 w-4 text-muted-foreground/30" />
          </div>
        )}
      </>
    ))}
  </div>
  ```
  Note: `ArrowRight` is already imported at the top of `page.tsx`.

- [ ] **Step 3: Run build**

  ```bash
  npm run build
  ```
  Expected: build succeeds. If React complains about missing `key` on Fragment, add `key={step.step}` to the outer `<>` by converting it to `<Fragment key={step.step}>` and importing `Fragment` from React at the top:
  ```tsx
  import { Fragment } from "react";
  ```

- [ ] **Step 4: Commit**

  ```bash
  git add src/app/page.tsx
  git commit -m "feat: shorten process step captions, horizontal desktop layout with arrow connectors"
  ```

---

## Task 5: Featured accelerators — app window mockup + 4th accelerator

**Files:**
- Modify: `src/app/page.tsx`

This is the largest single change. The `featuredAccelerators` array gains new fields, and the entire visual block JSX is replaced.

- [ ] **Step 1: Update the featuredAccelerators array**

  Replace the `featuredAccelerators` constant (lines 43–68) with:
  ```tsx
  const featuredAccelerators = [
    {
      name: "UPSC AI Preparation",
      outcome: "Personalize study paths and auto-grade essays to boost exam readiness.",
      categorySlug: "learning-education",
      slug: "upsc-ai",
      visualClass: "from-blue-600/10 to-indigo-600/10 border-blue-500/20",
      dotColor: "bg-blue-500",
      bubbleClass: "bg-blue-500/20 text-blue-300",
      mockQuery: "Generate a study plan for Polity",
      mockResponse: "4-week plan: Week 1 — Constitution & Amendments...",
      dataLabel: "Readiness: 74%",
    },
    {
      name: "Teaching Assistant",
      outcome: "Cut educator admin time by 60% with automated grading and instant query responses.",
      categorySlug: "learning-education",
      slug: "teaching-assistant",
      visualClass: "from-emerald-600/10 to-teal-600/10 border-emerald-500/20",
      dotColor: "bg-emerald-500",
      bubbleClass: "bg-emerald-500/20 text-emerald-300",
      mockQuery: "Grade this essay on climate policy",
      mockResponse: "Score: 8.5/10. Strong thesis, 3 sources cited...",
      dataLabel: "Queue: 12 essays",
    },
    {
      name: "HR Operations Copilot",
      outcome: "Reduce hiring time, improve onboarding, and automate employee support at scale.",
      categorySlug: "workforce-hr",
      slug: "hr-copilot",
      visualClass: "from-purple-600/10 to-pink-600/10 border-purple-500/20",
      dotColor: "bg-purple-500",
      bubbleClass: "bg-purple-500/20 text-purple-300",
      mockQuery: "Leave policy for contractors?",
      mockResponse: "Contractors receive 10 days/year, accrued monthly...",
      dataLabel: "47 policies indexed",
    },
    {
      name: "Training Simulation Platform",
      outcome: "Risk-free scenario practice that cuts training infrastructure costs by 60%.",
      categorySlug: "training-simulation",
      slug: "training-simulation-platform",
      visualClass: "from-amber-600/10 to-orange-600/10 border-amber-500/20",
      dotColor: "bg-amber-500",
      bubbleClass: "bg-amber-500/20 text-amber-300",
      mockQuery: "Start emergency response scenario #4",
      mockResponse: "Scenario active. 45F, cardiac event. Timer: 0:00",
      dataLabel: "Scenario: Active",
    },
  ];
  ```

- [ ] **Step 2: Replace the visual block JSX inside the featured accelerators map**

  In the `featuredAccelerators.map` callback, replace the entire `{/* Visual Screenshot Placeholder */}` div (lines 177–200) with the new app window chrome mockup:
  ```tsx
  {/* App Window Chrome Mockup */}
  <div className={`w-full lg:w-1/2 rounded-xl border bg-gradient-to-br ${acc.visualClass} aspect-video flex flex-col shadow-lg relative overflow-hidden`}>
    {/* Traffic-light header */}
    <div className="flex items-center gap-1.5 px-4 py-3 bg-background/70 border-b border-border/40 backdrop-blur-sm shrink-0">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      <span className="flex-1 mx-3 h-4 rounded bg-border/50 flex items-center justify-center">
        <span className="text-[9px] text-muted-foreground font-mono">{acc.slug}.avyu.ai</span>
      </span>
      <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Demo Active
      </span>
    </div>

    {/* Body */}
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <div className="w-14 border-r border-border/30 p-3 space-y-2.5 bg-background/30 shrink-0">
        <div className={`h-1.5 rounded-full ${acc.dotColor} opacity-70 w-full`} />
        <div className="h-1.5 rounded-full bg-muted-foreground/20 w-full" />
        <div className="h-1.5 rounded-full bg-muted-foreground/20 w-3/4" />
        <div className="h-1.5 rounded-full bg-muted-foreground/15 w-5/6" />
        <div className="h-1.5 rounded-full bg-muted-foreground/10 w-2/3" />
      </div>

      {/* Content area */}
      <div className="flex-1 p-3 md:p-4 space-y-3 overflow-hidden">
        {/* User message bubble */}
        <div className="flex justify-end">
          <div className={`text-[9px] md:text-[10px] px-2.5 py-1.5 rounded-lg rounded-br-none ${acc.bubbleClass} max-w-[75%] leading-relaxed`}>
            {acc.mockQuery}
          </div>
        </div>
        {/* AI response bubble */}
        <div className="flex">
          <div className="text-[9px] md:text-[10px] px-2.5 py-1.5 rounded-lg rounded-bl-none bg-background/60 border border-border/50 max-w-[80%] leading-relaxed text-muted-foreground">
            {acc.mockResponse}
          </div>
        </div>
        {/* Data row */}
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-background/40 border border-border/30">
          <span className={`h-1.5 w-1.5 rounded-full ${acc.dotColor} shrink-0`} />
          <span className="h-1.5 flex-1 rounded-full bg-muted-foreground/15" />
          <span className="text-[9px] text-muted-foreground font-mono shrink-0">{acc.dataLabel}</span>
        </div>
      </div>
    </div>

    {/* Status bar */}
    <div className="flex justify-between items-center px-4 py-1.5 bg-background/60 border-t border-border/30 shrink-0">
      <span className="text-[9px] text-muted-foreground">LLM Independent Layer</span>
      <span className="text-[9px] text-muted-foreground">PII Audit Shield V2</span>
    </div>
  </div>
  ```

- [ ] **Step 3: Replace micro-link buttons with two explicit buttons**

  In the content block (lines 214–228), replace the `<div className="flex items-center gap-4 pt-2">` with:
  ```tsx
  <div className="flex flex-col sm:flex-row items-start gap-3 pt-2">
    <Link
      href="/contact"
      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary/80 transition-colors"
    >
      <Play className="h-3 w-3 fill-current text-brand" />
      Watch Demo
    </Link>
    <Link
      href={`/solutions/${acc.categorySlug}`}
      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
    >
      View Solution
      <ArrowRight className="h-3 w-3" />
    </Link>
  </div>
  ```
  `Play` is already imported. `ArrowRight` is already imported.

- [ ] **Step 4: Remove unused imports**

  Remove `Cpu` from the import line at the top of `page.tsx` since the new mockup no longer uses it. The current import line is:
  ```tsx
  import { ArrowRight, Bot, Cpu, Database, Link as LinkIcon, Lock, Network, ShieldCheck, Activity, Play, Eye } from "lucide-react";
  ```
  Change to:
  ```tsx
  import { ArrowRight, Bot, Database, Link as LinkIcon, Lock, Network, ShieldCheck, Activity, Play, Eye } from "lucide-react";
  ```

- [ ] **Step 5: Run build**

  ```bash
  npm run build
  ```
  Expected: build succeeds. If TypeScript errors appear about missing properties on the accelerator objects (e.g., type inference), they're harmless inline objects — add `as const` to the array or ignore; the objects are not typed against any interface.

- [ ] **Step 6: Commit**

  ```bash
  git add src/app/page.tsx
  git commit -m "feat: add 4th accelerator, replace visual blocks with app window chrome mockup, two-button CTAs"
  ```

---

## Task 6: Deployment section — distinct icons, remove descriptions

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add new icon imports**

  In the lucide-react import at the top of `page.tsx`, add `Cloud`, `Server`, `ClipboardList`:
  ```tsx
  import { ArrowRight, Bot, Cloud, ClipboardList, Database, Link as LinkIcon, Lock, Network, Server, ShieldCheck, Activity, Play, Eye } from "lucide-react";
  ```

- [ ] **Step 2: Replace coreTrustItems and add an icon map**

  Replace the `coreTrustItems` constant and add a `trustIconMap` just above it:
  ```tsx
  const trustIconMap = {
    Cloud,
    Lock,
    Server,
    Link: LinkIcon,
    ShieldCheck,
    ClipboardList,
  } as const;

  const coreTrustItems: { name: string; iconKey: keyof typeof trustIconMap }[] = [
    { name: "Customer Infrastructure", iconKey: "Cloud" },
    { name: "Private Cloud Hosting", iconKey: "Lock" },
    { name: "On-Prem Deployment", iconKey: "Server" },
    { name: "Enterprise Integrations", iconKey: "Link" },
    { name: "Security Controls", iconKey: "ShieldCheck" },
    { name: "Governance & Audits", iconKey: "ClipboardList" },
  ];
  ```

- [ ] **Step 3: Update the deployment card rendering to use dynamic icons and no description**

  Replace the `StaggerChildren` grid in the deployment section:
  ```tsx
  <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
    {coreTrustItems.map((item) => (
      <StaggerItem key={item.name} className="flex gap-4 p-6 bg-card border border-border rounded-xl">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      </StaggerItem>
    ))}
  </StaggerChildren>
  ```
  with:
  ```tsx
  <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
    {coreTrustItems.map((item) => {
      const Icon = trustIconMap[item.iconKey];
      return (
        <StaggerItem key={item.name} className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
        </StaggerItem>
      );
    })}
  </StaggerChildren>
  ```

- [ ] **Step 4: Run build**

  ```bash
  npm run build
  ```
  Expected: build succeeds.

- [ ] **Step 5: Commit**

  ```bash
  git add src/app/page.tsx
  git commit -m "feat: distinct icons per deployment card, remove descriptions for cleaner trust grid"
  ```

---

## Task 7: Section subtitles — reduce text across all sections

**Files:**
- Modify: `src/app/page.tsx`

Update every `<SectionHeader>` subtitle prop. Do all changes in one pass.

- [ ] **Step 1: Update all SectionHeader subtitles**

  | Section (id) | Old subtitle | New subtitle |
  |---|---|---|
  | `#solutions` | "Discover relevant AI applications tailored for specific workflows without reading long text listings." | "Select a business area to see relevant accelerators and outcomes." |
  | `#featured-accelerators` | "Explore working enterprise accelerators built for immediate sandbox demonstration." | "Working solutions with live demos, ready to customize and deploy." |
  | `#how-it-works` | "Our engagement model reduces execution time by starting from working code foundations." | "Four steps from discovery to production." |
  | `#comparison` | "Compare standard custom engineering loops against our accelerator integration loops." | "Every traditional AI project takes 6–12 months. Avyu starts from working code." |
  | `#deployment` | "Deploy functional templates inside the networks, security controls, and boundaries you trust." | "Every deployment runs inside your network, under your controls." |

  Apply all five subtitle changes in `page.tsx`.

- [ ] **Step 2: Run build**

  ```bash
  npm run build
  ```
  Expected: build succeeds.

- [ ] **Step 3: Run dev server and do a full visual pass**

  ```bash
  npm run dev
  ```
  Open `http://localhost:3000` and verify:
  - [ ] Hero badge shows green pulsing dot + "Live Demos Available · Enterprise AI Accelerators"
  - [ ] Solution Explorer right panel shows outcomes + chips but no description paragraph; chips show arrow on hover
  - [ ] 4 featured accelerators appear with alternating left/right layout; each has app window chrome mockup (traffic lights, sidebar, chat bubbles, status bar); each has Watch Demo + View Solution buttons
  - [ ] Process steps show 4 short captions; desktop shows horizontal layout with `→` arrows between steps
  - [ ] Comparison section: "6–12 Months" and "Weeks" are visually large and bold; no paragraphs; callout line "Start from working code. Customize. Deploy." shows below Avyu timeline
  - [ ] Deployment grid: 6 cards each with distinct icon and name only, no description text
  - [ ] All section subtitles match the new shorter copy

- [ ] **Step 4: Commit**

  ```bash
  git add src/app/page.tsx
  git commit -m "feat: shorten all section subtitles for cleaner homepage narrative"
  ```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Covered by |
|---|---|
| Hero badge → live demo indicator | Task 3 |
| H1 + subheadline (unchanged) | No change needed — already correct |
| 3-step hero panel with icons + connector | Not in spec as a code change — existing panel kept as-is per spec ("strengthen" not rebuild). ✓ |
| Solution Explorer: remove description | Task 1 |
| Chip hover arrow | Task 1 |
| 4 featured accelerators (add Training Simulation) | Task 5 |
| App window chrome mockup visual | Task 5 |
| Demo Active pill + Watch Demo + View Solution buttons | Task 5 |
| Process steps: shorter captions | Task 4 |
| Process steps: horizontal desktop flow | Task 4 |
| Comparison: large time labels | Task 2 |
| Comparison: remove paragraphs | Task 2 |
| Comparison: callout line | Task 2 |
| Comparison: red-tint traditional cells | Task 2 |
| Deployment: distinct icons | Task 6 |
| Deployment: remove descriptions | Task 6 |
| All section subtitles shortened | Task 7 |

No gaps found.

**Placeholder scan:** No TBDs, no "similar to Task N" shortcuts, all code blocks complete.

**Type consistency:** `trustIconMap` defined in Task 6 Step 2 and consumed in Task 6 Step 3. `featuredAccelerators` fields (`dotColor`, `bubbleClass`, `mockQuery`, `mockResponse`, `dataLabel`) defined in Task 5 Step 1 and consumed in Task 5 Step 2. No cross-task type drift.
