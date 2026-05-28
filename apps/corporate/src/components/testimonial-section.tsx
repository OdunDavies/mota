'use client';

import { motion } from 'framer-motion';
import { Container, Section, Badge } from '@sarkimota/ui';

export function TestimonialSection({ testimonials = [] }: { testimonials: Array<{ id: string; client_name: string; client_title: string | null; content: string }> }) {
  return (
    <Section variant="gold">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Trusted by Discerning Clients
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/50 border border-gold-400/20"
            >
              <svg className="w-8 h-8 text-gold-400/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-base leading-relaxed mb-6">{t.content}</p>
              <footer>
                <strong className="font-semibold text-sm">{t.client_name}</strong>
                <span className="block text-xs text-muted-foreground mt-1">{t.client_title}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}
