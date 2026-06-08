'use client'

import React from 'react'
import { FaTrophy, FaUsers, FaCertificate, FaAward, FaHeadset } from 'react-icons/fa'
import { stats } from '../lib/siteData'
import { useLanguage } from './LanguageProvider'

const iconMap: Record<string, React.ElementType> = {
  trophy: FaTrophy,
  users: FaUsers,
  certificate: FaCertificate,
  badge: FaAward,
  headset: FaHeadset,
}

export default function StatsCounters() {
  const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#071426] via-primary to-[#001f5c] py-12 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />
      <div className="container">
        <div className="mb-7 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">{t('whyStudentsTrustUs')}</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight md:text-4xl">{t('resultsFocusedComputerEducation')}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/75">
            {t('practicalBatchesExamOrientedGuidance')}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {stats.map((s) => {
            const Icon = iconMap[s.icon] || FaTrophy
            return (
              <div key={s.label} className="flex items-center gap-3 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-lg shadow-black/10 backdrop-blur">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300 text-primary text-xl shadow-md">
                  <Icon />
                </span>
                <div>
                  <div className="text-xl md:text-2xl font-extrabold leading-tight">{s.value}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/80 mt-1">{t(s.labelKey ?? s.label)}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
