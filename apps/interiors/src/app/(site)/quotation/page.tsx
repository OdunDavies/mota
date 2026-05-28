import { Container, Section, PageHeader, Button, Input, Textarea, Label, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';
import { submitQuotation } from '@/actions/quotation';

export const metadata: Metadata = { title: 'Request a Quotation', description: 'Request a detailed quotation for your interior design project.' };

export default function QuotationPage() {
  return (
    <>
      <PageHeader title="Request a Quotation" description="Tell us about your project and we'll provide a detailed, transparent quotation." variant="dark" />
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <Badge variant="gold" className="mb-4">Get Started</Badge>
            <form action={submitQuotation} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" placeholder="Your name" required /></div>
                <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" required /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" placeholder="+234 800 000 0000" /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label htmlFor="property-type">Property Type</Label>
                  <select id="property-type" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm">
                    <option>Apartment</option><option>House/Villa</option><option>Office</option><option>Retail</option><option>Other</option>
                  </select>
                </div>
                <div className="space-y-2"><Label htmlFor="property-size">Area (sqm)</Label><Input id="property-size" type="number" placeholder="e.g. 200" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="scope">Scope of Work</Label>
                <div className="grid grid-cols-2 gap-2">
                  {['Full Design', 'Space Planning', 'Furniture', 'Lighting', 'Kitchen', 'Bathroom', 'Office Fit-Out', 'Consultation'].map((s) => (
                    <label key={s} className="flex items-center gap-2 text-sm"><input type="checkbox" /> {s}</label>
                  ))}
                </div>
              </div>
              <div className="space-y-2"><Label htmlFor="budget">Budget Range</Label>
                <select id="budget" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm">
                  <option>₦5M - ₦15M</option><option>₦15M - ₦50M</option><option>₦50M - ₦100M</option><option>₦100M+</option><option>Not sure</option>
                </select>
              </div>
              <div className="space-y-2"><Label htmlFor="details">Project Details</Label><Textarea id="details" placeholder="Describe your project, style preferences, and requirements..." rows={5} /></div>
              <Button type="submit" variant="gold" size="lg">Submit Request</Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
