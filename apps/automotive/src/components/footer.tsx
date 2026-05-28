import { Container } from '@sarkimota/ui';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-sarkimota-black text-white">
      <Container>
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-400">
                <span className="text-sarkimota-black font-bold text-lg">SA</span>
              </div>
              <div>
                <p className="text-base font-semibold tracking-wide">SARKIMOTA</p>
                <p className="text-[10px] tracking-widest uppercase text-white/50">Automotive</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Nigeria&apos;s premier luxury automotive destination. Excellence in motion, 
              every mile of the way.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/inventory" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Inventory</Link></li>
              <li><Link href="/financing" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Financing</Link></li>
              <li><Link href="/services" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-sm text-white/50 hover:text-gold-400 transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/50">10 Bishop Aboyade Cole Street</li>
              <li className="text-sm text-white/50">Victoria Island, Lagos</li>
              <li className="text-sm text-white/50">+234 800 SARKI AUTO</li>
              <li className="text-sm text-white/50">auto@sarkimota.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} SarkiMota Automotive. A subsidiary of SarkiMota Group.
          </p>
          <Link href={process.env.NEXT_PUBLIC_CORPORATE_URL ?? '/'} className="text-xs text-white/30 hover:text-gold-400 transition-colors">
            Back to SarkiMota Group
          </Link>
        </div>
      </Container>
    </footer>
  );
}
