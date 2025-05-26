'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function BackgroundImage({ condition }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background image or gradient */}
      <Image
        src={`/weather/${condition}.jpg`} // e.g. /public/weather/clear.jpg
        alt={condition}
        fill
        className="object-cover opacity-30 transition-opacity duration-1000"
        priority
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
    </div>
  )
}
