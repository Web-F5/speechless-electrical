import Image from 'next/image'
import { CheckCircle, Zap } from 'lucide-react'

const highlights = [
  'Licensed & fully insured (Rec No. 35659)',
  'Over 10 years of industry experience',
  'Residential & commercial projects',
  'Locally based — never far when you need us',
  'Transparent pricing, no hidden fees',
  'All work meets current safety standards',
]

const areas = [
  'Seymour', 'Tallarook', 'Broadford', 'Kilmore',
  'Wallan', 'Avenel', 'Nagambie', 'Longwood', 'Euroa',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8" style={{ backgroundColor: '#090040' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Photo */}
          <div className="flex-shrink-0 w-full max-w-xs mx-auto lg:mx-0">
            <div className="relative">
              {/* Decorative border */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ backgroundColor: '#471396' }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2"
                style={{ borderColor: '#FFCC00' }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ben-VtKTErKanaCJPuHiEyLIFTzCakgnep.jpg"
                  alt="Ben — owner of Speechless Electrical"
                  width={380}
                  height={480}
                  className="object-cover w-full"
                />
              </div>
              {/* Name badge */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 px-6 py-3 rounded-xl text-center shadow-lg whitespace-nowrap"
                style={{ backgroundColor: '#FFCC00' }}
              >
                <p className="font-heading font-800 text-sm" style={{ color: '#090040' }}>
                  Ben — Owner & Electrician
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 mt-10 lg:mt-0">
            <p className="font-heading font-700 text-sm tracking-widest uppercase mb-3" style={{ color: '#B13BFF' }}>
              About Speechless Electrical
            </p>
            <h2
              className="font-heading font-900 text-4xl md:text-5xl text-balance mb-6"
              style={{ color: '#F3F4F4' }}
            >
              Your Local, Trusted{' '}
              <span style={{ color: '#FFCC00' }}>Electrician</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: '#c8c9d4' }}>
              At Speechless Electrical, quality electrical work is the backbone of every safe and
              efficient home or business. With over 10 years of industry experience, we&apos;ve built
              a strong reputation as a trusted, certified electrical contractor serving the local
              community with pride and professionalism.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#9899b0' }}>
              Whether you&apos;re building a new home, renovating, upgrading your switchboard, or
              needing general maintenance, we deliver results you expect — with no surprises.
            </p>

            {/* Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#FFCC00' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#c8c9d4' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Service areas */}
            <div
              className="rounded-xl p-5 mb-8"
              style={{ backgroundColor: '#471396', borderLeft: '4px solid #FFCC00' }}
            >
              <p className="font-heading font-700 text-sm mb-2" style={{ color: '#FFCC00' }}>
                Service Area
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-full text-xs font-heading font-600"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#F3F4F4' }}
                  >
                    {area}
                  </span>
                ))}
                <span
                  className="px-3 py-1 rounded-full text-xs font-heading font-600"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#F3F4F4' }}
                >
                  + All surrounding areas
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-700 text-base"
              >
                <Zap size={20} strokeWidth={2.5} />
                Get a Free Quote
              </a>
              <a
                href="tel:0417798312"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-700 text-base border-2 transition-all hover:bg-yellow-300/10"
                style={{ color: '#FFCC00', borderColor: '#FFCC00' }}
              >
                Call 0417 798 312
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
