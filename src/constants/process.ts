export interface WorkflowStage {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  philosophy: string;
  tag: string;
}

export interface DecisionComparison {
  id: string;
  prioritized: string;
  subordinated: string;
  rationale: string;
}

export interface MiniatureWorkflowNode {
  step: string;
  title: string;
  deliverable: string;
}

export const ENGINEERING_STAGES: WorkflowStage[] = [
  {
    step: '01',
    title: 'Business Understanding',
    description: 'Understand the client’s workflow, pain points, core business goals, and operational bottlenecks before any technical scoping begins.',
    details: ['Stakeholder Interviews', 'Workflow Audits', 'Pain Point Mapping'],
  },
  {
    step: '02',
    title: 'Requirement Discovery',
    description: 'Convert informal business discussions into strict, verifiable functional and non-functional engineering specifications and SLA boundaries.',
    details: ['Functional Specs', 'Latency & Throughput SLAs', 'Compliance Guardrails'],
  },
  {
    step: '03',
    title: 'Architecture Design',
    description: 'Design highly resilient, decoupled system architecture. Define domain boundaries, microservice modules, database topologies, and business rules.',
    details: ['System Topology & RFCs', 'Data Schema Freezes', 'API & Event Contracts'],
  },
  {
    step: '04',
    title: 'Engineering Planning',
    description: 'Break complex architecture into sequential milestones and discrete capabilities. Freeze implementation strategy before writing code.',
    details: ['Capability Matrix', 'Zero-Risk Sequencing', 'Dependencies & Risks'],
  },
  {
    step: '05',
    title: 'Implementation',
    description: 'Develop one capability at a time enforcing strict type safety, modular boundaries, automated unit tests, and zero technical debt.',
    details: ['Type-Safe Development', 'Clean Code Review', 'Component Isolation'],
  },
  {
    step: '06',
    title: 'Verification',
    description: 'Validate every capability rigorously through automated integration suites, end-to-end business workflow checks, and regression matrices.',
    details: ['Automated CI/CD Tests', 'Workflow & Edge Validation', 'Regression Matrices'],
  },
  {
    step: '07',
    title: 'Deployment',
    description: 'Provision secure, containerized production infrastructure with automated zero-downtime rollouts, secrets management, and real-time telemetry.',
    details: ['Infrastructure as Code', 'Observability & Metrics', 'Zero-Downtime Rollouts'],
  },
  {
    step: '08',
    title: 'Continuous Refinement',
    description: 'Collect active user telemetry and process structured Engineering Change Requests (ECRs) to scale system capability while preserving architectural purity.',
    details: ['Telemetry Audits', 'Structured ECR Pipelines', 'Performance Optimization'],
  },
];

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    id: 'arch-before-code',
    title: 'Architecture Before Code',
    philosophy: 'Never write a single line of production code until data schemas, API boundaries, and failure modes are modeled and reviewed in an explicit RFC.',
    tag: 'FOUNDATION FIRST',
  },
  {
    id: 'business-first',
    title: 'Business First',
    philosophy: 'Technology is merely a vehicle for operational scale. Every engineering design choice must directly reduce cost, latency, or human friction.',
    tag: 'VALUE DRIVEN',
  },
  {
    id: 'production-mindset',
    title: 'Production Mindset',
    philosophy: 'Treat every development environment as if it is live in production. Enforce strict observability, type safety, and graceful error recovery from day one.',
    tag: 'RELIABILITY',
  },
  {
    id: 'scalable-systems',
    title: 'Scalable Systems',
    philosophy: 'Architect systems where state management, event ingestion, and data query layers can scale horizontally under 10x concurrency load without structural rewrites.',
    tag: 'HIGH CONCURRENCY',
  },
  {
    id: 'reusable-components',
    title: 'Reusable Components',
    philosophy: 'Enforce strict modular isolation across UI design tokens and backend service abstractions to maximize development velocity across multiple capabilities.',
    tag: 'MODULARITY',
  },
  {
    id: 'clean-apis',
    title: 'Clean APIs',
    philosophy: 'Design self-documenting, strongly-typed REST and GraphQL API contracts that decouple frontend consumers from internal database transformations.',
    tag: 'CONTRACT SAFETY',
  },
  {
    id: 'testing-driven-validation',
    title: 'Testing Driven Validation',
    philosophy: 'Automate verification across unit, integration, and end-to-end boundaries. A feature is never done until its failure edge cases are asserted by tests.',
    tag: 'RIGOROUS ASSURANCE',
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    philosophy: 'Treat software as a living organism. Continuously monitor telemetry, refactor localized bottlenecks, and incorporate real user behavior back into design.',
    tag: 'SYSTEM EVOLUTION',
  },
];

export const ENGINEERING_DECISIONS: DecisionComparison[] = [
  {
    id: 'biz-value',
    prioritized: 'Business Value',
    subordinated: 'Technical Complexity',
    rationale: 'Choosing proven, maintainable technologies that solve the exact operational bottleneck over over-engineering with trendy, unproven frameworks.',
  },
  {
    id: 'maintainability',
    prioritized: 'Long-Term Maintainability',
    subordinated: 'Quick Hacks & Workarounds',
    rationale: 'Investing in clean type definitions, structured domain boundaries, and comprehensive documentation to ensure any engineer can onboard safely.',
  },
  {
    id: 'scalability',
    prioritized: 'Scalable Architecture',
    subordinated: 'Temporary Band-Aid Solutions',
    rationale: 'Designing data schemas and asynchronous event pipelines that handle growth cleanly rather than writing brittle scripts that collapse under scale.',
  },
  {
    id: 'architecture-first',
    prioritized: 'System Architecture',
    subordinated: 'Immediate Implementation',
    rationale: 'Spending time upfront freezing domain contracts and API boundaries eliminates costly structural rewrites halfway through the development lifecycle.',
  },
  {
    id: 'automation',
    prioritized: 'Automated CI/CD & Testing',
    subordinated: 'Manual Operations & Checks',
    rationale: 'Eliminating human error in deployment, database migrations, and regression checks by codifying workflows into deterministic automation pipelines.',
  },
];

export const PAIN_AWAY_WORKFLOW_STEPS: MiniatureWorkflowNode[] = [
  { step: '01', title: 'Client Discussion', deliverable: 'Discovered multi-clinic reception & inventory bottlenecks' },
  { step: '02', title: 'Workflow Analysis', deliverable: 'Mapped triage latency & disconnected commerce data flows' },
  { step: '03', title: 'Architecture', deliverable: 'Designed event-driven FastAPI microservices + PostgreSQL' },
  { step: '04', title: 'Milestones', deliverable: 'Sequenced Core Auth → Reception Queue → Inventory ACID' },
  { step: '05', title: 'Implementation', deliverable: 'Developed modular React 19 UI & real-time WebSockets' },
  { step: '06', title: 'Testing', deliverable: 'Validated multi-tenant isolation & concurrent triage loads' },
  { step: '07', title: 'Deployment', deliverable: 'Provisioned containerized Docker infrastructure with automated CI/CD' },
  { step: '08', title: 'Refinement', deliverable: 'Synthesized telemetry to optimize director financial analytics' },
];
