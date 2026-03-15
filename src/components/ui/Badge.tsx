import type { ReactNode } from 'react';

type BadgeVariant = 'teal' | 'purple' | 'gold' | 'warm' | 'gray';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  teal: 'bg-teal-100 text-teal-800',
  purple: 'bg-purple-100 text-purple-800',
  gold: 'bg-gold-100 text-gold-800',
  warm: 'bg-warm-100 text-warm-800',
  gray: 'bg-gray-100 text-gray-800',
};

export default function Badge({ children, variant = 'teal', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
