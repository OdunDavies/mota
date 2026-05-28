import { Container, Section, PageHeader, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore landmark projects across SarkiMota Group\'s subsidiaries.',
};

const projects = [
  {
    title: 'Eko Atlantic Luxury Residences',
    category: 'Interior Design',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Corporate Fleet Expansion',
    category: 'Automotive',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Victoria Island Executive Offices',
    category: 'Interior Design',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        description="Landmark developments and transformative work across our subsidiaries."
        variant="dark"
      />

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group rounded-2xl overflow-hidden border border-border/50 bg-card transition-all duration-300 hover:shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant={
                      project.status === 'Completed' ? 'success' : 'default'
                    }>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gold-500 font-medium uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
