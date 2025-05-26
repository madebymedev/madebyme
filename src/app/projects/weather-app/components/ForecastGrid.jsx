'use client'

import { motion } from 'framer-motion'
import WeatherCard from './WeatherCard'

export default function ForecastGrid({ forecast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {forecast.map((day, index) => (
        <WeatherCard key={index} day={day} />
      ))}
    </motion.div>
  )
}
