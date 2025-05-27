'use client'

import { useState } from 'react'
import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import TimezoneSelect from './components/TimezoneSelect'
import ClockCard from './components/ClockCard'

export default function WorldClockPage() {
    const [selectedZones, setSelectedZones] = useState(['UTC'])
    const [viewMode, setViewMode] = useState('digital') // <-- new state

    const addZone = (zone) => {
        if (!selectedZones.includes(zone)) {
            setSelectedZones([...selectedZones, zone])
        }
    }

    const removeZone = (zone) => {
        setSelectedZones(selectedZones.filter(z => z !== zone))
    }

    return (
        <div className="mt-30 font-[Quicksand] min-h-screen w-full px-4 py-12 text-white flex flex-col items-center">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-flex flex-wrap justify-center items-center gap-3 text-4xl md:text-5xl font-bold text-center">
                    World Clock
                    <Clock className="w-10 h-10 text-white" />
                </span>
            </motion.h1>


            {/* View toggle */}


            <TimezoneSelect onSelect={addZone} selectedZones={selectedZones} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
                {selectedZones.map((zone) =>
                    viewMode === 'analog' ? (
                        <AnalogClock key={zone} timeZone={zone} onRemove={removeZone} />
                    ) : (
                        <ClockCard key={zone} timezone={zone} onRemove={removeZone} />
                    )
                )}
            </div>
        </div>
    )
}
