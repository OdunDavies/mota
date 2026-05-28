import type { Metadata } from 'next';
import { siteConfig } from '@sarkimota/config';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'SarkiMota Interiors', template: '%s | SarkiMota Interiors' },
  description: 'Premium interior design, fit-out, and lifestyle solutions in Nigeria.',
  metadataBase: new URL(siteConfig.links.interiors),
  openGraph: { type: 'website', locale: 'en_NG', siteName: 'SarkiMota Interiors', images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="min-h-screen bg-background font-sans antialiased">{children}</body></html>;
}
