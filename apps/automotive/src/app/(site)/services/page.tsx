import { Container, Section, PageHeader, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';
import { getServices } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive automotive services — from sales to aftermarket care.',
};

export default async function ServicesPage() {
  const services = await getServices();

  const icons: Record<string, string> = {
    'vehicle-sales': '🚗', 'vehicle-financing': '💰', 'aftermarket-services': '🔧',
    'vehicle-certification': '✓', 'vehicle-customization': '✨', 'insurance-solutions': '🛡️',
    'maintenance': '🔧', 'parts': '⚙️',
  };

  return (
    <>
      <PageHeader title="Our Services" description="Comprehensive automotive solutions designed for the discerning client." variant="dark" />
      <Section>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="p-8 rounded-2xl border border-border/50 bg-card hover:shadow-md transition-all">
                <span className="text-4xl mb-4 block">{icons[s.slug] ?? '⭐'}</span>
                <h3 className="text-xl font-display font-bold mb-3">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
