'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ClockCard({ timezone, onRemove }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    dateStyle: 'full'
  })

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      className="relative p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur text-white shadow-xl transition duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group"
    >
      {/* Remove button */}
      <button
        onClick={() => onRemove(timezone)}
        className="absolute top-3 right-3 text-white/40 hover:text-red-400 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Timezone label */}
      <h3 className="text-base md:text-lg font-semibold mb-1 text-white/80 tracking-wide">
        {timezone}
      </h3>

      {/* Time */}
      <p className="text-4xl md:text-5xl font-mono text-[#f6ede2] leading-none drop-shadow-sm">
        {formatter.format(now)}
      </p>

      {/* Date */}
      <p className="mt-3 text-sm text-white/50">
        {dateFormatter.format(now)}
      </p>
    </motion.div>
  )
}
