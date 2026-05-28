'use client';

import { cn } from '@sarkimota/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Car, Building2, Mail, TrendingUp, Settings, User, LogOut } from 'lucide-react';

const iconMap = {
  dashboard: BarChart3, vehicles: Car, projects: Building2,
  inquiries: Mail, analytics: TrendingUp, settings: Settings,
} as const;

const navItems = [
  { label: 'Dashboard', href: '/', icon: 'dashboard' as const },
  { label: 'Vehicles', href: '/vehicles', icon: 'vehicles' as const },
  { label: 'Projects', href: '/projects', icon: 'projects' as const },
  { label: 'Inquiries', href: '/inquiries', icon: 'inquiries' as const },
  { label: 'Analytics', href: '/analytics', icon: 'analytics' as const },
  { label: 'Settings', href: '/settings', icon: 'settings' as const },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-sidebar">
      <div className="flex h-16 items-center gap-3 border-b border-border px-6">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-400">
          <span className="text-sarkimota-black font-bold text-xs">S</span>
        </div>
        <div>
          <p className="text-sm font-semibold">SarkiMota Admin</p>
          <p className="text-[10px] text-muted-foreground">Enterprise Operations</p>
        </div>
      </div>

      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = iconMap[item.icon] ?? Settings;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                isActive
                  ? 'bg-gold-400/10 text-gold-600'
                  : 'text-muted-foreground hover:bg-sidebar-muted hover:text-foreground',
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <User className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Admin User</p>
            <p className="text-xs text-muted-foreground truncate">super_admin</p>
          </div>
          <Link href="/auth/login" className="text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
