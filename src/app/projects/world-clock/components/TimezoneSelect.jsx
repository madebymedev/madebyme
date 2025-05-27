'use client'

import { timezones } from '../utils/timezones'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TimezoneSelect({ onSelect, selectedZones }) {
  const [query, setQuery] = useState('')

  const filtered = timezones.filter(
    tz =>
      tz.label.toLowerCase().includes(query.toLowerCase()) &&
      !selectedZones.includes(tz.value)
  )

  return (
    <div className="w-full max-w-xl mb-10 px-1">
      {/* Search input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search a timezone (e.g. Asia/Tokyo)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full  pl-10 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all"
        />
        <Search className="absolute left-3 top-3.5 w-5 h-5 text-white/50" />
      </div>

      {/* Timezone results */}
      <ul className="space-y-2 max-h-60 overflow-y-auto overflow-x-hidden pl-2 pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <AnimatePresence>
          {filtered.map((tz) => (
            <motion.li
              key={tz.value}
              onClick={() => onSelect(tz.value)}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              whileHover={{ scale: 1.015 }}
              className="cursor-pointer px-4 py-2 rounded-xl transition-all duration-200 bg-white/5 hover:bg-white/10 hover:ring-1 hover:ring-[#e8ded1] text-white whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {tz.label}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}
