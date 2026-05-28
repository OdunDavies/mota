import { cn } from '@sarkimota/utils';
import { Container } from './container';

interface PageHeaderProps {
  title: string;
  description?: string;
  variant?: 'default' | 'dark' | 'gold';
  className?: string;
}

export function PageHeader({
  title,
  description,
  variant = 'default',
  className,
}: PageHeaderProps) {
  const variantClasses = {
    default: 'bg-secondary/30',
    dark: 'bg-sarkimota-black text-white',
    gold: 'bg-gold-400/5',
  };

  return (
    <div className={cn('py-20 sm:py-28 lg:py-36', variantClasses[variant], className)}>
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className={cn(
              'mt-6 text-lg leading-relaxed max-w-2xl',
              variant === 'dark' ? 'text-white/70' : 'text-muted-foreground',
            )}>
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
