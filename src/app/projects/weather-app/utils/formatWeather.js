// /utils/formatWeather.js

export function formatWeatherData(data) {
  const city = data.city.name

  const currentEntry = data.list[0]
  const current = {
    city,
    temp: currentEntry.main.temp,
    feelsLike: currentEntry.main.feels_like,
    humidity: currentEntry.main.humidity,
    pressure: currentEntry.main.pressure,
    windSpeed: currentEntry.wind.speed,
    icon: currentEntry.weather[0].icon,
    description: currentEntry.weather[0].description
  }

  const dailyMap = {}

  data.list.forEach((entry) => {
    const date = new Date(entry.dt_txt).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })

    if (!dailyMap[date]) {
      dailyMap[date] = {
        temps: [],
        icons: [],
        descriptions: []
      }
    }

    dailyMap[date].temps.push(entry.main.temp)
    dailyMap[date].icons.push(entry.weather[0].icon)
    dailyMap[date].descriptions.push(entry.weather[0].description)
  })

  const forecast = Object.entries(dailyMap)
    .slice(1, 6) // next 5 days
    .map(([date, values]) => ({
      date,
      tempMin: Math.min(...values.temps),
      tempMax: Math.max(...values.temps),
      icon: getMostCommon(values.icons),
      description: getMostCommon(values.descriptions)
    }))

  return { current, forecast }
}

function getMostCommon(arr) {
  const counts = {}
  arr.forEach((item) => (counts[item] = (counts[item] || 0) + 1))
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
}
