import './globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LanguageProvider from '../components/LanguageProvider'
import WhatsAppButton from '../components/WhatsAppButton'
import { site } from '../lib/siteData'

export const metadata = {
  title: `${site.fullName} | Learn Skills, Shape the Future`,
  description: `${site.fullName} - Typing, Shorthand, CCC, Tally Prime, Advanced Excel & Computer Basics. Government certified courses in Ahmednagar.`,
  icons: { icon: '/favicon.svg' },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
