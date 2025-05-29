'use client'

import React from 'react'

export default function CalculatorDisplay({ expression, result }) {
  return (
    <div className="w-full bg-white/10 backdrop-blur-md text-right text-white p-5 rounded-2xl shadow-xl border border-white/10 mb-4 transition-all duration-300">
      <div className="text-base md:text-lg text-gray-300 min-h-[1.5rem] tracking-wide">
        {expression || '0'}
      </div>
      <div className="text-4xl md:text-5xl font-extrabold text-rose-200 min-h-[3rem] leading-tight break-words">
        {result || '0'}
      </div>
    </div>
  )
}
