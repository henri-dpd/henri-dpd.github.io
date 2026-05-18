const en = {
  nav: {
    home: "Home",
    about: "About",
    pillars: "Pillars",
    experience: "Experience",
    writeups: "Write-ups",
    contact: "Contact",
    cta: "Contact Me",
  },
  hero: {
    badge: "Resilient Systems",
    subtitle:
      "B.Sc. Computer Science\u00a0·\u00a0Software Engineer & Cybersecurity Specialist",
    description:
      "Design and architecture of high-performance platforms that unify Software Engineering, Cloud Architecture and Cybersecurity with total resilience.",
    cta1: "View Projects",
    cta2: "Contact",
    stat1: "Years of exp.",
    stat2: "Intl. companies",
    stat3: "Technical pillars",
  },
  about: {
    label: "About Me",
    heading1: "It\u2019s not just code,",
    heading2: "it\u2019s resilient engineering.",
    p1: "I design stable, serverless and cyber-secure systems built to catalyze digital transformation, operational efficiency and business resilience. Every architecture is built to scale without friction and defend itself without compromising the user experience.",
    p2: "With a profile combining Computer Science, Software Engineering and Cybersecurity, I offer a holistic vision that spans from API design to vulnerability auditing in production.",
    cta: "Let\u2019s start a conversation",
    highlights: {
      serverless: {
        label: "Serverless Engineering",
        description:
          "Design of scalable and resilient AWS systems without fixed infrastructure.",
      },
      global: {
        label: "Global Collaboration",
        description:
          "Remote experience with teams in Spain, USA and Latin America.",
      },
      ai: {
        label: "AI Integration",
        description:
          "Workflow automation and AI-assisted development with language models.",
      },
      security: {
        label: "Security by Design",
        description:
          "OWASP, threat modeling and integrated audits from the code.",
      },
    },
  },
  pillars: {
    label: "Specialization",
    heading: "My Pillars",
    description:
      "Three domains of deep specialization that converge to deliver comprehensive, secure and scalable software solutions.",
    cloud: {
      title: "Cloud Development",
      description:
        "Scalable serverless systems on AWS, AI API integration (Codex, intelligent agents), Node.js, Next.js and agile methodologies under Domain-Driven Design (DDD).",
    },
    security: {
      title: "Cybersecurity",
      description:
        "Security integrated from the code up. Threat modeling, web security audits, vulnerability mitigation (XSS, CSP) and advanced forensic analysis.",
    },
    modernization: {
      title: "Process Modernization",
      description:
        "Workflow optimization, normalization and scalability of databases (SQL and NoSQL) focused on maximizing business efficiency and performance.",
    },
  },
  experience: {
    label: "Track Record",
    heading: "Experience Matrix",
    description:
      "High-impact roles at international companies focused on cloud architectures, cybersecurity and technical leadership.",
    active: "Active",
    roles: {
      tpp: {
        title: "Full Stack Serverless Developer",
        description:
          "AWS development and infrastructure implementation. AI integration for development (Codex), CI/CD pipelines and testing automation in high-availability serverless environments. Data and code migration.",
      },
      wts: {
        title: "Cloud Software Engineer",
        description:
          "Cloud architecture on AWS: Lambdas, Step Functions, SQS, RDS. Advanced observability with Splunk under Domain-Driven Design principles.",
      },
      avangenio: {
        title: "Tech Lead / Front End",
        description:
          "Front end team technical leadership. Accessibility implementation (WAI-ARIA), testing with Vitest/Cypress and OWASP vulnerability mitigation.",
      },
      iberant: {
        title: "Full Stack Developer",
        description:
          "Backend development with .NET\u00a07, C#, Entity Framework and SQL Server. Concurrency optimization in high transactional load systems.",
      },
      cneuro: {
        title: "Principal Full Stack Developer",
        description:
          "Psychometric assessment platform with Docker, JWT Auth with Throttling and granular role and permission definitions.",
      },
      guajiritos: {
        title: "Full Stack Developer",
        description:
          "Desktop POS system integration, development with C#/.NET, SQLite and tourist web platform design.",
      },
    },
  },
  blog: {
    label: "Knowledge",
    heading: "Technical Output",
    description:
      "Specialized technical content on offensive/defensive security and modern cloud architectures.",
    cta: "View on GitHub",
    cards: {
      "security-writeups": {
        tag: "Cybersecurity",
        title: "Security Write-ups",
        description:
          "Space dedicated to analyzing real-world vulnerabilities, solving security challenges (CTFs) and explaining complex defensive mechanisms with technical evidence.",
      },
      "modernization-guides": {
        tag: "Cloud Architecture",
        title: "Modernization Guides",
        description:
          "Articles focused on Cloud-Native architectures, AWS cost optimization strategies and practical AI integration to streamline internal business processes.",
      },
    },
  },
  contact: {
    label: "Contact",
    heading: "Let\u2019s Talk?",
    description:
      "Available for corporate projects, technical consultations and remote collaborations.",
    formHeading: "Send a message",
    name: "Name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Tell me about your project\u2026",
    send: "Send Message",
    sending: "Sending\u2026",
    success: "Message sent successfully!",
    error: "There was an error. Please try again.",
    directTitle: "Direct Contact",
    directDesc:
      "For consultations, corporate projects or simply connecting professionally. I respond within 24\u00a0hours.",
  },
  footer: {
    rights: "\u00a9 2026 Henri Daniel Pe\u00f1a. All rights reserved.",
  },
} as const;

export default en;
