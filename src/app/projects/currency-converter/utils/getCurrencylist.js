export async function getCurrencyList() {
  try {
    // fallback: use local list (recommended for stability)
    return [
      'USD', 'EUR', 'GBP', 'CAD', 'AUD',
      'JPY', 'CNY', 'INR', 'CHF', 'BRL',
      'MXN', 'ZAR', 'SEK', 'NOK', 'NZD'
    ]
  } catch (e) {
    console.error('Currency list fetch failed:', e)
    return ['USD', 'EUR', 'GBP']
  }
}
