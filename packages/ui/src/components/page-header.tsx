'use client';

import { cn } from '@sarkimota/utils';
import { motion } from 'framer-motion';
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              className={cn(
                'mt-6 text-lg leading-relaxed max-w-2xl',
                variant === 'dark' ? 'text-white/70' : 'text-muted-foreground',
              )}
            >
              {description}
            </motion.p>
          )}
        </div>
      </Container>
    </div>
  );
}
