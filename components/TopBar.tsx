'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { site, topBarLinks } from '../lib/siteData'
import { useLanguage, languages } from './LanguageProvider'

export default function TopBar({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (open: boolean) => void }) {
  const { t, lang, setLang } = useLanguage()

  return (
    <>
      <div className="hidden md:block bg-[#071426] text-white text-xs">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-2.5">
          <div className="flex flex-wrap items-center gap-4 text-slate-200">
            <span className="font-semibold tracking-[0.08em] text-white">{t('topBarText')}</span>
            <span className="inline-flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-yellow-300" />
              {t('addressLine')}
            </span>
            <a href={`tel:+91${site.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 hover:text-yellow-300">
              <Image src={encodeURI('/images/logo/call logo.png')} alt="Call Logo" width={18} height={18} className="object-contain" />
              +91 {site.phone}
            </a>
            {site.phone2 && (
              <a href={`tel:+91${site.phone2.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 hover:text-yellow-300">
                <Image src={encodeURI('/images/logo/call logo.png')} alt="Call Logo" width={18} height={18} className="object-contain" />
                +91 {site.phone2}
              </a>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {topBarLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-yellow-300 transition-colors">
                {t(l.label)}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <label className="sr-only">{t('topBarLanguage')}</label>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as typeof lang)}
                className="rounded-full bg-white/10 border border-white/20 text-white text-xs px-3 py-1 outline-none appearance-none focus:ring-2 focus:ring-yellow-300"
              >
                {languages.map((option) => (
                  <option key={option.code} value={option.code} className="bg-slate-900 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/share/1BkxQK1Abi/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-7 h-7 rounded-full bg-[#1877f2] flex items-center justify-center text-[11px] hover:opacity-80">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/lakshdipcomputershevgaon?igsh=YWI1ZmVmM3N6Nmdw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-[11px] hover:opacity-80">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: show only language selector */}
      <div className="block md:hidden bg-[#071426] text-white text-xs">
        <div className="container flex items-center justify-end gap-3 py-2.5">
          <div className="flex items-center gap-2">
            <label className="sr-only">{t('topBarLanguage')}</label>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as typeof lang)}
              className="rounded-full bg-white/10 border border-white/20 text-white text-xs px-3 py-1 outline-none appearance-none focus:ring-2 focus:ring-yellow-300"
            >
              {languages.map((option) => (
                <option key={option.code} value={option.code} className="bg-slate-900 text-white">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <FaBars className="text-base" />
          </button>
        </div>
      </div>
    </>
  )
}
