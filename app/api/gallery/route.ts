import { NextResponse } from 'next/server'
import { readdirSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    const certificateDir = join(process.cwd(), 'public', 'images', 'certificate image')
    const eventDir = join(process.cwd(), 'public', 'images', 'event image')
    
    const certificateFiles = readdirSync(certificateDir).filter(file => {
      const ext = file.toLowerCase().split('.').pop()
      return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)
    })

    const eventFiles = readdirSync(eventDir).filter(file => {
      const ext = file.toLowerCase().split('.').pop()
      return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)
    })

    const images = [
      ...certificateFiles.map((file, index) => ({
        image: `/images/certificate image/${file}`,
        title: `Certificate ${index + 1}`,
      })),
      ...eventFiles.map((file, index) => ({
        image: `/images/event image/${file}`,
        title: `Event ${index + 1}`,
      })),
    ]

    return NextResponse.json(images)
  } catch (error) {
    console.error('Gallery API error:', error)
    return NextResponse.json({ error: 'Failed to load gallery images' }, { status: 500 })
  }
}
