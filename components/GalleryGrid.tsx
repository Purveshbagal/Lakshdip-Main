"use client"

import React, { useEffect, useState } from 'react'

type ImgItem = {
  title?: string
  image?: string
  color?: string
  type?: string
}

export default function GalleryGrid({ images }: { images: ImgItem[] }) {
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, idx) => {
          if (img.type === 'section') {
            return (
              <div key={`section-${img.title}-${idx}`} className="col-span-1 sm:col-span-2 md:col-span-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <h2 className="section-title">{img.title ? img.title.charAt(0).toUpperCase() + img.title.slice(1) : ''}</h2>
                </div>
              </div>
            )
          }

          if (img.image) {
            return (
              <button
                key={img.image ?? `${img.title}-${idx}`}
                onClick={() => setSelected(img.image ?? null)}
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl p-0"
                aria-label={img.title ?? 'image'}
              >
                <img src={img.image} alt={img.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-black text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {img.title}
                </div>
              </button>
            )
          }

          return (
            <div key={`${img.title}-${idx}`} className="group relative aspect-video cursor-default overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center p-5 text-center text-lg font-black text-white" style={{ backgroundColor: img.color }}>
                {img.title}
              </div>
            </div>
          )
        })}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={selected} alt="Full" className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </>
  )
}
