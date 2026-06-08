'use client'

import React, { useEffect, useState } from 'react'
import GalleryGrid from '../../components/GalleryGrid'

type ImgItem = {
  title?: string
  image?: string
  color?: string
  type?: string
}

export default function GalleryPage() {
  const [images, setImages] = useState<ImgItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/gallery')
        const data = await response.json()
        setImages(data)
      } catch (error) {
        console.error('Failed to fetch gallery images:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (loading) {
    return (
      <div className="container page-shell">
        <div className="page-card p-6 md:p-9">
          <div className="text-center">Loading gallery...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container page-shell">
      <div className="page-card p-6 md:p-9">
        <div className="mb-8 text-center">
          <p className="section-kicker">Institute Gallery</p>
          <h1 className="section-title mt-2">Gallery</h1>
          <p className="section-copy mx-auto mt-3 max-w-2xl">Photos from our institute, labs, practical sessions and events.</p>
        </div>
        <GalleryGrid images={images} />
      </div>
    </div>
  )
}
