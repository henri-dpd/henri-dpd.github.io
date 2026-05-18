import type { LucideIcon } from "lucide-react";

export interface NavLink {
  /** i18n key under nav.* (e.g. "home", "about") */
  id: string;
  href: string;
}

export interface Role {
  id: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  badges: string[];
}

export interface PillarItem {
  id: string;
  icon: LucideIcon;
  /** Tech-name tags — not translated */
  tags: string[];
}

export interface WriteupCard {
  id: string;
  icon: LucideIcon;
}

export interface TerminalStatusItem {
  label: string;
  status: string;
}

export interface TerminalSummary {
  years: string;
  stack: string;
  focus: string;
  location: string;
}
