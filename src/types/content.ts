export interface Accelerator {
  slug: string;
  name: string;
  category: string;
  industry: string;
  description: string;
  problemSolved: string;
  outcomes: string[];
  capabilities: string[];
  integrations: string[];
  deploymentOptions: string[];
  customizationScope: string[];
  demoAvailable: boolean;
  deploymentReady: boolean;
  demoUrl: string;
  videoUrl: string;
  faq: FAQ[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  outcomes: string[];
  challenges: string[];
  acceleratorSlugs: string[];
}

export interface DeploymentModel {
  name: string;
  description: string;
  features: string[];
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ComparisonItem {
  dimension: string;
  traditional: string;
  avyu: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface TechFoundation {
  name: string;
  description: string;
  icon: string;
}
