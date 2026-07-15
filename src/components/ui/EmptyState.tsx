import { forwardRef } from 'react';
import type { EmptyStateProps } from '../../types/design';
import { cn } from '../../lib/utils';
import { Button } from './Button';
import { Terminal } from 'lucide-react';

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, actionLabel, onAction, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center text-center p-12 sm:p-16 rounded-lg border border-dashed border-surface-300 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-900/30 max-w-2xl mx-auto my-8',
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-100 dark:bg-surface-800 text-content-secondary mb-4 border border-surface-200 dark:border-surface-700">
          {icon || <Terminal className="w-6 h-6 text-accent" />}
        </div>
        <h3 className="font-sans font-semibold text-lg sm:text-xl text-content-primary tracking-tight mb-2">
          {title}
        </h3>
        <p className="font-sans text-sm sm:text-base text-content-secondary max-w-md leading-relaxed mb-6">
          {description}
        </p>
        {actionLabel && onAction && (
          <Button variant="outline" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    );
  }
);
EmptyState.displayName = 'EmptyState';
