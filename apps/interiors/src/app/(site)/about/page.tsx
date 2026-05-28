import { Container, Section, PageHeader, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About', description: 'Learn about SarkiMota Interiors.' };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About SarkiMota Interiors" description="Where space becomes statement." variant="dark" />
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-4">Our Story</Badge>
            <h2 className="text-3xl font-display font-bold mb-6">Designing Premium Spaces</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>As the interior design division of SarkiMota Group of Companies, we bring the same standard of excellence that defines our automotive business into the spaces where people live, work, and thrive.</p>
              <p>Our team of experienced designers, architects, and project managers work collaboratively to deliver spaces that are as functional as they are beautiful. Every project, whether residential or commercial, receives the same meticulous attention to detail.</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
