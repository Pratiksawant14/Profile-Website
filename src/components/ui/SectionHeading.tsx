import { forwardRef } from 'react';
import type { SectionHeadingProps } from '../../types/design';
import { cn } from '../../lib/utils';
import { Badge } from './Badge';

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ eyebrow, title, description, action, align = 'left', className, ...props }, ref) => {
    const isCenter = align === 'center';

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-3 pb-8 md:pb-12 border-b border-surface-200/60 dark:border-surface-800/60 mb-8 md:mb-12',
          isCenter ? 'items-center text-center' : 'items-start text-left',
          className
        )}
        {...props}
      >
        <div className={cn('flex items-center justify-between w-full gap-4 flex-wrap', isCenter ? 'justify-center' : '')}>
          <div className="flex flex-col gap-2 max-w-3xl">
            {eyebrow && (
              <div className={cn('flex', isCenter ? 'justify-center' : 'justify-start')}>
                <Badge variant="accent" showDot>
                  {eyebrow}
                </Badge>
              </div>
            )}
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-content-primary leading-tight">
              {title}
            </h2>
            {description && (
              <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed pt-1">
                {description}
              </p>
            )}
          </div>
          {action && <div className="shrink-0 mt-2 sm:mt-0">{action}</div>}
        </div>
      </div>
    );
  }
);
SectionHeading.displayName = 'SectionHeading';
