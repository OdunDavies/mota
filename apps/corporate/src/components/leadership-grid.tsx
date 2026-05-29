'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@sarkimota/ui';

const fallbackImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
];

interface Leader {
  id: string;
  name: string;
  title: string;
  bio: string | null;
  image_url: string | null;
}

export function LeadershipGrid({ leaders }: { leaders: Leader[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid md:grid-cols-2 gap-8"
    >
      {leaders.map((leader, i) => (
        <motion.div
          key={leader.id}
          variants={staggerItem}
          className="group rounded-2xl border border-border/50 bg-card overflow-hidden transition-colors duration-300 hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="aspect-[4/3] relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${leader.image_url ?? fallbackImages[i % fallbackImages.length]})` }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-display font-bold">{leader.name}</h3>
            <p className="text-sm text-gold-500 font-medium mt-1">{leader.title}</p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{leader.bio}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
