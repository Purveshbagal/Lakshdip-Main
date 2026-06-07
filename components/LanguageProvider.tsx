'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { languages, translate, type Language } from '../lib/translations'

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('lci-language') : null
    if (saved === 'en' || saved === 'mr' || saved === 'hi') {
      setLangState(saved)
    } else if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language.slice(0, 2)
      if (browserLang === 'mr' || browserLang === 'hi') {
        setLangState(browserLang)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lci-language', lang)
      document.documentElement.lang = lang
      document.title = `${translate(lang, 'lakshdipComputerInstitute')} | ${translate(lang, 'topBarText')}`
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang: (newLang: Language) => setLangState(newLang),
      t: (key: string) => translate(lang, key),
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

export { languages }
