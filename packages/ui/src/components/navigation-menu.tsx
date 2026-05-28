'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@sarkimota/utils';
import { Menu } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface NavigationMenuProps {
  items: NavItem[];
  variant?: 'light' | 'dark';
  className?: string;
}

export function NavigationMenu({ items, variant = 'light', className }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cn('relative', className)}>
      <div className="hidden lg:flex items-center gap-1">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md',
              variant === 'light'
                ? 'text-sarkimota-black/70 hover:text-sarkimota-black hover:bg-black/5'
                : 'text-white/70 hover:text-white hover:bg-white/10',
            )}
          >
            {item.label}
          </a>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2"
        aria-label="Toggle menu"
      >
        <Menu
          className={cn(
            'h-6 w-6',
            variant === 'light' ? 'text-sarkimota-black' : 'text-white',
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-background shadow-lg p-4 lg:hidden"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-sarkimota-black/70 hover:text-sarkimota-black rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
