import type {
  ProfileIdentity,
  EducationNode,
  EngineeringDomainBadge,
  TechnicalSnapshotCategory,
  ResumeMetadata,
  AvailabilityInfo,
} from '../types/profile';

export const PROFILE_IDENTITY: ProfileIdentity = {
  fullName: 'Pratik Santosh Sawant',
  professionalTitle: 'Applied AI Engineer',
  location: 'Pune, Maharashtra, India',
  summary:
    'Production-focused Applied AI Engineer and Software Architect specializing in designing resilient LLM pipelines, autonomous agent topologies, high-concurrency event-driven backends, and enterprise business software. Proven capability in converting ambiguous business workflows into deterministic, type-safe, and self-healing production software systems.',
  links: {
    githubPersonal: 'https://github.com/Pratiksawant14',
    githubOrganization: 'https://github.com/agentai1010-glitch',
    linkedin: 'https://www.linkedin.com/in/pratik-sawant-41475631b/',
    email: 'mailto:pratiksawant1403@gmail.com',
  },
};

export const PROFILE_EDUCATION: EducationNode = {
  degree: 'Bachelor of Technology (B.Tech)',
  major: 'Computer Science & Engineering (Data Science)',
  institution: 'Vishwakarma Institute of Technology (VIT)',
  location: 'Pune, Maharashtra',
  expectedGraduation: '2028',
};

export const PROFILE_CORE_DOMAINS: EngineeringDomainBadge[] = [
  {
    id: 'applied-ai',
    title: 'Applied AI',
    focusArea: 'Autonomous agent swarms, semantic vector search, and stateful workflow graphs.',
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    focusArea: 'Transformer architectures, domain fine-tuning (`PEFT/LoRA`), and RAG pipelines.',
  },
  {
    id: 'llm-engineering',
    title: 'LLM Engineering',
    focusArea: 'Context window engineering, structured JSON extraction, and LangSmith evaluation.',
  },
  {
    id: 'backend-engineering',
    title: 'Backend Engineering',
    focusArea: 'Asynchronous event loops, real-time WebSockets, and ACID PostgreSQL ledgers.',
  },
  {
    id: 'production-apis',
    title: 'Production APIs',
    focusArea: 'Self-documenting REST/OpenAPI contracts, rate limiting, and JWT session security.',
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    focusArea: 'Multi-tenant Row-Level Security (`RLS`) isolation and HIPAA-grade RBAC guardrails.',
  },
  {
    id: 'cloud-fundamentals',
    title: 'Cloud Fundamentals',
    focusArea: 'Docker container sandboxing, AWS ECS/RDS topologies, and automated CI/CD healing.',
  },
];

export const PROFILE_TECH_SNAPSHOT: TechnicalSnapshotCategory[] = [
  {
    category: 'Programming',
    items: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    category: 'AI Stack',
    items: [
      'PyTorch',
      'TensorFlow',
      'LangChain',
      'LangGraph',
      'PEFT / LoRA',
      'RAG',
      'Embeddings',
      'Vector Databases',
    ],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Node.js', 'React'],
  },
  {
    category: 'Cloud',
    items: ['AWS (Foundational)', 'Google Colab GPU'],
  },
];

export const PROFILE_COURSEWORK: string[] = [
  'Machine Learning Fundamentals',
  'Data Structures & Algorithms',
  'LangChain & LLM Applications',
  'NLP & Transformer Models',
  'Deep Learning',
];

export const PROFILE_LANGUAGES: string[] = ['English', 'Hindi', 'Marathi'];

export const PROFILE_RESUME_INFO: ResumeMetadata = {
  title: 'Pratik Santosh Sawant — Engineering Profile & Spec',
  fileUrl: '/Pratik_Sawant_Resume.pdf',
  lastUpdated: 'July 2026 (Production Release)',
  fileFormat: 'PDF Specification (ATS & Executive Ready)',
};

export const PROFILE_AVAILABILITY: AvailabilityInfo = {
  status: 'Open for Strategic Engineering Collaborations',
  interestedIn: [
    'AI Engineering',
    'Backend Engineering',
    'Production Software',
    'Freelance Collaborations',
  ],
};
