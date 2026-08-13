import { type ExpertiseIcon } from "@/content/types";
import {
  Accessibility,
  Boxes,
  Braces,
  ClipboardCheck,
  Cpu,
  Gauge,
  GitPullRequest,
  Layers3,
  Network,
  PanelsTopLeft,
  ShieldCheck,
  Table2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons: Record<ExpertiseIcon, LucideIcon> = {
  react: Cpu,
  typescript: Braces,
  architecture: Layers3,
  performance: Gauge,
  designSystem: PanelsTopLeft,
  a11y: Accessibility,
  testing: ClipboardCheck,
  review: GitPullRequest,
  leadership: Workflow,
  api: Network,
  forms: Table2,
  state: Boxes,
  scale: ShieldCheck,
};

export function ExpertiseIconView({
  name,
  className,
}: {
  name: ExpertiseIcon;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
