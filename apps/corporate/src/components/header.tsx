'use client';

import { useState, useEffect } from 'react';
import { cn } from '@sarkimota/utils';
import { Container } from '@sarkimota/ui';
import { NavigationMenu } from '@sarkimota/ui';
import { Icons } from '@sarkimota/ui';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Subsidiaries', href: '/subsidiaries' },
  { label: 'Media', href: '/media' },
  { label: 'Careers', href: '/careers' },
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent',
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-400">
              <span className="text-sarkimota-black font-display font-bold text-sm">S</span>
            </div>
            <div className="hidden sm:block">
              <p className={cn(
                'text-sm font-semibold tracking-wide',
                scrolled ? 'text-sarkimota-black' : 'text-white',
              )}>
                SARKIMOTA
              </p>
              <p className={cn(
                'text-[10px] tracking-widest uppercase',
                scrolled ? 'text-sarkimota-black/50' : 'text-white/50',
              )}>
                Group of Companies
              </p>
            </div>
          </Link>

          <NavigationMenu
            items={navItems}
            variant={scrolled ? 'light' : 'dark'}
          />

          <Link
            href="/contact"
            className="hidden lg:inline-flex h-10 items-center rounded-md bg-gold-400 px-5 text-sm font-medium text-sarkimota-black transition-all hover:bg-gold-500"
          >
            Get in Touch
          </Link>
        </div>
      </Container>
    </header>
  );
}
