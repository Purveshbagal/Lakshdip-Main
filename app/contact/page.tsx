'use client'

import React, { useState } from 'react'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { site } from '../../lib/siteData'
import { useLanguage } from '../../components/LanguageProvider'

const contactItems = [
  { key: 'address', icon: FaMapMarkerAlt, color: 'text-danger' },
  { key: 'phone', icon: FaPhone, color: 'text-primary' },
  { key: 'emailWeb', icon: FaEnvelope, color: 'text-sky-500' },
  { key: 'workingHours', icon: FaClock, color: 'text-emerald-600' },
]

export default function ContactPage() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')

  const values: Record<string, React.ReactNode> = {
    address: site.address,
    phone: (
      <>
        <a href={`tel:+91${site.phone.replace(/\s/g, '')}`} className="hover:text-danger">+91 {site.phone}</a>
        {site.phone2 && <span className="block">+91 {site.phone2}</span>}
      </>
    ),
    emailWeb: (
      <>
        <a href={`mailto:${site.email}`} className="break-words hover:text-danger">{site.email}</a>
        <span className="block break-words">{site.website}</span>
      </>
    ),
    workingHours: site.hours,
  }

  return (
    <div className="container page-shell">
      <div className="page-card p-6 md:p-9">
        <div className="mb-8 text-center">
          <p className="section-kicker">Reach Us</p>
          <h1 className="section-title mt-2">{t('contactPage')}</h1>
          <p className="section-copy mx-auto mt-3 max-w-2xl">Call, visit or send an enquiry for course details, batches and admissions.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="grid gap-4">
            {contactItems.map(({ key, icon: Icon, color }) => (
              <div key={key} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm ${color}`}>
                    <Icon />
                  </span>
                  <div>
                    <div className="font-black text-primary">{t(key)}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{values[key]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 p-6">
            <h3 className="text-xl font-black text-slate-900">{t('sendUsAMessage')}</h3>
            <form className="mt-5 space-y-3">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t('yourName')}
                className="form-control"
              />
              <input
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                placeholder={t('mobileNumber')}
                className="form-control"
              />
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t('yourMessage')}
                rows={4}
                className="form-control"
              />
              <button
                type="button"
                className="btn-primary px-7 py-3 text-sm"
                onClick={() => {
                  const text = [
                    `Hello ${t('lakshdipComputerInstitute')},`,
                    name ? `Name: ${name}` : '',
                    mobile ? `Mobile: ${mobile}` : '',
                    message ? `Message: ${message}` : '',
                  ]
                    .filter(Boolean)
                    .join('\n')

                  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
                  window.open(whatsappUrl, '_blank')
                }}
              >
                {t('sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
