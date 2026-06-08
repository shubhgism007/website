import type { DeploymentModel } from "@/types/content";

export const deploymentModels: DeploymentModel[] = [
  {
    name: "Cloud Deployment",
    description:
      "Fully managed deployment on secure cloud infrastructure with automatic scaling, monitoring, and maintenance.",
    features: [
      "Automatic scaling and load balancing",
      "99.9% uptime SLA",
      "Managed security and compliance",
      "Continuous updates and improvements",
      "Global edge delivery",
    ],
    icon: "Cloud",
  },
  {
    name: "Private Cloud",
    description:
      "Dedicated cloud environment with isolated resources, custom security configurations, and full network control.",
    features: [
      "Isolated compute and storage",
      "Custom security policies",
      "VPN and private networking",
      "Dedicated support team",
      "Compliance certifications",
    ],
    icon: "Shield",
  },
  {
    name: "Customer Infrastructure",
    description:
      "Deploy within your existing cloud accounts (AWS, Azure, GCP) with your own security controls and governance.",
    features: [
      "Deploy in your cloud accounts",
      "Use existing IAM and security",
      "Data stays in your environment",
      "Integration with existing services",
      "Full audit trail",
    ],
    icon: "Server",
  },
  {
    name: "On-Premises Deployment",
    description:
      "Full on-premises deployment for organizations with strict data residency, air-gapped, or regulatory requirements.",
    features: [
      "Complete data sovereignty",
      "Air-gapped deployment support",
      "Hardware optimization",
      "Local support and training",
      "Custom SLA agreements",
    ],
    icon: "HardDrive",
  },
  {
    name: "Hybrid Architecture",
    description:
      "Combine cloud and on-premises components for optimal performance, compliance, and cost efficiency.",
    features: [
      "Flexible component placement",
      "Edge computing support",
      "Unified management plane",
      "Cost-optimized architecture",
      "Gradual migration support",
    ],
    icon: "GitBranch",
  },
];
