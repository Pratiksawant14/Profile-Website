import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';
import { fadeUpItemVariants } from '../../lib/motion';
import { BrainCircuit, CheckCircle2 } from 'lucide-react';

export const LearningPhilosophyCallout: React.FC = () => {
  return (
    <motion.div
      variants={fadeUpItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="w-full rounded-xl bg-surface-950 text-white border border-surface-800 p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden my-8"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-surface-800 relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent">
          <BrainCircuit className="w-4 h-4" />
          <span>PEDAGOGICAL & ARCHITECTURAL RIGOR</span>
        </div>
        <Badge variant="accent" showDot className="font-mono text-xs">
          PROBLEM-FIRST PHILOSOPHY
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="md:col-span-1 space-y-2">
          <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            How I Learn Technology
          </h3>
          <p className="font-mono text-xs text-surface-400 leading-relaxed">
            SYSTEMIC INTEGRATION & CONTINUOUS EVOLUTION
          </p>
        </div>

        <div className="md:col-span-2 space-y-4">
          <p className="font-sans text-base sm:text-lg md:text-xl text-surface-100 font-medium leading-relaxed">
            "I don't learn frameworks in isolation. I learn technologies by solving real business problems and integrating them into production architectures."
          </p>
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-surface-300">
            <div className="p-3 rounded bg-surface-900 border border-surface-800 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>Every technology must prove its worth against real operational latency, memory boundaries, or concurrency bottlenecks.</span>
            </div>
            <div className="p-3 rounded bg-surface-900 border border-surface-800 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>Evaluating tools through end-to-end ecosystem integration prevents technical debt and over-engineering.</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
