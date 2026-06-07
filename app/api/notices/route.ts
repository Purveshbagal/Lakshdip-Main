import { NextResponse } from 'next/server'
import connect from '../../../lib/mongodb'
import Notice from '../../../models/Notice'
import { defaultNotices } from '../../../lib/siteData'
import { scrapeMsce, type MsceNotice } from '../../../lib/msceNotices'

const handleError = (error: unknown) => {
  console.error('Notices API error:', error)
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
}

export async function GET(){
  try {
    await connect()
    const notices = await Notice.find({}).sort({date:-1}).lean()
    if (Array.isArray(notices) && notices.length > 0) return NextResponse.json(notices)

    // If no local notices, fallback to MSCE feed
    try {
      const msce = await scrapeMsce()
      // map to a consistent shape and include heading if available
      const items = msce.items.map((it: MsceNotice) => ({ title: it.title, url: it.url, badge: it.isNew ? 'NEW' : undefined, createdAt: new Date(msce.fetchedAt || Date.now()) }))
      const payload: any = { items }
      if (msce.heading) payload.heading = msce.heading
      return NextResponse.json(payload)
    } catch (e) {
      return NextResponse.json(defaultNotices)
    }
  } catch (error) {
    console.error('Notices API fallback to default data:', error)
    return NextResponse.json(defaultNotices)
  }
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
