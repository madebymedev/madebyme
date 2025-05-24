'use client'

import { motion } from 'framer-motion'

export default function SettingsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="font-[Quicksand] text-[#fef7f1] mt-20"
    >
      <h2 className="text-3xl font-bold mb-4">Settings</h2>
      <p className="text-white/70 mb-10">Manage your account settings and site delivery preferences here.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Profile Info Card */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6">
          <h3 className="text-xl font-semibold mb-4">Your Info</h3>
          <p className="text-white/60 text-sm">(Future editable fields go here)</p>
          <ul className="text-white/60 mt-2 text-sm">
            <li>Email: client@example.com</li>
            <li>Role: Client</li>
            <li>Joined: Jan 2024</li>
          </ul>
        </div>

        {/* Project Status Card */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6">
          <h3 className="text-xl font-semibold mb-4">Site Status</h3>
          <p className="text-white/60 text-sm">Current Phase: <span className="text-white font-medium">In Development</span></p>
          <p className="text-white/60 text-sm mt-2">Estimated Delivery: <span className="text-white font-medium">June 2025</span></p>
        </div>
      </div>
    </motion.section>
  )
}
