import type { TechnologyGroup } from "@/types/content";

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "cloud",
    title: "Cloud",
    items: ["Google Cloud Platform", "Amazon Web Services"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST", "GraphQL"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: ["Linux", "Docker", "Kubernetes", "Nginx", "Apache", "CI/CD", "Infrastructure as Code"],
  },
  {
    id: "data",
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    items: ["Solidity", "Ethereum", "EVM", "Hardhat", "Foundry"],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    items: ["OpenAI", "MCP", "Agentic AI", "RAG", "Tool calling", "Workflow automation"],
  },
];
