'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@sarkimota/ui';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sarkimota-black">
      <div className="absolute inset-0 bg-gradient-to-b from-sarkimota-black via-sarkimota-black/85 to-sarkimota-black/75 z-10" />
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop)' }} />
      <div className="absolute inset-0 bg-grid z-20" />
      <Container className="relative z-30 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-medium text-gold-400 mb-8">Premium Interior Design</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] tracking-tight">
          Where Space<br /><span className="gold-gradient">Becomes Statement</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Transforming spaces into expressions of luxury, comfort, and sophisticated living across Nigeria.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/portfolio"><Button variant="gold" size="lg">View Our Portfolio</Button></Link>
          <Link href="/consultation"><Button variant="dark" size="lg">Book a Consultation</Button></Link>
        </motion.div>
      </Container>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
