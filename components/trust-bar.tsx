import { Zap, Shield, Star } from 'lucide-react'

const stats = [
  { icon: <Zap size={22} />, value: '10+', label: 'Years Experience' },
  { icon: <Shield size={22} />, value: '100%', label: 'Licensed & Insured' },
  { icon: <Star size={22} />, value: '5★', label: 'Google Rating' },
]

const areas = ['Seymour', 'Broadford', 'Kilmore', 'Wallan', 'Nagambie', 'Euroa', 'Tallarook', 'Avenel']

export default function TrustBar() {
  return (
    <section aria-label="Trust and service area" className="relative pb-[60px]" style={{ backgroundColor: '#090040' }}>
      {/* Stats strip */}
      <div
        className="border-b"
        style={{ borderColor: 'rgba(177,59,255,0.25)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-wrap justify-center md:justify-between gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#471396', color: '#FFCC00' }}
              >
                {stat.icon}
              </div>
              <div>
                <div className="font-heading font-800 text-2xl leading-none" style={{ color: '#FFCC00' }}>
                  {stat.value}
                </div>
                <div className="font-sans text-xs mt-0.5" style={{ color: '#9899b0' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service area strip */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <p className="font-heading font-700 text-sm whitespace-nowrap" style={{ color: '#FFCC00' }}>
          Servicing Seymour &amp; surrounds
        </p>
        <div
          className="hidden sm:block h-5 w-px flex-shrink-0"
          style={{ backgroundColor: 'rgba(255,204,0,0.3)' }}
        />
        <p className="font-sans text-xs text-center sm:text-left leading-relaxed" style={{ color: '#c8c9d4' }}>
          {areas.join(' · ')} &amp; all surrounding areas
        </p>
        <div
          className="hidden sm:block h-5 w-px flex-shrink-0 ml-auto"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
        />
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Shield size={14} style={{ color: '#FFCC00' }} />
          <span className="font-heading font-600 text-xs whitespace-nowrap" style={{ color: '#F3F4F4' }}>
            Fully Licensed · Rec No. 35659
          </span>
        </div>
      </div>

      {/* Bottom wave — needs pb-[60px] on section to reserve space */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#F3F4F4" />
        </svg>
      </div>
    </section>
  )
}
