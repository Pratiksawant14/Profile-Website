import React, { forwardRef } from 'react';
import type { BadgeVariant } from '../../types/design';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  showDot?: boolean;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', showDot = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center gap-1.5 rounded-xs px-2 py-0.5 text-xs font-mono font-medium transition-colors select-none';

    const variants: Record<BadgeVariant, string> = {
      default:
        'bg-surface-100 text-content-primary dark:bg-surface-800 dark:text-content-primary border border-surface-200 dark:border-surface-700',
      accent:
        'bg-accent-subtle text-accent dark:text-accent-400 border border-accent/20 dark:border-accent/30',
      success:
        'bg-status-success/10 text-status-success border border-status-success/20',
      warning:
        'bg-status-warning/10 text-status-warning border border-status-warning/20',
      neutral:
        'bg-surface-200/50 text-content-secondary dark:bg-surface-800/60 dark:text-content-secondary border border-transparent',
    };

    const dotColors: Record<BadgeVariant, string> = {
      default: 'bg-content-secondary',
      accent: 'bg-accent',
      success: 'bg-status-success animate-pulse',
      warning: 'bg-status-warning',
      neutral: 'bg-content-tertiary',
    };

    return (
      <div ref={ref} className={cn(baseStyles, variants[variant], className)} {...props}>
        {showDot && (
          <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', dotColors[variant])} />
        )}
        <span>{children}</span>
      </div>
    );
  }
);
Badge.displayName = 'Badge';
