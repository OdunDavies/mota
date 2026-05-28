import { Container, Section, PageHeader } from '@sarkimota/ui';
import type { Metadata } from 'next';
import { getServices } from '@/lib/data';

export const metadata: Metadata = { title: 'Services', description: 'Comprehensive interior design and fit-out services.' };

const detailMap: Record<string, string[]> = {
  'residential-design': ['Full Interior Design', 'Space Planning', 'Custom Furniture Design', 'Material Selection', 'Project Management'],
  'commercial-interiors': ['Office Design', 'Retail Spaces', 'Hospitality Design', 'Brand Integration', 'Workplace Strategy'],
  'fit-out-solutions': ['Turnkey Fit-Out', 'Cat A & B Works', 'MEP Coordination', 'QS Services', 'Handover Support'],
  'design-consultation': ['Concept Development', 'Design Review', 'Material Advisory', 'Budget Planning', 'Vendor Selection'],
};

const iconMap: Record<string, string> = {
  'residential-design': '🏠', 'commercial-interiors': '🏢', 'fit-out-solutions': '🔨', 'design-consultation': '💡',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader title="Our Services" description="Comprehensive interior design solutions for every space." variant="dark" />
      <Section>
        <Container>
          <div className="space-y-16">
            {services.map((s) => {
              const details = detailMap[s.slug] ?? [];
              return (
                <div key={s.slug} className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <span className="text-4xl mb-4 block">{iconMap[s.slug] ?? '⭐'}</span>
                    <h2 className="text-3xl font-display font-bold mb-4">{s.name}</h2>
                    <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                  {details.length > 0 && (
                    <div className="p-6 rounded-xl border border-border/50 bg-card">
                      <h3 className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">What&apos;s Included</h3>
                      <ul className="space-y-3">
                        {details.map((d) => (
                          <li key={d} className="flex items-center gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
