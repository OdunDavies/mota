'use client';

import { motion } from 'framer-motion';
import { Container, Section, Badge } from '@sarkimota/ui';

const milestones = [
  { year: '2010', title: 'Founded', description: 'SarkiMota Group established in Lagos, Nigeria with a vision to redefine premium experiences.' },
  { year: '2013', title: 'Automotive Launch', description: 'Automotive division launched, bringing luxury vehicles to discerning Nigerian clients.' },
  { year: '2016', title: 'Interiors Expansion', description: 'Interior design subsidiary formed, extending our commitment to quality into living spaces.' },
  { year: '2019', title: 'International Partnerships', description: 'Strategic global partnerships established with leading automotive and design brands.' },
  { year: '2022', title: 'Digital Transformation', description: 'Enterprise-wide digital transformation, setting new standards for customer experience.' },
  { year: '2024', title: 'Continued Growth', description: 'Expanding operations across West Africa with renewed commitment to excellence.' },
];

export function TimelineSection() {
  return (
    <Section variant="muted" decorative>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-4">Our Journey</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            A Legacy in the Making
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From vision to reality — the milestones that shaped our story.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400 via-gold-400/50 to-transparent" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                  <span className="text-5xl font-display font-bold text-gold-400/30">{milestone.year}</span>
                </div>

                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold-400 -translate-x-1/2 mt-2 border-2 border-background z-10" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <span className="text-sm text-gold-500 font-medium md:hidden">{milestone.year}</span>
                  <h3 className="text-xl font-display font-bold mt-1">{milestone.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
