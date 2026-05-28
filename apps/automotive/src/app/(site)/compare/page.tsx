import { Container, Section, PageHeader, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Vehicles',
  description: 'Compare luxury vehicles side by side.',
};

export default function ComparePage() {
  return (
    <>
      <PageHeader title="Compare Vehicles" description="Select vehicles to compare specifications side by side." variant="dark" />
      <Section>
        <Container>
          <div className="text-center py-20">
            <Badge variant="gold" className="mb-4">Coming Soon</Badge>
            <p className="text-muted-foreground">The vehicle comparison tool will be available shortly.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
