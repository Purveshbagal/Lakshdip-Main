import React from 'react'
import { site } from '../lib/siteData'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-md text-white"
    >
      WhatsApp
    </a>
  )
}
