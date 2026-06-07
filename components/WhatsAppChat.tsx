import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { site } from '../lib/siteData'
import { useLanguage } from './LanguageProvider'

export default function WhatsAppChat() {
  const { t } = useLanguage()
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white rounded shadow p-3 transition-colors"
    >
      <FaWhatsapp className="text-3xl shrink-0" />
      <div>
        <div className="font-bold text-sm">{t('whatsappChat')}</div>
        <div className="text-xs text-white/90">{t('talkWhatsApp')}</div>
      </div>
    </a>
  )
}
