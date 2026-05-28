import { Container, Section, PageHeader, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media & Press',
  description: 'Latest news, press releases, and media resources from SarkiMota Group.',
};

const pressReleases = [
  { date: 'March 2024', title: 'SarkiMota Automotive Partners with Global Luxury Brands', excerpt: 'Strategic partnerships established to bring exclusive vehicle models to the Nigerian market.' },
  { date: 'January 2024', title: 'SarkiMota Interiors Completes Landmark Lagos Project', excerpt: 'Premium residential development showcases the pinnacle of Nigerian interior design.' },
  { date: 'November 2023', title: 'Group CEO Named Among Africa\'s Top Business Leaders', excerpt: 'Fatima Bello recognized for transformative leadership in the luxury sector.' },
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        title="Media & Press"
        description="Stay informed with the latest news, announcements, and stories from SarkiMota Group."
        variant="dark"
      />

      <Section>
        <Container>
          <Badge variant="gold" className="mb-4">Press Releases</Badge>
          <div className="space-y-8">
            {pressReleases.map((pr) => (
              <article key={pr.title} className="group p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                <time className="text-xs text-muted-foreground">{pr.date}</time>
                <h3 className="text-lg font-semibold mt-2 group-hover:text-gold-500 transition-colors">{pr.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{pr.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
