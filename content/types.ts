export type AvailabilityStatus = "available" | "limited" | "unavailable";

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  id: "telegram" | "email" | "github" | "phone";
  label: string;
  href: string;
  value: string;
  copyValue: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  url: string;
  locale: string;
  language: string;
  title: string;
  description: string;
  keywords: string[];
  availability: {
    status: AvailabilityStatus;
    label: string;
  };
  portrait: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  nav: NavItem[];
}

export interface HeroContent {
  eyebrow: string;
  name: string;
  firstName: string;
  lastName: string;
  offer: string;
  value: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  chips: string[];
}

export interface AboutPrinciple {
  title: string;
  text: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  principlesTitle: string;
  principles: AboutPrinciple[];
}

export type ExpertiseIcon =
  | "react"
  | "typescript"
  | "architecture"
  | "performance"
  | "designSystem"
  | "a11y"
  | "testing"
  | "review"
  | "leadership"
  | "api"
  | "forms"
  | "state"
  | "scale";

export interface ExpertiseItem {
  id: string;
  icon: ExpertiseIcon;
  title: string;
  text: string;
  featured?: boolean;
}

export interface ExpertiseContent {
  eyebrow: string;
  title: string;
  lead: string;
  items: ExpertiseItem[];
}

export type ProjectKind = "b2c" | "b2b";

export interface Project {
  id: string;
  kind: ProjectKind;
  title: string;
  subtitle: string;
  context: string;
  problem: string;
  role: string;
  solution: string;
  ux: string;
  engineering: string;
  value: string;
  tags: string[];
}

export interface ProjectsContent {
  eyebrow: string;
  title: string;
  lead: string;
  groups: {
    id: ProjectKind;
    title: string;
    description: string;
    projectIds: string[];
  }[];
  items: Project[];
}

export interface ProcessStep {
  id: string;
  title: string;
  text: string;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  lead: string;
  steps: ProcessStep[];
}

export type StackGroupId =
  | "core"
  | "ui"
  | "state"
  | "data"
  | "testing"
  | "architecture"
  | "tooling"
  | "performance";

export interface StackGroup {
  id: StackGroupId;
  title: string;
  items: string[];
}

export interface StackContent {
  eyebrow: string;
  title: string;
  lead: string;
  groups: StackGroup[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  lead: string;
  cta: string;
  nextStep: string;
  copiedLabel: string;
  copyLabel: string;
  links: SocialLink[];
}
