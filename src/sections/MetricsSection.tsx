import { motion } from 'framer-motion';
import { SectionContainer } from '../layouts';
import { sectionRevealVariants } from '../lib/motion';
import { Terminal, Cpu, GitBranch, Layers, ShieldCheck, Code2 } from 'lucide-react';

interface MetricItem {
  id: string;
  label: string;
  value: string;
  status: string;
  icon: React.ReactNode;
}

const PROFESSIONAL_METRICS: MetricItem[] = [
  {
    id: 'prod-systems',
    label: 'Production Systems',
    value: 'Architected',
    status: 'High-Concurrency & AI',
    icon: <Cpu className="w-4 h-4 text-accent" />,
  },
  {
    id: 'ai-pipelines',
    label: 'AI & RAG Pipelines',
    value: 'Engineered',
    status: 'Agentic & LLM Systems',
    icon: <Terminal className="w-4 h-4 text-accent" />,
  },
  {
    id: 'tech-stack',
    label: 'Core Technologies',
    value: 'React • TS • FastAPI',
    status: 'Full-Stack Mastery',
    icon: <Code2 className="w-4 h-4 text-accent" />,
  },
  {
    id: 'open-source',
    label: 'Open Source Standards',
    value: 'Strict CI/CD',
    status: 'Zero-Downtime Focus',
    icon: <GitBranch className="w-4 h-4 text-accent" />,
  },
  {
    id: 'arch-readiness',
    label: 'System Reliability',
    value: 'Tier 1 Quality',
    status: 'Type-Safe & Scalable',
    icon: <ShieldCheck className="w-4 h-4 text-accent" />,
  },
  {
    id: 'code-integrity',
    label: 'Engineering Rigor',
    value: '100% Verified',
    status: 'Clean Architecture',
    icon: <Layers className="w-4 h-4 text-accent" />,
  },
];

export const MetricsSection = () => {
  return (
    <SectionContainer variant="surface" className="py-8 sm:py-10 md:py-12 border-b border-surface-200/80 dark:border-surface-800/80">
      <motion.div
        variants={sectionRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full gap-6 md:gap-8 text-left"
      >
        {PROFESSIONAL_METRICS.map((metric) => (
          <div
            key={metric.id}
            className="flex flex-col items-start text-left space-y-1.5 p-4 rounded-md bg-background/60 dark:bg-surface-900/40 border border-surface-200/60 dark:border-surface-800/60 transition-colors hover:border-surface-300 dark:hover:border-surface-700 w-full"
          >
            <div className="flex items-center justify-between text-content-tertiary mb-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-content-secondary font-semibold">
                {metric.label}
              </span>
              {metric.icon}
            </div>
            <div className="font-sans font-bold text-base sm:text-lg text-content-primary tracking-tight">
              {metric.value}
            </div>
            <div className="font-mono text-[10px] text-accent font-medium pt-0.5">
              {metric.status}
            </div>
          </div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};
