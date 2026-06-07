'use client'

import React from 'react'
import { FaAward, FaCheckCircle, FaLaptopCode } from 'react-icons/fa'
import { site } from '../../lib/siteData'
import { useLanguage } from '../../components/LanguageProvider'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="container page-shell">
      <div className="page-card p-6 md:p-9">
        <p className="section-kicker">{t(site.name)}</p>
        <h1 className="section-title mt-2">{t('aboutUsPage')}</h1>
        <p className="section-copy mt-6">
          <strong>{t(site.name)} {t(site.subtitle)}</strong> {t('aboutIntro')}
        </p>
        <p className="section-copy mt-4">
          {t('aboutMission')}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { label: 'Experienced Faculty', icon: FaAward },
            { label: 'Modern Computer Lab', icon: FaLaptopCode },
            { label: 'Government Certified Courses', icon: FaCheckCircle },
          ].map(({ label, icon: Icon }) => (
            <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
              <Icon className="mx-auto mb-3 text-2xl text-primary" />
              <div className="font-black text-primary">{t(label)}</div>
            </div>
          ))}
        </div>
        <p className="mt-7 rounded-2xl bg-blue-50 p-4 text-sm font-bold text-primary">{t(site.tagline)}</p>
      </div>
    </div>
  )
}
