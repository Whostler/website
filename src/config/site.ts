import type { NavItem } from "@/types/content";

export const siteConfig = {
  name: "Whostler Services",
  tagline:
    "Backend Engineering • Cloud Infrastructure • AI Agentic Systems • Blockchain • Technical Operations",
  footerStatement:
    "Backend, cloud, AI, and integration systems engineered for production.",
  description:
    "Whostler Services designs and maintains backend platforms, cloud infrastructure, AI agentic systems, secure integrations, blockchain applications, and production environments.",
  // Placeholder until the official domain is provided.
  url: import.meta.env.VITE_SITE_URL ?? "https://example.com",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Technologies", href: "#technologies" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  contact: {
    // Placeholder until official contact information is provided.
    email: import.meta.env.VITE_CONTACT_EMAIL ?? "contact@example.com",
    endpoint: import.meta.env.VITE_CONTACT_ENDPOINT ?? "",
    github: import.meta.env.VITE_GITHUB_URL ?? "",
    linkedin: import.meta.env.VITE_LINKEDIN_URL ?? "",
  },
};
