export const siteConfig = {
  name: 'SarkiMota Group',
  tagline: 'Excellence in Motion, Precision in Design',
  description:
    'A premium Nigerian holding company pioneering excellence across automotive and interior design industries.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sarkimota.com',
  ogImage: '/og-image.jpg',
  links: {
    corporate: process.env.NEXT_PUBLIC_CORPORATE_URL ?? 'https://sarkinmotagroup.vercel.app',
    automotive: process.env.NEXT_PUBLIC_AUTOMOTIVE_URL ?? 'https://sarkinmotacars.vercel.app',
    interiors: process.env.NEXT_PUBLIC_INTERIORS_URL ?? 'https://sarkininteriors.vercel.app',
    admin: process.env.NEXT_PUBLIC_ADMIN_URL ?? 'https://admin-sarkinmotagroup.vercel.app',
  },
} as const;

export const subsidiaries = {
  automotive: {
    id: 'automotive',
    name: 'SarkiMota Automotive',
    slug: 'automotive',
    description: 'Luxury automotive sales, financing, and aftermarket services',
    email: 'auto@sarkimota.com',
    phone: '+234 800 SARKI AUTO',
  },
  interiors: {
    id: 'interiors',
    name: 'SarkiMota Interiors',
    slug: 'interiors',
    description: 'Premium interior design, fit-out, and lifestyle solutions',
    email: 'interiors@sarkimota.com',
    phone: '+234 800 SARKI INTERIOR',
  },
} as const;
