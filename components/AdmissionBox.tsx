'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageProvider'
import { site } from '../lib/siteData'

export default function AdmissionBox({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage()
  const [form, setForm] = useState({ fullName: '', mobile: '', email: '', course: '' })
  const [status, setStatus] = useState<string | null>(null)

  function getWhatsAppUrl() {
    const textLines = [
      'Admission Request from Website',
      `Name: ${form.fullName}`,
      `Mobile: ${form.mobile}`,
      `Email: ${form.email || 'N/A'}`,
      `Course: ${form.course || 'Not selected'}`,
    ]

    const text = textLines.join('\n')
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.fullName || !form.mobile || !form.course) {
      setStatus(t('fillAllFields'))
      return
    }

    const url = getWhatsAppUrl()
    setStatus(t('openingWhatsApp'))
    window.open(url, '_blank')
  }

  if (compact) {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-danger to-[#8f0000] shadow-xl shadow-red-900/20">
        <div className="p-5 text-white">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">{t('bookAdmission')}</p>
          <Link
            href="/admission"
            className="mt-4 inline-flex rounded-full bg-yellow-300 px-6 py-2 text-sm font-black text-[#071426] shadow-lg transition-colors hover:bg-yellow-200"
          >
            {t('applyNowCaps')}
          </Link>
          <p className="mt-4 text-xs leading-5 text-white/90">{t('admissionNotice')}</p>
        </div>
        <div className="absolute right-2 bottom-2 opacity-90">
          <div className="bg-white text-danger text-[9px] font-bold px-2 py-1 rounded shadow text-center leading-tight">
            <div className="text-[8px] text-gray-500">{t('newBadge')}</div>
            {t('learn3Courses')}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-card p-5 sm:p-7">
      <h4 className="text-2xl font-black text-slate-900">{t('onlineAdmissionForm')}</h4>
      <p className="section-copy mt-2">{t('formDescription')}</p>
      <form onSubmit={submit} className="mt-5 space-y-3">
        <input
          required
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          placeholder={t('fullName')}
          className="form-control"
        />
        <input
          required
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          placeholder={t('mobileNumber')}
          className="form-control"
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder={t('email')}
          className="form-control"
        />
        <select
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          className="form-control"
        >
          <option value="">{t('selectCourse')}</option>
          <option>{t('typing')}</option>
          <option>{t('shorthand')}</option>
          <option>{t('ccc')}</option>
          <option>{t('tallyPrime')}</option>
          <option>{t('advancedExcel')}</option>
          <option>{t('computerBasics')}</option>
        </select>
        <button type="submit" className="btn-primary w-full py-3">
          {t('applyNowCaps')}
        </button>
        {status && <div className="text-sm text-center text-slate-600">{status}</div>}
      </form>
    </div>
  )
}
