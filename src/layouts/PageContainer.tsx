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
      container: 'w-full max-w-none',
      full: 'w-full max-w-none',
      '4xl': 'w-full max-w-4xl',
      '6xl': 'w-full max-w-6xl',
    };

    return (
      <motion.div
        ref={ref}
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={cn(
          'w-full min-h-[calc(100vh-4rem)] flex flex-col relative text-left',
          withGridPattern ? 'bg-grid-pattern' : '',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'w-full max-w-none flex-1 flex flex-col text-left',
            className?.includes('!p-0') ? 'p-0 py-0 px-0' : 'px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12',
            maxWidthMap[maxWidth]
          )}
        >
          {children}
        </div>
      </motion.div>
    );
  }
);
PageContainer.displayName = 'PageContainer';
