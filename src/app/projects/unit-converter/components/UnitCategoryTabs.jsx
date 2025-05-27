'use client'

import { motion } from 'framer-motion'
import { categories } from '../utils/unitCategories'
import {
  Ruler,
  Weight,
  Thermometer,
  Droplets,
  GaugeCircle
} from 'lucide-react'

const icons = {
  Length: Ruler,
  Mass: Weight,
  Temperature: Thermometer,
  Volume: Droplets,
  Speed: GaugeCircle,
}

export default function UnitCategoryTabs({ selected, setSelected, setFromUnit, setToUnit }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {Object.keys(categories).map((cat) => {
        const Icon = icons[cat]
        return (
          <motion.button
            key={cat}
            onClick={() => {
              setSelected(cat)
              const units = categories[cat]
              setFromUnit(units[0])
              setToUnit(units[1] || units[0])
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 flex items-center gap-2
              ${
                selected === cat
                  ? 'bg-[#e8ded1] text-[#1e1e1e] border-[#e8ded1]'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {cat}
          </motion.button>
        )
      })}
    </div>
  )
}
