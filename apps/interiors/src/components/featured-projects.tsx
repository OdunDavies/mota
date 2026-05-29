'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button, Badge, AnimatedText } from '@sarkimota/ui';
import Link from 'next/link';

export function FeaturedProjects({ projects = [] }: { projects: Array<{ slug: string; title: string; project_type: string; location: string | null; project_images?: Array<{ url: string; is_primary: boolean | null }> }> }) {
  return (
    <Section>
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div>
            <Badge variant="gold" className="mb-4">Featured Projects</Badge>
            <AnimatedText text="Our Recent Work" as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight" />
            <p className="mt-2 text-muted-foreground">Every project tells a story of transformation.</p>
          </div>
          <Link href="/portfolio"><Button variant="outline" className="mt-4 sm:mt-0">View All Projects</Button></Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const image = p.project_images?.find(img => img.is_primary)?.url ?? p.project_images?.[0]?.url ?? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop';
            return (
              <Link key={p.slug} href={`/portfolio/${p.slug}`}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} className="group rounded-2xl overflow-hidden border border-border/50 bg-card">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge variant="default" className="mb-2">{p.project_type}</Badge>
                      <h3 className="text-xl font-display font-bold text-white">{p.title}</h3>
                      <p className="text-sm text-white/60 mt-1">{p.location}</p>
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
