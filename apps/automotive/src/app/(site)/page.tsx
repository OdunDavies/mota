import { Container, Section, Button, Badge } from '@sarkimota/ui';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { FeaturedVehicles } from '@/components/featured-vehicles';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';
import { getTestimonials, getVehicles, getServices } from '@/lib/data';

export default async function HomePage() {
  const [vehicles, services, testimonials] = await Promise.all([
    getVehicles({ featured: true, limit: 4 }),
    getServices(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSection />
      <FeaturedVehicles vehicles={vehicles} />
      <ServicesSection services={services} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  );
}
