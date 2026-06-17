'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Karma L',
    text: 'Excellent service, professional, great communication and reliable. He\'s now our go-to electrician. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Carol Ingham',
    text: 'Absolutely outstanding service from Speechless Electrical! Ben is everything you could hope for in a tradie — reliable, professional, and genuinely great at what he does. He showed up on time, worked efficiently, and explained everything.',
    rating: 5,
  },
  {
    name: 'Lisa Symons',
    text: 'Highly rate and recommend Ben. My daughter was heavily pregnant and needed an AC wired in just before Christmas. Ben came through without hesitation — absolute legend.',
    rating: 5,
  },
  {
    name: 'Monica Schutze',
    text: 'Ben was terrific! He installed a ceiling fan quickly and efficiently at really reasonable rates. If you need quality work done quickly, I can highly recommend Speechless Electrical!',
    rating: 5,
  },
  {
    name: 'Concettina Wigney',
    text: 'Ben came and installed some downlights at our home and removed some old light fittings. He was reliable, friendly, explained everything really well and cleaned up after he finished. Great local tradesman! Thanks Ben!',
    rating: 5,
  },
  {
    name: 'Leah Konings',
    text: 'So grateful to Ben from Speechless Electrical for saving our fridge/freezer — and the internet/my sanity! After arriving home from the long weekend, we had a fault we couldn\'t find. Quick call to Ben in the morning sorted everything.',
    rating: 5,
  },
  {
    name: 'Kasey Campbell',
    text: 'I couldn\'t recommend Speechless Electrical more highly. From the moment Ben arrived, the professionalism, efficiency, and attention to detail were second to none.',
    rating: 5,
  },
  {
    name: 'Matthew Sanderson',
    text: 'Amazing work! Can\'t speak more highly of Ben, very polite, very professional, and his work speaks for itself! I can\'t recommend him more highly for anyone looking for electrical work done. We will definitely be booking him again.',
    rating: 5,
  },
  {
    name: 'Brodie Sherwood',
    text: 'Couldn\'t recommend Ben any higher. Very professional, friendly, neat and tidy. Ben always does a great job with customer satisfaction in mind.',
    rating: 5,
  },
  {
    name: 'Sue Maddocks',
    text: 'Always pleasant and helpful. Never have to chase up, very reliable, and doesn\'t waste time. I would recommend his work to anybody. A great electrician — and they are hard to find these days.',
    rating: 5,
  },
  {
    name: 'Andy Salmon',
    text: 'Great service. On time, very knowledgeable and was very price competitive. Will definitely have Speechless back when I need anything else done.',
    rating: 5,
  },
  {
    name: 'Kyle Boughen',
    text: 'Simply the best electrician you\'re going to meet, 10/10 work and exceptionally charismatic.',
    rating: 5,
  },
  {
    name: 'Simon Rigg',
    text: 'Excellent, on time, professional quality work at a competitive price. Couldn\'t be happier.',
    rating: 5,
  },
  {
    name: 'Rebecca Ruth',
    text: 'Great service, reliable and great communication!! Highly recommend!!',
    rating: 5,
  },
]

const CARDS_PER_PAGE = 3

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'fill-current' : ''}
          style={{ color: '#FFCC00' }}
        />
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center font-heading font-800 text-base flex-shrink-0"
      style={{ backgroundColor: '#471396', color: '#FFCC00' }}
    >
      {initials}
    </div>
  )
}

export default function Reviews() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE)
  const current = reviews.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE)

  return (
    <section id="reviews" className="py-24 px-4 md:px-8" style={{ backgroundColor: '#F3F4F4' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-heading font-700 text-sm tracking-widest uppercase mb-3" style={{ color: '#B13BFF' }}>
            Customer Reviews
          </p>
          <h2 className="font-heading font-900 text-4xl md:text-5xl text-balance mb-4" style={{ color: '#090040' }}>
            What Our Customers Say
          </h2>
          {/* Google branding row */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl shadow-sm" style={{ backgroundColor: '#090040' }}>
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="#FFCC00" style={{ color: '#FFCC00' }} />
              ))}
            </div>
            <span className="font-heading font-700 text-sm" style={{ color: '#F3F4F4' }}>
              5.0 · {reviews.length} Google Reviews
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {current.map((review) => (
            <div
              key={review.name}
              className="relative rounded-2xl p-6 shadow-md flex flex-col gap-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <Quote
                size={32}
                className="absolute top-4 right-5 opacity-10"
                style={{ color: '#471396' }}
              />
              <StarRating count={review.rating} />
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#4a4a6a' }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: '#e8e9e9' }}>
                <Avatar name={review.name} />
                <div>
                  <p className="font-heading font-700 text-sm" style={{ color: '#090040' }}>
                    {review.name}
                  </p>
                  <p className="text-xs" style={{ color: '#9899b0' }}>
                    Google Review
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all disabled:opacity-40 hover:bg-purple-100"
            style={{ borderColor: '#471396', color: '#471396' }}
            aria-label="Previous reviews"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-heading font-600 text-sm" style={{ color: '#4a4a6a' }}>
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all disabled:opacity-40 hover:bg-purple-100"
            style={{ borderColor: '#471396', color: '#471396' }}
            aria-label="Next reviews"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
