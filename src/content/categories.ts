import type { Category } from "@/types/content";

export const categories: Category[] = [
  {
    slug: "learning-education",
    name: "Learning & Education",
    description:
      "AI-powered learning experiences that adapt to individual needs, automate assessments, and deliver measurable knowledge outcomes.",
    icon: "GraduationCap",
    outcomes: [
      "Reduce training costs",
      "Scale personalized paths",
      "Automate quiz evaluations",
    ],
    challenges: [
      "One-size-fits-all training programs",
      "Inability to scale personalized learning",
    ],
    acceleratorSlugs: ["upsc-ai", "teaching-assistant"],
  },
  {
    slug: "workforce-hr",
    name: "Workforce & HR",
    description:
      "Streamline recruitment, onboarding, employee engagement, and workforce management with intelligent automation.",
    icon: "Users",
    outcomes: [
      "Reduce hiring time",
      "Improve onboarding",
      "Automate employee support",
    ],
    challenges: [
      "Manual, repetitive HR workflows",
      "Inconsistent employee experiences",
    ],
    acceleratorSlugs: ["hr-copilot", "interview-assistant", "employee-assistant"],
  },
  {
    slug: "training-simulation",
    name: "Training & Simulation",
    description:
      "Immersive, AI-driven simulation environments for high-stakes training, scenario planning, and skills development.",
    icon: "Target",
    outcomes: [
      "Create risk-free sandbox training",
      "Benchmark operator performance",
      "Reduce training infrastructure costs",
    ],
    challenges: [
      "High cost of real-world training environments",
      "Limited scenario diversity",
    ],
    acceleratorSlugs: ["training-simulation-platform"],
  },
  {
    slug: "customer-operations",
    name: "Customer Operations",
    description:
      "Intelligent customer engagement, support automation, and retention systems that deliver measurable operational improvements.",
    icon: "Headphones",
    outcomes: [
      "Reduce support response times",
      "Automate billing query updates",
      "Consistent service quality at scale",
    ],
    challenges: [
      "Rising customer support costs",
      "Inconsistent service quality",
    ],
    acceleratorSlugs: ["subscription-agent"],
  },
  {
    slug: "knowledge-management",
    name: "Knowledge Management",
    description:
      "Capture, organize, and surface organizational knowledge instantly — reducing search time and preventing knowledge loss.",
    icon: "BookOpen",
    outcomes: [
      "Reduce search time",
      "Preserve institutional knowledge",
      "Accelerate employee onboarding",
    ],
    challenges: [
      "Knowledge trapped in silos",
      "Time wasted searching for information",
    ],
    acceleratorSlugs: ["knowledge-assistant", "enterprise-search-agent"],
  },
  {
    slug: "industry-solutions",
    name: "Industry-Specific Solutions",
    description:
      "Purpose-built AI accelerators designed for the unique workflows, regulations, and requirements of specific industries.",
    icon: "Building2",
    outcomes: [
      "Adhere to compliance guidelines",
      "Automate regulation auditing",
      "Integrate with legacy core systems",
    ],
    challenges: [
      "Generic AI tools don't understand industry context",
      "Regulatory compliance requirements",
    ],
    acceleratorSlugs: ["compliance-auditor", "govtech-portal"],
  },
];
