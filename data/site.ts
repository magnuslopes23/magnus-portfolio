export const siteConfig = {
  name: "Magnus Lopes",
  role: "Software Engineer",
  location: "Ireland",
  headline: "I build reliable software that turns operational complexity into scalable digital products.",
  intro:
    "Software engineer focused on automation, data-intensive applications, APIs and cloud solutions. I help teams replace fragile manual workflows with maintainable systems that are easier to operate and scale.",
  email: "hello@your-domain.com",
  availability: "Available for selected freelance projects and engineering roles",
  bookingUrl: "https://cal.com/your-handle/30min",
  social: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle"
  }
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" }
];

export const proofPoints = [
  { value: "End-to-end", label: "Delivery ownership" },
  { value: "Automation", label: "Workflow engineering" },
  { value: "Data", label: "Pipelines & reporting" },
  { value: "Cloud", label: "Deployable architecture" }
];

export const strengths = [
  "Translate business processes into maintainable software",
  "Design practical architecture without unnecessary complexity",
  "Automate repetitive operational work with clear controls",
  "Build data flows that are observable, testable and auditable",
  "Communicate technical trade-offs to non-technical stakeholders",
  "Own delivery from discovery through deployment and iteration"
];

export const services = [
  {
    number: "01",
    title: "Freelance Development",
    description:
      "Production-grade web applications, internal tools and workflow systems built around measurable business outcomes.",
    deliverables: ["Web applications", "Internal tools", "System integrations"]
  },
  {
    number: "02",
    title: "Technical Consulting",
    description:
      "Structured technical direction for teams that need to reduce risk, modernise workflows or validate an implementation approach.",
    deliverables: ["Technical discovery", "Solution design", "Delivery planning"]
  },
  {
    number: "03",
    title: "Architecture",
    description:
      "Pragmatic system architecture covering boundaries, data flows, integration patterns, resilience and deployment strategy.",
    deliverables: ["Architecture reviews", "API contracts", "Data-flow design"]
  },
  {
    number: "04",
    title: "Code Reviews",
    description:
      "Independent review of code quality, maintainability, security-sensitive patterns, reliability and engineering conventions.",
    deliverables: ["Risk assessment", "Refactoring plan", "Quality standards"]
  },
  {
    number: "05",
    title: "API Development",
    description:
      "Well-defined APIs and integrations designed for predictable behaviour, validation, observability and future change.",
    deliverables: ["REST APIs", "Integration services", "Validation & error handling"]
  },
  {
    number: "06",
    title: "Cloud Solutions",
    description:
      "Cloud-ready applications and automation with sensible security, deployment, monitoring and cost considerations.",
    deliverables: ["Azure/AWS foundations", "CI/CD", "Serverless workflows"]
  }
];

export const skillGroups = [
  {
    title: "Languages & Data",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Data modelling"]
  },
  {
    title: "Applications & APIs",
    skills: ["React", "Next.js", "REST APIs", "Integration design", "Validation"]
  },
  {
    title: "Automation & Analytics",
    skills: ["Power Automate", "Microsoft Fabric", "Power BI", "ETL/ELT", "Excel automation"]
  },
  {
    title: "Cloud & Engineering",
    skills: ["Azure", "AWS", "Git", "CI/CD", "Linux", "Observability"]
  }
];

export const projects = [
  {
    id: "invoice-automation",
    eyebrow: "Workflow automation",
    title: "Invoice approval and accounting automation",
    summary:
      "Designed an end-to-end workflow that receives supplier invoices, routes approvals, extracts invoice data, prepares accounting imports and tracks exceptions.",
    challenge:
      "A multi-step manual process created repetitive work, inconsistent tracking and dependency on individuals for data preparation.",
    solution:
      "Combined cloud workflow orchestration, desktop automation and Python parsing into a controlled pipeline with explicit statuses, exception handling and traceability.",
    result:
      "Converted a fragmented manual process into a repeatable operational workflow while keeping human approval at the financial control point.",
    technologies: ["Python", "Power Automate", "SharePoint", "Microsoft 365", "CSV/ETL"],
    accent: "violet"
  },
  {
    id: "profit-reporting",
    eyebrow: "Data engineering",
    title: "Automated profitability reporting pipeline",
    summary:
      "Built data transformation and reporting workflows that consolidate operational and accounting inputs into repeatable profitability analysis.",
    challenge:
      "Monthly reporting required manual transformations, reconciliation and recurring corrections across multiple business entities.",
    solution:
      "Created Python-based transformations, validation checks and structured reporting outputs, with business rules isolated so they can be maintained as requirements change.",
    result:
      "Improved repeatability and reduced manual report preparation while making exceptions easier to identify and resolve.",
    technologies: ["Python", "Excel", "Power BI", "ETL", "Data validation"],
    accent: "cyan"
  },
  {
    id: "registration-monitoring",
    eyebrow: "Operations engineering",
    title: "Vehicle registration monitoring workflow",
    summary:
      "Created a scheduled comparison workflow to reconcile registration data against operational stock records and surface actionable exceptions.",
    challenge:
      "Teams needed a reliable way to identify records whose operational status no longer matched external registration data.",
    solution:
      "Designed a recurring reconciliation process with automated comparison, controlled status updates and exception reporting for manual review.",
    result:
      "Replaced ad-hoc checking with a predictable control loop that supports cleaner operational records and faster follow-up.",
    technologies: ["Power Automate", "SharePoint", "Data reconciliation", "Automation"],
    accent: "blue"
  }
];

export const process = [
  { step: "01", title: "Discovery", text: "Clarify the business problem, constraints, users, risks and success criteria." },
  { step: "02", title: "Planning", text: "Define scope, architecture, milestones, interfaces and the smallest credible delivery path." },
  { step: "03", title: "Development", text: "Build in reviewable increments with clean interfaces, validation and operational visibility." },
  { step: "04", title: "Testing", text: "Verify critical workflows, edge cases, accessibility, performance and failure behaviour." },
  { step: "05", title: "Launch", text: "Deploy with environment controls, documentation and a clear rollback or recovery path." },
  { step: "06", title: "Support", text: "Measure what matters, resolve production feedback and evolve the system deliberately." }
];

export const testimonials = [
  {
    quote:
      "Replace this with a short client quote describing the business problem, the quality of the collaboration and the outcome achieved.",
    name: "Client name",
    role: "Role, Company",
    placeholder: true
  },
  {
    quote:
      "Use specific evidence rather than generic praise: delivery speed, reliability, clarity of communication or measurable operational improvement.",
    name: "Client name",
    role: "Role, Company",
    placeholder: true
  }
];

export const insights = [
  {
    category: "Engineering",
    title: "When automation becomes a product, not a script",
    summary: "The architectural signals that tell you an internal automation needs ownership, observability and lifecycle management.",
    href: "#contact"
  },
  {
    category: "Data",
    title: "Designing data pipelines around exceptions",
    summary: "Why reliable business pipelines should make ambiguous records visible instead of silently forcing them through.",
    href: "#contact"
  },
  {
    category: "Architecture",
    title: "Pragmatic architecture for small teams",
    summary: "How to preserve clear boundaries and future options without over-engineering the first version.",
    href: "#contact"
  }
];
