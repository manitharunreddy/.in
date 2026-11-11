import { Project, ExperienceItem, SkillCategory, MetricItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  fullName: "Manitharun Reddy Thallapureddy",
  shortName: "Manitharun Reddy",
  role: "Full-Stack Software Engineer",
  location: "Hyderabad, Telangana, India",
  phone: "+91 99129 39402",
  email: "manitharunreddy@gmail.com",
  linkedin: "https://linkedin.com/in/manitharunreddy",
  github: "https://github.com/manitharunreddy",
  website: "https://manitharunreddy.in",
  resumeUrl: "/resume.pdf",
  bio: "Full-Stack Software Engineer with 4 years of professional experience developing and maintaining enterprise web applications, retail management platforms, and offline-first POS systems. Proficient in JavaScript, TypeScript, React.js, Node.js, Express.js, PostgreSQL, MySQL, MongoDB, and SQLite.",
  tagline: "I build scalable web applications, offline-first POS systems, enterprise management platforms, and real-world software solutions.",
  coreStack: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Electron.js"],
};

export const METRICS: MetricItem[] = [
  {
    id: "experience",
    label: "Professional Experience",
    value: "4",
    suffix: " Years",
    numericVal: 4,
    description: "Enterprise web development, POS systems & cloud architecture (2022–2026)",
    iconName: "Briefcase",
  },
  {
    id: "tenants",
    label: "Business Tenants",
    value: "10",
    suffix: "+",
    numericVal: 10,
    description: "Isolated database-per-tenant architecture in production RetailSoft platform",
    iconName: "Building2",
  },
  {
    id: "outlets",
    label: "Retail Outlets",
    value: "6",
    suffix: " Stores",
    numericVal: 6,
    description: "Powered by offline-first Electron POS with bidirectional cloud synchronization",
    iconName: "Store",
  },
  {
    id: "transactions",
    label: "Daily Store Transactions",
    value: "700",
    suffix: "+ /day",
    numericVal: 700,
    description: "Processed seamlessly per outlet with zero downtime during network drops",
    iconName: "Zap",
  },
  {
    id: "offices",
    label: "District Head Offices",
    value: "30",
    suffix: " Offices",
    numericVal: 30,
    description: "Telangana State Forensic Science Laboratory procurement & inventory footprint",
    iconName: "Landmark",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages for enterprise backend, frontend, and database queries",
    iconName: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", isPrimary: true, tag: "Primary" },
      { name: "TypeScript", isPrimary: true, tag: "Primary" },
      { name: "SQL", isPrimary: true, tag: "Queries & DDL" },
      { name: "HTML5", isPrimary: false },
      { name: "CSS3", isPrimary: false },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Component-driven reactive user interfaces with modern styling frameworks",
    iconName: "Layout",
    skills: [
      { name: "React.js", isPrimary: true, tag: "Framework" },
      { name: "React Hooks", isPrimary: true },
      { name: "Context API", isPrimary: false },
      { name: "Tailwind CSS", isPrimary: true, tag: "Styling" },
      { name: "Bootstrap", isPrimary: false },
      { name: "Handlebars.js", isPrimary: false },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "High-throughput REST APIs, microservices, and real-time sync pipelines",
    iconName: "Server",
    skills: [
      { name: "Node.js", isPrimary: true, tag: "Runtime" },
      { name: "Express.js", isPrimary: true, tag: "Framework" },
      { name: "RESTful APIs", isPrimary: true, tag: "Architecture" },
      { name: "WebSockets", isPrimary: true, tag: "Real-time" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Relational, document, and embedded databases tailored for hybrid workloads",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", isPrimary: true, tag: "Relational" },
      { name: "MySQL", isPrimary: true, tag: "Relational" },
      { name: "MongoDB", isPrimary: true, tag: "Document" },
      { name: "SQLite", isPrimary: true, tag: "Local / Offline" },
    ],
  },
  {
    id: "desktop",
    name: "Desktop & Hardware Integration",
    description: "Cross-platform desktop runtimes with local API bridges and hardware drivers",
    iconName: "Monitor",
    skills: [
      { name: "Electron.js", isPrimary: true, tag: "Desktop App" },
      { name: "Local API Development", isPrimary: true, tag: "Embedded Server" },
      { name: "Printer Integration", isPrimary: true, tag: "Hardware" },
      { name: "Silent Thermal Printing", isPrimary: true, tag: "Zero-Dialog" },
    ],
  },
  {
    id: "architecture",
    name: "Architecture & Concepts",
    description: "Distributed system patterns, resilience models, and security principles",
    iconName: "Network",
    skills: [
      { name: "Offline-First Architecture", isPrimary: true, tag: "Core Pattern" },
      { name: "Database-per-Tenant Multi-Tenancy", isPrimary: true, tag: "Enterprise" },
      { name: "Real-Time Synchronization", isPrimary: true, tag: "Bidirectional" },
      { name: "Role-Based Access Control (RBAC)", isPrimary: true, tag: "Security" },
      { name: "Transaction Management & Deduplication", isPrimary: true, tag: "Integrity" },
      { name: "Printer Queues & Retry Handlers", isPrimary: false, tag: "Resilience" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Infrastructure",
    description: "Version control, containerization, reverse proxies, and process orchestration",
    iconName: "Terminal",
    skills: [
      { name: "Git", isPrimary: true },
      { name: "GitHub", isPrimary: true },
      { name: "Postman", isPrimary: true, tag: "API Testing" },
      { name: "Docker", isPrimary: false, tag: "Containers" },
      { name: "Linux", isPrimary: true, tag: "OS / Server" },
      { name: "Nginx", isPrimary: true, tag: "Reverse Proxy" },
      { name: "PM2", isPrimary: true, tag: "Process Manager" },
    ],
  },
];

export const EXPERIENCE: ExperienceItem = {
  company: "Young Minds Technology Solutions Pvt. Ltd.",
  role: "Full-Stack Web Developer",
  location: "Hyderabad, India",
  period: "27 October 2022 – 2 November 2026",
  summary: "Engineered and maintained mission-critical enterprise web applications, offline-first POS systems, multi-tenant B2B platforms, government procurement systems, and desktop hardware bridges over 4 years.",
  bulletPoints: [
    {
      category: "Enterprise Full-Stack Development",
      text: "Developed and maintained full-stack web applications for retail management, restaurant operations, POS billing, and enterprise inventory management using React.js, Node.js, Express.js, TypeScript, and SQL databases."
    },
    {
      category: "Offline POS Development",
      text: "Contributed to the development of an offline-first retail POS ecosystem using Electron.js, Express.js, and SQLite, supporting 6 retail outlets and processing 700+ daily transactions per store while maintaining local billing functionality during internet outages."
    },
    {
      category: "Data Synchronization & Integrity",
      text: "Implemented bidirectional WebSocket-based synchronization between local POS applications and cloud services, supporting transaction synchronization between offline outlets and centralized systems."
    },
    {
      category: "Deduplication & Transaction Safety",
      text: "Implemented unique transaction identifiers and duplicate record checks to maintain transaction integrity during local-to-cloud and cloud-to-local synchronization."
    },
    {
      category: "Multi-Tenant Architecture",
      text: "Contributed to the development of RetailSoft, a B2B retail management platform serving 10+ business tenants using a database-per-tenant architecture to maintain separate databases for individual business clients."
    },
    {
      category: "Inventory & Transfer Workflows",
      text: "Developed frontend and backend modules for inter-store inventory transfers, stock indents, and multi-stage approval workflows, supporting 20+ daily stock indents and transaction-based inventory operations."
    },
    {
      category: "Government Procurement System",
      text: "Contributed to the development of the Telangana State Forensic Science Laboratory (TGFSL) procurement and inventory management system, supporting digital indent tracking and stock operations across all 30 Telangana district head offices."
    },
    {
      category: "RBAC & Voucher Audits",
      text: "Implemented role-based access control and multi-level approval workflows for inward and outward stock movements, including Receipt Voucher (RV) and Issue Voucher (IV) generation."
    },
    {
      category: "Silent Hardware Printing",
      text: "Developed Stealthy Print, an Electron-based desktop application with an embedded Express.js server, enabling browser applications to submit HTML content and printer names through HTTP POST requests."
    },
    {
      category: "Printer Queues & Auto-Retry",
      text: "Implemented printer-specific print queues and automatic retry mechanisms for failed print jobs, supporting multiple connected thermal printers and silent printing without manual operating system print dialogs."
    },
    {
      category: "Restaurant Operations & Aggregators",
      text: "Developed restaurant billing and order management modules supporting Dine-In, Takeaway, and Kitchen Order Ticket (KOT) workflows using React.js, Node.js, Express.js, and MySQL. Integrated Swiggy and Zomato order processing through UrbanPiper webhooks, enabling automated order ingestion, kitchen ticket generation, and real-time order notifications."
    },
    {
      category: "Checkout UI & Production Deployment",
      text: "Developed frontend components for retail checkout, including GST calculations, barcode scanner integration, inventory alerts, and billing workflows. Collaborated across frontend and backend development in Agile sprints, performed REST API testing using Postman, and supported application deployment and production bug fixes."
    }
  ],
  keyProjects: [
    "PastryChef POS",
    "RetailSoft B2B",
    "TGFSL GovTech",
    "Stealthy Print",
    "RestoSoft F&B"
  ],
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Electron.js",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "WebSockets",
    "Nginx",
    "PM2",
    "Docker"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "pastrychef-pos",
    title: "PastryChef POS",
    subtitle: "Offline Retail Point of Sale System",
    category: "POS & Offline",
    description: "High-reliability offline-first retail POS application built for uninterrupted store checkouts. Engineered with local SQLite storage, Electron runtime, and cloud PostgreSQL synchronization via WebSockets.",
    technologies: [
      "Electron.js",
      "React.js",
      "Node.js",
      "Express.js",
      "SQLite",
      "PostgreSQL",
      "WebSockets"
    ],
    keyFeatures: [
      "Offline-first billing ensuring zero checkout disruptions during internet outages",
      "Embedded SQLite local storage with automatic cloud PostgreSQL sync",
      "Bidirectional WebSocket synchronization with conflict resolution",
      "Deployed across 6 retail outlets processing 700+ daily transactions per store",
      "Unique transaction identifiers (UUID + sequence) preventing duplicate records",
      "Instant thermal receipt generation and local barcode peripheral support"
    ],
    architectureDetails: {
      overview: "Designed for resilient retail operations where internet downtime cannot halt customer billing. Combines a desktop Electron shell containing both the React UI and an embedded Node/Express local server querying a local SQLite database.",
      keyChallenge: "Handling intermittent store internet connectivity while preventing transaction drift, duplicate invoice numbers, and inventory state inconsistency between outlets and the central cloud database.",
      solution: "Engineered a deterministic sync engine that assigns cryptographically unique offline transaction IDs. When connectivity restores, an asynchronous WebSocket pipeline pushes pending local batches to PostgreSQL while fetching upstream price and inventory updates.",
      impact: "Zero downtime at checkout across 6 retail outlets with 100% data integrity across 700+ transactions/day per store."
    },
    metrics: [
      { label: "Retail Outlets", value: "6 Live Stores" },
      { label: "Daily Store Throughput", value: "700+ Txns/Day" },
      { label: "Billing Uptime", value: "99.99% Offline Resilient" },
      { label: "Sync Protocol", value: "Bidirectional WebSockets" }
    ],
    iconName: "Store"
  },
  {
    id: "retailsoft",
    title: "RetailSoft",
    subtitle: "Multi-Tenant B2B Retail Management Platform",
    category: "Multi-Tenant SaaS",
    description: "Enterprise B2B retail management platform serving 10+ business tenants. Implemented strict data isolation via database-per-tenant architecture with real-time inventory tracking, inter-store stock transfers, and multi-stage approval workflows.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MySQL"
    ],
    keyFeatures: [
      "B2B retail management supporting multi-chain enterprise tenants",
      "Database-per-tenant architecture guaranteeing strict data isolation & compliance",
      "Dynamic tenant connection pooling and tenant routing middleware in Express",
      "Comprehensive inventory management with multi-stage approval workflows",
      "Inter-store stock transfers, indents, and automated variance tracking",
      "Supports 20+ daily stock indents per tenant with transaction-based stock audits"
    ],
    architectureDetails: {
      overview: "A scalable B2B enterprise platform designed to serve multiple corporate retail clients. Employs a database-per-tenant strategy where each tenant gets a distinct MySQL schema/database instance for maximum security, isolated backups, and performance scaling.",
      keyChallenge: "Ensuring requests dynamically route to the correct tenant database with low connection overhead while orchestrating complex multi-store stock transfers requiring transactional consistency.",
      solution: "Built custom Express middleware that resolves the tenant identity from headers/subdomains, caches connection pool references, and runs all inventory movement operations in atomic database transactions with multi-stage approval states.",
      impact: "Seamlessly scales across 10+ enterprise tenants without cross-tenant data leaks and streamlined inter-store inventory indents across chains."
    },
    metrics: [
      { label: "Active Tenants", value: "10+ Enterprise Tenants" },
      { label: "Daily Stock Indents", value: "20+ Indents/Day" },
      { label: "Tenant Model", value: "Database-Per-Tenant" },
      { label: "Data Isolation", value: "100% Cryptographic/Physical" }
    ],
    iconName: "Layers"
  },
  {
    id: "tgfsl",
    title: "TGFSL Procurement & Inventory",
    subtitle: "Telangana State Forensic Science Laboratory System",
    category: "GovTech",
    description: "Government-grade procurement and inventory management system supporting all 30 Telangana district head offices. Features rigorous digital indent tracking, hierarchical approval chains, and automated Receipt/Issue Voucher generation.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL"
    ],
    keyFeatures: [
      "Enterprise procurement and stock management supporting 30 district head offices",
      "Hierarchical Role-Based Access Control (RBAC) across officers and district staff",
      "End-to-end digital indent tracking and outward/inward stock movement workflows",
      "Automated Receipt Voucher (RV) and Issue Voucher (IV) PDF & document generation",
      "Audit trail logging ensuring full compliance with state forensic lab governance",
      "Responsive React interface optimized for government administrative workflows"
    ],
    architectureDetails: {
      overview: "Mission-critical state laboratory procurement system tracking forensic equipment, chemicals, and laboratory supplies across every district head office in Telangana.",
      keyChallenge: "Navigating complex state government bureaucratic approval hierarchies with multi-level role authorizations while maintaining tamper-proof historical audit logs for forensic equipment.",
      solution: "Architected a fine-grained RBAC permission matrix in Express/MySQL coupled with a finite state machine for procurement lifecycle. Developed automated voucher generation engines for official state documentation.",
      impact: "Digitized statewide supply workflows across 30 district offices, reducing procurement turnaround times and ensuring 100% audit compliance."
    },
    metrics: [
      { label: "Offices Covered", value: "30 District Head Offices" },
      { label: "Security Standard", value: "Government RBAC" },
      { label: "Voucher Pipeline", value: "Automated RV & IV" },
      { label: "Audit Compliance", value: "100% Verified Trail" }
    ],
    iconName: "Landmark"
  },
  {
    id: "stealthy-print",
    title: "Stealthy Print",
    subtitle: "Desktop Thermal Printing Engine & Bridge",
    category: "Desktop & Hardware",
    description: "Electron-based desktop background printing service with an embedded Express HTTP server. Enables web-based POS platforms to execute instant, silent thermal printing across multiple hardware printers without operating system dialog interruptions.",
    technologies: [
      "Electron.js",
      "Node.js",
      "Express.js",
      "HTTP APIs"
    ],
    keyFeatures: [
      "Embedded local Express.js HTTP server running on localhost inside Electron",
      "Cross-origin browser-to-desktop printing bridge via standard HTTP POST endpoints",
      "Multi-printer support with dedicated printer-specific print queues",
      "Silent thermal printing bypassing operating system print preview dialogs",
      "Automatic retry handlers and hardware status monitoring for offline printers",
      "Raw ESC/POS and HTML thermal template rendering pipeline"
    ],
    architectureDetails: {
      overview: "A lightweight background application running on local POS cashier stations. Acts as a bridge between cloud/web checkout interfaces and physically connected thermal receipt printers.",
      keyChallenge: "Web browsers cannot directly send raw printing commands or bypass the system print dialog without extension friction or user intervention, causing severe bottlenecks at fast-paced checkout lanes.",
      solution: "Developed an Electron utility with an embedded Express API. The web application issues a POST request containing raw HTML or receipt payloads; Stealthy Print queues the job to the designated printer hardware queue with automatic failure recovery.",
      impact: "Reduced receipt print latency to sub-second speeds, enabling cashier lanes to checkout customers without touching OS print prompts."
    },
    metrics: [
      { label: "Print Latency", value: "< 800ms Sub-Second" },
      { label: "Print Dialog", value: "0 Prompts (Silent)" },
      { label: "Failure Handling", value: "Auto-Retry Queues" },
      { label: "Hardware Support", value: "Multi-Thermal Printer" }
    ],
    iconName: "Printer"
  },
  {
    id: "restosoft",
    title: "RestoSoft",
    subtitle: "Restaurant & Cloud Kitchen Management System",
    category: "F&B Tech",
    description: "Full-scale restaurant management system handling high-volume Dine-In tables, Takeaway orders, and Kitchen Order Ticket (KOT) workflows with direct Swiggy and Zomato aggregator integration via UrbanPiper webhooks.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL"
    ],
    keyFeatures: [
      "Interactive Dine-In floor plan, table billing, and Takeaway order management",
      "Real-time Kitchen Order Ticket (KOT) routing to dedicated kitchen preparation stations",
      "Integrated Swiggy and Zomato online order ingestion via UrbanPiper webhooks",
      "Automated order intake, instant kitchen ticket generation, and live dispatch alerts",
      "Real-time order status notifications and kitchen display screen coordination",
      "Comprehensive restaurant reporting, tax breakdowns, and daily cash settlements"
    ],
    architectureDetails: {
      overview: "Comprehensive Food & Beverage operations platform synchronizing dine-in floor tables with high-volume food delivery aggregator feeds into a unified kitchen preparation queue.",
      keyChallenge: "Preventing order drops or delays during peak lunch and dinner surges where online aggregator orders (Swiggy/Zomato) flood in simultaneously with in-house dine-in guest orders.",
      solution: "Engineered webhook ingestion endpoints connected to UrbanPiper APIs that parse incoming delivery orders into standardized KOT formats, triggering instant kitchen printer events and dashboard notifications.",
      impact: "Eliminated manual order re-punching for third-party food delivery aggregators and halved kitchen order preparation delays."
    },
    metrics: [
      { label: "Order Ingestion", value: "Automated via Webhooks" },
      { label: "Platforms", value: "Swiggy & Zomato" },
      { label: "Order Modes", value: "Dine-In, Takeaway, Delivery" },
      { label: "Kitchen Workflow", value: "Automated KOT Routing" }
    ],
    iconName: "UtensilsCrossed"
  }
];

export const EDUCATION: EducationItem = {
  institution: "Guru Nanak Technical Campus",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Electronics and Communication Engineering",
  location: "Hyderabad, Telangana, India",
  duration: "2018 – 2022",
  highlights: [
    "Built foundational knowledge in computing architectures, embedded systems, and communication protocols",
    "Developed deep problem-solving skills, algorithms, and low-level software-hardware interface understanding",
    "Transitioned engineering foundations into enterprise full-stack web and distributed software development"
  ]
};

