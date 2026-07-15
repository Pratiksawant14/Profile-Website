import React from 'react';
import { motion } from 'framer-motion';
import type { MiniatureWorkflowNode } from '../../constants';
import { PAIN_AWAY_WORKFLOW_STEPS } from '../../constants';
import { Badge } from './Badge';
import { staggerContainerVariants, fadeUpItemVariants } from '../../lib/motion';
import { ArrowRight, ArrowDown, Activity } from 'lucide-react';

export const PainAwayWorkflowExample: React.FC = () => {
  return (
    <div className="w-full my-8 p-6 sm:p-8 md:p-10 rounded-xl bg-surface-900 text-white dark:bg-surface-950 border border-surface-800 shadow-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-surface-800 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-accent font-bold">
            <Activity className="w-4 h-4" />
            <span>REAL WORKFLOW EXECUTION EXAMPLE</span>
          </div>
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
            PAIN AWAY — Digital Healthcare Platform
          </h3>
        </div>
        <Badge variant="accent" showDot className="font-mono text-xs py-1 px-3">
          CONSULTING CASE STUDY IN ACTION
        </Badge>
      </div>

      {/* Miniature 8-node Execution Flow Grid */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10"
      >
        {PAIN_AWAY_WORKFLOW_STEPS.map((node: MiniatureWorkflowNode, index: number) => {
          const isLastInRow = (index + 1) % 4 === 0;
          const isFinalNode = index === PAIN_AWAY_WORKFLOW_STEPS.length - 1;

          return (
            <motion.div key={node.step} variants={fadeUpItemVariants} className="flex flex-col relative">
              <div className="h-full p-4 rounded-lg bg-surface-800/80 border border-surface-700/80 flex flex-col justify-between space-y-3 relative z-10 hover:border-accent/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-accent font-bold">STEP {node.step}</span>
                  <span className="text-surface-400 text-[10px]">VERIFIED</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-surface-100">
                    {node.title}
                  </h4>
                  <p className="font-sans text-xs text-surface-300 leading-relaxed">
                    {node.deliverable}
                  </p>
                </div>
              </div>

              {/* Connector Arrows */}
              {!isFinalNode && (
                <>
                  {!isLastInRow && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 items-center justify-center text-accent">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                  <div className="flex lg:hidden items-center justify-center py-1.5 text-accent">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <div className="text-xs font-mono text-surface-400 text-center sm:text-right pt-6 mt-6 border-t border-surface-800 relative z-10">
        RESULT: ZERO-DOWNTIME CLINIC DEPLOYMENT WITH SUB-10MS TRIAGE LATENCY
      </div>
    </div>
  );
};
