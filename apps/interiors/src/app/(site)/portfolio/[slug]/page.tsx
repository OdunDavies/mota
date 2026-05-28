import { Container, Section, Button, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getProjectBySlug, getProjects } from '@/lib/data';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title, description: project.description ?? undefined };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return <div className="pt-32 text-center text-muted-foreground">Project not found</div>;

  const primaryImage = project.project_images?.[0]?.url ?? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop';
  const serviceNames = project.project_services?.map(ps => (ps.services as { name: string })?.name).filter(Boolean) ?? [];

  return (
    <>
      <div className="pt-20">
        <div className="relative aspect-[21/9] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${primaryImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          <Container className="relative h-full flex items-end pb-12">
            <div>
              <Badge variant="default" className="mb-4">{project.project_type}</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">{project.title}</h1>
              <p className="text-white/60 mt-2">{project.location}</p>
            </div>
          </Container>
        </div>
      </div>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-card space-y-4">
              <h3 className="font-semibold">Project Details</h3>
              <dl className="space-y-3 text-sm">
                {[
                  ['Type', project.project_type],
                  ['Location', project.location ?? 'N/A'],
                  ['Area', project.area_size ?? 'N/A'],
                  ['Completion', project.completion_date ?? 'N/A'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between"><span className="text-muted-foreground">{label}</span><span className="font-medium">{value}</span></div>
                ))}
              </dl>
              {serviceNames.length > 0 && (
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold mb-2">Services Provided</h4>
                  <div className="flex flex-wrap gap-2">
                    {serviceNames.map((s) => (<Badge key={s} variant="secondary">{s}</Badge>))}
                  </div>
                </div>
              )}
              <Link href="/consultation"><Button variant="gold" className="w-full mt-4">Book a Consultation</Button></Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
