// src/app/analytics/page.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AnalyticsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-20 font-[Quicksand] text-[#fef7f1]"
    >
      <h2 className="text-3xl font-bold mb-4">Analytics</h2>
      <p className="text-white/70 mb-10">View detailed stats and activity for your website.</p>

      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 w-full">
        <p className="text-white/60 text-sm">Chart coming soon...</p>
        <div className="mt-6 h-64 w-full rounded-xl bg-white/10 flex items-center justify-center text-white/40">
          [ Chart Placeholder ]
        </div>
      </div>
    </motion.section>
  )
}
