import type { CollaborationArea, ProfessionalContactLinks, AvailabilityCardInfo } from '../types/contact';

export const COLLABORATION_AREAS: CollaborationArea[] = [
  {
    id: 'applied-ai',
    title: 'Applied AI Systems',
    explanation: 'Designing stateful RAG pipelines, fine-tuned domain transformers, and autonomous multi-agent reasoning topologies.',
    iconName: 'BrainCircuit',
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    explanation: 'Architecting multi-tenant B2B business software with strict ACID transactional integrity and HIPAA Row-Level Security.',
    iconName: 'Server',
  },
  {
    id: 'healthcare-platforms',
    title: 'Healthcare Platforms',
    explanation: 'Engineering sub-15ms WebSocket triage queues, deterministic patient state machines, and real-time operational diagnostics.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'backend-architecture',
    title: 'Backend Architecture',
    explanation: 'Building high-concurrency event loops, distributed Celery task queues, and zero-latency FastAPI microservices.',
    iconName: 'Layers',
  },
  {
    id: 'llm-applications',
    title: 'LLM Applications',
    explanation: 'Converting ambiguous cognitive tasks into structured JSON schema generators with automated LangSmith evaluation guardrails.',
    iconName: 'Cpu',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Self-Healing',
    explanation: 'Developing self-healing code remediation agents, sandboxed Docker execution loops, and AST syntax verifiers.',
    iconName: 'Terminal',
  },
  {
    id: 'technical-consulting',
    title: 'Technical Consulting',
    explanation: 'Conducting system architecture reviews, database indexing audits, and high-concurrency performance optimization matrices.',
    iconName: 'Database',
  },
  {
    id: 'engineering-collaboration',
    title: 'Engineering Collaboration',
    explanation: 'Partnering with ambitious founders and engineering teams to turn foundational whiteboards into resilient production software.',
    iconName: 'GitPullRequest',
  },
];

export const PREFERRED_ENGAGEMENTS: string[] = [
  'Freelance Projects',
  'Startup Collaboration',
  'Technical Consulting',
  'AI Engineering',
  'Backend Development',
  'Architecture Design',
];

export const PROFESSIONAL_CONTACT_LINKS: ProfessionalContactLinks = {
  email: 'pratiksawant1403@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pratik-sawant-41475631b/',
  githubPersonal: 'https://github.com/Pratiksawant14',
  githubOrganization: 'https://github.com/agentai1010-glitch',
  instagram: 'https://www.instagram.com/pratiksawant14/',
  location: 'Pune, Maharashtra, India',
};

export const CONTACT_AVAILABILITY: AvailabilityCardInfo = {
  currentStatus: 'Available for selected collaborations.',
  explanation: 'Interested in technically challenging projects where architecture and engineering quality matter.',
  preferredEngagement: PREFERRED_ENGAGEMENTS,
};
