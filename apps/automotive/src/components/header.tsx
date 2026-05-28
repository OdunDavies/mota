'use client';

import { useState, useEffect } from 'react';
import { cn } from '@sarkimota/utils';
import { Container, NavigationMenu, Button } from '@sarkimota/ui';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'Financing', href: '/financing' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-border/50 shadow-sm' : 'bg-transparent',
    )}>
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-400">
              <span className="text-sarkimota-black font-bold text-sm">SA</span>
            </div>
            <div className="hidden sm:block">
              <p className={cn('text-sm font-semibold tracking-wide', scrolled ? 'text-sarkimota-black' : 'text-white')}>
                SARKIMOTA
              </p>
              <p className={cn('text-[10px] tracking-widest uppercase', scrolled ? 'text-sarkimota-black/50' : 'text-white/50')}>
                Automotive
              </p>
            </div>
          </Link>

          <NavigationMenu items={navItems} variant={scrolled ? 'light' : 'dark'} />

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+2348007275468" className={cn(
              'text-sm font-medium transition-colors',
              scrolled ? 'text-sarkimota-black' : 'text-white/80 hover:text-white',
            )}>
              +234 800 SARKI AUTO
            </a>
            <Link href="/inventory">
              <Button variant="gold" size="sm">Browse Inventory</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
