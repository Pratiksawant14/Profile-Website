import React, { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import type { CardVariant } from '../../types/design';
import { cn } from '../../lib/utils';
import { hoverCardVariants } from '../../lib/motion';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> {
  children?: React.ReactNode;
  variant?: CardVariant;
  hoverEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverEffect = false, children, ...props }, ref) => {
    const baseStyles =
      'rounded-md bg-background transition-all duration-normal text-content-primary overflow-hidden';

    const variants: Record<CardVariant, string> = {
      default: 'border border-surface-200 dark:border-surface-800 shadow-card',
      interactive:
        'border border-surface-200 dark:border-surface-800 shadow-card cursor-pointer hover:border-surface-300 dark:hover:border-surface-700 hover:shadow-card-hover',
      bordered: 'border border-surface-200 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-900/40',
      elevated: 'border border-surface-200/80 dark:border-surface-800/80 shadow-md hover:shadow-lg',
    };

    const isInteractive = variant === 'interactive' || hoverEffect;

    return (
      <motion.div
        ref={ref}
        variants={isInteractive ? hoverCardVariants : undefined}
        initial={isInteractive ? 'initial' : undefined}
        whileHover={isInteractive ? 'hover' : undefined}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6 pb-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-sans font-semibold text-lg leading-none tracking-tight text-content-primary', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('font-sans text-sm text-content-secondary leading-relaxed pt-1', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0 border-t border-surface-100 dark:border-surface-800/60 mt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
