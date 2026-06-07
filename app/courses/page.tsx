import React from 'react'
import CoursesSection from '../../components/CoursesSection'

export default function CoursesPage() {
  return (
    <div className="container page-shell">
      <div className="mb-8 text-center">
        <p className="section-kicker">Career Courses</p>
        <h1 className="section-title mt-2">Professional Computer Training Programs</h1>
        <p className="section-copy mx-auto mt-3 max-w-2xl">
          Choose from typing, shorthand, CCC, Tally Prime, Advanced Excel and computer basics with exam-oriented guidance.
        </p>
      </div>
      <CoursesSection showHeading={false} />
    </div>
  )
}
