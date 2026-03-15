import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-[var(--container-padding)] ${
        narrow ? 'max-w-4xl' : 'max-w-7xl'
      } ${className}`}
    >
      {children}
    </div>
  );
}
