import type { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'muted' | 'primary' | 'secondary';
  narrow?: boolean;
  id?: string;
}

const bgStyles = {
  white: 'bg-white',
  muted: 'bg-muted',
  primary: 'bg-primary-light',
  secondary: 'bg-secondary-light',
};

export default function Section({ children, className = '', background = 'white', narrow = false, id }: SectionProps) {
  return (
    <section id={id} className={`py-[var(--section-spacing)] ${bgStyles[background]} ${className}`}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
