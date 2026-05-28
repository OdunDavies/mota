import * as React from 'react';
import { cn } from '@sarkimota/utils';
import { Container } from './container';

type SectionVariant = 'default' | 'muted' | 'dark' | 'gold';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  variant?: SectionVariant;
  decorative?: boolean;
}

const variantClasses: Record<SectionVariant, string> = {
  default: 'bg-background',
  muted: 'bg-secondary/50',
  dark: 'bg-sarkimota-black text-white',
  gold: 'bg-gold-400/5',
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerSize = 'lg', variant = 'default', decorative, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('relative py-16 sm:py-20 lg:py-28', variantClasses[variant], className)}
      {...props}
    >
      {decorative && <div className="absolute inset-0 bg-grid pointer-events-none" />}
      <Container size={containerSize}>{children}</Container>
    </section>
  ),
);
Section.displayName = 'Section';

export { Section };
