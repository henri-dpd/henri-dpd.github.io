import { Cloud, ShieldCheck, TrendingUp, Lock, Layers } from "lucide-react";
import type { NavLink, Role, PillarItem, WriteupCard } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Pilares", href: "#pilares" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Write-ups", href: "#writeups" },
  { label: "Contacto", href: "#contacto" },
];

export const pillars: PillarItem[] = [
  {
    id: "cloud",
    icon: Cloud,
    title: "Desarrollo Cloud",
    description:
      "Sistemas Serverless escalables en AWS, integración de APIs de IA (Codex, agentes inteligentes), Node.js, Next.js y metodologías ágiles bajo principios de Domain-Driven Design (DDD).",
    tags: ["AWS Lambda", "Serverless", "Node.js", "Next.js", "DDD", "AI"],
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Ciberseguridad",
    description:
      "Protección integrada desde el código. Modelado de amenazas, auditorías de seguridad web, mitigación de vulnerabilidades (XSS, CSP) y análisis forense avanzado.",
    tags: ["OWASP", "XSS / CSP", "Threat Modeling", "CTF", "Forensics"],
  },
  {
    id: "modernization",
    icon: TrendingUp,
    title: "Modernización de Procesos",
    description:
      "Optimización de flujos de trabajo, normalización y escalabilidad de bases de datos (SQL y NoSQL) orientadas a maximizar la eficiencia y rendimiento del negocio.",
    tags: ["SQL", "NoSQL", "CI/CD", "Process Optimization", "DevEx"],
  },
];

export const roles: Role[] = [
  {
    id: "tpp",
    company: "The Power Plugin",
    location: "Remoto · España",
    period: "Feb 2026 – Actualidad",
    current: true,
    title: "Desarrollador Full Stack Serverless",
    description:
      "Integración de IA para desarrollo (Codex), pipelines CI/CD y automatización de testing en entornos serverless de alta disponibilidad.",
    badges: ["Codex AI", "CI/CD", "Serverless", "TypeScript", "Testing"],
  },
  {
    id: "wts",
    company: "White Tower Soft",
    location: "Remoto · USA",
    period: "Feb 2025 – Dic 2025",
    current: false,
    title: "Ingeniero de Software Cloud",
    description:
      "Arquitectura cloud en AWS: Lambdas, Step Functions, SQS, RDS. Observabilidad avanzada con Splunk bajo principios de Domain-Driven Design.",
    badges: ["AWS Lambda", "Step Functions", "SQS", "RDS", "Splunk", "DDD"],
  },
  {
    id: "avangenio",
    company: "Avangenio",
    location: "Híbrido",
    period: "Abr 2023 – Feb 2025",
    current: false,
    title: "Tech Lead / Front End",
    description:
      "Liderazgo técnico de equipo front end. Implementación de accesibilidad (WAI-ARIA), testing con Vitest/Cypress y mitigación de vulnerabilidades OWASP.",
    badges: ["React", "Vitest", "Cypress", "WAI-ARIA", "OWASP", "Tech Lead"],
  },
  {
    id: "iberant",
    company: "IBERANT Solutions",
    location: "Remoto · España",
    period: "Feb 2024 – Jun 2024",
    current: false,
    title: "Desarrollador Full Stack",
    description:
      "Desarrollo backend con .NET 7, C#, Entity Framework y SQL Server. Optimización de concurrencia en sistemas de alta carga transaccional.",
    badges: [".NET 7", "C#", "Entity Framework", "SQL Server"],
  },
  {
    id: "cneuro",
    company: "Centro de Neurociencias (CNeuro)",
    location: "Presencial",
    period: "Ene 2023 – Jun 2023",
    current: false,
    title: "Desarrollador Principal Full Stack",
    description:
      "Plataforma de evaluaciones psicométricas con Docker, JWT Auth con Throttling y definición granular de roles y permisos.",
    badges: ["Docker", "JWT", "RBAC", "PostgreSQL", "Full Stack"],
  },
  {
    id: "guajiritos",
    company: "Guajiritos",
    location: "Presencial",
    period: "May 2021 – Sep 2021",
    current: false,
    title: "Desarrollador Full Stack",
    description:
      "Integración de sistema POS de escritorio, desarrollo con C#/.NET, SQLite y maquetación de plataforma web turística.",
    badges: ["C#/.NET", "SQLite", "POS Integration", "Web Design"],
  },
];

export const writeupCards: WriteupCard[] = [
  {
    id: "security-writeups",
    icon: Lock,
    tag: "Ciberseguridad",
    title: "Write-ups de Seguridad",
    description:
      "Espacio dedicado para analizar vulnerabilidades del mundo real, resolver retos de seguridad (CTFs) y explicar mecanismos defensivos complejos con evidencia técnica.",
  },
  {
    id: "modernization-guides",
    icon: Layers,
    tag: "Arquitectura Cloud",
    title: "Guías de Modernización",
    description:
      "Artículos enfocados en arquitecturas Cloud-Native, estrategias de optimización de costos en AWS e integración práctica de IA para agilizar procesos internos empresariales.",
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
