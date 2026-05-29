'use client';

import { motion } from 'framer-motion';
import { Container, Section, Badge, AnimatedText } from '@sarkimota/ui';

const iconMap: Record<string, string> = {
  'vehicle-sales': '🚗', 'vehicle-financing': '💰', 'aftermarket-services': '🔧',
  'vehicle-certification': '✓', 'vehicle-customization': '✨', 'insurance-solutions': '🛡️',
  'maintenance': '🔧', 'parts': '⚙️',
};

export function ServicesSection({ services = [] }: { services: Array<{ slug: string; name: string; description: string | null }> }) {
  return (
    <Section variant="muted">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <Badge variant="gold" className="mb-4">Our Services</Badge>
          <AnimatedText text="The Full Experience" as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight" />
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Beyond the sale. Every step of your ownership journey.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-4 block">{iconMap[s.slug] ?? '⭐'}</span>
              <h3 className="text-lg font-semibold mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
