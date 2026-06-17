import Image from 'next/image'
import { Zap } from 'lucide-react'

const services = [
  {
    title: 'Ceiling Downlights',
    description: 'Transform any room with professionally installed LED downlights. Energy-efficient, modern, and perfectly placed.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ceiling-downlights-vIMxeuWg8hvHx4v1DPBiv0gkrcYrkP.jpg',
    alt: 'Ceiling downlights installation',
  },
  {
    title: 'Kitchen Lighting',
    description: 'Bright, functional kitchen lighting that enhances your workspace and adds a premium finish to your renovation.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kitchen-u3gWkZiYNAwik8nOXuDLbxtxcPJZdC.jpg',
    alt: 'Kitchen lighting installation',
  },
  {
    title: 'Outdoor Lighting',
    description: 'Secure and illuminate your property with quality outdoor lighting for homes, sheds, and commercial buildings.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outdoorlighting-4eZNHrh6tEvVOhjvtEnN0QnD4kFlwu.jpg',
    alt: 'Outdoor security lighting',
  },
  {
    title: 'Laundry & Utility',
    description: 'Purpose-built electrical solutions for laundry, utility rooms and renovation projects — done right the first time.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laundry-ju4QDwQSBMvNy1weixddijw7hJ2cTA.jpg',
    alt: 'Laundry room electrical work',
  },
  {
    title: 'Living Room',
    description: 'Create the perfect atmosphere with smart, stylish lighting solutions tailored for living and dining spaces.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/subtle-lighting-lHBczBCEPWwHI8Yjyfq4ckkccgIvH7.jpg',
    alt: 'Living room lighting',
  },
  {
    title: 'Indoor Lighting',
    description: 'Full range of indoor light fixture installations — from statement pendants and fans to practical downlights.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Indoorlighting-b2p34o3iN8r0UoNL1YWFWSqZlvC31y.jpg',
    alt: 'Indoor lighting installation',
  },
  {
    title: 'Switchboard Upgrades',
    description: 'Keep your home safe with modern switchboard upgrades, safety switches, and compliant wiring replacements.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/switchboard-CYBfqWlqXj9QM9dLXFNSbzuqDp26vH.jpg',
    alt: 'Switchboard upgrade and safety switches',
  },
  {
    title: 'Renovations & Extensions',
    description: 'Power points, data points, fans, heaters, and more — complete electrical for your home renovation.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kitchen-u3gWkZiYNAwik8nOXuDLbxtxcPJZdC.jpg',
    alt: 'Home renovation electrical work',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8" style={{ backgroundColor: '#F3F4F4' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-heading font-700 text-sm tracking-widest uppercase mb-3" style={{ color: '#B13BFF' }}>
            What We Do
          </p>
          <h2
            className="font-heading font-900 text-4xl md:text-5xl text-balance mb-5"
            style={{ color: '#090040' }}
          >
            Our Electrical Services
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: '#4a4a6a' }}>
            From simple repairs to full lighting transformations, we handle every job with the same
            commitment to quality, safety, and professionalism.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                style={{ backgroundColor: '#090040' }}
              />
              {/* Hover badge */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#contact"
                  className="btn-cta px-5 py-2.5 rounded-lg font-heading font-700 text-sm"
                  style={{ backgroundColor: '#FFCC00', color: '#090040' }}
                >
                  Get a Quote
                </a>
              </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start gap-2 mb-2">
                  <Zap size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#B13BFF' }} />
                  <h3 className="font-heading font-700 text-base" style={{ color: '#090040' }}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#4a4a6a' }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div
          className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: '#090040' }}
        >
          <div>
            <h3 className="font-heading font-800 text-2xl md:text-3xl text-balance" style={{ color: '#F3F4F4' }}>
              Not sure what you need?
            </h3>
            <p className="mt-2 text-sm md:text-base" style={{ color: '#9899b0' }}>
              Give Ben a call or send a message — we&apos;ll help you figure it out.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0417798312"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-700 text-base border-2 transition-all hover:bg-yellow-300/10"
              style={{ color: '#FFCC00', borderColor: '#FFCC00' }}
            >
              Call 0417 798 312
            </a>
            <a
              href="#contact"
              className="btn-cta inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-700 text-base"
            >
              <Zap size={18} strokeWidth={2.5} />
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
