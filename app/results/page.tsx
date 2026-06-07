'use client'

import React, { useState } from 'react'

export default function ResultsPage() {
  const [rollNo, setRollNo] = useState('')
  const [result, setResult] = useState<string | null>(null)

  function checkResult(e: React.FormEvent) {
    e.preventDefault()
    setResult(rollNo ? `Result for Roll No. ${rollNo}: PASS - Congratulations!` : 'Please enter a roll number.')
  }

  return (
    <div className="container page-shell">
      <div className="page-card mx-auto max-w-xl p-6 md:p-8">
        <p className="section-kicker">Student Result</p>
        <h1 className="section-title mt-2">Check Results</h1>
        <p className="section-copy mt-3">Enter your roll number to check GCC-TBC, CCC, or institute exam results.</p>
        <form onSubmit={checkResult} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-black text-gray-700">Roll Number</label>
            <input
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="Enter Roll Number"
              className="form-control mt-2"
            />
          </div>
          <select className="form-control">
            <option>GCC-TBC Typing</option>
            <option>CCC</option>
            <option>Shorthand</option>
            <option>Institute Internal</option>
          </select>
          <button type="submit" className="btn-primary w-full py-3">
            Check Result
          </button>
        </form>
        {result && (
          <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-bold text-green-800">{result}</div>
        )}
      </div>
    </div>
  )
}
