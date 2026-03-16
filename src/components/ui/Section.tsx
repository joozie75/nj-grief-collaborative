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
  white: '',
  muted: '',
  primary: 'bg-teal-50',
  secondary: 'bg-purple-50',
};

export default function Section({ children, className = '', background = 'white', narrow = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[var(--section-spacing)] transition-colors duration-300 ${bgStyles[background]} ${className}`}
      style={background === 'white' ? { backgroundColor: 'var(--color-background)' } : background === 'muted' ? { backgroundColor: 'var(--color-muted)' } : undefined}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div className={`inline-flex items-center gap-3 mb-3 ${centered ? 'justify-center w-full' : ''}`}>
        <span className="w-8 h-1 rounded-full bg-gradient-to-r from-teal-400 to-green-400" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-purple-400" aria-hidden="true" />
        <span className="w-8 h-1 rounded-full bg-gradient-to-r from-warm-400 to-gold-400" aria-hidden="true" />
      </div>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
