import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary border border-primary/20',
        secondary: 'bg-secondary text-secondary-foreground',
        destructive: 'bg-destructive/10 text-destructive border border-destructive/20',
        outline: 'text-foreground border border-border',
        success: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
        gold: 'bg-gold-400/10 text-gold-500 border border-gold-400/20',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children: ReactNode;
}

function Badge({ className, variant, children }: BadgeProps) {
  return <div className={badgeVariants({ variant, className })}>{children}</div>;
}

export { Badge, badgeVariants };
