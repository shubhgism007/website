import type { FAQ } from "@/types/content";

export const homeFaq: FAQ[] = [
  {
    question: "What is an Enterprise AI Accelerator?",
    answer:
      "An accelerator is a pre-built, proven AI foundation designed around a specific business workflow. It's not a SaaS product or a DIY toolkit — it's a reusable starting point that can be demonstrated, customized, and deployed for your specific environment.",
  },
  {
    question: "How is Avyu different from hiring an AI consulting firm?",
    answer:
      "Traditional AI consulting starts from scratch for every project. Avyu starts with proven accelerators that have already been built and tested, dramatically reducing development time, risk, and cost.",
  },
  {
    question: "How long does a typical deployment take?",
    answer:
      "Deployment timelines vary based on customization needs, but most accelerators can be demonstrated within days and deployed within weeks — not months or years.",
  },
  {
    question: "Do we need an in-house AI team?",
    answer:
      "No. Avyu handles the technical implementation. Your team provides business context, requirements, and feedback during the customization process.",
  },
];

export const deploymentFaq: FAQ[] = [
  {
    question: "Can we deploy in an air-gapped environment?",
    answer:
      "Yes. Our on-premises deployment option fully supports air-gapped environments with no external network dependencies.",
  },
  {
    question: "How do you handle data security during deployment?",
    answer:
      "All data is encrypted at rest and in transit. We follow industry-standard security practices and can align with your organization's specific security policies and compliance requirements.",
  },
  {
    question: "Can we use our own cloud accounts?",
    answer:
      "Yes. Our customer infrastructure deployment model allows us to deploy directly into your AWS, Azure, or GCP accounts with your existing IAM and security controls.",
  },
  {
    question: "What ongoing support is provided post-deployment?",
    answer:
      "We offer tiered support plans including monitoring, maintenance, model updates, and dedicated account management for enterprise clients.",
  },
  {
    question: "How do you handle model updates and improvements?",
    answer:
      "Updates are managed through a staged rollout process with testing in staging environments before production deployment. Critical security patches are prioritized.",
  },
];
