'use client';

import { motion } from 'framer-motion';
import { Container } from '@sarkimota/ui';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '500+', label: 'Vehicles Delivered' },
  { value: '200+', label: 'Interior Projects' },
  { value: '99%', label: 'Client Satisfaction' },
];

export function StatsSection() {
  return (
    <section className="relative py-20 bg-sarkimota-black border-y border-white/5">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-display font-bold gold-gradient">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/50 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
