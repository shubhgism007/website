# Avyu.ai Homepage Redesign Spec

**Date:** 2026-06-06
**Approach:** Surgical section rewrites (Approach A) — edit existing components in-place, no new component files.

---

## Goal

Within 5 seconds of landing, visitors understand:
> "Avyu helps organizations deploy AI solutions faster by starting from proven accelerators rather than building from scratch."

The site currently feels like a catalog. It should feel like a company that already has something close to your problem.

---

## Files in Scope

- `src/app/page.tsx` — primary target; hero copy, featured accelerators list, deployment items, section subtitles
- `src/components/ui/solution-explorer.tsx` — remove category description paragraph, chip hover action
- `src/components/ui/comparison-table.tsx` — large timeline labels, remove paragraphs, add callout line
- `src/components/ui/process-step.tsx` — remove descriptions, shorten captions, horizontal desktop flow
- `src/app/globals.css` — no changes needed

Content data files are **not changed** — all edits are in rendering, not in `categories.ts` or `accelerators.ts`.

---

## Section Designs

### 1. Hero

**Badge:** Replace duplicate headline badge with:
```
[● Live Demos Available]  Enterprise AI Accelerators
```
Green pulsing dot + "Live Demos Available" label + pipe + "Enterprise AI Accelerators" text. Ring color: `brand/20`.

**H1:** `Enterprise AI That Works Before You Buy It` (unchanged)

**Subheadline:** `Explore working AI solutions built around real business workflows. Experience live demos, customize what fits, and deploy into your environment.`

**CTAs:** Unchanged — `Explore Solutions` (filled) + `Schedule Discovery Session` (outline).

**3-step inline panel:** Keep structure; add a small icon per step (e.g. `Search`, `Settings`, `Rocket`) and a visible `→` connector arrow between steps on desktop. Labels stay the same.

---

### 2. Solution Explorer

**Section subtitle:** Shrink to: `"Select a business area to see relevant accelerators and outcomes."`

**Right panel changes:**
- Remove the category `description` paragraph entirely.
- Keep: category name (h3), outcomes checklist, accelerator chips.
- Accelerator chips: add `→` on hover (CSS `group-hover` transition reveals an `ArrowRight` icon).
- Action buttons unchanged.

**Left panel:** No changes.

---

### 3. Featured Accelerators

**Section subtitle:** `"Three lines to deployment. Working accelerators for real business problems."`

**4 accelerators** (add Training Simulation Platform as 4th):

| # | Name | Outcome copy | Accent | Mock UI color |
|---|------|-------------|--------|---------------|
| 1 | UPSC AI Preparation | "Personalize study paths and auto-grade essays to boost exam readiness." | blue | `from-blue-600/10 to-indigo-600/10` |
| 2 | Teaching Assistant | "Cut educator admin time by 60% with automated grading and instant query responses." | emerald | `from-emerald-600/10 to-teal-600/10` |
| 3 | HR Operations Copilot | "Reduce hiring time, improve onboarding, and automate employee support at scale." | purple | `from-purple-600/10 to-pink-600/10` |
| 4 | Training Simulation Platform | "Risk-free scenario practice that cuts training infrastructure costs by 60%." | amber | `from-amber-600/10 to-orange-600/10` |

**Visual block (replaces current Cpu icon graphic):**
- Outer: rounded-xl, gradient background, `border`, aspect-video
- Inner: app window chrome mockup
  - Traffic-light dots row at top (`● ● ●` in red/yellow/green — pure CSS, no SVG)
  - Faux sidebar: 3–4 short colored bars stacked vertically
  - Content area: 2 "chat bubble" rows + 1 table-row-style strip
  - Bottom status bar: two small text labels (reuse existing `LLM Independent Layer` / `PII Audit Shield V2`)
- Top-right of the visual block: `Demo Available` pill with a pulsing green dot

