'use client'

import { motion } from 'framer-motion'

export default function ConvertedUnitResult({ inputValue, fromUnit, toUnit, result }) {
  if (!result || isNaN(result)) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur shadow-lg text-center max-w-xl w-full"
    >
      <p className="text-lg text-white/70 mb-2">
        {inputValue} {fromUnit} is equal to
      </p>
      <motion.h2
        key={result}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-[#e8ded1]"
      >
        {parseFloat(result).toLocaleString(undefined, {
          maximumFractionDigits: 6
        })}{' '}
        {toUnit}
      </motion.h2>
    </motion.div>
  )
}
