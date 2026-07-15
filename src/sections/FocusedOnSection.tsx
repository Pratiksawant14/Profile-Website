import { motion } from 'framer-motion';
import { SectionContainer } from '../layouts';
import { SectionHeading, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '../components';
import { staggerContainerVariants, fadeUpItemVariants } from '../lib/motion';
import { Cpu, Server, Workflow, ShieldCheck, Layers, Terminal } from 'lucide-react';

interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
}

const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'ai-systems',
    title: 'AI Systems',
    description: 'Designing resilient Retrieval-Augmented Generation pipelines and autonomous agent architectures optimized for low-latency inference.',
    icon: <Cpu className="w-5 h-5 text-accent" />,
    badge: 'RAG & AGENTS',
  },
  {
    id: 'backend-platforms',
    title: 'Backend Platforms',
    description: 'Architecting high-concurrency event-driven microservices, clean APIs, and robust distributed data layers using FastAPI and Node.',
    icon: <Server className="w-5 h-5 text-accent" />,
    badge: 'HIGH CONCURRENCY',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description: 'Orchestrating custom enterprise workflows and intelligent data pipelines that eliminate bottlenecks and drive operational scale.',
    icon: <Workflow className="w-5 h-5 text-accent" />,
    badge: 'ENTERPRISE SCALE',
  },
  {
    id: 'production-software',
    title: 'Production Software',
    description: 'Enforcing rigorous automated testing, comprehensive observability, type safety, and zero-downtime CI/CD deployment standards.',
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
    badge: 'RELIABILITY FIRST',
  },
  {
    id: 'enterprise-workflows',
    title: 'Enterprise Workflows',
    description: 'Engineering secure, multi-tenant web applications and responsive full-stack interfaces that streamline complex mission-critical tasks.',
    icon: <Layers className="w-5 h-5 text-accent" />,
    badge: 'FULL-STACK UI',
  },
];

export const FocusedOnSection = () => {
  return (
    <SectionContainer variant="transparent">
      <SectionHeading
        eyebrow="ENGINEERING FOCUS & METHODOLOGY"
        title="Focused On"
        description="Core technical domains where I architect scalable solutions and drive production reliability."
        action={
          <Badge variant="neutral" showDot>
            PRODUCTION FOCUS
          </Badge>
        }
      />

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {FOCUS_AREAS.map((item) => (
          <motion.div key={item.id} variants={fadeUpItemVariants} className="h-full">
            <Card variant="interactive" className="h-full flex flex-col justify-between p-2 bg-background dark:bg-surface-900/40 border border-surface-200 dark:border-surface-800 hover:border-accent/40 transition-all">
              <div>
                <CardHeader className="pb-3 flex-row items-center justify-between space-y-0">
                  <div className="w-10 h-10 rounded-md bg-surface-100 dark:bg-surface-800 flex items-center justify-center border border-surface-200 dark:border-surface-700">
                    {item.icon}
                  </div>
                  <Badge variant="accent" className="font-mono text-[10px]">
                    {item.badge}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-2">
                  <CardTitle className="text-lg font-bold mb-2 flex items-center gap-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-content-secondary">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </div>
              <div className="px-6 pb-4 pt-2 flex items-center justify-between border-t border-surface-100 dark:border-surface-800/50 text-[11px] font-mono text-content-tertiary">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-accent" />
                  STATUS: ACTIVE
                </span>
                <span>SYSTEM SPEC</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};
