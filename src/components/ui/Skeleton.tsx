import React, { forwardRef } from 'react';
import type { SkeletonProps } from '../../types/design';
import { cn } from '../../lib/utils';

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'rect', width, height, ...props }, ref) => {
    const variantStyles = {
      rect: 'rounded',
      circle: 'rounded-full',
      text: 'rounded h-4 w-3/4 my-1',
    };

    return (
      <div
        ref={ref}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
        }}
        className={cn(
          'bg-surface-200 dark:bg-surface-800 relative overflow-hidden',
          variantStyles[variant],
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-surface-100/40 dark:via-surface-700/40 to-transparent animate-shimmer" />
      </div>
    );
  }
);
Skeleton.displayName = 'Skeleton';

export const CardSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('p-6 rounded-md border border-surface-200 dark:border-surface-800 bg-background space-y-4', className)}>
    <Skeleton height={20} width="40%" />
    <Skeleton height={14} width="90%" />
    <Skeleton height={14} width="75%" />
    <div className="pt-4 flex gap-2">
      <Skeleton height={24} width={60} />
      <Skeleton height={24} width={80} />
    </div>
  </div>
);

export const SectionSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('space-y-8 py-12', className)}>
    <div className="space-y-2">
      <Skeleton height={16} width={120} />
      <Skeleton height={32} width="50%" />
      <Skeleton height={18} width="70%" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  </div>
);

export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ lines = 3, className }) => (
  <div className={cn('space-y-2 w-full', className)}>
    {Array.from({ length: lines }).map((_, idx) => (
      <Skeleton
        key={idx}
        variant="text"
        width={idx === lines - 1 ? '60%' : '100%'}
      />
    ))}
  </div>
);
