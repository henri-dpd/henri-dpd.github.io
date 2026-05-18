import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Role {
  id: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  title: string;
  description: string;
  badges: string[];
}

export interface PillarItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export interface WriteupCard {
  id: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
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
