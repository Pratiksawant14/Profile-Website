import React from 'react';
import { motion } from 'framer-motion';
import type { WorkflowStage } from '../../constants';
import { ENGINEERING_STAGES } from '../../constants';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card';
import { Badge } from './Badge';
import { staggerContainerVariants, fadeUpItemVariants } from '../../lib/motion';
import {
  Briefcase,
  Search,
  Cpu,
  GitBranch,
  Code2,
  CheckCircle2,
  Rocket,
  RefreshCw,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';

const STAGE_ICONS: Record<string, React.ReactNode> = {
  '01': <Briefcase className="w-5 h-5 text-accent" />,
  '02': <Search className="w-5 h-5 text-accent" />,
  '03': <Cpu className="w-5 h-5 text-accent" />,
  '04': <GitBranch className="w-5 h-5 text-accent" />,
  '05': <Code2 className="w-5 h-5 text-accent" />,
  '06': <CheckCircle2 className="w-5 h-5 text-accent" />,
  '07': <Rocket className="w-5 h-5 text-accent" />,
  '08': <RefreshCw className="w-5 h-5 text-accent" />,
};

export const ProcessWorkflow: React.FC = () => {
  return (
    <div className="w-full my-8">
      {/* Consulting Workflow Grid / Chain */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative"
      >
        {ENGINEERING_STAGES.map((stage: WorkflowStage, index: number) => {
          const isLastInRow = (index + 1) % 4 === 0;
          const isFinalStage = index === ENGINEERING_STAGES.length - 1;

          return (
            <motion.div key={stage.step} variants={fadeUpItemVariants} className="flex flex-col relative h-full">
              {/* Process Card */}
              <Card
                variant="interactive"
                className="h-full flex flex-col justify-between p-2 bg-background dark:bg-surface-900/40 border border-surface-200 dark:border-surface-800 hover:border-accent/50 transition-all relative z-10"
              >
                <div>
                  <CardHeader className="pb-3 flex-row items-center justify-between space-y-0">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-md bg-surface-100 dark:bg-surface-800 flex items-center justify-center border border-surface-200 dark:border-surface-700">
                        {STAGE_ICONS[stage.step] || <Cpu className="w-5 h-5 text-accent" />}
                      </div>
                      <span className="font-mono text-xs font-bold text-content-tertiary">
                        STAGE {stage.step}
                      </span>
                    </div>
                    <Badge variant="accent" className="font-mono text-[10px]">
                      {index < 4 ? 'DISCOVERY & ARCH' : 'EXECUTION & SCALE'}
                    </Badge>
                  </CardHeader>

                  <CardContent className="pt-2 space-y-3">
                    <CardTitle className="text-lg font-bold text-content-primary">
                      {stage.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-content-secondary">
                      {stage.description}
                    </CardDescription>

                    {/* Stage Deliverables */}
                    <div className="pt-3 border-t border-surface-100 dark:border-surface-800/60 space-y-1.5">
                      <span className="font-mono text-[10px] font-semibold text-content-tertiary uppercase">
                        Key Deliverables & Verification:
                      </span>
                      <ul className="space-y-1">
                        {stage.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-xs font-sans text-content-secondary"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <div className="px-6 pb-4 pt-3 flex items-center justify-between text-[11px] font-mono text-content-tertiary border-t border-surface-100 dark:border-surface-800/40 mt-3">
                  <span>METHODOLOGY CHECKPOINT</span>
                  <span className="text-accent font-semibold">VERIFIED</span>
                </div>
              </Card>

              {/* Connecting Arrow Between Stages (Horizontal on Desktop, Vertical on Mobile) */}
              {!isFinalStage && (
                <>
                  {/* Desktop Horizontal Arrow (Hidden on 4th step where it wraps to row 2) */}
                  {!isLastInRow && (
                    <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-background dark:bg-surface-900 border border-surface-200 dark:border-surface-700 text-accent shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}

                  {/* Mobile & Tablet Vertical Arrow between stacked rows */}
                  <div className="flex lg:hidden items-center justify-center py-3 text-accent">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 font-mono text-[10px]">
                      <span>NEXT STAGE</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
