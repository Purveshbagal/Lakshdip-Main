'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import { navLinks } from '../lib/siteData'
import { useLanguage } from './LanguageProvider'

export default function Navbar() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#001f5c] via-primary to-[#071426] shadow-[0_14px_35px_rgba(0,31,92,0.22)]">
      <div className="container flex items-center gap-3 py-2.5">
        <div className="hidden lg:flex flex-wrap items-center gap-1 flex-1">
          {navLinks.map((l) => (
            <div
              key={l.label}
              className="relative"
              onMouseEnter={() => l.children && setOpenMenu(l.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={l.href}
                className={`flex items-center gap-1 px-4 py-2.5 text-xs font-bold tracking-wide uppercase transition-colors rounded-full ${
                  isActive(l.href) ? 'bg-white text-primary shadow-sm' : 'text-white hover:bg-white/10'
                }`}
              >
                {t(l.label)}
                {l.children && <FaChevronDown className="text-[9px]" />}
              </Link>
              {l.children && openMenu === l.label && (
                <ul className="absolute left-0 top-full min-w-[240px] bg-white rounded-2xl shadow-2xl border border-gray-200 mt-2 overflow-hidden z-50">
                  {l.children.map((c) => (
                    <li key={c.label}>
                      <Link href={c.href} className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-primary">
                        {t(c.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/admission"
          className="hidden lg:inline-flex bg-yellow-300 hover:bg-yellow-200 text-[#071426] text-xs font-black px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-black/10"
        >
          {t('Apply Now')}
        </Link>

        <button
          type="button"
          className="lg:hidden text-white p-2 rounded-xl border border-white/20 hover:bg-white/10 transition ml-auto"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#001f5c] border-t border-white/10">
          <div className="space-y-2 px-4 pb-4 pt-2">
            {navLinks.map((l) => (
              <div key={l.label}>
                <Link
                  href={l.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive(l.href) ? 'bg-danger text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(l.label)}
                </Link>
                {l.children && (
                  <div className="mt-1 space-y-1 pl-4">
                    {l.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block rounded-lg px-3 py-2 text-xs text-white/80 hover:bg-white/10 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {t(c.label)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/admission"
              className="block rounded-full bg-danger text-white text-center text-sm font-bold py-3 mt-2"
              onClick={() => setMobileOpen(false)}
            >
              {t('Apply Now')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
