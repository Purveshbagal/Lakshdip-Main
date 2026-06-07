import React, { useState } from 'react'
import { FaKeyboard, FaPenFancy, FaCertificate, FaCalculator, FaFileExcel, FaDesktop } from 'react-icons/fa'
import { useLanguage } from './LanguageProvider'

const iconMap: Record<string, React.ElementType> = {
  typing: FaKeyboard,
  shorthand: FaPenFancy,
  ccc: FaCertificate,
  tally: FaCalculator,
  excel: FaFileExcel,
  basics: FaDesktop,
}

const courseDetailsMap: Record<string, string[]> = {
  typing: [
    'English: 30, 40, 60 WPM courses available',
    'Marathi: 30, 40 WPM courses available',
    'Practice typing with speed and accuracy drills.',
    'GCC-TBC exam preparation and keyboard shortcut training.',
    'Build confidence for office work, exams, and competitive typing tests.',
  ],
  shorthand: [
    'English, Marathi, Hindi: 60, 80, 100, 120 WPM courses available',
    'Learn shorthand writing, note-taking, and dictation techniques.',
    'Focus on speed, accuracy, and government exam preparation.',
    'Designed for students seeking office jobs and official correspondence skills.',
  ],
  ccc: [
    'Understand computer fundamentals, operating systems, and internet basics.',
    'Learn MS Office, email, digital literacy, and basic hardware knowledge.',
    'Ideal for beginners and anyone looking to improve basic computer skills.',
  ],
  tally: [
    'Master accounting, GST, inventory, payroll, and billing in Tally Prime.',
    'Practical exercises on ledgers, vouchers, reports, and GST returns.',
    'Perfect for commerce students and accounting job preparation.',
  ],
  excel: [
    'Create dashboards, VLOOKUP, PivotTables, and advanced formulas.',
    'Analyze data and prepare reports for business and job applications.',
    'Focus on practical Excel skills used in offices and finance roles.',
  ],
  basics: [
    'Build computer confidence with Windows, Internet, and email training.',
    'Learn basic file management, MS Office, and everyday computer tasks.',
    'Great for first-time computer learners and all age groups.',
  ],
}

type Course = {
  _id?: string
  slug?: string
  title: string
  description?: string
  descriptionKey?: string
  icon?: string
  color?: string
}

export default function CourseCard({ course }: { course: Course }) {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const slug = course.slug || course.title.toLowerCase().replace(/\s+/g, '-')
  const Icon = iconMap[course.icon || slug] || FaDesktop
  const color = course.color || '#002f87'
  const details = courseDetailsMap[slug] || [course.description || '']

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-danger via-yellow-300 to-primary opacity-80" />
      <div className="flex items-start gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-200 group-hover:scale-105"
          style={{ backgroundColor: color }}
        >
          <Icon className="text-white text-2xl" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-black text-base text-slate-900 tracking-tight">{t(course.title)}</h4>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-4">{course.descriptionKey ? t(course.descriptionKey) : course.description}</p>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
        >
          {expanded ? t('hideDetails') : t('moreInfo')}
        </button>
      </div>

      {expanded && (
        <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">{t('courseDetailsTitle')}</p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            {details.map((detail, index) => (
              <li key={index}>{t(detail)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
