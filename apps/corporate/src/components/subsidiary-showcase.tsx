'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button, Badge } from '@sarkimota/ui';
import Link from 'next/link';

const subsidiaries = [
  {
    name: 'SarkiMota Automotive',
    tagline: 'Luxury Redefined on Every Road',
    description: 'Premium automotive sales, financing, and aftermarket services. We bring the world\'s finest automotive brands to Nigeria with an uncompromising commitment to quality and service.',
    href: 'https://automotive.sarkimota.com',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
    features: ['Luxury Vehicle Sales', 'Financing Solutions', 'Aftermarket Services', 'Certified Pre-Owned'],
  },
  {
    name: 'SarkiMota Interiors',
    tagline: 'Where Space Becomes Statement',
    description: 'Premium interior design, fit-out, and lifestyle solutions. We transform spaces into expressions of luxury, comfort, and sophisticated living.',
    href: 'https://interiors.sarkimota.com',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop',
    features: ['Residential Design', 'Commercial Interiors', 'Consultation Services', 'Project Management'],
  },
];

export function SubsidiaryShowcase() {
  return (
    <Section variant="default">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-4">Our Companies</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Excellence Across Industries
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Two distinctly premium subsidiaries, united by a single standard of excellence.
          </p>
        </motion.div>

        <div className="space-y-24">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i === 1 ? 'lg:direction-rtl' : ''}`}
            >
              <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${i === 1 ? 'lg:order-2' : ''}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${sub.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className={i === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gold-400 rounded-full" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold-500 font-medium">
                      Subsidiary
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold">{sub.name}</h3>
                  </div>
                </div>

                <p className="text-lg text-gold-500 font-medium italic mb-4">
                  {sub.tagline}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {sub.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {sub.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={sub.href}>
                  <Button variant="gold">Explore {sub.name.split(' ')[1]}</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
