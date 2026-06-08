import type { Accelerator } from "@/types/content";

export const accelerators: Accelerator[] = [
  {
    slug: "upsc-ai",
    name: "UPSC AI",
    category: "Learning & Education",
    industry: "Government & Public Sector",
    description:
      "An intelligent exam preparation platform that delivers personalized study plans, adaptive practice tests, and real-time performance analytics for competitive examination preparation.",
    problemSolved:
      "Competitive exam aspirants face fragmented study resources, lack of personalized guidance, and limited feedback on their preparation progress — leading to suboptimal outcomes and wasted effort.",
    outcomes: [
      "Personalized study plans based on individual strengths and gaps",
      "Adaptive question generation aligned to exam patterns",
      "Real-time performance analytics and readiness scoring",
      "Automated essay evaluation with detailed feedback",
      "40% improvement in preparation efficiency",
    ],
    capabilities: [
      "AI-powered syllabus analysis and study planning",
      "Adaptive practice test generation",
      "Natural language essay evaluation",
      "Performance tracking and gap analysis",
      "Multi-format content delivery",
      "Progress benchmarking against cohort data",
    ],
    integrations: [
      "Learning Management Systems",
      "Content repositories",
      "Analytics dashboards",
      "Mobile platforms",
    ],
    deploymentOptions: ["Cloud", "Private Cloud", "On-Premises"],
    customizationScope: [
      "Exam-specific content and patterns",
      "Custom evaluation rubrics",
      "Branding and white-labeling",
      "Integration with existing learning platforms",
      "Language and localization support",
    ],
    demoAvailable: true,
    deploymentReady: true,
    demoUrl: "https://upsc-ai-pearl.vercel.app",
    videoUrl: "{{video_url}}",
    faq: [
      {
        question: "How does the AI adapt to individual learners?",
        answer:
          "The system continuously analyzes performance data, identifying knowledge gaps and adjusting difficulty levels, topic focus, and study recommendations in real-time.",
      },
      {
        question: "Can this be customized for other competitive exams?",
        answer:
          "Yes. The accelerator is designed as a reusable foundation. Exam patterns, content, and evaluation criteria can be customized for any competitive examination format.",
      },
      {
        question: "What data privacy measures are in place?",
        answer:
          "All learner data is encrypted at rest and in transit. The system supports data residency requirements and complies with standard data protection regulations.",
      },
    ],
  },
  {
    slug: "teaching-assistant",
    name: "Teaching Assistant",
    category: "Learning & Education",
    industry: "Education",
    description:
      "An AI-powered teaching assistant that handles routine educational tasks — answering student queries, grading assignments, and providing personalized feedback — allowing educators to focus on high-impact teaching.",
    problemSolved:
      "Educators spend 60% of their time on administrative and repetitive tasks like grading and answering common questions, leaving insufficient time for meaningful student interaction.",
    outcomes: [
      "60% reduction in administrative workload for educators",
      "Instant, consistent responses to student queries",
      "Automated grading with detailed explanations",
      "Personalized learning recommendations per student",
      "Scalable across thousands of students",
    ],
    capabilities: [
      "Natural language query handling",
      "Automated assignment grading",
      "Personalized feedback generation",
      "Curriculum-aligned content recommendations",
      "Student progress tracking",
      "Multi-language support",
    ],
    integrations: [
      "Learning Management Systems (Canvas, Moodle, Blackboard)",
      "Student Information Systems",
      "Content Management Platforms",
      "Communication tools (Slack, Teams)",
    ],
    deploymentOptions: ["Cloud", "Private Cloud"],
    customizationScope: [
      "Curriculum and subject-specific training",
      "Grading rubric customization",
      "Institution branding",
      "Integration with existing LMS",
      "Custom reporting dashboards",
    ],
    demoAvailable: true,
    deploymentReady: true,
    demoUrl: "{{demo_url}}",
    videoUrl: "{{video_url}}",
    faq: [
      {
        question: "Does this replace human teachers?",
        answer:
          "No. The Teaching Assistant handles routine tasks so educators can focus on mentoring, critical thinking exercises, and personalized student support.",
      },
      {
        question: "How accurate is the automated grading?",
        answer:
          "The system achieves high accuracy on objective assessments and provides nuanced feedback on subjective responses, with educator override capabilities for edge cases.",
      },
    ],
  },
  {
    slug: "hr-copilot",
    name: "HR Copilot",
    category: "Workforce & HR",
    industry: "Cross-Industry",
    description:
      "An intelligent HR operations platform that automates employee queries, policy navigation, onboarding workflows, and workforce analytics — delivering consistent, fast HR support at scale.",
    problemSolved:
      "HR teams are overwhelmed with repetitive queries, manual processes, and policy management tasks that prevent them from focusing on strategic workforce initiatives.",
    outcomes: [
      "80% reduction in routine HR query handling time",
      "50% faster employee onboarding",
      "Automated policy compliance checks",
      "Consistent employee experience across departments",
      "Data-driven workforce insights",
    ],
    capabilities: [
      "Natural language HR query resolution",
      "Automated onboarding workflows",
      "Policy document navigation and summarization",
      "Leave and benefits management",
      "Employee sentiment analysis",
      "Workforce analytics and reporting",
    ],
    integrations: [
      "HRIS platforms (Workday, SAP SuccessFactors, BambooHR)",
      "Payroll systems",
      "Communication platforms",
      "Document management systems",
    ],
    deploymentOptions: ["Cloud", "Private Cloud", "On-Premises"],
    customizationScope: [
      "Company-specific policies and procedures",
      "Custom workflow automation",
      "Role-based access controls",
      "Branding and employee portal design",
      "Regional compliance configurations",
    ],
    demoAvailable: true,
    deploymentReady: true,
    demoUrl: "{{demo_url}}",
    videoUrl: "{{video_url}}",
    faq: [
      {
        question: "How does the system handle confidential HR information?",
        answer:
          "The HR Copilot implements role-based access controls, data encryption, and audit logging to ensure confidential employee information is handled securely and in compliance with data protection regulations.",
      },
      {
        question: "Can it handle company-specific HR policies?",
        answer:
          "Yes. The system is trained on your organization's specific policies, handbooks, and procedures during the customization phase.",
      },
    ],
  },
  {
    slug: "subscription-agent",
    name: "Subscription Agent",
    category: "Customer Operations",
    industry: "SaaS & Technology",
    description:
      "An AI-driven subscription management and customer retention platform that handles billing queries, upgrade recommendations, churn prediction, and proactive engagement.",
    problemSolved:
      "Subscription businesses lose customers due to slow support, lack of proactive engagement, and inability to identify at-risk accounts before it's too late.",
    outcomes: [
      "35% reduction in customer churn",
      "70% faster resolution of billing queries",
      "Automated upgrade and cross-sell recommendations",
      "Proactive risk identification and engagement",
      "Reduced customer support costs",
    ],
    capabilities: [
      "Billing and subscription query resolution",
      "Churn prediction and risk scoring",
      "Proactive customer engagement",
      "Upgrade and cross-sell recommendations",
      "Usage pattern analysis",
      "Automated renewal management",
    ],
    integrations: [
      "Billing platforms (Stripe, Chargebee, Zuora)",
      "CRM systems (Salesforce, HubSpot)",
      "Communication tools",
      "Analytics platforms",
    ],
    deploymentOptions: ["Cloud", "Private Cloud"],
    customizationScope: [
      "Product catalog and pricing integration",
      "Custom engagement workflows",
      "Brand voice and communication style",
      "Churn prediction model tuning",
      "Dashboard and reporting customization",
    ],
    demoAvailable: true,
    deploymentReady: false,
    demoUrl: "{{demo_url}}",
    videoUrl: "{{video_url}}",
    faq: [
      {
        question: "How does the churn prediction model work?",
        answer:
          "The model analyzes usage patterns, support interactions, billing history, and engagement metrics to identify accounts at risk of churn, enabling proactive outreach before cancellation.",
      },
    ],
  },
  {
    slug: "training-simulation-platform",
    name: "Training Simulation Platform",
    category: "Training & Simulation",
    industry: "Healthcare & Safety",
    description:
      "An immersive AI-powered simulation platform for high-stakes training scenarios — from medical procedures to emergency response — providing realistic, risk-free practice environments.",
    problemSolved:
      "High-stakes industries need realistic training environments but face prohibitive costs, safety risks, and limited scenario diversity with traditional training methods.",
    outcomes: [
      "Risk-free practice for high-stakes scenarios",
      "Unlimited scenario generation and variation",
      "Measurable competency improvement tracking",
      "60% reduction in training infrastructure costs",
      "Scalable across organizations and locations",
    ],
    capabilities: [
      "Dynamic scenario generation",
      "Real-time performance assessment",
      "Adaptive difficulty progression",
      "Multi-participant simulation",
      "Debriefing and analytics",
      "Competency mapping and certification tracking",
    ],
    integrations: [
      "Learning Management Systems",
      "Competency management platforms",
      "HR and credentialing systems",
      "Video conferencing tools",
    ],
    deploymentOptions: ["Cloud", "Private Cloud", "On-Premises", "Hybrid"],
    customizationScope: [
      "Industry-specific scenario libraries",
      "Custom assessment criteria",
      "Regulatory compliance frameworks",
      "Integration with existing training programs",
      "Multi-language and localization",
    ],
    demoAvailable: true,
    deploymentReady: true,
    demoUrl: "{{demo_url}}",
    videoUrl: "{{video_url}}",
    faq: [
      {
        question: "What industries can this platform serve?",
        answer:
          "While initially designed for healthcare and emergency response, the platform's architecture supports customization for any industry requiring high-stakes training — including aviation, manufacturing, and defense.",
      },
      {
        question: "Can scenarios be created without technical expertise?",
        answer:
          "Yes. The platform includes a scenario builder that allows domain experts to create and modify training scenarios without programming knowledge.",
      },
    ],
  },
];
