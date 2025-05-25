export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.PLAUSIBLE_API_KEY
    if (!apiKey) throw new Error('Missing PLAUSIBLE_API_KEY')

    const site = 'demo-site-zeta-silk.vercel.app'
    const period = req.nextUrl.searchParams.get('period') || '30d'

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    }

    const [aggregateRes, timeseriesRes, countryRes] = await Promise.all([
      fetch(`https://plausible.io/api/v1/stats/aggregate?site_id=${site}&period=${period}&metrics=visitors,pageviews,bounce_rate`, { headers }),
      fetch(`https://plausible.io/api/v1/stats/timeseries?site_id=${site}&period=${period}&interval=day&metrics=visitors,pageviews,bounce_rate`, { headers }),
      fetch(`https://plausible.io/api/v1/stats/breakdown?site_id=${site}&period=${period}&property=visit:country`, { headers }),
    ])

    if (!aggregateRes.ok || !timeseriesRes.ok || !countryRes.ok) {
      const timeErr = await timeseriesRes.text()
      console.error('🧨 Timeseries API failed:', timeErr)

      return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
    }


    const [aggregate, timeseries, countryBreakdown] = await Promise.all([
      aggregateRes.json(),
      timeseriesRes.json(),
      countryRes.json(),
    ])

    return NextResponse.json({
      stats: aggregate.results,
      timeseries: timeseries.results,
      countries: Array.isArray(countryBreakdown.results)
        ? countryBreakdown.results.map(c => ({
          country: c.country || 'Other',
          visitors: c.visitors,
        }))
        : [],
    })

  } catch (error) {
    console.error('❌ Plausible API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
