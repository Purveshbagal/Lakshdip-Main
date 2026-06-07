'use client'

import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { useLanguage } from '../../components/LanguageProvider'

const downloads = [
  { name: 'Admission Form (PDF)', size: '245 KB' },
  { name: 'GCC-TBC Exam Application Guide', size: '180 KB' },
  { name: 'CCC Course Syllabus', size: '120 KB' },
  { name: 'Typing Speed Practice Sheet', size: '95 KB' },
  { name: 'Institute Brochure 2024', size: '1.2 MB' },
]

export default function DownloadsPage() {
  const { t } = useLanguage()

  return (
    <div className="container page-shell">
      <div className="page-card p-6 md:p-9">
        <div className="mb-8 text-center">
          <p className="section-kicker">Student Resources</p>
          <h1 className="section-title mt-2">{t('downloadCenterTitle')}</h1>
          <p className="section-copy mx-auto mt-3 max-w-2xl">{t('downloadCenterDescription')}</p>
        </div>
        <ul className="grid gap-4">
          {downloads.map((d) => (
            <li key={d.name} className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div>
                <div className="font-black text-gray-800">{d.name}</div>
                <div className="mt-1 text-xs font-semibold text-gray-400">{d.size}</div>
              </div>
              <button className="btn-primary px-4 py-2 text-sm">
                <FaDownload /> {t('download')}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
