import React from 'react'
import fs from 'fs'
import path from 'path'
import GalleryGrid from '../../components/GalleryGrid'

// Load achievement images from public/images/Achivement (server-side)
const achievementDir = path.join(process.cwd(), 'public', 'images', 'Achivement')
let achievementImages: Array<any> = []
if (fs.existsSync(achievementDir)) {
  achievementImages = fs
    .readdirSync(achievementDir)
    .filter((f) => /\.(jpe?g|png|webp|gif|svg)$/i.test(f))
    .map((file) => ({ title: 'achivement', image: `/images/Achivement/${encodeURIComponent(file)}` }))
}

// Load event images from public/images/funtion and public/images/event (server-side)
const eventDir = path.join(process.cwd(), 'public', 'images', 'funtion')
let eventImages: Array<any> = []
if (fs.existsSync(eventDir)) {
  eventImages = fs
    .readdirSync(eventDir)
    .filter((f) => /\.(jpe?g|png|webp|gif|svg)$/i.test(f))
    .map((file) => ({ title: 'Event', image: `/images/funtion/${encodeURIComponent(file)}` }))
}
const extraEventDir = path.join(process.cwd(), 'public', 'images', 'event')
if (fs.existsSync(extraEventDir)) {
  const extra = fs
    .readdirSync(extraEventDir)
    .filter((f) => /\.(jpe?g|png|webp|gif|svg)$/i.test(f))
    .map((file) => ({ title: 'Event', image: `/images/event/${encodeURIComponent(file)}` }))
  eventImages = eventImages.concat(extra)
}

// Load certificate images from public/images/certificate, but only treat the first two as "certificates" section
const certificateDir = path.join(process.cwd(), 'public', 'images', 'certificate')
let certificateImages: Array<any> = []
let leftoverFromCertificate: Array<any> = []
if (fs.existsSync(certificateDir)) {
  const allCerts = fs
    .readdirSync(certificateDir)
    .filter((f) => /\.(jpe?g|png|webp|gif|svg)$/i.test(f))
    .map((file) => ({ title: 'certificate', image: `/images/certificate/${encodeURIComponent(file)}` }))
  certificateImages = allCerts.slice(0, 2)
  leftoverFromCertificate = allCerts.slice(2)
}

// Build final images array: show certificates section (2 images) + all event images
const images = [
  ...(certificateImages.length ? [{ type: 'section', title: 'certificates' }].concat(certificateImages) : []),
  ...(eventImages.length ? eventImages : []),
]

export default function GalleryPage() {
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
