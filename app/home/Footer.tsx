import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#211f1b] px-5 pb-8 text-[#eee8dd] md:px-10">
      <div className="mx-auto max-w-350 border-t border-white/10 pt-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="serif text-center text-4xl tracking-[0.3em]">PODGALLERRY</p>
            {/* <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">A curated space for original artworks, meaningful pieces and private commissions.</p> */}
          </div>
          {/* <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/35">Explore</p>
            <div className="space-y-3 text-sm text-white/70"><Link href="/more-arts" className="block transition hover:text-white">Artworks</Link><Link href="/more-arts" className="block transition hover:text-white">Collections</Link><Link href="/contact-book" className="block transition hover:text-white">Commission</Link></div>
          </div> */}
          {/* <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/35">Information</p>
            <div className="space-y-3 text-sm text-white/60"><p>Shipping &amp; Returns</p><p>Payments</p><p>Frequently Asked Questions</p></div>
          </div> */}
          {/* <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/35">Stay connected</p>
            <p className="text-sm leading-6 text-white/50">Receive occasional updates about new works and private releases.</p>
            <div className="mt-5 flex border-b border-white/25"><input type="email" placeholder="Your email address" className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-white/25" /><button type="button" className="px-3 text-lg transition hover:text-white/60">→</button></div>
          </div> */}
        </div>
        {/* <div className="mt-16 flex items-center justify-between gap-6 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.14em] text-white/25">
          <span>© 2026 ARTERY. All rights reserved.</span>
          <Link href="#top" aria-label="Scroll to top" className="text-2xl leading-none text-white/60 transition hover:text-white">↑</Link>
        </div> */}
      </div>
    </footer>
  );
}
