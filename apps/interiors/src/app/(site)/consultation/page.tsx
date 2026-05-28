import { Container, Section, PageHeader, Button, Input, Textarea, Label, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';
import { submitConsultation } from '@/actions/consultation';

export const metadata: Metadata = { title: 'Book a Consultation', description: 'Schedule a design consultation with SarkiMota Interiors.' };

export default function ConsultationPage() {
  return (
    <>
      <PageHeader title="Book a Consultation" description="Let's discuss your vision. Our design team will guide you from concept to completion." variant="dark" />
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="gold" className="mb-4">Schedule Now</Badge>
              <h2 className="text-2xl font-display font-bold mb-6">Start Your Design Journey</h2>
              <form action={submitConsultation} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" placeholder="Your name" required /></div>
                  <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" required /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" placeholder="+234 800 000 0000" /></div>
                <div className="space-y-2"><Label htmlFor="project-type">Project Type</Label>
                  <select id="project-type" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm">
                    <option>Residential</option><option>Commercial</option><option>Retail</option><option>Other</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="date">Preferred Date</Label><Input id="date" type="date" /></div>
                  <div className="space-y-2"><Label htmlFor="time">Preferred Time</Label><Input id="time" type="time" /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="budget">Budget Range</Label>
                  <select id="budget" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm">
                    <option>₦5M - ₦15M</option><option>₦15M - ₦50M</option><option>₦50M - ₦100M</option><option>₦100M+</option>
                  </select>
                </div>
                <div className="space-y-2"><Label htmlFor="message">Project Details</Label><Textarea id="message" placeholder="Tell us about your project..." rows={4} /></div>
                <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">Book Consultation</Button>
              </form>
            </div>
            <div className="space-y-8">
              <Badge variant="gold" className="mb-4">What to Expect</Badge>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Initial Consultation', desc: 'We discuss your vision, requirements, and budget in detail.' },
                  { step: '02', title: 'Concept Development', desc: 'Our team creates initial design concepts and mood boards.' },
                  { step: '03', title: 'Design Proposal', desc: 'Detailed design proposal with renderings, materials, and timeline.' },
                  { step: '04', title: 'Execution', desc: 'Our team manages every aspect of implementation and delivery.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-gold-500 font-bold text-lg">{item.step}</span>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
