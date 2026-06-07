import axios from 'axios'
import { load } from 'cheerio'

const SRC_URL = 'https://mscepune.in/gcc/index_GCT.html'

export type MsceNotice = {
  title: string
  url?: string
  isNew: boolean
  isPdf?: boolean
  rawHtml?: string | null
}

export type MsceScrapeResult = {
  debug: {
    htmlLength: number
    div1Found: boolean
    cardBodyHtml: string | null
  }
  items: MsceNotice[]
  fetchedAt: number
  alertsFound: number
  heading: string
}

function extractText($el: { text: () => string }) {
  return $el.text().replace(/\s+/g, ' ').trim()
}

export async function scrapeMsce(): Promise<MsceScrapeResult> {
  const res = await axios.get(SRC_URL, {
    timeout: 10000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://mscepune.in/',
    },
  })
  const $ = load(res.data)

  const container = $('#Div1')
  const cardBody = $('#Div1 .card-body')

  const heading = (
    container.find('.card-header').text() ||
    container.find('h5').first().text() ||
    container.find('h4').first().text() ||
    ''
  ).replace(/\s+/g, ' ').trim()

  const debug = {
    htmlLength: typeof res.data === 'string' ? res.data.length : 0,
    div1Found: container.length > 0,
    cardBodyHtml: cardBody.length ? cardBody.html()?.slice(0, 1000) ?? null : null,
  }

  const items: MsceNotice[] = []
  const alerts = cardBody.find('.alert')

  alerts.each((_, el) => {
    const $el = $(el)
    const $a = $el.find('a').first()
    let title = ''
    let href = ''

    if ($a.length) {
      title = extractText($a)
      href = $a.attr('href') || ''
    } else {
      title = extractText($el)
    }

    if (!title) return

    try {
      const url = href ? new URL(href, SRC_URL).toString() : ''
      const isPdf = url ? /\.pdf($|\?)/i.test(url) : false
      const badgeText = extractText($el.find('.badge, span, small, sup').filter((_, el2) => /new/i.test($(el2).text())))
      const isNew = !!badgeText
      items.push({ title, url: url || undefined, isNew, isPdf, rawHtml: $el.html() })
    } catch {
      // Ignore malformed links and keep the rest of the feed usable.
    }
  })

  const unique = Array.from(new Map(items.map((it) => [(it.url || it.title).toString(), it])).values())
  return { debug, items: unique, fetchedAt: Date.now(), alertsFound: alerts.length, heading }
}
