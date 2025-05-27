'use client'

import { motion } from 'framer-motion'

export default function ConvertedResult({ amount, from, to, result }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur text-white shadow-lg p-6"
    >
      <p className="text-xl text-center font-medium mb-2 text-white/70">
        {amount} {from} is equal to
      </p>
      <motion.h2
        key={result}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#e8ded1]"
      >
        {parseFloat(result).toLocaleString(undefined, {
          style: 'currency',
          currency: to
        })}
      </motion.h2>
    </motion.div>
  )
}
