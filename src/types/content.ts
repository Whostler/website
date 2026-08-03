export type IconName =
  | "cloud"
  | "server"
  | "bot"
  | "relay"
  | "blockchain"
  | "shield"
  | "globe"
  | "docs";

export interface Service {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  icon: IconName;
  note?: string;
}

export interface TechnologyGroup {
  id: string;
  title: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
