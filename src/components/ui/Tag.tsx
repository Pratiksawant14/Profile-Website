import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  onClick?: () => void;
  active?: boolean;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, onClick, active = false, children, ...props }, ref) => {
    const isClickable = Boolean(onClick);

    return (
      <span
        ref={ref}
        onClick={onClick}
        className={cn(
          'inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-normal transition-all duration-fast select-none',
          isClickable ? 'cursor-pointer' : '',
          active
            ? 'bg-accent text-black font-medium border border-accent'
            : 'bg-surface-100 text-content-secondary dark:bg-surface-800/80 dark:text-content-secondary border border-surface-200/80 dark:border-surface-700/80 hover:border-surface-300 dark:hover:border-surface-600 hover:text-content-primary',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Tag.displayName = 'Tag';
