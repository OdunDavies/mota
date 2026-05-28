import { Badge, Button, Input } from '@sarkimota/ui';

const projects = [
  { id: 'P-001', title: 'Eko Atlantic Penthouse', client: 'Private Client', type: 'Residential', status: 'In Progress', date: '2024-03-15' },
  { id: 'P-002', title: 'Ikoyi Executive Office', client: 'Matrix NG', type: 'Commercial', status: 'Completed', date: '2024-01-20' },
  { id: 'P-003', title: 'Lekki Phase 1 Villa', client: 'Private Client', type: 'Residential', status: 'Planning', date: '2024-04-01' },
  { id: 'P-004', title: 'Victoria Island Boutique', client: 'Luminé Lagos', type: 'Retail', status: 'In Progress', date: '2024-02-10' },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-1">Manage interior design projects</p>
        </div>
        <Button variant="gold">Create Project</Button>
      </div>

      <div className="flex items-center gap-3">
        <Input placeholder="Search projects..." className="w-80" />
        <div className="flex gap-2">
          <Badge variant="gold" className="cursor-pointer">All</Badge>
          <Badge variant="outline" className="cursor-pointer">Planning</Badge>
          <Badge variant="outline" className="cursor-pointer">In Progress</Badge>
          <Badge variant="outline" className="cursor-pointer">Completed</Badge>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">ID</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Project</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Client</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Type</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Status</th>
              <th className="text-right p-4 text-xs font-medium text-muted-foreground uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="p-4 text-sm font-mono">{p.id}</td>
                <td className="p-4"><p className="text-sm font-medium">{p.title}</p></td>
                <td className="p-4"><span className="text-sm">{p.client}</span></td>
                <td className="p-4"><span className="text-sm">{p.type}</span></td>
                <td className="p-4">
                  <Badge variant={p.status === 'Completed' ? 'success' : p.status === 'In Progress' ? 'default' : 'secondary'}>
                    {p.status}
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
