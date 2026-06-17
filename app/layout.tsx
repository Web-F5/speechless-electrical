import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600', '700'] })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-heading', weight: ['400', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Speechless Electrical | Licensed Electrician Seymour VIC',
  description:
    'Speechless Electrical — licensed electrical contractor servicing Seymour, Broadford, Kilmore, Wallan and surrounds. Lighting, switchboards, renovations & more. Call 0417 798 312.',
  keywords: 'electrician Seymour, licensed electrician Victoria, electrical contractor, Speechless Electrical, lighting installation',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#090040',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
