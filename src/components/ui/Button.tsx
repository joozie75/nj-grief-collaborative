'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: 'button' | 'a';
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 focus:ring-teal-400/50 shadow-md hover:shadow-lg',
  secondary: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 focus:ring-purple-400/50 shadow-md hover:shadow-lg',
  outline: 'border-2 border-teal-400 text-teal-600 hover:bg-teal-50 focus:ring-teal-400/50',
  ghost: 'text-teal-600 hover:bg-teal-50 focus:ring-teal-400/50',
  accent: 'bg-gradient-to-r from-warm-500 to-warm-600 text-white hover:from-warm-600 hover:to-warm-700 focus:ring-warm-400/50 shadow-md hover:shadow-lg',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, as, href, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (as === 'a' && href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
