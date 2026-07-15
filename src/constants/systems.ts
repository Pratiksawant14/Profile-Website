import type { EngineeringSystem } from '../types/systems';

export const ENGINEERING_SYSTEMS: EngineeringSystem[] = [
  {
    id: 'pain-away',
    title: 'PAIN AWAY',
    subtitle: 'Digital Healthcare Platform',
    flagship: true,
    category: 'healthcare',
    status: 'Production',
    description:
      'A comprehensive, multi-tenant digital healthcare platform and clinic operating system designed to streamline end-to-end medical practice workflows, real-time diagnostic triage, and commerce management.',
    businessProblem:
      'Healthcare clinics face severe operational bottlenecks: fragmented patient onboarding, disconnected inventory management, high administrative friction at reception, and lack of real-time clinical and financial visibility for enterprise directors.',
    engineeringSolution:
      'Architected a distributed event-driven microservices ecosystem integrating automated triage workflows, real-time WebSocket state management for reception queues, ACID-compliant inventory synchronization, and role-enforced director analytics portals.',
    technologies: [
      'React 19',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'WebSocket',
      'Tailwind CSS',
    ],
    architecture: [
      { label: 'Frontend App', subtext: 'React / TS Client' },
      { label: 'API Gateway', subtext: 'FastAPI / Auth' },
      { label: 'Data Engine', subtext: 'PostgreSQL + Redis' },
      { label: 'Clinical AI', subtext: 'Triage & Analytics' },
      { label: 'Infra Layer', subtext: 'Docker / Cloud' },
    ],
    highlights: [
      'Patient Experience Platform',
      'Clinic Operating System',
      'Inventory & Commerce Core',
      'Reception Workflow',
      'Director Portal',
      'Business Automation',
    ],
    githubUrl: 'https://github.com/pratiksawant/pain-away-platform',
    caseStudyUrl: '/case-studies/pain-away',
  },
  {
    id: 'mem-rooted',
    title: 'Mem-Rooted',
    subtitle: 'Persistent Hierarchical Memory Graph for Autonomous Agents',
    flagship: false,
    category: 'ai-systems',
    status: 'Production',
    description:
      'An advanced vector-relational hybrid memory architecture enabling LLM agents to retain, prune, and retrieve long-term contextual state across millions of continuous user interactions without context window degradation.',
    businessProblem:
      'State-of-the-art LLM applications suffer from catastrophic forgetting and token explosion when processing multi-session enterprise workflows, forcing expensive context re-computation and degraded reasoning quality over time.',
    engineeringSolution:
      'Built a low-latency graph-rooted memory indexing engine utilizing hierarchical semantic clustering, time-decay score pruning, and dual-store vector/SQL persistence with sub-15ms vector similarity retrieval.',
    technologies: [
      'Python',
      'FastAPI',
      'pgvector',
      'Neo4j',
      'LangChain',
      'OpenAI embeddings',
      'Docker',
    ],
    architecture: [
      { label: 'Agent Client', subtext: 'Inference Request' },
      { label: 'Memory Router', subtext: 'Decay & Cluster' },
      { label: 'Hybrid Store', subtext: 'pgvector + Neo4j' },
      { label: 'Context Synthesis', subtext: 'Ranked Retrieval' },
      { label: 'LLM Execution', subtext: 'Token Optimized' },
    ],
    githubUrl: 'https://github.com/pratiksawant/mem-rooted-core',
    caseStudyUrl: '/case-studies/mem-rooted',
  },
  {
    id: 'translate-iq',
    title: 'TranslateIQ',
    subtitle: 'Real-Time Enterprise Multilingual Localization Engine',
    flagship: false,
    category: 'enterprise',
    status: 'Production',
    description:
      'A high-throughput neural localization platform designed for global B2B SaaS applications to translate dynamic technical documentation, software strings, and regulatory compliance assets at scale with domain-specific terminology enforcement.',
    businessProblem:
      'Expanding enterprise software across global markets requires maintaining strict brand glossary compliance and technical precision during translation—something generic translation APIs consistently fail to enforce without manual human correction.',
    engineeringSolution:
      'Engineered a distributed translation pipeline leveraging fine-tuned domain LLMs, automated glossary constraint validators, asynchronous job queues (Celery/RabbitMQ), and semantic diff verification with 99.4% terminology accuracy.',
    technologies: [
      'TypeScript',
      'Node.js',
      'Python',
      'RabbitMQ',
      'PostgreSQL',
      'PyTorch',
      'Redis',
    ],
    architecture: [
      { label: 'Ingestion API', subtext: 'SaaS / Webhook' },
      { label: 'Queue Engine', subtext: 'RabbitMQ Workers' },
      { label: 'Neural Engine', subtext: 'Fine-Tuned LLM' },
      { label: 'Glossary Guard', subtext: 'Semantic Validator' },
      { label: 'CDN Delivery', subtext: 'Edge Cache' },
    ],
    githubUrl: 'https://github.com/pratiksawant/translate-iq-engine',
    caseStudyUrl: '/case-studies/translate-iq',
  },
  {
    id: 'intelli-credit',
    title: 'Intelli-Credit',
    subtitle: 'Autonomous Financial Risk & Underwriting Engine',
    flagship: false,
    category: 'enterprise',
    status: 'Active Development',
    description:
      'An explainable AI risk assessment and automated underwriting platform for commercial lending institutions that ingests multi-source financial statements, tax reports, and ledger data in real time.',
    businessProblem:
      'Commercial loan underwriting is plagued by slow, error-prone manual financial spreading and opaque black-box machine learning models that fail regulatory compliance audits.',
    engineeringSolution:
      'Implemented an OCR-to-structured-ledger ingestion pipeline paired with explainable gradient boosted decision trees (SHAP analysis) and deterministic rule engines, cutting underwriting cycle times from 14 days to under 12 minutes while ensuring audit compliance.',
    technologies: [
      'Python',
      'FastAPI',
      'XGBoost',
      'SHAP',
      'PostgreSQL',
      'Celery',
      'AWS S3',
    ],
    architecture: [
      { label: 'Ingestion Portal', subtext: 'Secure Ledger Upload' },
      { label: 'Extraction Pipeline', subtext: 'Vision / OCR Engine' },
      { label: 'Risk Engine', subtext: 'XGBoost + SHAP' },
      { label: 'Audit Vault', subtext: 'Immutable Ledger' },
      { label: 'Underwriter UI', subtext: 'Explainable Report' },
    ],
    githubUrl: 'https://github.com/pratiksawant/intelli-credit-platform',
    caseStudyUrl: '/case-studies/intelli-credit',
  },
  {
    id: 'autonomous-cicd-healing-agent',
    title: 'Autonomous CI/CD Healing Agent',
    subtitle: 'Self-Correcting DevOps Pipeline Diagnostics & Patching',
    flagship: false,
    category: 'developer-tools',
    status: 'Production',
    description:
      'An intelligent developer tooling daemon that monitors GitHub Actions and Kubernetes build logs in real time, automatically diagnosing compilation errors, test failures, and dependency conflicts to synthesize and submit verified pull requests.',
    businessProblem:
      'Engineering teams lose thousands of cumulative hours debugging flaky CI/CD build failures, dependency resolution deadlocks, and transient container initialization errors that halt release pipelines.',
    engineeringSolution:
      'Designed a lightweight Go daemon and Python diagnostic agent that hooks into GitHub/GitLab webhooks, parses stack traces via AST analysis, executes sandbox verification builds in isolated ephemeral containers, and commits auto-remediation patches.',
    technologies: [
      'Go',
      'Python',
      'Docker SDK',
      'GitHub API',
      'LangChain',
      'Kubernetes',
    ],
    architecture: [
      { label: 'CI Webhook', subtext: 'Build Failure Alert' },
      { label: 'Trace Analyzer', subtext: 'Go / AST Parser' },
      { label: 'Synthesizer', subtext: 'AI Diagnostic Agent' },
      { label: 'Sandbox Tester', subtext: 'Ephemeral Docker' },
      { label: 'Git Controller', subtext: 'Auto PR Submission' },
    ],
    githubUrl: 'https://github.com/pratiksawant/cicd-healing-agent',
    caseStudyUrl: '/case-studies/autonomous-cicd-healing-agent',
  },
  {
    id: 'learnify',
    title: 'Learnify',
    subtitle: 'Adaptive AI-Powered STEM Mastery & Tutoring Platform',
    flagship: false,
    category: 'education',
    status: 'Completed',
    description:
      'A personalized engineering and STEM education platform that dynamically synthesizes custom interactive problem sets, Socratic code reviews, and visual concept breakdowns tailored to each student’s exact knowledge boundary.',
    businessProblem:
      'Standard online learning platforms rely on static video curricula and one-size-fits-all quizzes that fail to diagnose specific conceptual misunderstandings when students struggle with complex algorithmic or mathematical problem solving.',
    engineeringSolution:
      'Created an adaptive Bayesian knowledge tracing engine coupled with low-latency Socratic conversational AI, real-time code execution sandboxes, and LaTeX-rendered visual theorem derivations.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Python',
      'PostgreSQL',
      'Docker Sandbox',
      'Tailwind CSS',
    ],
    architecture: [
      { label: 'Student Workspace', subtext: 'React / Editor' },
      { label: 'Socratic Router', subtext: 'Pedagogical AI' },
      { label: 'Knowledge Graph', subtext: 'Bayesian Tracing' },
      { label: 'Code Sandbox', subtext: 'Isolated Execution' },
      { label: 'Analytics Engine', subtext: 'Mastery Score' },
    ],
    githubUrl: 'https://github.com/pratiksawant/learnify-ai-platform',
    caseStudyUrl: '/case-studies/learnify',
  },
];
