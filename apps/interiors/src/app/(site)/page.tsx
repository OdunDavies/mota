import { HeroSection } from '@/components/hero-section';
import { FeaturedProjects } from '@/components/featured-projects';
import { ServicesSection } from '@/components/services-section';
import { TestimonialSection } from '@/components/testimonial-section';
import { CTASection } from '@/components/cta-section';
import { getProjects, getServices, getTestimonials } from '@/lib/data';

export default async function HomePage() {
  const [projects, services, testimonials] = await Promise.all([
    getProjects({ featured: true, limit: 4 }),
    getServices(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSection />
      <FeaturedProjects projects={projects} />
      <ServicesSection services={services} />
      <TestimonialSection testimonials={testimonials} />
      <CTASection />
    </>
  );
}
