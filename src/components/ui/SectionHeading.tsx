import { forwardRef } from 'react';
import type { SectionHeadingProps } from '../../types/design';
import { cn } from '../../lib/utils';
import { Badge } from './Badge';

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ eyebrow, title, description, action, align: _align = 'left', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-start text-left gap-3 pb-8 md:pb-12 border-b border-surface-200/60 dark:border-surface-800/60 mb-8 md:mb-12 w-full',
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between w-full gap-4 flex-wrap text-left">
          <div className="flex flex-col items-start text-left gap-2 max-w-4xl">
            {eyebrow && (
              <div className="flex justify-start items-start text-left">
                <Badge variant="accent" showDot>
                  {eyebrow}
                </Badge>
              </div>
            )}
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-content-primary leading-tight text-left">
              {title}
            </h2>
            {description && (
              <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed pt-1 text-left">
                {description}
              </p>
            )}
          </div>
          {action && <div className="shrink-0 mt-2 sm:mt-0 self-start">{action}</div>}
        </div>
      </div>
    );
  }
);
SectionHeading.displayName = 'SectionHeading';
