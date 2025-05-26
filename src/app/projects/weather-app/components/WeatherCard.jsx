'use client'

import { motion } from 'framer-motion'

export default function WeatherCard({ day }) {
  const { date, tempMin, tempMax, icon, description } = day

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="relative group rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur shadow-md text-center overflow-hidden"
    >
      {/* Glow on hover */}
      <div className="absolute -inset-1 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#e8ded1,_#d1b5aa,_#8866e9,_#ffa0bf,_#fc766a)]"></div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-[#fef7f1] mb-1">{date}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="w-16 h-16 mx-auto"
      />
      <p className="capitalize text-white/70 text-sm mb-2">{description}</p>
      <div className="text-white text-sm">
        <span className="mr-2">↑ {Math.round(tempMax)}°C</span>
        <span className="opacity-70">↓ {Math.round(tempMin)}°C</span>
      </div>

      {/* Animation style */}
      <style jsx>{`
        @keyframes gradient-glow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-glow {
          background-size: 400% 400%;
          animation: gradient-glow 8s ease infinite;
        }
      `}</style>
    </motion.div>
  )
}
