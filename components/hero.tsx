'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Phone, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react'

const desktopSlides = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kitchen-u3gWkZiYNAwik8nOXuDLbxtxcPJZdC.jpg',
    alt: 'Professional kitchen lighting installation',
    label: 'Kitchen Lighting',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/subtle-lighting-lHBczBCEPWwHI8Yjyfq4ckkccgIvH7.jpg',
    alt: 'Living room subtle lighting installation',
    label: 'Living Room',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outdoorlighting-4eZNHrh6tEvVOhjvtEnN0QnD4kFlwu.jpg',
    alt: 'Outdoor security lighting installation',
    label: 'Outdoor Lighting',
  },
]

const mobileSlides = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Indoorlighting-b2p34o3iN8r0UoNL1YWFWSqZlvC31y.jpg',
    alt: 'Indoor lighting installation',
    label: 'Indoor Lighting',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ceiling-downlights-vIMxeuWg8hvHx4v1DPBiv0gkrcYrkP.jpg',
    alt: 'Ceiling downlights installation',
    label: 'Ceiling Downlights',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/switchboard-CYBfqWlqXj9QM9dLXFNSbzuqDp26vH.jpg',
    alt: 'Switchboard upgrade and safety switches',
    label: 'Switchboard Upgrades',
  },
]

const INTERVAL_MS = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches)
      setCurrent(0)
    }
    handler(mq)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const carouselSlides = isMobile ? mobileSlides : desktopSlides

  const goTo = useCallback((index: number) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTransitioning(false)
    }, 400)
  }, [transitioning])

  const next = useCallback(() => {
    goTo((current + 1) % carouselSlides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + carouselSlides.length) % carouselSlides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: 'clamp(420px, 70vh, 680px)', backgroundColor: '#090040' } as React.CSSProperties}
    >
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        {carouselSlides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current && !transitioning ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Dark overlay so text is always readable */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(9,0,64,0.88) 0%, rgba(71,19,150,0.6) 60%, rgba(9,0,64,0.92) 100%)' }}
        />
      </div>

      {/* Decorative glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: '#B13BFF' }}
      />

      {/* Carousel nav arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border transition-all hover:scale-110"
        style={{ borderColor: 'rgba(255,204,0,0.4)', backgroundColor: 'rgba(9,0,64,0.6)', color: '#FFCC00' }}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border transition-all hover:scale-110"
        style={{ borderColor: 'rgba(255,204,0,0.4)', backgroundColor: 'rgba(9,0,64,0.6)', color: '#FFCC00' }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel dot indicators — desktop only (mobile rendered in content flow below) */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 gap-2">
        {carouselSlides.map((slide, i) => (
          <button
            key={slide.label}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${slide.label}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              backgroundColor: i === current ? '#FFCC00' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>

      {/* Current slide label — desktop only, top-right */}
      <div
        className="hidden md:block absolute bottom-24 right-6 z-20 px-3 py-1 rounded-full text-xs font-heading font-600 tracking-wide"
        style={{ backgroundColor: 'rgba(71,19,150,0.7)', color: '#F3F4F4', backdropFilter: 'blur(4px)' }}
      >
        {carouselSlides[current].label}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 flex flex-col items-center text-center gap-8 w-full">
        {/* Text content */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <p
            className="font-heading font-600 text-sm md:text-base tracking-widest uppercase mb-4"
            style={{ color: '#B13BFF' }}
          >
            Licensed Electrical Contractor · Rec No. 35659
          </p>

          <h1
            className="font-heading font-900 text-4xl md:text-5xl lg:text-6xl leading-tight text-balance mb-5"
            style={{ color: '#F3F4F4' }}
          >
            Powering Seymour &amp;{' '}
            <span style={{ color: '#FFCC00' }}>Surrounding Areas</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-7 max-w-xl" style={{ color: '#c8c9d4' }}>
            From lighting upgrades to full switchboard replacements, Speechless Electrical delivers
            safe, compliant, and cost-effective solutions for homes and businesses across the region.
          </p>

          {/* Phone number — prominent */}
          <a
            href="tel:0417798312"
            className="inline-flex items-center gap-3 mb-7 px-6 py-4 rounded-xl font-heading font-800 text-2xl border-2 transition-transform hover:scale-105"
            style={{ color: '#FFCC00', borderColor: '#FFCC00', backgroundColor: 'rgba(255,204,0,0.08)' }}
          >
            <Phone size={28} strokeWidth={2.5} />
            0417 798 312
          </a>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-cta hidden md:inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-700 text-base"
            >
              <Zap size={20} strokeWidth={2.5} />
              Get a Free Quote
            </a>
            <a
              href="#quote-form"
              className="btn-cta md:hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-700 text-base"
            >
              <Zap size={20} strokeWidth={2.5} />
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-700 text-base border-2 transition-all hover:bg-white/10"
              style={{ color: '#F3F4F4', borderColor: '#471396' }}
            >
              View Our Services
            </a>
          </div>

          {/* Dots + label — mobile only, in flow after buttons */}
          <div className="flex md:hidden flex-col items-center gap-2 mt-6">
            <div className="flex gap-2">
              {carouselSlides.map((slide, i) => (
                <button
                  key={slide.label}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${slide.label}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    backgroundColor: i === current ? '#FFCC00' : 'rgba(255,255,255,0.4)',
                  }}
                />
              ))}
            </div>
            <div
              className="px-3 py-1 rounded-full text-xs font-heading font-600 tracking-wide"
              style={{ backgroundColor: 'rgba(71,19,150,0.7)', color: '#F3F4F4', backdropFilter: 'blur(4px)' }}
            >
              {carouselSlides[current].label}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
