import { Badge } from '@sarkimota/ui';

const stats = [
  { label: 'Total Vehicles', value: '48', change: '+12%', trend: 'up' },
  { label: 'Active Projects', value: '23', change: '+5%', trend: 'up' },
  { label: 'New Inquiries', value: '156', change: '+28%', trend: 'up' },
  { label: 'Conversion Rate', value: '24%', change: '+3%', trend: 'up' },
  { label: 'Test Drives', value: '34', change: '+18%', trend: 'up' },
  { label: 'Consultations', value: '19', change: '+8%', trend: 'up' },
];

const recentInquiries = [
  { name: 'Ahmed Bello', email: 'ahmed@example.com', type: 'Vehicle Inquiry', date: '2 hours ago', status: 'New' },
  { name: 'Chioma Eze', email: 'chioma@example.com', type: 'Design Consultation', date: '4 hours ago', status: 'New' },
  { name: 'Tunde Bajulaiye', email: 'tunde@example.com', type: 'Test Drive', date: '1 day ago', status: 'Contacted' },
  { name: 'Yetunde Akinwale', email: 'yetunde@example.com', type: 'Quotation Request', date: '2 days ago', status: 'Qualified' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Enterprise operations overview</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 rounded-xl border border-border bg-card">
            <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
            <span className="text-xs text-emerald-500 font-medium">{stat.change} this month</span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="text-lg font-semibold mb-4">Recent Inquiries</h2>
          <div className="space-y-4">
            {recentInquiries.map((inq) => (
              <div key={inq.email} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium">{inq.name}</p>
                  <p className="text-xs text-muted-foreground">{inq.type} · {inq.date}</p>
                </div>
                <Badge variant={inq.status === 'New' ? 'default' : inq.status === 'Contacted' ? 'secondary' : 'success'}>
                  {inq.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Add Vehicle', href: '/vehicles', desc: 'New inventory' },
              { label: 'Create Project', href: '/projects', desc: 'New interior project' },
              { label: 'View Inquiries', href: '/inquiries', desc: 'Manage leads' },
              { label: 'Analytics', href: '/analytics', desc: 'View reports' },
            ].map((action) => (
              <a key={action.label} href={action.href} className="p-4 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors">
                <p className="text-sm font-medium">{action.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{action.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
