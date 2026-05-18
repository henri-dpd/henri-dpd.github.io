import { Cloud, ShieldCheck, TrendingUp, Lock, Layers } from "lucide-react";
import type { NavLink, Role, PillarItem, WriteupCard } from "@/types";

export const navLinks: NavLink[] = [
  { id: "home",       href: "#inicio" },
  { id: "about",      href: "#sobre-mi" },
  { id: "pillars",    href: "#pilares" },
  { id: "experience", href: "#experiencia" },
  { id: "writeups",   href: "#writeups" },
  { id: "contact",    href: "#contacto" },
];

export const pillars: PillarItem[] = [
  {
    id: "cloud",
    icon: Cloud,
    tags: ["AWS Lambda", "Serverless", "Node.js", "Next.js", "DDD", "AI"],
  },
  {
    id: "security",
    icon: ShieldCheck,
    tags: ["OWASP", "XSS / CSP", "Threat Modeling", "CTF", "Forensics"],
  },
  {
    id: "modernization",
    icon: TrendingUp,
    tags: ["SQL", "NoSQL", "CI/CD", "Process Optimization", "DevEx"],
  },
];

export const roles: Role[] = [
  {
    id: "tpp",
    company: "The Power Plugin",
    location: "Remote · Spain",
    period: "Feb 2026 – Present",
    current: true,
    badges: ["Codex AI", "CI/CD", "Serverless", "TypeScript", "Testing"],
  },
  {
    id: "wts",
    company: "White Tower Soft",
    location: "Remote · USA",
    period: "Feb 2025 – Dec 2025",
    current: false,
    badges: ["AWS Lambda", "Step Functions", "SQS", "RDS", "Splunk", "DDD"],
  },
  {
    id: "avangenio",
    company: "Avangenio",
    location: "Hybrid",
    period: "Apr 2023 – Feb 2025",
    current: false,
    badges: ["React", "Vitest", "Cypress", "WAI-ARIA", "OWASP", "Tech Lead"],
  },
  {
    id: "iberant",
    company: "IBERANT Solutions",
    location: "Remote · Spain",
    period: "Feb 2024 – Jun 2024",
    current: false,
    badges: [".NET 7", "C#", "Entity Framework", "SQL Server"],
  },
  {
    id: "cneuro",
    company: "Centro de Neurociencias (CNeuro)",
    location: "On-site",
    period: "Jan 2023 – Jun 2023",
    current: false,
    badges: ["Docker", "JWT", "RBAC", "PostgreSQL", "Full Stack"],
  },
  {
    id: "guajiritos",
    company: "Guajiritos",
    location: "On-site",
    period: "May 2021 – Sep 2021",
    current: false,
    badges: ["C#/.NET", "SQLite", "POS Integration", "Web Design"],
  },
];

export const writeupCards: WriteupCard[] = [
  {
    id: "security-writeups",
    icon: Lock,
  },
  {
    id: "modernization-guides",
    icon: Layers,
  },
];

export const terminalStatus: import("@/types").TerminalStatusItem[] = [
  { label: "Full Stack Engineer", status: "ACTIVE" },
  { label: "Cloud Architecture",  status: "ACTIVE" },
  { label: "Cybersecurity",        status: "ACTIVE" },
  { label: "AI Integration",       status: "ACTIVE" },
];

export const terminalSummary: import("@/types").TerminalSummary = {
  years:    "5+",
  stack:    "AWS · Node.js · Next.js · C#",
  focus:    "Serverless · Security · DDD",
  location: "Remote · Global",
};
