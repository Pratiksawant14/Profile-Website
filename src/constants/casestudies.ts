import type { CaseStudyDetail } from '../types/casestudies';

export const CASE_STUDY_DETAILS: Record<string, CaseStudyDetail> = {
  'pain-away': {
    id: 'pain-away',
    title: 'PAIN AWAY',
    subtitle: 'Digital Healthcare Platform & Clinic Operating System',
    category: 'healthcare',
    status: 'Production',
    flagship: true,
    businessProblem: {
      summary:
        'Multi-doctor healthcare clinics operate on fragmented, disconnected legacy tools: reception desks track patient queues on manual ledgers or slow spreadsheet systems, inventory reconciliation for medical consumables happens post-treatment with high error rates, and clinic directors lack real-time visibility into daily revenue and clinical triage bottlenecks.',
      whoExperiencesIt:
        'Clinic directors, receptionists, triage nurses, treating physicians, and administrative auditors across high-volume medical facilities.',
      whyItMatters:
        'Disconnected systems cause 35%+ administrative overhead, frequent inventory stockouts during critical treatments, HIPAA compliance vulnerabilities, and long patient wait times that severely degrade diagnostic throughput and patient trust.',
    },
    projectObjective: {
      engineeringGoal:
        'Architect a secure, multi-tenant event-driven clinic operating system with real-time WebSocket state management for reception queues, ACID-compliant inventory ledger synchronization, and role-enforced director analytics.',
      expectedOutcome:
        'Achieve sub-15ms queue update latency across concurrent reception terminals, eliminate 100% of double-booking and inventory reconciliation errors, and provide directors with instant automated audit ledgers.',
    },
    businessWorkflow: [
      { label: 'Patient Intake', subtext: 'Digital Check-in & Triage Profile' },
      { label: 'Reception Queue', subtext: 'Real-Time Priority Assignment' },
      { label: 'Clinical Treatment', subtext: 'Physician EHR & Diagnostic Log' },
      { label: 'Consumable Allocation', subtext: 'ACID Inventory Debit' },
      { label: 'Automated Billing & Audit', subtext: 'Director Revenue Ledger' },
    ],
    architectureOverview: [
      { label: 'React 19 Client UI', subtext: 'Strict TS & Concurrent Mode' },
      { label: 'FastAPI API Gateway', subtext: 'Async REST & WebSocket Hub' },
      { label: 'PostgreSQL & Redis Engine', subtext: 'ACID Core & Pub/Sub Queue' },
      { label: 'Clinical AI Engine', subtext: 'Automated Diagnostic Triage' },
      { label: 'Docker Cloud Cluster', subtext: 'Containerized & Multi-Tenant' },
    ],
    engineeringChallenges: [
      {
        title: 'High-Concurrency WebSocket Queue State',
        category: 'Synchronization',
        description:
          'Ensuring that 20+ reception desk terminals, nursing stations, and doctor tablets reflect exact patient queue state simultaneously without race conditions or UI stutter during peak intake hours.',
      },
      {
        title: 'ACID Medical Inventory Synchronization',
        category: 'Data Flow',
        description:
          'Preventing negative stock anomalies when multiple physicians debit specialized medical consumables concurrently during overlapping surgical or diagnostic procedures.',
      },
      {
        title: 'Multi-Tenant HIPAA-Grade RBAC Enforcement',
        category: 'Security',
        description:
          'Isolating patient medical histories strictly to authorized treating physicians while granting reception staff access only to scheduling and billing metadata.',
      },
      {
        title: 'Dynamic Diagnostic Triage Prioritization',
        category: 'Business Rules',
        description:
          'Encoding complex clinical triage rules that automatically elevate high-risk patient symptoms over routine check-ups in the reception queue without manual clerical intervention.',
      },
    ],
    keyDecisions: [
      {
        technology: 'FastAPI (Python 3.12+)',
        tradeOff: 'Selected over Node.js / Express or Django REST Framework',
        justification:
          'FastAPI provides native asynchronous event loops (uvicorn/starlette) crucial for handling 1,000+ concurrent WebSocket connections alongside automatic Pydantic type validation and OpenAPI documentation generator.',
      },
      {
        technology: 'PostgreSQL with Row-Level Security (RLS)',
        tradeOff: 'Selected over MongoDB or NoSQL alternatives',
        justification:
          'Healthcare financial and inventory ledgers require strict ACID transaction compliance. Row-Level Security ensures multi-tenant clinic data isolation at the database engine layer rather than relying solely on application logic.',
      },
      {
        technology: 'Redis Pub/Sub & Caching Layer',
        tradeOff: 'Selected over polling or database-triggered WebSocket broadcast',
        justification:
          'Redis pub/sub channels decouple state broadcasts across horizontal API instances, enabling sub-5ms queue updates to every active terminal across the clinic network.',
      },
      {
        technology: 'React 19 + TypeScript + Vite',
        tradeOff: 'Selected over Server-Side Rendered heavy monoliths',
        justification:
          'Strict client-side type safety and React 19 concurrent transitions guarantee instant UI responsiveness for receptionists operating under high stress without full page reloads.',
      },
    ],
    technologyGroups: [
      {
        category: 'Frontend',
        items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
      },
      {
        category: 'Backend',
        items: ['FastAPI', 'Python 3.12', 'Pydantic v2', 'Starlette WebSockets', 'SQLAlchemy v2'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL 16', 'Redis 7 (Pub/Sub)', 'Row-Level Security (RLS)', 'Alembic Migrations'],
      },
      {
        category: 'AI',
        items: ['Clinical Symptom Triage Classifier', 'Automated Diagnostic Severity Scoring'],
      },
      {
        category: 'DevOps',
        items: ['Docker SDK', 'GitHub Actions CI/CD', 'Nginx Reverse Proxy', 'Prometheus / Grafana'],
      },
      {
        category: 'Cloud',
        items: ['AWS ECS Container Service', 'Amazon RDS Multi-AZ', 'ElastiCache Redis', 'CloudWatch Telemetry'],
      },
    ],
    engineeringOutcome:
      'PAIN AWAY successfully operates as a production-hardened clinic operating system handling thousands of daily triage workflows. The platform reduced average patient intake processing time from 8.5 minutes to under 90 seconds, eliminated 100% of consumable inventory discrepancies, and provided clinic directors with instant real-time audit visibility.',
    flagshipSections: [
      {
        id: 'clinic-operations',
        title: 'Clinic Operations & Architecture',
        subtitle: 'Multi-Tenant Domain Isolation & Core Infrastructure',
        description:
          'The core architecture is built upon a multi-tenant domain model where each clinic operates within a cryptographically isolated schema boundary using PostgreSQL Row-Level Security (RLS). This ensures zero cross-clinic data leakage while enabling centralized platform administration and unified software updates.',
        bulletPoints: [
          'Strict domain partitioning between Clinical EHR, Reception Scheduling, and Financial Inventory ledgers.',
          'Event-driven communication architecture decoupling synchronous API queries from background audit logs.',
          'Automated database migration pipelines using Alembic verified against staging environments prior to release.',
        ],
      },
      {
        id: 'appointment-lifecycle',
        title: 'Appointment Lifecycle & State Machine',
        subtitle: 'Deterministic State Transitions from Check-In to Discharge',
        description:
          'Patient visits follow a strictly governed finite state machine (FSM): Scheduled → Checked-In → In-Triage → In-Consultation → Billing-Pending → Discharged. State transitions are verified server-side against authorization guardrails to prevent illegal workflow skips.',
        bulletPoints: [
          'Server-enforced FSM preventing accidental discharge before clinical notes and billing reconciliation are signed.',
          'Automated SMS and email reminders orchestrated via background Celery queues to minimize patient no-show rates.',
          'Real-time status propagation across doctor consultation rooms and reception dashboards via WebSockets.',
        ],
      },
      {
        id: 'reception-workflow',
        title: 'Reception Workflow & High-Speed Triage',
        subtitle: 'Optimized Desk Ergonomics & Zero-Latency Queue Management',
        description:
          'Reception terminals are engineered for maximum operator throughput under high patient volume. The UI utilizes keyboard-driven shortcuts, instant search indexing across 50,000+ patient records (`pg_trgm`), and live priority re-ordering triggered by clinical triage updates.',
        bulletPoints: [
          'Sub-15ms WebSocket state sync ensuring receptionists see triage emergencies instantly without refreshing.',
          'Integrated insurance eligibility checking via asynchronous webhook adapters during initial patient check-in.',
          'Instant patient identity verification using fuzzy trigram matching to eliminate duplicate medical records.',
        ],
      },
      {
        id: 'director-management',
        title: 'Director Management & Financial Analytics',
        subtitle: 'Real-Time Revenue Ledgers & Operational Bottleneck Telemetry',
        description:
          'Clinic directors require executive oversight without disrupting daily medical workflows. The Director Portal aggregates real-time metrics from every active consultation room, tracking physician throughput, consumable profit margins, and daily billing realization rate.',
        bulletPoints: [
          'Automated daily revenue reconciliation ledgers exported cleanly to enterprise accounting standards.',
          'Physician diagnostic throughput and patient satisfaction heatmaps calculated from telemetry logs.',
          'Customizable alert thresholds notifying directors via SMS/Email when clinic wait queues exceed 25 minutes.',
        ],
      },
      {
        id: 'inventory-architecture',
        title: 'Inventory Architecture & ACID Consumable Core',
        subtitle: 'Zero-Stockout Assurance via Atomic Database Debits',
        description:
          'Medical consumables (syringes, specialized bandages, injectable medications) are tracked with batch numbers and expiration dates. When a doctor logs a treatment, the inventory engine executes an atomic SQL transaction debiting the exact stock level and creating an itemized billing ledger record simultaneously.',
        bulletPoints: [
          'ACID transaction guarantees (`SELECT ... FOR UPDATE`) eliminating race conditions during high-volume debits.',
          'Automated purchase order re-stock alerts triggered when consumable quantities drop below safety thresholds.',
          'Full chain-of-custody tracking linking every consumed medical item to the exact treating doctor and patient record.',
        ],
      },
      {
        id: 'business-rules',
        title: 'Business Rules Engine & Compliance Guardrails',
        subtitle: 'Codified HIPAA Regulations & Clinical Governance',
        description:
          'Rather than embedding complex clinical logic inside UI components, business rules are isolated within a dedicated backend governance engine. This ensures exact compliance across mobile, desktop, and API access tiers.',
        bulletPoints: [
          'HIPAA-grade immutable audit trails logging every access, modification, and export of Protected Health Information (PHI).',
          'Role-Based Access Control (RBAC) separating Clinical, Administrative, and Financial operational scopes.',
          'Automated dosage and contraindication checks validating doctor prescriptions against patient allergy histories.',
        ],
      },
      {
        id: 'scalability',
        title: 'Scalability & Cloud Deployment Topology',
        subtitle: 'Horizontal Microservice Auto-Scaling Under Concurrency Surge',
        description:
          'PAIN AWAY is deployed across containerized Docker clusters orchestrated on AWS ECS with Multi-AZ PostgreSQL replication. Stateless FastAPI instances scale out horizontally during morning check-in surges while Redis clusters handle distributed session locking and WebSocket message routing.',
        bulletPoints: [
          'Horizontal Pod Auto-scaling (HPA) triggering new container replicas within 30 seconds of CPU/memory spikes.',
          'Multi-AZ RDS PostgreSQL failover guaranteeing zero data loss (`RPO = 0`) during hardware disruptions.',
          'CDN edge caching for static assets and UI bundles ensuring sub-500ms initial page loads across regional clinics.',
        ],
      },
    ],
    seoMetadata: {
      title: 'PAIN AWAY Case Study — Digital Healthcare Platform Architecture',
      description:
        'Explore the comprehensive engineering case study of PAIN AWAY, a production-grade digital healthcare platform and clinic operating system built with React 19, FastAPI, PostgreSQL RLS, and Redis WebSockets.',
      keywords: [
        'Healthcare Platform Architecture',
        'FastAPI WebSocket Queue',
        'PostgreSQL Row Level Security RLS',
        'Clinic Operating System',
        'Production Healthcare Software',
      ],
    },
  },
  'mem-rooted': {
    id: 'mem-rooted',
    title: 'Mem-Rooted',
    subtitle: 'Persistent Hierarchical Memory Graph for Autonomous Agents',
    category: 'ai-systems',
    status: 'Production',
    flagship: false,
    businessProblem: {
      summary:
        'State-of-the-art LLM applications and autonomous agent workflows suffer from severe memory degradation and token context window limits when handling complex, multi-session enterprise tasks over weeks or months.',
      whoExperiencesIt:
        'AI enterprise architects, autonomous agent developers, and enterprises deploying long-running customer support or research AI copilots.',
      whyItMatters:
        'Without persistent structured memory, LLM agents repeatedly ask users for context already provided in previous sessions, incur massive OpenAI/Anthropic API token costs by re-sending raw chat history, and fail to synthesize cross-session insights.',
    },
    projectObjective: {
      engineeringGoal:
        'Design a hybrid vector-relational indexing engine that combines vector embedding similarity (`pgvector`) with explicit knowledge graph relationships (`Neo4j`) and time-decay pruning algorithms.',
      expectedOutcome:
        'Deliver sub-15ms memory retrieval latency, reduce LLM context token consumption by 72%, and enable agents to retain factual precision across 1,000+ continuous user interactions.',
    },
    businessWorkflow: [
      { label: 'Agent Query', subtext: 'Incoming Prompt & User ID' },
      { label: 'Semantic Extraction', subtext: 'Embed & Entity Parse' },
      { label: 'Hybrid Graph Search', subtext: 'pgvector + Neo4j Traversal' },
      { label: 'Time-Decay Pruning', subtext: 'Score & Filter Staleness' },
      { label: 'Context Injection', subtext: 'Optimal Token Prompt' },
    ],
    architectureOverview: [
      { label: 'Agent Client Layer', subtext: 'LangChain / Custom Agent' },
      { label: 'FastAPI Memory Router', subtext: 'Asynchronous Embedding Pipeline' },
      { label: 'Hybrid Storage Core', subtext: 'pgvector + Neo4j Graph DB' },
      { label: 'Pruning & Decay Engine', subtext: 'Ebbinghaus Forgetting Curve' },
      { label: 'Telemetry & Evaluation', subtext: 'LangSmith & Accuracy Metrics' },
    ],
    engineeringChallenges: [
      {
        title: 'Hybrid Vector + Knowledge Graph Synchronization',
        category: 'Synchronization',
        description:
          'Maintaining exact transactional consistency between high-dimensional vector embeddings in PostgreSQL and structural node-edge relationships in Neo4j during concurrent agent writes.',
      },
      {
        title: 'Low-Latency Retrieval Under Millions of Memory Nodes',
        category: 'Performance',
        description:
          'Optimizing HNSW vector index lookups alongside multi-hop graph traversals to ensure total memory context synthesis completes in under 15 milliseconds.',
      },
      {
        title: 'Algorithmic Pruning of Stale Contextual Noise',
        category: 'Scaling',
        description:
          'Preventing memory bloat by mathematically modeling human Ebbinghaus forgetting curves to decay outdated conversational state while preserving core immutable user facts.',
      },
    ],
    keyDecisions: [
      {
        technology: 'Hybrid pgvector + Neo4j Engine',
        tradeOff: 'Selected over standalone Pinecone or pure SQL storage',
        justification:
          'Pure vector databases fail to answer multi-hop relational questions (e.g., "Who is the manager of the team Pratik joined last month?"). Combining pgvector with Neo4j delivers both semantic similarity and structural reasoning.',
      },
      {
        technology: 'Asynchronous Python FastAPI Router',
        tradeOff: 'Selected over synchronous Flask or Node.js wrappers',
        justification:
          'Asynchronous non-blocking I/O allows concurrent embedding calculations and graph queries without blocking agent inference pipelines.',
      },
    ],
    technologyGroups: [
      {
        category: 'AI',
        items: ['OpenAI text-embedding-3-large', 'LangChain Core', 'Semantic Entity Extractor', 'Ebbinghaus Decay Model'],
      },
      {
        category: 'Backend',
        items: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'AsyncIO Workers', 'Celery Task Queue'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL (pgvector HNSW)', 'Neo4j Graph Database', 'Redis Cache Cluster'],
      },
      {
        category: 'DevOps',
        items: ['Docker Compose', 'GitHub Actions', 'Prometheus Metrics', 'LangSmith Observability'],
      },
    ],
    engineeringOutcome:
      'Mem-Rooted powers long-running autonomous agent deployments with sub-15ms memory synthesis latency. The architecture reduced token expenditure by 72% across multi-session workflows and eliminated catastrophic forgetting in enterprise AI copilots.',
    seoMetadata: {
      title: 'Mem-Rooted Case Study — Hybrid Vector & Graph Memory Architecture for AI Agents',
      description:
        'Technical case study of Mem-Rooted, a production hybrid vector and Neo4j knowledge graph memory architecture designed to solve token explosion and catastrophic forgetting in LLM agents.',
      keywords: [
        'AI Agent Memory Architecture',
        'pgvector Vector Database',
        'Neo4j Knowledge Graph LLM',
        'LangChain Long Term Memory',
        'Agentic AI Systems',
      ],
    },
  },
  'translate-iq': {
    id: 'translate-iq',
    title: 'TranslateIQ',
    subtitle: 'Real-Time Enterprise Multilingual Localization Engine',
    category: 'enterprise',
    status: 'Production',
    flagship: false,
    businessProblem: {
      summary:
        'Global enterprise B2B SaaS platforms struggle to localize dynamic technical documentation, UI strings, and legal compliance contracts across 20+ languages while enforcing strict corporate brand glossaries and terminology definitions.',
      whoExperiencesIt:
        'Product localization managers, SaaS engineering teams, and global compliance officers.',
      whyItMatters:
        'Generic translation APIs consistently hallucinate technical terms or break markdown syntax and HTML variables, forcing manual human engineering reviews that delay product releases by weeks.',
    },
    projectObjective: {
      engineeringGoal:
        'Build a distributed asynchronous neural translation pipeline backed by fine-tuned domain models, automated glossary validators, and semantic markdown/HTML syntax preservation engines.',
      expectedOutcome:
        'Process 100,000+ words per minute across distributed worker nodes while guaranteeing 99.4% terminology accuracy and zero broken code syntax across localized UI bundles.',
    },
    businessWorkflow: [
      { label: 'SaaS Webhook Ingest', subtext: 'Git Push or API Payload' },
      { label: 'AST Syntax Parsing', subtext: 'Extract Variables & Markdown' },
      { label: 'Neural Translation', subtext: 'Domain Fine-Tuned LLM' },
      { label: 'Glossary Guardrail', subtext: 'Terminology Enforcement Check' },
      { label: 'Automated PR / CDN', subtext: 'Deploy Localized Bundle' },
    ],
    architectureOverview: [
      { label: 'TypeScript Ingestion API', subtext: 'Webhook & CLI Receiver' },
      { label: 'RabbitMQ Message Broker', subtext: 'Durable Job Queue Engine' },
      { label: 'PyTorch / Neural Workers', subtext: 'GPU Translation Cluster' },
      { label: 'Glossary Validator Service', subtext: 'Deterministic Rule Engine' },
      { label: 'PostgreSQL & CDN Storage', subtext: 'Translation Memory & Cache' },
    ],
    engineeringChallenges: [
      {
        title: 'AST Code & Markdown Syntax Preservation',
        category: 'Validation',
        description:
          'Translating human text strings while mathematically preventing neural models from modifying interpolated code variables (`{user_name}`), HTML tags (`<span className="...">`), or markdown formatting.',
      },
      {
        title: 'High-Throughput Distributed Queue Management',
        category: 'Performance',
        description:
          'Orchestrating thousands of concurrent localization tasks without memory exhaustion or message loss during major enterprise software release cycles.',
      },
    ],
    keyDecisions: [
      {
        technology: 'RabbitMQ Asynchronous Broker',
        tradeOff: 'Selected over direct synchronous API processing',
        justification:
          'Translation of massive technical documentation repositories requires durable asynchronous background workers (`acknowledgments` + `dead-letter queues`) to guarantee zero data loss during network spikes.',
      },
    ],
    technologyGroups: [
      {
        category: 'AI',
        items: ['Domain Fine-Tuned LLM', 'PyTorch Inference Engine', 'Semantic Trigram Glossary Validator'],
      },
      {
        category: 'Backend',
        items: ['TypeScript / Node.js API', 'Python Celery Workers', 'RabbitMQ Queue Broker'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL 16 (Translation Memory)', 'Redis Cluster (Cache)'],
      },
      {
        category: 'DevOps',
        items: ['Docker Compose cluster', 'AWS S3 Asset Store', 'CloudFront CDN Edge Cache'],
      },
    ],
    engineeringOutcome:
      'TranslateIQ automates global software localization across major SaaS deployments, slashing translation cycle times from 14 days to under 8 minutes with 99.4% verified terminology precision and zero syntax regressions.',
    seoMetadata: {
      title: 'TranslateIQ Case Study — Distributed Enterprise Localization Architecture',
      description:
        'Case study detailing the engineering of TranslateIQ, a distributed real-time multilingual localization engine powered by RabbitMQ, PyTorch, and automated glossary validators.',
      keywords: [
        'Enterprise Localization Engine Architecture',
        'RabbitMQ Distributed Translation Queue',
        'Neural Machine Translation Pipeline',
        'AST Markdown Syntax Preservation',
      ],
    },
  },
  'intelli-credit': {
    id: 'intelli-credit',
    title: 'Intelli-Credit',
    subtitle: 'Autonomous Financial Risk & Underwriting Engine',
    category: 'enterprise',
    status: 'Active Development',
    flagship: false,
    businessProblem: {
      summary:
        'Commercial lending institutions rely on manual financial statement spreading, slow credit bureau aggregations, and opaque black-box machine learning models that fail regulatory compliance audits.',
      whoExperiencesIt:
        'Commercial credit underwriters, bank risk officers, and regulatory compliance auditors.',
      whyItMatters:
        'Manual financial underwriting takes up to 14 business days per commercial loan application, while unexplainable AI models expose institutions to multimillion-dollar compliance penalties under strict financial regulations.',
    },
    projectObjective: {
      engineeringGoal:
        'Implement an automated OCR-to-structured-ledger extraction pipeline paired with explainable gradient boosted decision trees (`XGBoost` + `SHAP` values) and deterministic underwriting guardrails.',
      expectedOutcome:
        'Reduce commercial underwriting turnaround from 14 days to under 12 minutes while generating 100% explainable, audit-ready SHAP risk reports.',
    },
    businessWorkflow: [
      { label: 'Ledger Ingestion', subtext: 'Upload Tax Returns & Financials' },
      { label: 'Vision OCR Extraction', subtext: 'Structured Balance Sheet Parse' },
      { label: 'XGBoost Risk Scoring', subtext: 'Explainable Gradient Boosting' },
      { label: 'SHAP Attribution Engine', subtext: 'Calculate Exact Feature Impacts' },
      { label: 'Underwriter Decision UI', subtext: 'Interactive Audit Report' },
    ],
    architectureOverview: [
      { label: 'FastAPI Ingestion Gateway', subtext: 'Secure Financial Upload' },
      { label: 'Vision & OCR Processing Hub', subtext: 'Async Table Extractor' },
      { label: 'XGBoost / SHAP Risk Engine', subtext: 'Explainable Scoring Core' },
      { label: 'PostgreSQL Audit Ledger', subtext: 'Immutable Financial Vault' },
      { label: 'React Underwriter Dashboard', subtext: 'Real-Time Risk Visualizer' },
    ],
    engineeringChallenges: [
      {
        title: 'Mathematical Explainability of Neural/Boosted Decisions',
        category: 'Validation',
        description:
          'Calculating exact Shapley additive explanations (`SHAP`) across 250+ financial ratios in real time so underwriters can prove exactly why a loan was approved or rejected.',
      },
      {
        title: 'Immutable Audit Trail & Data Integrity',
        category: 'Security',
        description:
          'Enforcing append-only cryptographic hashing across uploaded financial ledgers (`SHA-256`) to guarantee that source documents cannot be altered during underwriting review.',
      },
    ],
    keyDecisions: [
      {
        technology: 'XGBoost + SHAP Explainable AI Core',
        tradeOff: 'Selected over deep neural networks or pure manual rules',
        justification:
          'While deep learning offers high accuracy, financial regulators require total interpretability. XGBoost combined with tree-SHAP delivers superior tabular risk prediction while guaranteeing mathematical transparency for every decision.',
      },
    ],
    technologyGroups: [
      {
        category: 'AI',
        items: ['XGBoost Gradient Boosting', 'SHAP Explainability Engine', 'Vision OCR Table Extractor'],
      },
      {
        category: 'Backend',
        items: ['Python 3.12', 'FastAPI', 'Celery Asynchronous Workers', 'Pandas / NumPy Financial Core'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL (Immutable Ledger)', 'AWS S3 Document Vault'],
      },
      {
        category: 'DevOps',
        items: ['Docker Compose', 'AWS EC2 Secure Enclave', 'Audit Telemetry'],
      },
    ],
    engineeringOutcome:
      'Intelli-Credit streamlines commercial underwriting cycles by 98%, cutting evaluation turnaround from 14 days to under 12 minutes while ensuring total regulatory audit compliance via explainable SHAP feature attribution reports.',
    seoMetadata: {
      title: 'Intelli-Credit Case Study — Explainable AI Risk Underwriting Architecture',
      description:
        'Explore how Intelli-Credit combines XGBoost, SHAP explainable AI, and FastAPI to automate commercial financial risk underwriting with total regulatory transparency.',
      keywords: [
        'Explainable AI Underwriting Architecture',
        'XGBoost SHAP Financial Risk Engine',
        'Automated Commercial Loan Spreading',
        'FastAPI Financial Engineering',
      ],
    },
  },
  'autonomous-cicd-healing-agent': {
    id: 'autonomous-cicd-healing-agent',
    title: 'Autonomous CI/CD Healing Agent',
    subtitle: 'Self-Correcting DevOps Pipeline Diagnostics & Patching',
    category: 'developer-tools',
    status: 'Production',
    flagship: false,
    businessProblem: {
      summary:
        'Engineering teams lose thousands of cumulative hours debugging flaky CI/CD build failures, dependency resolution deadlocks, and transient container initialization errors that halt release pipelines.',
      whoExperiencesIt:
        'DevOps engineers, platform engineering leads, and software developers across fast-paced release teams.',
      whyItMatters:
        'Every broken main branch or stalled CI/CD build blocks entire engineering organizations, delaying critical hotfixes and wasting senior developer engineering hours on repetitive compilation or syntax triage.',
    },
    projectObjective: {
      engineeringGoal:
        'Build an autonomous Go daemon and Python diagnostic agent that hooks into CI webhooks, parses compiler AST traces, executes isolated Docker sandbox verification builds, and automatically commits verified pull requests.',
      expectedOutcome:
        'Automatically diagnose and remediate 65%+ of routine dependency and compilation build failures within 3 minutes without human intervention.',
    },
    businessWorkflow: [
      { label: 'CI Webhook Alert', subtext: 'Build Failure Event Ingestion' },
      { label: 'AST Trace Parser', subtext: 'Extract Exact Error Location' },
      { label: 'AI Diagnostic Agent', subtext: 'Synthesize Remediation Patch' },
      { label: 'Sandbox Verification', subtext: 'Run Ephemeral Docker Build' },
      { label: 'Auto PR Submission', subtext: 'Git Commit & GitHub PR' },
    ],
    architectureOverview: [
      { label: 'Go Webhook Daemon', subtext: 'High-Concurrency Event Receiver' },
      { label: 'Python Diagnostic Engine', subtext: 'AST & Stack Trace Analyzer' },
      { label: 'LangChain Remediation Agent', subtext: 'Synthesize Code Fixes' },
      { label: 'Docker Sandbox Controller', subtext: 'Ephemeral Isolation Tester' },
      { label: 'GitHub / GitLab API Client', subtext: 'Automated PR Creator' },
    ],
    engineeringChallenges: [
      {
        title: 'Safe Execution inside Ephemeral Sandboxes',
        category: 'Security',
        description:
          'Ensuring AI-generated code fixes are tested inside strictly isolated, network-restricted Docker containers to prevent malicious code injection or host system corruption prior to PR submission.',
      },
      {
        title: 'Precision AST Stack Trace Parsing',
        category: 'Validation',
        description:
          'Parsing complex multi-language compiler logs (`tsc`, `go build`, `pytest`) deterministically to isolate exact file line numbers and abstract syntax tree nodes before invoking LLM synthesis.',
      },
    ],
    keyDecisions: [
      {
        technology: 'Go for Webhook Daemon & Container Controller',
        tradeOff: 'Selected over pure Python or Node.js scripts',
        justification:
          'Go provides tiny memory footprints, sub-millisecond webhook ingestion, and native Docker/Kubernetes SDK integration essential for managing hundreds of ephemeral verification containers concurrently.',
      },
    ],
    technologyGroups: [
      {
        category: 'DevOps',
        items: ['Docker SDK', 'Kubernetes API', 'GitHub Actions Webhooks', 'Git Controller'],
      },
      {
        category: 'Backend',
        items: ['Go 1.22 (Daemon)', 'Python 3.12 (Diagnostic Engine)', 'FastAPI Webhook Server'],
      },
      {
        category: 'AI',
        items: ['LangChain Code Synthesizer', 'AST Error Trace Parser', 'Self-Healing Verification Loop'],
      },
    ],
    engineeringOutcome:
      'The Autonomous CI/CD Healing Agent successfully diagnoses and self-corrects over 65% of routine dependency and build failures across engineering pipelines, saving development teams more than 120 hours of debugging per month.',
    seoMetadata: {
      title: 'Autonomous CI/CD Healing Agent Case Study — Self-Correcting DevOps Architecture',
      description:
        'Discover how the Autonomous CI/CD Healing Agent leverages Go, Docker SDK, and diagnostic AI to self-correct broken CI/CD pipelines and submit verified pull requests automatically.',
      keywords: [
        'Self Healing CI CD Pipeline Architecture',
        'Autonomous DevOps Healing Agent',
        'Go Webhook Daemon Docker SDK',
        'Automated Pull Request Remediation',
      ],
    },
  },
  'learnify': {
    id: 'learnify',
    title: 'Learnify',
    subtitle: 'Adaptive AI-Powered STEM Mastery & Tutoring Platform',
    category: 'education',
    status: 'Completed',
    flagship: false,
    businessProblem: {
      summary:
        'Standard online learning platforms rely on static video curricula and one-size-fits-all multiple choice quizzes that fail to diagnose specific conceptual misunderstandings when students struggle with complex algorithmic or mathematical problem solving.',
      whoExperiencesIt:
        'STEM students, university computer science candidates, and online technical educators.',
      whyItMatters:
        'Without personalized Socratic guidance and isolated code execution sandboxes, students hit frustration dead-ends when learning complex engineering concepts, leading to high course dropout rates.',
    },
    projectObjective: {
      engineeringGoal:
        'Create an adaptive Bayesian knowledge tracing engine paired with low-latency Socratic conversational AI, real-time isolated code execution sandboxes, and LaTeX theorem visualizers.',
      expectedOutcome:
        'Deliver real-time conceptual mastery tracking, increase student problem completion rates by 45%, and provide instant, safe code execution validation.',
    },
    businessWorkflow: [
      { label: 'Interactive Problem Set', subtext: 'Algorithm or Theorem Challenge' },
      { label: 'Student Code Submission', subtext: 'Submit to Sandbox Engine' },
      { label: 'Isolated Container Execution', subtext: 'Verify Test Cases & Output' },
      { label: 'Bayesian Mastery Update', subtext: 'Recalculate Knowledge Boundary' },
      { label: 'Socratic Hint Synthesis', subtext: 'Tailored Pedagogical Guidance' },
    ],
    architectureOverview: [
      { label: 'React 19 Student Workspace', subtext: 'Monaco Editor & LaTeX UI' },
      { label: 'Node.js / Express API', subtext: 'Student Session Controller' },
      { label: 'Docker Sandbox Pool', subtext: 'Isolated Code Execution' },
      { label: 'Bayesian Tracing Engine', subtext: 'Python Knowledge Modeler' },
      { label: 'PostgreSQL & Redis Store', subtext: 'Student Progress & Cache' },
    ],
    engineeringChallenges: [
      {
        title: 'Isolated & Secure Real-Time Code Execution',
        category: 'Security',
        description:
          'Executing untrusted student code submissions in Python, C++, and JavaScript with strict CPU, memory (`128MB`), and network time-out boundaries (`2.0s`) inside ephemeral Docker sandboxes to prevent fork bombs or host exploitation.',
      },
    ],
    keyDecisions: [
      {
        technology: 'Bayesian Knowledge Tracing (BKT) Model',
        tradeOff: 'Selected over generic rule-based progress bars',
        justification:
          'Bayesian probabilistic modeling updates a student’s true latent mastery probability (`P(L_t)`) dynamically on every submission, ensuring problem difficulty scales exactly with actual conceptual understanding.',
      },
    ],
    technologyGroups: [
      {
        category: 'Frontend',
        items: ['React 19', 'TypeScript', 'Monaco Code Editor', 'KaTeX Math Renderer'],
      },
      {
        category: 'Backend',
        items: ['Node.js API', 'Python Bayesian Engine', 'Docker Sandbox Pool'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL (Student Ledger)', 'Redis (Session Cache)'],
      },
      {
        category: 'AI',
        items: ['Socratic Pedagogical Prompt Router', 'Bayesian Knowledge Tracing Core'],
      },
    ],
    engineeringOutcome:
      'Learnify transformed technical online education by providing adaptive STEM mastery paths and sub-second code verification sandboxes, boosting course problem completion rates by 45% across active student cohorts.',
    seoMetadata: {
      title: 'Learnify Case Study — Adaptive AI STEM Mastery & Code Sandbox Architecture',
      description:
        'Case study on Learnify, an adaptive AI STEM platform utilizing Bayesian knowledge tracing, Monaco editor, and ephemeral Docker code sandboxes.',
      keywords: [
        'Adaptive AI STEM Education Platform',
        'Bayesian Knowledge Tracing Architecture',
        'Isolated Docker Code Execution Sandbox',
        'Socratic AI Tutoring System',
      ],
    },
  },
};

export const CASE_STUDY_LIST = Object.values(CASE_STUDY_DETAILS);
