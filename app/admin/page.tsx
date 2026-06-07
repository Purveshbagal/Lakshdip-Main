import React from 'react'
import Link from 'next/link'
import { site } from '../../lib/siteData'

export default function AdminPage() {
  return (
    <div className="container page-shell">
      <div className="page-card p-6 md:p-8">
      <p className="section-kicker">Admin</p>
      <h1 className="section-title mt-2">Admin Dashboard</h1>
      <p className="section-copy mt-4">Manage courses, notices, and admissions for {site.fullName}.</p>
      <Link href="/admin/login" className="btn-primary mt-5 px-6 py-3 text-sm">
        Admin Login
      </Link>
      </div>
    </div>
  )
}
