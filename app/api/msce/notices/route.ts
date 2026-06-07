import { NextResponse } from 'next/server'
import { scrapeMsce, type MsceNotice } from '../../../../lib/msceNotices'

const CACHE_TTL = 30 * 60 * 1000 // 30 minutes

type ApiCache = { ts: number; data: { items: MsceNotice[]; fetchedAt: number } }
let cache: ApiCache | null = null

export async function GET(req: Request) {
  let debugMode = false
  try {
    const url = new URL(req.url)
    debugMode = url.searchParams.get('debug') === '1'
    // When debugging, always re-scrape and bypass cache so we can return debug data
    if (!debugMode && cache && Date.now() - cache.ts < CACHE_TTL) {
      return NextResponse.json(cache.data)
    }

    const result = await scrapeMsce()

    const payload = { items: result.items, fetchedAt: result.fetchedAt }
    cache = { ts: Date.now(), data: payload }

    if (debugMode) {
      return NextResponse.json({ div1Found: result.debug.div1Found, alertsFound: result.alertsFound, htmlLength: result.debug.htmlLength, htmlSnippet: result.debug.cardBodyHtml, items: result.items, heading: result.heading })
    }

    return NextResponse.json(payload)
  } catch (error) {
    const errAny: any = error
    console.error('MSCE scrape error:', errAny?.message || error, errAny?.response?.status, errAny?.response?.data && String(errAny.response.data).slice(0, 300))
    if (debugMode) {
      return NextResponse.json({ error: errAny?.message || 'scrape failed', status: errAny?.response?.status || 500, responseSnippet: errAny?.response?.data ? String(errAny.response.data).slice(0, 1000) : undefined }, { status: 500 })
    }
    if (cache) return NextResponse.json(cache.data)
    return NextResponse.json({ items: [], fetchedAt: Date.now() }, { status: 500 })
  }
}
