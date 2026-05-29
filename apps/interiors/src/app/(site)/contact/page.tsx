import { Container, Section, PageHeader, Button, Input, Textarea, Label, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';
import { submitContact } from '@/actions/contact';

export const metadata: Metadata = { title: 'Contact', description: 'Get in touch with SarkiMota Interiors.' };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" description="Ready to transform your space? We're here to help." variant="dark" />
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="gold" className="mb-4">Get in Touch</Badge>
              <h2 className="text-2xl font-display font-bold mb-6">Let&apos;s Create Together</h2>
              <form action={submitContact} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" placeholder="Your name" required /></div>
                  <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" required /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" placeholder="+234 800 000 0000" /></div>
                <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Tell us about your project..." rows={5} /></div>
                <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">Send Message</Button>
              </form>
            </div>
            <div className="space-y-8">
              <Badge variant="gold" className="mb-4">Contact Information</Badge>
              <div className="space-y-6">
                {[
                  { icon: '📍', title: 'Studio', detail: 'Olusegun Obasanjo Way\nCentral Business District, Abuja 900103, FCT' },
                  { icon: '📞', title: 'Phone', detail: '+234 800 SARKI INTERIOR\n+234 800 727 5468' },
                  { icon: '✉️', title: 'Email', detail: 'interiors@sarkimota.com' },
                  { icon: '🕐', title: 'Hours', detail: 'Mon - Fri: 8AM - 6PM\nSat: 9AM - 4PM' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-xl mt-1">{item.icon}</span>
                    <div><h3 className="font-semibold text-sm">{item.title}</h3><p className="text-sm text-muted-foreground whitespace-pre-line mt-1">{item.detail}</p></div>
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
