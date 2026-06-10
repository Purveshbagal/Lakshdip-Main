import { NextResponse } from 'next/server'
import connect from '../../../lib/mongodb'
import Notice from '../../../models/Notice'
import { defaultNotices } from '../../../lib/siteData'
import { scrapeMsce, type MsceNotice } from '../../../lib/msceNotices'

const handleError = (error: unknown) => {
  console.error('Notices API error:', error)
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
}

export async function GET() {
  // Run MongoDB fetch and MSCE scrape in parallel — always fetch both
  const [dbResult, msceResult] = await Promise.allSettled([
    (async () => {
      await connect()
      return Notice.find({}).sort({ date: -1 }).lean()
    })(),
    scrapeMsce(),
  ])

  const msceItems =
    msceResult.status === 'fulfilled' && msceResult.value.items.length > 0
      ? msceResult.value.items.map((it: MsceNotice) => ({
          title: it.title,
          url: it.url,
          badge: it.isNew ? 'NEW' : undefined,
          isPdf: it.isPdf,
          createdAt: new Date(msceResult.value.fetchedAt || Date.now()),
        }))
      : []

  const dbItems =
    dbResult.status === 'fulfilled' &&
    Array.isArray(dbResult.value) &&
    dbResult.value.length > 0
      ? dbResult.value
      : []

  // MSCE notices first, then local DB notices — deduplicated by title
  const seen = new Set<string>()
  const merged = [...msceItems, ...dbItems].filter((it) => {
    const key = ((it as any).title || '').toLowerCase().trim()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  if (merged.length === 0) {
    return NextResponse.json({ items: defaultNotices, fetchedAt: Date.now(), heading: '' })
  }

  const heading =
    msceResult.status === 'fulfilled' ? msceResult.value.heading || '' : ''

  return NextResponse.json({ items: merged, fetchedAt: Date.now(), heading })
}

export async function POST(req: Request){
  try {
    await connect()
    const data = await req.json()
    const n = await Notice.create(data)
    return NextResponse.json(n)
  } catch (error) {
    return handleError(error)
  }
}
