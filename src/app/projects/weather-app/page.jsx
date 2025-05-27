'use client'

import { useEffect, useState } from 'react'
import { Haze } from 'lucide-react'
import { motion } from 'framer-motion'
import WeatherNow from './components/WeatherNow'
import ForecastGrid from './components/ForecastGrid'
import BackgroundImage from './components/BackgroundImage'
import { formatWeatherData } from './utils/formatWeather'
import { getBackgroundForWeather } from './utils/weatherBackgrounds'

export default function WeatherAppPage() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('Brussels')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

  useEffect(() => {
    fetchWeather()
  }, [city])

  const fetchWeather = async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
      if (!res.ok) throw new Error()
      const data = await res.json()
      const formatted = formatWeatherData(data)
      setWeather(formatted)
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-15 relative font-[Quicksand] min-h-screen overflow-hidden text-[#fef7f1]"
    >
      {weather && (
        <BackgroundImage condition={getBackgroundForWeather(weather.current.icon)} />
      )}

      <div className="relative z-10 py-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="mb-8">
          <span className="inline-flex flex-wrap justify-center items-center gap-3 text-4xl md:text-5xl font-bold text-center">
            Weather Forecast
            <Haze className="w-10 h-10 text-white" />
          </span>
        </h1>



        {/* Search */}
        <div className="mb-10 text-center">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-3 rounded-xl text-[#3a2f2b] w-full max-w-xs text-center shadow-lg bg-white/80 placeholder:text-[#3a2f2b]/60 focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all duration-300 ease-in-out transform focus:scale-[1.02]"
            placeholder="Enter city"
          />
        </div>

        {error && <p className="text-red-400 text-center">City not found. Try again.</p>}
        {loading && <p className="text-white/60 text-center">Loading...</p>}

        {weather && !loading && !error && (
          <>
            <WeatherNow current={weather.current} />
            <ForecastGrid forecast={weather.forecast} />
          </>
        )}
      </div>
    </motion.section>
  )
}
