import { Container, Section, PageHeader, Button, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join SarkiMota Group and be part of a team redefining excellence across industries.',
};

const positions = [
  { title: 'Senior Automotive Sales Consultant', department: 'Automotive', location: 'Lagos' },
  { title: 'Interior Design Project Manager', department: 'Interiors', location: 'Lagos' },
  { title: 'Digital Marketing Manager', department: 'Group', location: 'Lagos' },
  { title: 'Finance Analyst', department: 'Group', location: 'Lagos' },
];

const benefits = [
  'Competitive Compensation',
  'Health & Wellness',
  'Professional Development',
  'Premium Work Environment',
  'Performance Bonuses',
  'Career Growth',
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Join Our Team"
        description="Build your career with a company that values excellence, innovation, and people."
        variant="dark"
      />

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-4">Why Join Us</Badge>
            <h2 className="text-3xl font-display font-bold mb-6">Build a Career, Not Just a Job</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At SarkiMota Group, we believe in nurturing talent and rewarding excellence.
              We offer a premium work environment where ambitious professionals can thrive.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Badge variant="gold" className="mb-4">Open Positions</Badge>
            <div className="space-y-4">
              {positions.map((pos) => (
                <div key={pos.title} className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card hover:shadow-sm transition-all">
                  <div>
                    <h3 className="font-semibold">{pos.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{pos.department} &middot; {pos.location}</p>
                  </div>
                  <Button variant="outline" size="sm">Apply</Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
