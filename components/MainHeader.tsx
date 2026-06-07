'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaUserGraduate, FaLaptop, FaCertificate, FaArrowRight } from 'react-icons/fa'
import LCILogo from './LCILogo'
import { site } from '../lib/siteData'
import { useLanguage } from './LanguageProvider'

const features = [
  { icon: FaUserGraduate, label: 'Experienced Faculty' },
  { icon: FaLaptop, label: '100% Practical' },
  { icon: FaCertificate, label: 'Govt. Certified Courses' },
]

export default function MainHeader() {
  const { t } = useLanguage()
  return (
    <div className="bg-white/95 border-b border-slate-200/70 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <span className="rounded-2xl bg-white p-1.5 shadow-lg shadow-blue-950/10 ring-1 ring-slate-200">
            <LCILogo size={74} />
          </span>
          <div>
            <div className="flex items-baseline gap-1 leading-tight">
              <span className="text-3xl md:text-4xl font-black text-danger tracking-tight uppercase">{t(site.name)}</span>
            </div>
            <div className="text-primary font-extrabold text-sm tracking-[0.16em]">{t(site.subtitle)}</div>
            <div className="text-[11px] text-slate-500 font-medium">{t(site.tagline)}</div>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-3">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
              <Icon className="text-primary text-base shrink-0" />
              <span className="text-xs font-bold text-slate-700 whitespace-nowrap">{t(label)}</span>
            </div>
          ))}
        </div>

        <div className="fixed top-4 right-4 z-50">
          <div className="rounded-2xl bg-white p-1 shadow-sm">
            <Image src={encodeURI('/images/logo/Logo 2.png')} alt="Logo 2" width={64} height={64} className="object-contain" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50/80 px-3 py-2 shadow-sm">
          <div className="w-11 h-11 rounded-2xl bg-danger flex items-center justify-center shrink-0 shadow-md shadow-red-900/20">
            <FaPhone className="text-white text-base rotate-90" />
          </div>
          <div>
            <div className="text-xs text-primary font-medium">{t('Call Us Now')}</div>
            <a href={`tel:+91${site.phone.replace(/\s/g, '')}`} className="group flex items-center gap-2 text-lg font-black text-slate-900">
              +91 {site.phone}
              <FaArrowRight className="text-xs text-danger transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
