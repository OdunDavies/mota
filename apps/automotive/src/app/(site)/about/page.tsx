import { Container, Section, PageHeader, Badge, AnimatedSection, AnimatedGrid, AnimatedCard, AnimatedText } from '@sarkimota/ui';
import type { Metadata } from 'next';
import { getLeadership, getCompanyInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about SarkiMota Automotive — our story, values, and commitment to excellence.',
};

export default async function AboutPage() {
  const companyInfo = await getCompanyInfo();
  const leadership = await getLeadership();
  const aboutData = (companyInfo?.about as { foundingYear: number; headquarters: string; mission: string; vision: string }) ?? {
    foundingYear: 2010,
    headquarters: 'Abuja, Nigeria',
    mission: 'To redefine excellence across industries.',
    vision: "To be Africa's most admired holding company.",
  };

  return (
    <>
      <PageHeader title="About SarkiMota Automotive" description="Nigeria's premier luxury automotive destination." variant="dark" />
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-4">Our Story</Badge>
            <AnimatedText text="Redefining the Driving Experience" as="h2" className="text-3xl font-display font-bold mb-6" />
            <AnimatedSection>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>As the automotive division of SarkiMota Group of Companies, founded in {aboutData.foundingYear}, we bring the world's finest vehicles to Nigeria's most discerning drivers. With headquarters in {aboutData.headquarters}, we have been committed to delivering an ownership experience that matches the excellence of the vehicles we represent.</p>
                <p>From luxury sedans to high-performance SUVs, every vehicle in our inventory is carefully selected to meet our exacting standards. We don't just sell cars — we curate experiences.</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {leadership.length > 0 && (
        <Section variant="muted">
          <Container>
            <div className="max-w-3xl mx-auto">
              <Badge variant="gold" className="mb-4">Our Leadership</Badge>
              <AnimatedText text="Meet Our Team" as="h2" className="text-3xl font-display font-bold mb-10" />
              <AnimatedGrid className="grid md:grid-cols-2 gap-8">
                {leadership.map((leader) => (
                  <AnimatedCard key={leader.id} className="group rounded-2xl border border-border/50 bg-card overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${leader.image_url})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold">{leader.name}</h3>
                      <p className="text-sm text-gold-500 font-medium mt-1">{leader.title}</p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{leader.bio}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </AnimatedGrid>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
