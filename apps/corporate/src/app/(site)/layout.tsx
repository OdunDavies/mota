import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
