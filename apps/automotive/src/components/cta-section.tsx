'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@sarkimota/ui';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-sarkimota-black">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.15) 0%, transparent 70%)' }} />
      <Container className="relative text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">Ready to Drive Excellence?</h2>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">Schedule a viewing or consultation with our team today.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"><Button variant="gold" size="lg">Contact Sales</Button></Link>
            <Link href="/inventory"><Button variant="dark" size="lg">Browse Inventory</Button></Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
