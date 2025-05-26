// File: src/app/api/analytics/route.ts

import { NextRequest, NextResponse } from 'next/server'

const PLAUSIBLE_API_KEY = process.env.PLAUSIBLE_API_KEY
const PLAUSIBLE_SITE_ID = process.env.PLAUSIBLE_SITE_ID
const BASE_URL = 'https://plausible.io/api/v1'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const period = searchParams.get('period') || '7d'
    const validPeriods = ['day', '7d', '30d']
    if (!validPeriods.includes(period)) {
      return NextResponse.json({ error: 'Invalid period' }, { status: 400 })
    }

    const interval = period === '30d' ? 'month' : 'day'

    // Fetch time series data
    const timeseriesRes = await fetch(
      `${BASE_URL}/stats/timeseries?site_id=${PLAUSIBLE_SITE_ID}&period=${period}&interval=${interval}&metrics=visitors,pageviews,bounce_rate`,
      {
        headers: {
          Authorization: `Bearer ${PLAUSIBLE_API_KEY}`,
        },
      }
    )

    if (!timeseriesRes.ok) {
      const err = await timeseriesRes.text()
      console.error('❌ Timeseries fetch failed:', err)
      return NextResponse.json({ timeseries: [], countries: [] }, { status: 500 })
    }

    const { results: timeseries } = await timeseriesRes.json()

    // Fetch top countries
    const countryRes = await fetch(
      `${BASE_URL}/stats/breakdown?site_id=${PLAUSIBLE_SITE_ID}&period=${period}&property=visit:country&limit=5&metrics=visitors`,
      {
        headers: {
          Authorization: `Bearer ${PLAUSIBLE_API_KEY}`,
        },
      }
    )

    let countries: { country: string; visitors: number }[] = []
    if (countryRes.ok) {
      const { results } = await countryRes.json()
      countries = results.map((entry: any) => ({
        country: entry.country,
        visitors: entry.visitors,
      }))
    } else {
      const err = await countryRes.text()
      console.warn('⚠️ Country fetch failed:', err)
    }

    return NextResponse.json({ timeseries, countries })
  } catch (error) {
    console.error('❌ API error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
