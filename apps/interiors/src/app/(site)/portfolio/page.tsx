import { Container, Section, PageHeader, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getProjects } from '@/lib/data';

export const metadata: Metadata = { title: 'Portfolio', description: 'Explore our portfolio of premium interior design projects.' };

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHeader title="Our Portfolio" description="A curated collection of our finest projects. Each one a testament to our commitment to excellence." variant="dark" />
      <Section>
        <Container>
          <div className="flex flex-wrap gap-2 mb-10">
            <Badge variant="gold">All Projects</Badge>
            <Badge variant="outline">Residential</Badge>
            <Badge variant="outline">Commercial</Badge>
            <Badge variant="outline">Retail</Badge>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => {
              const image = p.project_images?.find(img => img.is_primary)?.url ?? p.project_images?.[0]?.url ?? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop';
              return (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group rounded-2xl overflow-hidden border border-border/50 bg-card transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <Badge variant="default" className="mb-2">{p.project_type}</Badge>
                      <h3 className="text-lg font-display font-bold text-white">{p.title}</h3>
                      <p className="text-sm text-white/60">{p.location}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
