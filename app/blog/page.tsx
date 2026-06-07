import React from 'react'
import Link from 'next/link'
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa'

const posts = [
  { title: 'How to Prepare for GCC-TBC Typing Exam', date: '2024-05-15', excerpt: 'Tips and strategies to achieve 30-40 WPM typing speed for government jobs.' },
  { title: 'CCC Course - Everything You Need to Know', date: '2024-05-10', excerpt: 'Complete guide to the Course on Computer Concepts certification.' },
  { title: 'Career Opportunities After Tally Prime', date: '2024-05-05', excerpt: 'Explore accounting and GST career paths with Tally Prime skills.' },
  { title: 'Shorthand for Government Jobs - A Beginner Guide', date: '2024-04-28', excerpt: 'Learn why shorthand is essential for stenographer positions.' },
]

export default function BlogPage() {
  return (
    <div className="container page-shell">
      <div className="page-card p-6 md:p-9">
        <div className="mb-8 text-center">
          <p className="section-kicker">Learning Resources</p>
          <h1 className="section-title mt-2">Blog</h1>
          <p className="section-copy mx-auto mt-3 max-w-2xl">Useful guidance for exams, skills and career-focused computer education.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                <FaRegCalendarAlt className="text-danger" />
                {new Date(p.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
              </div>
              <Link href="#" className="mt-3 block text-lg font-black leading-snug text-slate-900 hover:text-primary">{p.title}</Link>
              <p className="section-copy mt-2">{p.excerpt}</p>
              <Link href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-danger hover:text-primary">
                Read More <FaArrowRight className="text-xs" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
