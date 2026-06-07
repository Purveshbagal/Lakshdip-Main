'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaBell, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa'
import { defaultNotices } from '../../lib/siteData'

type Notice = {
  _id?: string
  title: string
  titleKey?: string
  date?: string
  badge?: string
  content?: string
  url?: string
  isPdf?: boolean
}

type ApiNotice = Partial<Notice> & {
  name?: string
  link?: string
  createdAt?: string
  isNew?: boolean
}

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>(defaultNotices)
  const [heading, setHeading] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/notices')
      .then((r) => r.json())
      .then((data) => {
        if (data && Array.isArray(data.items) && data.items.length > 0) {
          const normalized = data.items.map((it: ApiNotice) => ({
            title: it.title || it.name || 'Notice',
            url: it.url || it.link || '',
            badge: it.badge || (it.isNew ? 'NEW' : undefined),
            isPdf: !!it.isPdf || (it.url ? /\.pdf($|\?)/i.test(it.url) : false),
            date: it.createdAt || it.date,
          }))
          setNotices(normalized)
          setHeading(data.heading || null)
        } else if (Array.isArray(data)) {
          setNotices(data)
        }
        setError(null)
      })
      .catch((err) => {
        console.error('Failed to load notices:', err)
        setError('Unable to load notices')
      })
      .finally(() => setLoading(false))
  }, [])

  const formatDate = (value?: string) => {
    if (!value) return 'Latest update'
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return 'Latest update'
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })
  }

  return (
    <div className="container page-shell">
      <div className="page-card p-6 md:p-9">
        <div className="mb-8 text-center">
          <p className="section-kicker">Announcements</p>
          <h1 className="section-title mt-2">{heading || 'All Notices'}</h1>
          <p className="section-copy mx-auto mt-3 max-w-2xl">Important exam, admission and institute updates in one place.</p>
        </div>

        {loading ? (
          <div className="py-12 text-center text-sm font-semibold text-gray-600">Loading notices...</div>
        ) : error ? (
          <div className="py-12 text-center text-sm font-semibold text-red-600">{error}</div>
        ) : (
          <ul className="grid gap-4">
            {notices.map((n, i) => {
              const href = n.url || ''
              const isExternal = href.startsWith('http')
              return (
                <li key={n._id || `${n.title}-${i}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                      {n.isPdf ? <FaFilePdf className="text-danger" /> : <FaBell />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {n.badge && (
                          <span className="rounded-full bg-danger px-2.5 py-1 text-[10px] font-black text-white">{n.badge}</span>
                        )}
                        <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{formatDate(n.date)}</span>
                      </div>
                      {href ? (
                        <Link
                          href={href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="mt-2 inline-flex items-start gap-2 text-base font-black text-slate-900 transition-colors hover:text-primary"
                        >
                          {n.title}
                          <FaExternalLinkAlt className="mt-1 shrink-0 text-xs text-danger" />
                        </Link>
                      ) : (
                        <h3 className="mt-2 text-base font-black text-slate-900">{n.title}</h3>
                      )}
                      {n.content && <p className="section-copy mt-2">{n.content}</p>}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
