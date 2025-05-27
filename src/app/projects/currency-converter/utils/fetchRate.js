export async function fetchConversionRate(from, to, amount) {
  const apiKey = process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY

  const res = await fetch(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}&access_key=${apiKey}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch conversion rate')
  }

  const data = await res.json()
  return data.result
}
