'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: '#090040', boxShadow: scrolled ? '0 4px 24px rgba(9,0,64,0.5)' : 'none' }}
    >
      {/* Top bar – phone number */}
      <div className="w-full text-center py-1.5 text-sm font-bold" style={{ backgroundColor: '#471396', color: '#FFCC00' }}>
        <a href="tel:0417798312" className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Phone size={14} strokeWidth={2.5} />
          Call Now: 0417 798 312
        </a>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SSWJgMSb0wryari5wc3H3I5c5KJEpT.jpg"
            alt="Speechless Electrical logo"
            width={52}
            height={52}
            className="rounded-full object-cover border-2"
            style={{ borderColor: '#B13BFF' }}
          />
          <div>
            <span className="block font-heading font-900 text-lg leading-tight" style={{ color: '#FFCC00' }}>
              SPEECHLESS
            </span>
            <span className="block font-heading text-xs tracking-widest uppercase" style={{ color: '#B13BFF' }}>
              Electrical
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading font-600 text-sm tracking-wide transition-colors duration-200 hover:text-yellow-300"
                style={{ color: '#F3F4F4' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-cta items-center gap-2 px-5 py-2.5 rounded-lg font-heading font-700 text-sm tracking-wide"
        >
          <Zap size={16} strokeWidth={2.5} />
          Get a Free Quote
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          style={{ color: '#FFCC00' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-6 pt-2" style={{ backgroundColor: '#090040' }}>
          <ul className="flex flex-col gap-4 mb-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-heading font-600 text-base py-1 border-b"
                  style={{ color: '#F3F4F4', borderColor: '#471396' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#quote-form"
            className="btn-cta flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-heading font-700 text-base w-full"
            onClick={() => setMobileOpen(false)}
          >
            <Zap size={18} strokeWidth={2.5} />
            Get a Free Quote
          </a>
          <a
            href="tel:0417798312"
            className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-heading font-700 text-base w-full border-2"
            style={{ color: '#FFCC00', borderColor: '#FFCC00' }}
          >
            <Phone size={18} strokeWidth={2.5} />
            0417 798 312
          </a>
        </div>
      )}
    </header>
  )
}
