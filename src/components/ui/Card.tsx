import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      data-card
      className={`rounded-2xl p-6 shadow-sm transition-all duration-300 ${
        hover ? 'hover:shadow-lg hover:-translate-y-0.5' : ''
      } ${className}`}
      style={{
        backgroundColor: 'var(--color-background)',
        borderWidth: '1px',
        borderColor: 'var(--color-border)',
      }}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mt-4 pt-4 border-t border-border ${className}`}>{children}</div>;
}
