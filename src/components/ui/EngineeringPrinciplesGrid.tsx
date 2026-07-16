import React from 'react';
import { motion } from 'framer-motion';
import type { EngineeringPrinciple } from '../../constants';
import { ENGINEERING_PRINCIPLES } from '../../constants';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card';
import { Badge } from './Badge';
import { staggerContainerVariants, fadeUpItemVariants } from '../../lib/motion';
import { ShieldCheck } from 'lucide-react';

export const EngineeringPrinciplesGrid: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 my-8 text-left"
    >
      {ENGINEERING_PRINCIPLES.map((principle: EngineeringPrinciple) => (
        <motion.div key={principle.id} variants={fadeUpItemVariants} className="h-full w-full">
          <Card
            variant="interactive"
            className="h-full flex flex-col justify-between p-2 bg-background dark:bg-surface-900/30 border border-surface-200 dark:border-surface-800 hover:border-accent/40 transition-all text-left"
          >
            <div>
              <CardHeader className="pb-3 flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="font-mono text-[10px] font-bold text-content-tertiary">
                    CORE TENET
                  </span>
                </div>
                <Badge variant="neutral" className="font-mono text-[9px] uppercase tracking-wider">
                  {principle.tag}
                </Badge>
              </CardHeader>
              <CardContent className="pt-2">
                <CardTitle className="text-base sm:text-lg font-bold text-content-primary mb-2">
                  {principle.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed text-content-secondary">
                  {principle.philosophy}
                </CardDescription>
              </CardContent>
            </div>
            <div className="px-6 pb-3 pt-2 text-[10px] font-mono text-content-tertiary border-t border-surface-100 dark:border-surface-800/40">
              PHILOSOPHY RIGOR: ENFORCED
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
