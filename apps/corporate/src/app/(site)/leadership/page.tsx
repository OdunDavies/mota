import { Container, Section, PageHeader } from '@sarkimota/ui';
import type { Metadata } from 'next';
import { getLeadership } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Meet the leadership team driving SarkiMota Group of Companies.',
};

const fallbackImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
];

export default async function LeadershipPage() {
  const leaders = await getLeadership();

  return (
    <>
      <PageHeader
        title="Our Leadership"
        description="The visionaries and executives driving SarkiMota Group&apos;s commitment to excellence."
        variant="dark"
      />

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {leaders.map((leader, i) => (
              <div key={leader.id} className="group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${leader.image_url ?? fallbackImages[i % fallbackImages.length]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold">{leader.name}</h3>
                  <p className="text-sm text-gold-500 font-medium mt-1">{leader.title}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
