'use client'

import React from 'react'

const buttons = [
  ['C', '(', ')', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '%']
]

export default function CalculatorButtons({ onClick }) {
  return (
    <div className="grid grid-cols-4 gap-3 w-full max-w-md">
      {buttons.flat().map((btn) => (
        <button
          key={btn}
          onClick={() => onClick(btn)}
          className={`
            py-4 text-xl font-semibold text-white transition-all duration-300 ease-in-out
            rounded-2xl border backdrop-blur-lg shadow-lg
            ${btn === '=' ? 'bg-green-500/20 hover:bg-green-400/30 border-green-500/30' :
              btn === 'C' ? 'bg-red-500/20 hover:bg-red-400/30 border-red-500/30' :
              'bg-white/10 hover:bg-white/20 border-white/10'}
          `}
        >
          {btn}
        </button>
      ))}
    </div>
  )
}
