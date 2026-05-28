import { Container, Section, PageHeader, Button, Badge, Input } from '@sarkimota/ui';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getVehicles } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Inventory',
  description: 'Browse our curated selection of luxury vehicles.',
};

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
}

export default async function InventoryPage() {
  const vehicles = await getVehicles();

  return (
    <>
      <PageHeader title="Our Inventory" description="Browse our curated selection of the world's finest vehicles. Each one selected for its excellence." variant="dark" />

      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-2">
              <Badge variant="gold">{vehicles.length} Vehicles</Badge>
              <Badge variant="outline">New</Badge>
              <Badge variant="outline">Certified Pre-Owned</Badge>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Input placeholder="Search..." className="w-full sm:w-64" />
              <Button variant="outline" size="sm">Filter</Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v) => {
              const primaryImage = v.vehicle_images?.find(img => img.is_primary)?.url ?? v.vehicle_images?.[0]?.url ?? 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop';
              return (
                <Link key={v.slug} href={`/inventory/${v.slug}`} className="group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${primaryImage})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant={v.condition === 'new' ? 'success' : 'default'}>{v.condition.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gold-500 font-medium uppercase tracking-wider">{v.make}</p>
                    <h3 className="text-lg font-semibold mt-1">{v.model}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-muted-foreground">{v.year}</span>
                      <span className="text-xs text-muted-foreground">{v.fuel_type ?? 'N/A'} · {v.transmission ?? 'N/A'}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                      <span className="text-base font-bold">{formatCurrency(Number(v.price))}</span>
                      <span className="text-xs text-gold-500 font-medium group-hover:underline">View Details</span>
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
