import { Container, Section, PageHeader, Button } from '@sarkimota/ui';
import { siteConfig } from '@sarkimota/config';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getSubsidiaries } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Subsidiaries',
  description: 'Explore SarkiMota Group\'s premium subsidiaries — Automotive and Interiors.',
};

const featureMap: Record<string, string[]> = {
  automotive: ['New & Pre-Owned Vehicles', 'Flexible Financing', 'Aftermarket Services', 'Vehicle Certification'],
  interiors: ['Residential Design', 'Commercial Fit-Outs', 'Consultation Services', 'Project Management'],
};

const linkMap: Record<string, string> = {
  automotive: siteConfig.links.automotive,
  interiors: siteConfig.links.interiors,
};

export default async function SubsidiariesPage() {
  const subsidiaries = await getSubsidiaries();

  return (
    <>
      <PageHeader
        title="Our Subsidiaries"
        description="Two distinct premium brands, united by a single standard of excellence."
        variant="dark"
      />

      <Section>
        <Container>
          <div className="space-y-16">
            {subsidiaries.map((sub, i) => {
              const features = featureMap[sub.slug] ?? [];
              const href = linkMap[sub.slug] ?? '#';
              return (
                <div key={sub.slug} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${i === 1 ? 'lg:order-2' : ''}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(https://images.unsplash.com/photo-${i === 0 ? '1503376780353-7e6692767b70' : '1618220179428-22790b461013'}?q=80&w=2000&auto=format&fit=crop)` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className={i === 1 ? 'lg:order-1' : ''}>
                    <span className="text-xs uppercase tracking-widest text-gold-500 font-medium">
                      Subsidiary
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold mt-2 mb-4">
                      {sub.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {sub.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={href}>
                      <Button variant="gold">Visit {sub.name.split(' ')[1]}</Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
