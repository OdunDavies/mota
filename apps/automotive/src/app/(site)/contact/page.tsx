import { Container, Section, PageHeader, Button, Input, Textarea, Label, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';
import { submitInquiry } from '@/actions/inquiry';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with SarkiMota Automotive.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" description="Ready to experience excellence? Our team is here for you." variant="dark" />
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="gold" className="mb-4">Get in Touch</Badge>
              <h2 className="text-2xl font-display font-bold mb-6">Let&apos;s Find Your Perfect Drive</h2>
              <form action={submitInquiry} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" placeholder="Your name" required /></div>
                  <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" required /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" placeholder="+234 800 000 0000" /></div>
                <div className="space-y-2"><Label htmlFor="interest">Vehicle of Interest</Label><Input id="interest" placeholder="e.g. Mercedes-Benz S-Class" /></div>
                <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Tell us what you're looking for..." rows={5} /></div>
                <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">Send Inquiry</Button>
              </form>
            </div>
            <div className="space-y-8">
              <Badge variant="gold" className="mb-4">Contact Information</Badge>
              <div className="space-y-6">
                {[
                  { icon: '📍', title: 'Showroom', detail: '10 Bishop Aboyade Cole Street\nVictoria Island, Lagos' },
                  { icon: '📞', title: 'Sales', detail: '+234 800 SARKI AUTO\n+234 800 727 5468' },
                  { icon: '✉️', title: 'Email', detail: 'auto@sarkimota.com' },
                  { icon: '🕐', title: 'Hours', detail: 'Mon - Fri: 8AM - 6PM\nSat: 9AM - 4PM\nSun: By Appointment' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-xl mt-1">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line mt-1">{item.detail}</p>
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
