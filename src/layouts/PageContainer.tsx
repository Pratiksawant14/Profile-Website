import React, { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { pageTransitionVariants } from '../lib/motion';
import { cn } from '../lib/utils';

export interface PageContainerProps extends Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> {
  children?: React.ReactNode;
  maxWidth?: 'container' | 'full' | '4xl' | '6xl';
  withGridPattern?: boolean;
}

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, maxWidth = 'container', withGridPattern = false, children, ...props }, ref) => {
    const maxWidthMap = {
      container: 'max-w-container',
      full: 'max-w-full',
      '4xl': 'max-w-4xl',
      '6xl': 'max-w-6xl',
    };

    return (
      <motion.div
        ref={ref}
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={cn(
          'w-full min-h-[calc(100vh-4rem)] flex flex-col relative',
          withGridPattern ? 'bg-grid-pattern' : '',
          className
        )}
        {...props}
      >
        <div className={cn('w-full mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 flex-1 flex flex-col', maxWidthMap[maxWidth])}>
          {children}
        </div>
      </motion.div>
    );
  }
);
PageContainer.displayName = 'PageContainer';
