import React, { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { sectionRevealVariants } from '../lib/motion';
import { cn } from '../lib/utils';

export interface SectionContainerProps extends Omit<HTMLMotionProps<'section'>, 'ref' | 'children'> {
  children?: React.ReactNode;
  variant?: 'transparent' | 'surface' | 'grid' | 'bordered';
  container?: boolean;
}

export const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ className, variant = 'transparent', container = true, children, ...props }, ref) => {
    const variantStyles = {
      transparent: 'bg-transparent',
      surface: 'bg-surface-50 dark:bg-surface-900/40 border-y border-surface-200/80 dark:border-surface-800/80',
      grid: 'bg-grid-pattern border-y border-surface-200/80 dark:border-surface-800/80',
      bordered: 'border border-surface-200 dark:border-surface-800 rounded-lg p-6 md:p-10 bg-background',
    };

    return (
      <motion.section
        ref={ref}
        variants={sectionRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={cn('w-full py-12 sm:py-16 md:py-24 transition-colors', variantStyles[variant], className)}
        {...props}
      >
        {container ? (
          <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full">{children}</div>
        ) : (
          children
        )}
      </motion.section>
    );
  }
);
SectionContainer.displayName = 'SectionContainer';
