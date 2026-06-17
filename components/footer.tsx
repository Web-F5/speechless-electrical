import Image from 'next/image'
import { Phone, MapPin, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Ceiling Downlights',
  'Kitchen Lighting',
  'Outdoor Lighting',
  'Switchboard Upgrades',
  'Renovations & Extensions',
  'Safety Switches',
  'Indoor Lighting',
  'Fault Finding',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#090040' }}>
      {/* CTA strip */}
      <div
        className="py-8 px-4 md:px-8 text-center"
        style={{ backgroundColor: '#471396' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <p className="font-heading font-800 text-xl md:text-2xl" style={{ color: '#F3F4F4' }}>
              Ready to get started?
            </p>
            <p className="text-sm mt-1" style={{ color: '#c8c9d4' }}>
              Call Ben today for a free, no-obligation quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0417798312"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-800 text-lg border-2 transition-all hover:bg-yellow-300/10"
              style={{ color: '#FFCC00', borderColor: '#FFCC00' }}
            >
              <Phone size={20} strokeWidth={2.5} />
              0417 798 312
            </a>
            <a
              href="#contact"
              className="btn-cta hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-700 text-base"
            >
              <Zap size={18} strokeWidth={2.5} />
              Get a Quote
            </a>
            <a
              href="#quote-form"
              className="btn-cta sm:hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-700 text-base"
            >
              <Zap size={18} strokeWidth={2.5} />
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SSWJgMSb0wryari5wc3H3I5c5KJEpT.jpg"
              alt="Speechless Electrical"
              width={48}
              height={48}
              className="rounded-full border-2"
              style={{ borderColor: '#B13BFF' }}
            />
            <div>
              <span className="block font-heading font-900 text-base leading-tight" style={{ color: '#FFCC00' }}>
                SPEECHLESS
              </span>
              <span className="block font-heading text-xs tracking-widest uppercase" style={{ color: '#B13BFF' }}>
                Electrical
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#9899b0' }}>
            Licensed electrical contractor serving Seymour and surrounding areas with over 10 years of experience.
          </p>
          <div className="flex items-center gap-2 text-sm" style={{ color: '#9899b0' }}>
            <MapPin size={14} />
            Seymour, VIC 3660
          </div>
          <p className="text-xs mt-2" style={{ color: '#5a5b78' }}>Rec No. 35659</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-heading font-700 text-sm tracking-widest uppercase mb-5" style={{ color: '#F3F4F4' }}>
            Navigation
          </h3>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:underline"
                  style={{ color: '#9899b0' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-700 text-sm tracking-widest uppercase mb-5" style={{ color: '#F3F4F4' }}>
            Services
          </h3>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm transition-colors hover:underline" style={{ color: '#9899b0' }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-700 text-sm tracking-widest uppercase mb-5" style={{ color: '#F3F4F4' }}>
            Contact
          </h3>
          <a
            href="tel:0417798312"
            className="flex items-center gap-3 mb-4 group"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#471396' }}
            >
              <Phone size={16} style={{ color: '#FFCC00' }} />
            </div>
            <span className="font-heading font-700 text-base group-hover:underline" style={{ color: '#FFCC00' }}>
              0417 798 312
            </span>
          </a>
          <a
            href="#contact"
            className="btn-cta hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-heading font-700 text-sm w-full"
          >
            <Zap size={16} strokeWidth={2.5} />
            Request a Quote
          </a>
          <a
            href="#quote-form"
            className="btn-cta sm:hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-heading font-700 text-sm w-full"
          >
            <Zap size={16} strokeWidth={2.5} />
            Request a Quote
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 md:px-8 py-5"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: '#5a5b78' }}>
          <p>&copy; {new Date().getFullYear()} Speechless Electrical. All rights reserved.</p>
          <p>Licensed Electrical Contractor · Victoria, Australia · Rec No. 35659</p>
        </div>
      </div>
    </footer>
  )
}
