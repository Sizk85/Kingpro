import type { Metadata } from 'next'
import './globals.css'
import LineFab from '@/components/LineFab'

export const metadata: Metadata = {
  title: 'Kingpro Topup | เติมเกมไว ปลอดภัย ราคาโปร',
  description: 'บริการเติมเกม/โค้ดดิจิทัล รวดเร็ว ปลอดภัย ราคาเป็นกันเอง รองรับหลายเกม ยืนยันไว มีทีมงานดูแล',
  keywords: 'เติมเกม, topup, rov, free fire, pubg, valorant, genshin, roblox, steam, google play, itunes',
  openGraph: {
    title: 'Kingpro Topup | เติมเกมไว ปลอดภัย ราคาโปร',
    description: 'บริการเติมเกม/โค้ดดิจิทัล รวดเร็ว ปลอดภัย ราคาเป็นกันเอง รองรับหลายเกม ยืนยันไว มีทีมงานดูแล',
    images: [
      {
        url: '/images/og fb.jpg',
        width: 1200,
        height: 630,
        alt: 'Kingpro Topup - เติมเกมไว ปลอดภัย ราคาโปร',
      },
    ],
    type: 'website',
    locale: 'th_TH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingpro Topup | เติมเกมไว ปลอดภัย ราคาโปร',
    description: 'บริการเติมเกม/โค้ดดิจิทัล รวดเร็ว ปลอดภัย ราคาเป็นกันเอง รองรับหลายเกม ยืนยันไว มีทีมงานดูแล',
    images: ['/images/og fb.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <LineFab />
      </body>
    </html>
  )
}