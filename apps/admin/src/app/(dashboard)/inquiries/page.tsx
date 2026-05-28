import { Badge, Button, Input } from '@sarkimota/ui';

const inquiries = [
  { id: 'INQ-001', name: 'Ahmed Bello', email: 'ahmed@example.com', type: 'Vehicle Inquiry', source: 'Website', status: 'New', date: '2024-04-10' },
  { id: 'INQ-002', name: 'Chioma Eze', email: 'chioma@example.com', type: 'Design Consultation', source: 'Website', status: 'New', date: '2024-04-10' },
  { id: 'INQ-003', name: 'Tunde Bajulaiye', email: 'tunde@example.com', type: 'Test Drive', source: 'Website', status: 'Contacted', date: '2024-04-09' },
  { id: 'INQ-004', name: 'Yetunde Akinwale', email: 'yetunde@example.com', type: 'Quotation', source: 'Referral', status: 'Qualified', date: '2024-04-08' },
  { id: 'INQ-005', name: 'Oluwaseun A.', email: 'seun@example.com', type: 'Vehicle Inquiry', source: 'Instagram', status: 'Converted', date: '2024-04-07' },
];

export default function InquiriesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Inquiries</h1>
        <p className="text-muted-foreground mt-1">Manage leads and customer inquiries</p>
      </div>

      <div className="flex items-center gap-3">
        <Input placeholder="Search inquiries..." className="w-80" />
        <div className="flex gap-2">
          <Badge variant="gold" className="cursor-pointer">All</Badge>
          <Badge variant="outline" className="cursor-pointer">New</Badge>
          <Badge variant="outline" className="cursor-pointer">Contacted</Badge>
          <Badge variant="outline" className="cursor-pointer">Qualified</Badge>
          <Badge variant="outline" className="cursor-pointer">Converted</Badge>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">ID</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Contact</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Type</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Source</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Status</th>
              <th className="text-right p-4 text-xs font-medium text-muted-foreground uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq) => (
              <tr key={inq.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="p-4 text-sm font-mono">{inq.id}</td>
                <td className="p-4">
                  <p className="text-sm font-medium">{inq.name}</p>
                  <p className="text-xs text-muted-foreground">{inq.email}</p>
                </td>
                <td className="p-4"><span className="text-sm">{inq.type}</span></td>
                <td className="p-4"><span className="text-sm text-muted-foreground">{inq.source}</span></td>
                <td className="p-4">
                  <Badge variant={inq.status === 'New' ? 'default' : inq.status === 'Contacted' ? 'secondary' : inq.status === 'Qualified' ? 'gold' : 'success'}>
                    {inq.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
