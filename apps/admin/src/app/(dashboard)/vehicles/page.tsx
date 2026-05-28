import { Badge, Button, Input } from '@sarkimota/ui';

const vehicles = [
  { id: 'V-001', make: 'Mercedes-Benz', model: 'S-Class Maybach', year: 2024, price: '₦180,000,000', status: 'Available', condition: 'New' },
  { id: 'V-002', make: 'Range Rover', model: 'SV Autobiography', year: 2024, price: '₦150,000,000', status: 'Available', condition: 'New' },
  { id: 'V-003', make: 'Porsche', model: '911 Turbo S', year: 2024, price: '₦200,000,000', status: 'Reserved', condition: 'New' },
  { id: 'V-004', make: 'BMW', model: 'X7 M60i', year: 2024, price: '₦120,000,000', status: 'Available', condition: 'New' },
  { id: 'V-005', make: 'Bentley', model: 'Continental GT', year: 2023, price: '₦250,000,000', status: 'Sold', condition: 'Certified Pre-Owned' },
];

export default function VehiclesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Vehicles</h1>
          <p className="text-muted-foreground mt-1">Manage automotive inventory</p>
        </div>
        <Button variant="gold">Add Vehicle</Button>
      </div>

      <div className="flex items-center gap-3">
        <Input placeholder="Search vehicles..." className="w-80" />
        <div className="flex gap-2">
          <Badge variant="gold" className="cursor-pointer">All</Badge>
          <Badge variant="outline" className="cursor-pointer">Available</Badge>
          <Badge variant="outline" className="cursor-pointer">Reserved</Badge>
          <Badge variant="outline" className="cursor-pointer">Sold</Badge>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">ID</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Vehicle</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Condition</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Price</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="text-right p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="p-4 text-sm font-mono">{v.id}</td>
                <td className="p-4">
                  <p className="text-sm font-medium">{v.make} {v.model}</p>
                  <p className="text-xs text-muted-foreground">{v.year}</p>
                </td>
                <td className="p-4"><span className="text-sm">{v.condition}</span></td>
                <td className="p-4"><span className="text-sm font-medium">{v.price}</span></td>
                <td className="p-4">
                  <Badge variant={v.status === 'Available' ? 'success' : v.status === 'Reserved' ? 'default' : 'secondary'}>
                    {v.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
