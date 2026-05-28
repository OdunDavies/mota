import { Container, Section } from '@sarkimota/ui';
import { siteConfig, subsidiaries } from '@sarkimota/config';
import { HeroSection } from '@/components/hero-section';
import { SubsidiaryShowcase } from '@/components/subsidiary-showcase';
import { TimelineSection } from '@/components/timeline-section';
import { StatsSection } from '@/components/stats-section';
import { TestimonialSection } from '@/components/testimonial-section';
import { CTASection } from '@/components/cta-section';
import { getTestimonials, getCompanyInfo } from '@/lib/data';

export default async function HomePage() {
  const testimonials = await getTestimonials();

  return (
    <>
      <HeroSection />
      <StatsSection />
      <SubsidiaryShowcase />
      <TimelineSection />
      <TestimonialSection testimonials={testimonials} />
      <CTASection />
    </>
  );
}
