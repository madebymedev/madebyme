'use client'

import { motion } from 'framer-motion'
import {
  Droplets,
  Wind,
  ThermometerSun,
  Gauge,
  CloudSun,
  MapPin
} from 'lucide-react'

export default function WeatherNow({ current }) {
  const {
    city,
    temp,
    feelsLike,
    humidity,
    pressure,
    windSpeed,
    description,
    icon
  } = current

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-xl mb-12"
    >
      <div className="absolute -inset-1 -z-10 blur-2xl opacity-30 rounded-3xl bg-[conic-gradient(at_top_left,_#e8ded1,_#d1b5aa,_#8866e9,_#ffa0bf,_#fc766a)]" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Main Info */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#e8ded1] mb-1">
            <MapPin className="w-5 h-5" />
            <p className="text-lg font-semibold">{city}</p>
          </div>
          <h2 className="text-6xl font-bold mb-2">{Math.round(temp)}°C</h2>
          <p className="capitalize text-white/70 text-lg">{description}</p>
        </div>

        {/* Right: Icon + Details */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt={description}
            className="w-24 h-24"
          />

          <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <ThermometerSun className="w-4 h-4 text-[#e8ded1]" />
              Feels like: {Math.round(feelsLike)}°C
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-[#e8ded1]" />
              Humidity: {humidity}%
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#e8ded1]" />
              Pressure: {pressure} hPa
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-[#e8ded1]" />
              Wind: {windSpeed} km/h
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
