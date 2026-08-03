import type { ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand the product, business objectives, users, constraints, and existing environment.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "Evaluate architecture, infrastructure, integrations, security, scalability, and operational requirements.",
  },
  {
    number: "03",
    title: "Requirements",
    description: "Define clear functional, technical, and non-functional requirements.",
  },
  {
    number: "04",
    title: "Architecture and Scope",
    description:
      "Define the recommended solution, responsibilities, assumptions, risks, and delivery boundaries.",
  },
  {
    number: "05",
    title: "Delivery Planning",
    description: "Sequence work, validate constraints, and define realistic delivery expectations.",
  },
  {
    number: "06",
    title: "Implementation",
    description: "Build the approved solution using maintainable engineering practices.",
  },
  {
    number: "07",
    title: "Testing and Security Validation",
    description:
      "Test functionality, integrations, failure behavior, security controls, and deployment procedures.",
  },
  {
    number: "08",
    title: "Deployment",
    description: "Release through reproducible, documented, and reversible deployment steps.",
  },
  {
    number: "09",
    title: "Documentation",
    description: "Record architecture, operations, configuration, and maintenance procedures.",
  },
  {
    number: "10",
    title: "Monitoring and Continuous Improvement",
    description: "Observe the system in production and improve it over time.",
  },
];
