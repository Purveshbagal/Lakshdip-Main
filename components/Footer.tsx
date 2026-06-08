'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { site } from '../lib/siteData'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <>
      <footer className="mt-0 bg-[#071426] text-white">
        <div className="h-1 bg-gradient-to-r from-danger via-yellow-300 to-primary" />
        <div className="container py-10">
          <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <FaMapMarkerAlt className="mb-4 text-2xl text-danger" />
              <h4 className="mb-1 font-black text-white">{t('Address')}</h4>
              <p className="leading-relaxed text-white/70">{t('addressLine')}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <Image src={encodeURI('/images/logo/call logo.png')} alt="Call Logo" width={32} height={32} className="mb-4 object-contain" />
              <h4 className="mb-1 font-black text-white">{t('Phone')}</h4>
              <a href={`tel:+91${site.phone.replace(/\s/g, '')}`} className="block text-white/75 hover:text-yellow-300">
                +91 {site.phone}
              </a>
              {site.phone2 && (
                <a href={`tel:+91${site.phone2.replace(/\s/g, '')}`} className="block text-white/75 hover:text-yellow-300">
                  +91 {site.phone2}
                </a>
              )}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <FaEnvelope className="mb-4 text-2xl text-sky-300" />
              <h4 className="mb-1 font-black text-white">{t('emailWeb')}</h4>
              <a href={`mailto:${site.email}`} className="block break-words text-white/75 hover:text-yellow-300">
                {site.email}
              </a>
              <a href={`https://${site.website}`} className="block break-words text-white/75 hover:text-yellow-300">
                {site.website}
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h4 className="mb-3 font-black text-white">{t('followUs')}</h4>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/share/1BkxQK1Abi/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877f2] text-white hover:opacity-80">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/lakshdipcomputershevgaon?igsh=YWI1ZmVmM3N6Nmdw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white hover:opacity-80">
                  <FaInstagram />
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold">
                <Link href="/" className="text-white/70 hover:text-yellow-300">{t('Home')}</Link>
                <Link href="/courses" className="text-white/70 hover:text-yellow-300">{t('Courses')}</Link>
                <Link href="/admission" className="text-white/70 hover:text-yellow-300">{t('Admission')}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black/25 py-3 text-center text-xs text-white/70">
          Copyright {new Date().getFullYear()} {t(site.name)} {t(site.subtitle)}. All Rights Reserved.
        </div>
      </footer>

      {/* Mobile fixed call button: visible only on small screens */}
      <div className="block md:hidden">
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-400/95 backdrop-blur-sm">
          <div className="container flex items-center justify-center py-3">
            <a
              href={`tel:+91${site.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 rounded-full bg-[#071426] text-white px-4 py-2 font-semibold shadow-lg"
              aria-label={t('callUsNow')}
            >
              <Image src={encodeURI('/images/logo/call logo.png')} alt="Call Logo" width={20} height={20} className="object-contain" />
              <span>{t('callUsNow')}</span>
            </a>
          </div>
        </div>
        {/* Add spacing so page content isn't hidden behind the fixed bar */}
        <div className="h-16" />
      </div>
    </>
  )
}
