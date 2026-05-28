import { Container, Section, Button, Badge } from '@sarkimota/ui';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getVehicleBySlug, getVehicles } from '@/lib/data';

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
}

export async function generateStaticParams() {
  const vehicles = await getVehicles();
  return vehicles.map(v => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);
  if (!vehicle) return { title: 'Vehicle Not Found' };
  return { title: `${vehicle.make} ${vehicle.model}`, description: vehicle.description ?? undefined };
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);
  if (!vehicle) return <div className="pt-32 text-center text-muted-foreground">Vehicle not found</div>;

  const condition = vehicle.condition.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const primaryImage = vehicle.vehicle_images?.[0]?.url ?? 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop';
  const featuresByCategory: Record<string, string[]> = {};
  const vf = vehicle.vehicle_features;
  if (vf) {
    for (const f of vf) {
      (featuresByCategory[f.category] ??= []).push(f.name);
    }
  }

  return (
    <>
      <div className="pt-20">
        <div className="relative aspect-[21/9] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${primaryImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          <Container className="relative h-full flex items-end pb-12">
            <div>
              <Badge variant={vehicle.status === 'available' ? 'success' : 'default'} className="mb-4">{vehicle.status}</Badge>
              <p className="text-sm text-white/60 uppercase tracking-wider">{vehicle.make}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-2">{vehicle.model}</h1>
              <div className="flex items-center gap-4 mt-4 text-white/70 text-sm">
                <span>{vehicle.year}</span>
                <span>·</span>
                <span>{condition}</span>
                <span>·</span>
                <span className="text-gold-400 text-xl font-bold">{formatCurrency(Number(vehicle.price))}</span>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>
              </div>

              {Object.entries(featuresByCategory).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-3">{category}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border/50 bg-card">
                <h3 className="font-semibold mb-4">Vehicle Summary</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    ['Price', formatCurrency(Number(vehicle.price))],
                    ['Condition', condition],
                    ['Year', String(vehicle.year)],
                    ['VIN', vehicle.vin ?? 'N/A'],
                    ['Exterior', vehicle.exterior_color ?? 'N/A'],
                    ['Interior', vehicle.interior_color ?? 'N/A'],
                    ['Transmission', vehicle.transmission ?? 'N/A'],
                    ['Engine', vehicle.engine ?? 'N/A'],
                    ['Drivetrain', vehicle.drivetrain ?? 'N/A'],
                    ['Fuel', vehicle.fuel_type ?? 'N/A'],
                    ['Mileage', vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : 'New'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium text-right">{value}</span>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="space-y-3">
                <Link href="/contact">
                  <Button variant="gold" className="w-full">Inquire About This Vehicle</Button>
                </Link>
                <Button variant="outline" className="w-full">Schedule Test Drive</Button>
                <Link href="/compare">
                  <Button variant="ghost" className="w-full">Add to Compare</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
