import React from 'react';
import { motion } from 'framer-motion';
import type { DecisionComparison } from '../../constants';
import { ENGINEERING_DECISIONS } from '../../constants';
import { staggerContainerVariants, fadeUpItemVariants } from '../../lib/motion';
import { CheckCircle2, ArrowRight, XCircle } from 'lucide-react';

export const DecisionComparisons: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8"
    >
      {ENGINEERING_DECISIONS.map((decision: DecisionComparison) => (
        <motion.div
          key={decision.id}
          variants={fadeUpItemVariants}
          className="flex flex-col justify-between p-6 rounded-lg bg-background dark:bg-surface-900/30 border border-surface-200 dark:border-surface-800 hover:border-accent/40 transition-all space-y-4"
        >
          {/* Top Comparison Trade-off Header */}
          <div className="flex flex-col space-y-2 pb-4 border-b border-surface-200/60 dark:border-surface-800/60">
            {/* Prioritized Side */}
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-status-success shrink-0" />
              <span className="font-sans font-bold text-base sm:text-lg text-content-primary">
                {decision.prioritized}
              </span>
            </div>

            {/* Subordinated Side */}
            <div className="flex items-center gap-2 pl-6">
              <span className="font-mono text-[10px] text-content-tertiary font-bold uppercase tracking-wider bg-surface-100 dark:bg-surface-800 px-1.5 py-0.5 rounded">
                OVER
              </span>
              <XCircle className="w-3.5 h-3.5 text-content-tertiary shrink-0" />
              <span className="font-sans text-sm text-content-tertiary line-through decoration-content-tertiary/60">
                {decision.subordinated}
              </span>
            </div>
          </div>

          {/* Rationale & Consulting Justification */}
          <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed flex-1">
            {decision.rationale}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-surface-100 dark:border-surface-800/40 font-mono text-[10px] text-accent font-semibold">
            <span>ARCHITECTURAL TRADE-OFF</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
