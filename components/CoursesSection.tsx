'use client'

import React, { useEffect, useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import CourseCard from './CourseCard'
import { defaultCourses } from '../lib/siteData'
import { useLanguage } from './LanguageProvider'

type Course = {
  _id?: string
  slug: string
  title: string
  description?: string
  icon?: string
  color?: string
}

export default function CoursesSection({ showHeading = true }: { showHeading?: boolean }) {
  const { t } = useLanguage()
  const [courses, setCourses] = useState<Course[]>(defaultCourses)

  useEffect(() => {
    fetch('/api/courses')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCourses(
            data.map((c: Course) => ({
              ...c,
              icon: c.slug,
              color: defaultCourses.find((d) => d.slug === c.slug)?.color || '#002f87',
            }))
          )
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section className="py-0">
      {showHeading && (
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-primary p-4 text-white shadow-lg shadow-blue-900/20">
              <FaGraduationCap className="text-xl" />
            </div>
            <div>
              <p className="section-kicker">{t('ourPrograms')}</p>
              <h3 className="section-title mt-1">{t('topCourses')}</h3>
            </div>
          </div>
          <p className="section-copy max-w-xl">
            {t('coursesDescription')}
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c._id || c.slug} course={c} />
        ))}
      </div>
    </section>
  )
}
