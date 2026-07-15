import React, { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ButtonVariant, ButtonSize } from '../../types/design';
import { cn } from '../../lib/utils';
import { buttonTapTransition } from '../../lib/motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref' | 'children'> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-medium rounded transition-all duration-fast select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-accent text-white hover:bg-accent-hover shadow-xs border border-transparent',
      secondary:
        'bg-surface-800 text-white dark:bg-surface-200 dark:text-surface-900 hover:bg-surface-700 dark:hover:bg-surface-300 border border-transparent shadow-xs',
      outline:
        'bg-transparent border border-surface-200 dark:border-surface-800 text-content-primary hover:bg-surface-100 dark:hover:bg-surface-800/60 hover:border-surface-300 dark:hover:border-surface-700',
      ghost:
        'bg-transparent text-content-secondary hover:text-content-primary hover:bg-surface-100 dark:hover:bg-surface-800/60 border border-transparent',
      danger:
        'bg-status-error text-white hover:bg-red-600 shadow-xs border border-transparent',
    };

    const sizes: Record<ButtonSize, string> = {
      sm: 'text-xs h-8 px-3 gap-1.5',
      md: 'text-sm h-9 px-4 gap-2',
      lg: 'text-base h-11 px-5 gap-2.5',
    };

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        {...buttonTapTransition}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span className="truncate">{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
