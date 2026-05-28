import { Container, Section, Badge } from '@sarkimota/ui';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">System configuration and preferences</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-lg font-semibold mb-4">General Settings</h2>
            <div className="space-y-4">
              {[
                { label: 'Company Name', value: 'SarkiMota Group of Companies' },
                { label: 'Default Currency', value: 'NGN (₦)' },
                { label: 'Time Zone', value: 'Africa/Lagos (WAT)' },
                { label: 'Language', value: 'English' },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm">{s.label}</span>
                  <span className="text-sm font-medium text-muted-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
            <div className="space-y-3">
              {['New inquiries', 'Test drive bookings', 'Consultation requests', 'Lead conversions'].map((n) => (
                <label key={n} className="flex items-center justify-between">
                  <span className="text-sm">{n}</span>
                  <input type="checkbox" defaultChecked className="rounded border-border" />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-lg font-semibold mb-4">Team Members</h2>
            {['Admin User', 'Sales Team', 'Design Team'].map((member) => (
              <div key={member} className="flex items-center gap-3 py-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">{member[0]}</div>
                <div>
                  <p className="text-sm font-medium">{member}</p>
                  <p className="text-xs text-muted-foreground">Active</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-lg font-semibold mb-4">System Status</h2>
            <div className="space-y-3">
              {[{ label: 'Database', status: 'Healthy' }, { label: 'Storage', status: 'Healthy' }, { label: 'Email', status: 'Operational' }].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-sm">{s.label}</span>
                  <Badge variant="success">{s.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
