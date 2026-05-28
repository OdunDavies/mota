import { Container } from '@sarkimota/ui';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-sarkimota-black text-white">
      <Container>
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-400"><span className="text-sarkimota-black font-bold text-lg">SI</span></div>
              <div><p className="text-base font-semibold tracking-wide">SARKIMOTA</p><p className="text-[10px] tracking-widest uppercase text-white/50">Interiors</p></div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">Where space becomes statement. Premium interior design and lifestyle solutions for the discerning client.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/portfolio" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Services</Link></li>
              <li><Link href="/consultation" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Book Consultation</Link></li>
              <li><Link href="/quotation" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Request Quotation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/50">10 Bishop Aboyade Cole Street</li>
              <li className="text-sm text-white/50">Victoria Island, Lagos</li>
              <li className="text-sm text-white/50">+234 800 SARKI INTERIOR</li>
              <li className="text-sm text-white/50">interiors@sarkimota.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} SarkiMota Interiors. A subsidiary of SarkiMota Group.</p>
          <Link href={process.env.NEXT_PUBLIC_CORPORATE_URL ?? '/'} className="text-xs text-white/30 hover:text-gold-400 transition-colors">Back to SarkiMota Group</Link>
        </div>
      </Container>
    </footer>
  );
}
