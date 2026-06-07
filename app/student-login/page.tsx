'use client'

import React, { useState } from 'react'

export default function StudentLoginPage() {
  const [rollNo, setRollNo] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setMsg('Student portal login - contact institute for credentials.')
  }

  return (
    <div className="container page-shell">
      <div className="page-card mx-auto max-w-md p-6 md:p-8">
        <p className="section-kicker">Student Portal</p>
        <h1 className="section-title mt-2">Student Login</h1>
        <p className="section-copy mt-3">Access your attendance, results, and study materials.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Roll Number / Student ID"
            className="form-control"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-control"
          />
          <button type="submit" className="btn-primary w-full py-3">
            Login
          </button>
          {msg && <p className="rounded-2xl bg-blue-50 p-3 text-center text-sm font-semibold text-slate-600">{msg}</p>}
        </form>
      </div>
    </div>
  )
}
