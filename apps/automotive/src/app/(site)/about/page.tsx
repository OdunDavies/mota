import { Container, Section, PageHeader, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about SarkiMota Automotive — our story, values, and commitment to excellence.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About SarkiMota Automotive" description="Nigeria's premier luxury automotive destination." variant="dark" />
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-4">Our Story</Badge>
            <h2 className="text-3xl font-display font-bold mb-6">Redefining the Driving Experience</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>As the automotive division of SarkiMota Group of Companies, we bring the world's finest vehicles to Nigeria's most discerning drivers. Since our founding, we have been committed to delivering an ownership experience that matches the excellence of the vehicles we represent.</p>
              <p>From luxury sedans to high-performance SUVs, every vehicle in our inventory is carefully selected to meet our exacting standards. We don't just sell cars — we curate experiences.</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
