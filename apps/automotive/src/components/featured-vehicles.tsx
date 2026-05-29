'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button, Badge, AnimatedText } from '@sarkimota/ui';
import Link from 'next/link';

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
}

export function FeaturedVehicles({ vehicles = [] }: { vehicles: Array<{ slug: string; make: string; model: string; year: number; price: number; condition: string; status: string; vehicle_images?: Array<{ url: string; is_primary: boolean | null }> }> }) {
  return (
    <Section>
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div>
            <Badge variant="gold" className="mb-4">Featured Inventory</Badge>
            <AnimatedText text="Exceptional Vehicles" as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight" />
            <p className="mt-2 text-muted-foreground">Hand-selected for the discerning driver.</p>
          </div>
          <Link href="/inventory">
            <Button variant="outline" className="mt-4 sm:mt-0">View All Inventory</Button>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((v, i) => {
            const image = v.vehicle_images?.find(img => img.is_primary)?.url ?? v.vehicle_images?.[0]?.url ?? 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop';
            const status = v.status.charAt(0).toUpperCase() + v.status.slice(1);
            return (
              <Link key={v.slug} href={`/inventory/${v.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  className="group rounded-2xl border border-border/50 bg-card overflow-hidden"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant={v.status === 'available' ? 'success' : 'default'}>{status}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gold-500 font-medium uppercase tracking-wider">{v.make}</p>
                    <h3 className="text-lg font-semibold mt-1">{v.model}</h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm font-semibold">{formatCurrency(Number(v.price))}</span>
                      <span className="text-xs text-muted-foreground">{v.year}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
