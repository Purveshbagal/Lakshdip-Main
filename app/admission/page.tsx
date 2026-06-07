'use client'

import React from 'react'
import { FaCheck, FaClock, FaPhoneAlt } from 'react-icons/fa'
import AdmissionBox from '../../components/AdmissionBox'
import WhatsAppChat from '../../components/WhatsAppChat'
import { useLanguage } from '../../components/LanguageProvider'
import { site } from '../../lib/siteData'

export default function AdmissionPage() {
  const { t } = useLanguage()
  const benefits = [t('experiencedFaculty'), t('practicalTraining'), t('governmentCertifiedCourses'), t('affordableFees')]

  return (
    <div className="container page-shell grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <p className="section-kicker">Admissions Open</p>
        <h1 className="section-title mb-6 mt-2">{t('admissionPageTitle')}</h1>
        <AdmissionBox />
      </div>

      <aside className="space-y-4">
        <div className="rounded-3xl bg-gradient-to-br from-[#071426] to-primary p-6 text-white shadow-xl shadow-blue-950/20">
          <h3 className="font-black">{t('whyChooseUs')}</h3>
          <ul className="mt-4 space-y-3 text-sm font-semibold">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-[11px] text-primary">
                  <FaCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="page-card p-5">
          <div className="font-black text-primary">{t('needHelp')}</div>
          <a href={`tel:+91${site.phone.replace(/\s/g, '')}`} className="mt-3 flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-danger">
            <FaPhoneAlt className="text-danger" />
            {t('callUsNow')}: +91 {site.phone}
          </a>
          <WhatsAppChat />
          <p className="mt-2 flex items-center gap-3 text-xs font-semibold text-gray-500">
            <FaClock className="text-primary" />
            {t('workingHours')}
          </p>
        </div>
      </aside>
    </div>
  )
}
