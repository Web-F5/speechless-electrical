'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Zap, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-8" style={{ backgroundColor: '#090040' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-heading font-700 text-sm tracking-widest uppercase mb-3" style={{ color: '#B13BFF' }}>
            Get In Touch
          </p>
          <h2 className="font-heading font-900 text-4xl md:text-5xl text-balance mb-4" style={{ color: '#F3F4F4' }}>
            Request a Free Quote
          </h2>
          <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: '#9899b0' }}>
            Ready to get started? Fill in the form below or give Ben a call — we&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Contact info */}
          <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6">
            {/* Phone — very prominent */}
            <a
              href="tel:0417798312"
              className="flex items-center gap-4 p-5 rounded-2xl border-2 transition-transform hover:scale-105"
              style={{ backgroundColor: 'rgba(255,204,0,0.08)', borderColor: '#FFCC00' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#FFCC00' }}
              >
                <Phone size={26} style={{ color: '#090040' }} strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-heading font-700 text-xs tracking-widest uppercase mb-0.5" style={{ color: '#9899b0' }}>
                  Call Us Now
                </p>
                <p className="font-heading font-900 text-2xl" style={{ color: '#FFCC00' }}>
                  0417 798 312
                </p>
              </div>
            </a>

            <div
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#471396' }}
              >
                <MapPin size={22} style={{ color: '#FFCC00' }} />
              </div>
              <div>
                <p className="font-heading font-700 text-xs tracking-widest uppercase mb-0.5" style={{ color: '#9899b0' }}>
                  Service Area
                </p>
                <p className="font-heading font-600 text-sm" style={{ color: '#F3F4F4' }}>
                  Seymour & Surrounds, VIC
                </p>
              </div>
            </div>

            <div
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#471396' }}
              >
                <Zap size={22} style={{ color: '#FFCC00' }} />
              </div>
              <div>
                <p className="font-heading font-700 text-xs tracking-widest uppercase mb-0.5" style={{ color: '#9899b0' }}>
                  Licence Number
                </p>
                <p className="font-heading font-600 text-sm" style={{ color: '#F3F4F4' }}>
                  Rec No. 35659
                </p>
              </div>
            </div>

            {/* Trust badges */}
            <div
              className="p-5 rounded-2xl"
              style={{ backgroundColor: '#471396' }}
            >
              <p className="font-heading font-700 text-sm mb-3" style={{ color: '#FFCC00' }}>
                Why choose Speechless?
              </p>
              {[
                'Licensed & fully insured',
                'Free, no-obligation quotes',
                'Locally based in Seymour',
                'Over 10 years experience',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 mb-2 last:mb-0">
                  <CheckCircle size={14} style={{ color: '#FFCC00' }} />
                  <span className="text-xs" style={{ color: '#F3F4F4' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div id="quote-form" className="flex-1">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {status === 'success' ? (
                <div className="text-center py-16">
                  <CheckCircle size={60} className="mx-auto mb-4" style={{ color: '#FFCC00' }} />
                  <h3 className="font-heading font-800 text-2xl mb-2" style={{ color: '#F3F4F4' }}>
                    Message Sent!
                  </h3>
                  <p className="mb-6" style={{ color: '#9899b0' }}>
                    Thanks for reaching out. Ben will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-cta px-6 py-3 rounded-xl font-heading font-700 text-base"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="hidden" name="access_key" value="083e5d17-ed30-45ae-b7c0-2f25baced198" />
                  <input type="hidden" name="subject" value="New Quote Request — Speechless Electrical Website" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-heading font-600 text-xs tracking-wide uppercase mb-2" style={{ color: '#9899b0' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#F3F4F4',
                          caretColor: '#FFCC00',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-600 text-xs tracking-wide uppercase mb-2" style={{ color: '#9899b0' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#F3F4F4',
                          caretColor: '#FFCC00',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading font-600 text-xs tracking-wide uppercase mb-2" style={{ color: '#9899b0' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="04xx xxx xxx"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#F3F4F4',
                        caretColor: '#FFCC00',
                      }}
                    />
                  </div>

                  <div>
                    <label className="block font-heading font-600 text-xs tracking-wide uppercase mb-2" style={{ color: '#9899b0' }}>
                      Type of Work
                    </label>
                    <select
                      name="service_type"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                      style={{
                        backgroundColor: '#1a1060',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#F3F4F4',
                      }}
                    >
                      <option value="">Select a service...</option>
                      <option>Lighting Installation / Upgrade</option>
                      <option>Switchboard Upgrade</option>
                      <option>Renovation / Extension</option>
                      <option>Outdoor Lighting</option>
                      <option>Power Points / Data Points</option>
                      <option>Safety Switches</option>
                      <option>Fault Finding / Repairs</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-heading font-600 text-xs tracking-wide uppercase mb-2" style={{ color: '#9899b0' }}>
                      Description of Requirements *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe the work you need done, your location, and any other details..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 resize-none"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#F3F4F4',
                        caretColor: '#FFCC00',
                      }}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                      style={{ backgroundColor: 'rgba(220,38,38,0.15)', color: '#fca5a5' }}
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or call us directly on 0417 798 312.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-cta w-full py-4 rounded-xl font-heading font-700 text-base flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <Zap size={20} strokeWidth={2.5} />
                    {status === 'submitting' ? 'Sending...' : 'Send Message & Request Quote'}
                  </button>

                  <p className="text-center text-xs" style={{ color: '#9899b0' }}>
                    Or call Ben directly:{' '}
                    <a href="tel:0417798312" className="font-700 underline" style={{ color: '#FFCC00' }}>
                      0417 798 312
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
