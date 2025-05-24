'use client'

import { motion } from 'framer-motion'

export default function DashboardHome() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-20"
    >
      <h2 className="text-3xl font-bold mb-4">Welcome to your dashboard</h2>
      <p className="text-white/70 mb-10">This is where your stats, analytics and progress will live.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Placeholder stat cards */}
        {['Total Views', 'Delivery Status', 'Live Pages'].map((title, i) => (
          <div key={i} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-white/60 text-sm">Coming soon...</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
