import type { Metadata } from 'next';
import { siteConfig } from '@sarkimota/config';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SarkiMota Automotive',
    template: '%s | SarkiMota Automotive',
  },
  description: 'Luxury automotive sales, financing, and aftermarket services in Nigeria.',
  metadataBase: new URL(siteConfig.links.automotive),
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'SarkiMota Automotive',
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
