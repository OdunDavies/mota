import { Badge } from '@sarkimota/ui';

const metrics = [
  { label: 'Website Traffic', value: '12,543', change: '+18%', period: 'this month' },
  { label: 'Lead Conversion', value: '4.2%', change: '+0.8%', period: 'this month' },
  { label: 'Avg. Response Time', value: '2.4 hrs', change: '-15%', period: 'this month' },
  { label: 'Customer Satisfaction', value: '4.8/5', change: '+0.2', period: 'this quarter' },
];

const topVehicles = [
  { model: 'Mercedes-Benz S-Class', views: 1234, inquiries: 45 },
  { model: 'Range Rover SV', views: 987, inquiries: 38 },
  { model: 'Porsche 911 Turbo S', views: 876, inquiries: 32 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-1">Performance metrics and insights</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="p-5 rounded-xl border border-border bg-card">
            <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
            <p className="text-3xl font-bold">{m.value}</p>
            <span className="text-xs text-emerald-500 font-medium">{m.change} {m.period}</span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="text-lg font-semibold mb-4">Top Performing Vehicles</h2>
          <div className="space-y-4">
            {topVehicles.map((v) => (
              <div key={v.model} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <p className="text-sm font-medium">{v.model}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{v.views} views</span>
                  <span>{v.inquiries} inquiries</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'New inquiry from Ahmed Bello', time: '2 hours ago' },
              { action: 'Test drive booked for Range Rover', time: '3 hours ago' },
              { action: 'Project "Eko Atlantic" updated', time: '5 hours ago' },
              { action: 'New vehicle added: Bentley GT', time: '1 day ago' },
              { action: 'Consultation scheduled with Chioma E.', time: '1 day ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <p className="text-sm">{item.action}</p>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
