'use client';

import { motion } from 'framer-motion';
import { Container, Button, AnimatedText } from '@sarkimota/ui';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-sarkimota-black">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.15) 0%, transparent 70%)',
        }}
      />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <AnimatedText text="Ready to Experience Excellence?" as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight" />
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re seeking the perfect vehicle or a space that inspires,
            we&apos;re here to exceed your expectations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/subsidiaries">
              <Button variant="dark" size="lg">
                Explore Subsidiaries
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