**Content block:**
- Keep: `Active Accelerator` label, accelerator name (h3), one outcome sentence
- Replace micro-links with two explicit buttons:
  - `Watch Demo` — outline style (`bg-secondary border border-border`)
  - `View Solution` — filled style (`bg-brand text-brand-foreground`)

**Layout:** Alternating even/odd (even = visual left, odd = visual right). Unchanged from current.

---

### 4. How Avyu Works

**ProcessStepCard changes:**
- Remove `step.description` rendering entirely.
- Replace with a short caption (hardcoded in `page.tsx` via updated `steps` array):
  - Discover → *"Map the workflow and target outcome."*
  - Demonstrate → *"See a live sandbox within days."*
  - Customize → *"Wire in your data and governance rules."*
  - Deploy → *"Go live inside your infrastructure."*
- Desktop layout: replace vertical center-line (`absolute top-8 left-1/2`) with horizontal connector arrows between the 4 steps. Use `after:` pseudo-element or an absolute `→` positioned between grid cells.
- Step icon circle: unchanged. Step number badge: unchanged.

**Section subtitle:** `"Four steps from discovery to production."`

---

### 5. Comparison

**ComparisonTable changes:**

Traditional block:
- Remove the paragraph (`"Requires writing custom architectures..."`)
- Keep: badge, h3 `"Custom Build From Scratch"`, 4-step grid, timeline bar
- Timeline bar: make `6–12 Months` label `text-2xl font-black text-destructive`
- 4-step grid cells: add `bg-destructive/5` tint

Avyu block:
- Remove the paragraph (`"Start with pre-built modules..."`)
- Keep: badge, h3 `"Tailored Accelerators"`, 3-step grid, timeline bar
- Timeline bar: make `Weeks` label `text-2xl font-black text-brand`
- 3-step grid cells: keep existing `bg-brand/10`
- Add one line below the timeline bar: `"Start from working code. Customize. Deploy."` in `text-xs font-semibold text-brand`

**Section subtitle:** `"Every traditional AI project takes 6–12 months. Avyu starts from working code."`

---

### 6. Deployment / Trust

**coreTrustItems in page.tsx — remove all `description` fields from rendering.**

Cards become: icon + title only. The `<p>` inside each StaggerItem card is removed.

**Per-item icons** (replace uniform `ShieldCheck` with distinct icons):
- Customer Infrastructure → `Cloud`
- Private Cloud Hosting → `Lock`
- On-Prem Deployment → `Server`
- Enterprise Integrations → `Link`
- Security Controls → `ShieldCheck`
- Governance & Audits → `ClipboardList`

**Section subtitle:** `"Every deployment runs inside your network, under your controls."`

---

## Text Reduction Summary

| Section | Before | After |
|---------|--------|-------|
| Hero badge | Duplicate h1 text | Short qualifier with live demo dot |
| Hero subheadline | 2 long sentences | 2 focused sentences (specified copy) |
| Solution Explorer right panel | Description para + outcomes + chips | Outcomes + chips only |
| Solution Explorer subtitle | Long | 1 short line |
| Featured accelerator outcome | 1 sentence (unchanged) | 1 sentence |
| Featured accelerator actions | 2 micro-links | 2 explicit buttons |
| Process step descriptions | Full sentence each | 7-word caption each |
| Comparison paragraphs | 2 paragraphs removed | 0 |
| Deployment card descriptions | 1 line each × 6 | Removed |

Estimated visible text reduction: ~45%.

---

## Constraints

- No new component files — all changes in-place.
- All existing `FadeIn` / `StaggerChildren` animations preserved.
- Dark mode compatibility maintained (all new colors use existing CSS variable tokens or Tailwind opacity modifiers).
- No data files (`categories.ts`, `accelerators.ts`, `deployment-models.ts`) are modified.
- `ProcessStep` type in `types/content.ts` is not changed — descriptions are overridden at the call site in `page.tsx`.
