'use client';

import { motion } from 'framer-motion';
import { Container, Section, Badge, AnimatedText } from '@sarkimota/ui';

export function TestimonialSection({ testimonials = [] }: { testimonials: Array<{ id: string; client_name: string; client_title: string | null; content: string }> }) {
  return (
    <Section variant="gold">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <Badge variant="gold" className="mb-4">Testimonials</Badge>
          <AnimatedText text="What Our Clients Say" as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/50 border border-gold-400/20"
            >
              <p className="text-base leading-relaxed mb-6 italic">"{t.content}"</p>
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
