'use client'

import { useEffect } from 'react'
import { categories } from '../utils/unitCategories'
import { convertUnits } from '../utils/convertUnits'
import { ArrowLeftRight } from 'lucide-react'

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from '../../../../components/ui/select' // adjust path as needed


export default function UnitConverterForm({
    category,
    fromUnit,
    toUnit,
    setFromUnit,
    setToUnit,
    inputValue,
    setInputValue,
    setResult
}) {
    const unitList = categories[category] || []

    useEffect(() => {
        if (!inputValue || isNaN(parseFloat(inputValue))) {
            setResult(null)
            return
        }
        const result = convertUnits(parseFloat(inputValue), fromUnit, toUnit, category)
        setResult(result)
    }, [inputValue, fromUnit, toUnit, category, setResult])

    const swapUnits = () => {
        const temp = fromUnit
        setFromUnit(toUnit)
        setToUnit(temp)
    }

    return (
        <div className="px-20 py-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-lg space-y-6 max-w-xl mx-auto text-left text-white">
            <div>
                <label className="block text-sm text-white/70 mb-1">Value</label>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all"
                    placeholder="Enter a number"
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* From unit */}
                <div className="w-full">
                    <label className="block text-sm text-white/70 mb-1">From</label>
                    <Select value={fromUnit} onValueChange={setFromUnit}>
                        <SelectTrigger className="w-full py-3 px-6 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                            <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                            {unitList.map(unit => (
                                <SelectItem key={unit} value={unit}>
                                    {unit}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Swap Button */}
                <button
                    onClick={swapUnits}
                    className="rounded-full p-2 border border-white/10 hover:bg-white/10 transition-colors mt-6 sm:mt-8"
                    aria-label="Swap units"
                >
                    <ArrowLeftRight className="w-5 h-5 text-white" />
                </button>

                {/* To unit */}
                <div className="w-full">
                    <label className="block text-sm text-white/70 mb-1">To</label>
                    <Select value={toUnit} onValueChange={setToUnit}>
                        <SelectTrigger className="w-full py-3 px-6 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                            <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                            {unitList.map(unit => (
                                <SelectItem key={unit} value={unit}>
                                    {unit}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}
