'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../../lib/supabase'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin() {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="font-[Quicksand] min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#e8ded1]/10 via-[#d1b5aa]/10 to-[#3a2f2b]/10"
    >
      <div className="max-w-md w-full p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/20 shadow-xl relative">
        <div className="absolute -inset-1 z-[-1] blur-2xl opacity-30 bg-[conic-gradient(at_top_left,_#e8ded1,_#d1b5aa,_#8866e9,_#ffa0bf,_#fc766a)] rounded-3xl" />

        <h1 className="text-3xl font-bold text-[#fef7f1] mb-6 text-center">Welcome Back</h1>
        <p className="text-white/70 text-sm text-center mb-8">Login to your client dashboard</p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all duration-300 ease-in-out transform focus:scale-[1.02]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all duration-300 ease-in-out transform focus:scale-[1.02]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-[#3a2f2b] bg-[#e8ded1] hover:bg-[#fef7f1] transition-all"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </motion.section>
  )
}
