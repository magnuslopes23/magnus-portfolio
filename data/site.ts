export const siteConfig = {
  name: "Magnus Lopes",
  role: "Software Engineer",
  location: "Ireland",
  headline: "I build automation, data systems and internal tools that make operations easier to scale.",
  intro:
    "I turn manual workflows, disconnected systems and reporting-heavy processes into reliable software that is easier to operate, maintain and improve.",
  availability: "Open to selected freelance projects and engineering roles",
  contactHref: "#contact",
  social: {
    github: "https://github.com/magnuslopes23"
  }
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const proofPoints = [
  { value: "Python · SQL · TypeScript", label: "Core engineering" },
  { value: "Automation & data", label: "Operational systems" },
  { value: "Azure · Fabric · APIs", label: "Cloud & integration" },
  { value: "Ireland · Remote", label: "Location" }
];

export const projects = [
  {
    id: "invoice-automation",
    eyebrow: "Workflow automation",
    title: "Invoice approval and accounting automation",
    summary:
      "A controlled workflow for receiving supplier invoices, routing approvals, extracting structured data, preparing accounting imports and tracking exceptions.",
    challenge:
      "Invoice processing depended on repeated manual handling across email, approvals, document storage and accounting preparation.",
    solution:
      "Combined Microsoft 365 workflow orchestration, desktop automation and Python parsing into one traceable pipeline with explicit statuses and exception handling.",
    result:
      "Replaced a fragmented process with a repeatable workflow while preserving human approval at the financial control point.",
    technologies: ["Python", "Power Automate", "SharePoint", "Microsoft 365", "ETL"],
    flow: ["Email", "Approval", "Extract", "Validate", "Accounting"],
    accent: "violet"
  },
  {
    id: "profit-reporting",
    eyebrow: "Data engineering",
    title: "Automated profitability reporting pipeline",
    summary:
      "A repeatable reporting workflow that transforms operational and accounting inputs into structured profitability analysis across business entities.",
    challenge:
      "Monthly reporting required recurring manual transformations, reconciliation and corrections across multiple sources.",
    solution:
      "Built Python transformations, validation checks and structured outputs with business rules separated from the processing logic.",
    result:
      "Made monthly preparation more repeatable and exceptions easier to identify, investigate and correct.",
    technologies: ["Python", "SQL", "Excel", "Power BI", "Data validation"],
    flow: ["Source data", "Transform", "Validate", "Model", "Report"],
    accent: "cyan"
  },
  {
    id: "registration-monitoring",
    eyebrow: "Operations engineering",
    title: "Vehicle registration monitoring workflow",
    summary:
      "A scheduled reconciliation system that compares external registration data with operational stock records and surfaces actionable exceptions.",
    challenge:
      "Operational records could fall out of sync with external registration data, requiring repeated manual checks.",
    solution:
      "Designed a recurring comparison process with controlled status updates and exception reporting for human review.",
    result:
      "Turned an ad-hoc check into a predictable monitoring workflow with a clear exception path.",
    technologies: ["Power Automate", "SharePoint", "Data reconciliation", "Automation"],
    flow: ["External data", "Compare", "Detect", "Update", "Review"],
    accent: "blue"
  }
];

export const services = [
  {
    number: "01",
    title: "Build",
    description:
      "Applications, APIs and internal tools designed around the way the business actually works.",
    deliverables: ["Internal tools", "Web applications", "APIs & integrations"]
  },
  {
    number: "02",
    title: "Automate",
    description:
      "Manual, repetitive and error-prone workflows converted into controlled, observable systems.",
    deliverables: ["Workflow automation", "Data processing", "System integration"]
  },
  {
    number: "03",
    title: "Modernise",
    description:
      "Existing processes and systems simplified with pragmatic architecture, cloud and data engineering.",
    deliverables: ["Architecture reviews", "Cloud solutions", "Technical improvement"]
  }
];

export const strengths = [
  "Translate operational processes into maintainable software",
  "Design pragmatic architecture without unnecessary complexity",
  "Build observable automation with explicit failure paths",
  "Create data pipelines with validation and reconciliation built in",
  "Explain technical trade-offs to non-technical stakeholders",
  "Own delivery from problem definition through implementation"
];

export const skillGroups = [
  {
    title: "Software",
    skills: ["Python", "TypeScript", "JavaScript", "React", "Next.js", "REST APIs"]
  },
  {
    title: "Data",
    skills: ["SQL", "ETL / ELT", "Data modelling", "Power BI", "Microsoft Fabric", "Excel automation"]
  },
  {
    title: "Automation",
    skills: ["Power Automate", "Microsoft 365", "SharePoint", "Workflow design", "Validation"]
  },
  {
    title: "Cloud & delivery",
    skills: ["Azure", "AWS", "Git", "CI/CD", "Linux", "Observability"]
  }
];

export const workProcess = [
  {
    step: "01",
    title: "Understand",
    text: "Map the current process, users, constraints and failure points before choosing technology."
  },
  {
    step: "02",
    title: "Design",
    text: "Define the smallest maintainable architecture, data flow and control points needed to solve the problem."
  },
  {
    step: "03",
    title: "Build",
    text: "Deliver in testable increments with validation, error handling and operational visibility built in."
  },
  {
    step: "04",
    title: "Improve",
    text: "Launch, observe real usage and refine the system around what the business actually needs."
  }
];
