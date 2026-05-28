import { Container, Section, PageHeader, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SarkiMota Group of Companies — our mission, values, and commitment to excellence.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About SarkiMota Group"
        description="A story of vision, excellence, and an unwavering commitment to premium experiences across industries."
        variant="dark"
      />

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-4">Our Story</Badge>
            <h2 className="text-3xl font-display font-bold mb-6">A Legacy of Excellence</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2010, SarkiMota Group of Companies began with a singular vision: to redefine
                what premium means in the Nigerian market. What started as a bold ambition has grown into
                a diversified holding company with operations spanning luxury automotive and high-end
                interior design.
              </p>
              <p>
                Our name, SarkiMota — meaning &ldquo;King of Cars&rdquo; — reflects our heritage and aspiration.
                Today, that royal standard of excellence extends across all our subsidiaries, from the
                vehicles we sell to the spaces we transform.
              </p>
              <p>
                At the heart of everything we do is an uncompromising commitment to quality, integrity,
                and customer satisfaction. We don&apos;t just meet expectations — we exceed them.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-display font-bold mb-10">What Drives Us</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: 'Excellence', description: 'We pursue perfection in every detail, every interaction, every delivery.' },
                { title: 'Integrity', description: 'Trust is our currency. We operate with transparency and honesty.' },
                { title: 'Innovation', description: 'We continuously evolve to bring the best to our clients and markets.' },
                { title: 'Partnership', description: 'Our success is measured by the success of those we serve.' },
              ].map((value) => (
                <div key={value.title} className="p-6 rounded-xl border border-border/50 bg-card">
                  <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
