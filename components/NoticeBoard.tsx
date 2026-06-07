"use client"

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { FaArrowRight, FaBell, FaClock, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa'
import { defaultNotices } from '../lib/siteData'
import { useLanguage } from './LanguageProvider'

type ExternalNotice = {
  title: string
  titleKey?: string
  url?: string
  isNew?: boolean
  isPdf?: boolean
  badge?: string
  date?: string
  createdAt?: string
}

type ApiNoticeInput = Partial<ExternalNotice> & {
  _id?: string
  name?: string
  link?: string
  href?: string
}

export default function NoticeBoard() {
  const { t } = useLanguage()
  const [notices, setNotices] = useState<ExternalNotice[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [fetchedAt, setFetchedAt] = useState<number | null>(null)
  const [fetchedHeading, setFetchedHeading] = useState<string | null>(null)
  const mounted = useRef(true)

  const fetchNotices = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/notices')
      if (!res.ok) throw new Error(`Status ${res.status}`)
      const data = await res.json()
      if (!mounted.current) return
      // Expecting { items: [...], fetchedAt, heading }
      if (data && Array.isArray(data.items)) {
        const norm = data.items.map((it: ApiNoticeInput) => ({
          title: it.title || it.name || it._id || 'Notice',
          url: it.url || it.link || it.href || '/notices',
          badge: it.badge || (it.isNew ? 'NEW' : undefined),
          isPdf: !!it.isPdf || (it.url ? /\.pdf($|\?)/i.test(it.url) : false),
          date: it.date || it.createdAt,
        }))
        setNotices(norm)
        setFetchedAt(data.fetchedAt || Date.now())
        setFetchedHeading(data.heading || null)
      } else if (Array.isArray(data)) {
        // backward-compat
        const norm = data.map((it: ApiNoticeInput) => ({
          title: it.title || it.name || 'Notice',
          titleKey: it.titleKey,
          url: it.url || '/notices',
          badge: it.badge || (it.isNew ? 'NEW' : undefined),
          isPdf: !!it.isPdf || (it.url ? /\.pdf($|\?)/i.test(it.url) : false),
          date: it.date || it.createdAt,
        }))
        setNotices(norm)
        setFetchedAt(Date.now())
        setFetchedHeading(null)
      } else {
        setNotices([])
        setFetchedAt(Date.now())
        setFetchedHeading(null)
      }
    } catch (err) {
      console.error('Failed to load MSCE notices', err)
      if (!mounted.current) return
      setError('Unable to load notices')
      setNotices([])
    } finally {
      if (mounted.current) setLoading(false)
    }
  }

  useEffect(() => {
    mounted.current = true
    fetchNotices()
    const interval = setInterval(fetchNotices, 30 * 60 * 1000) // 30 minutes
    return () => {
      mounted.current = false
      clearInterval(interval)
    }
  }, [])

  const displayed = notices ?? defaultNotices
  const displayedNotices = displayed.slice(0, 6) as ExternalNotice[]
  const shouldAutoScroll = displayedNotices.length > 3
  const scrollItems = shouldAutoScroll ? [...displayedNotices, ...displayedNotices] : displayedNotices
  const updatedLabel = fetchedAt
    ? new Date(fetchedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
    : null

  const formatDate = (value?: string) => {
    if (!value) return 'Latest update'
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return 'Latest update'
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
  }

  return (
    <div className="professional-card overflow-hidden rounded-[1.75rem]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#071426] via-primary to-[#001f5c] px-5 py-5 text-white">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent" />
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-yellow-200 ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
              Live Updates
            </div>
            <h3 className="mt-3 text-xl font-black tracking-tight">{t('noticeBoard')}</h3>
            <p className="mt-1 text-xs leading-5 text-white/75">
              {fetchedHeading || 'Exam, admission and institute announcements'}
            </p>
            {updatedLabel && (
              <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold text-yellow-100">
                <FaClock />
                Updated {updatedLabel}
              </div>
            )}
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-300 text-primary shadow-lg shadow-black/20">
            <FaBell />
          </div>
        </div>
        <Link href="/notices" className="mt-4 inline-flex items-center gap-2 text-xs font-black text-yellow-200 hover:text-white">
          {t('viewAll')} <FaArrowRight className="text-[10px]" />
        </Link>
      </div>

      {loading ? (
        <div className="px-5 py-10 text-center text-sm font-semibold text-slate-500">Loading notices...</div>
      ) : error ? (
        <div className="px-5 py-10 text-center text-sm font-semibold text-red-600">{error}</div>
      ) : (
        <div className="notice-scroll-mask max-h-[360px] overflow-hidden bg-slate-50/80 p-3">
          <ul className={`space-y-3 ${shouldAutoScroll ? 'notice-auto-scroll' : ''}`}>
            {scrollItems.map((n, i) => {
              const duplicate = shouldAutoScroll && i >= displayedNotices.length
              const href = n.url || '/notices'
              const isExternal = href.startsWith('http')
              const title = n.titleKey ? t(n.titleKey) : n.title

              return (
                <li key={`${href || title}-${i}`} aria-hidden={duplicate}>
                  <Link
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    tabIndex={duplicate ? -1 : undefined}
                    className="group block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary">
                        {n.isPdf ? <FaFilePdf className="text-danger" /> : <FaBell />}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          {(n.isNew || n.badge) && (
                            <span className="rounded-full bg-danger px-2 py-0.5 text-[9px] font-black uppercase tracking-wide text-white">
                              {(n.isNew && 'NEW') || n.badge}
                            </span>
                          )}
                          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                            {formatDate(n.date || n.createdAt)}
                          </span>
                        </span>
                        <span className="mt-1.5 block text-sm font-extrabold leading-snug text-slate-800 group-hover:text-primary">
                          {title}
                        </span>
                      </span>
                      <span className="mt-1 text-slate-300 transition group-hover:text-danger">
                        <FaExternalLinkAlt className="text-xs" />
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
