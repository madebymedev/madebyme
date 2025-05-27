'use client'

import { ArrowLeftRight } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../../../../components/ui/select" // or adjust path to your project


export default function ConverterForm({
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    currencyList
}) {
    const handleSwap = () => {
        const temp = fromCurrency
        setFromCurrency(toCurrency)
        setToCurrency(temp)
    }

    return (
        <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-lg space-y-6 max-w-xl mx-auto text-left text-white">
            <div>
                <label className="block text-sm text-white/70 mb-1">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all"
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* From Currency */}
                <div className="w-full">
                    <label className="block text-sm text-white/70 mb-1">From</label>
                    <Select value={fromCurrency} onValueChange={setFromCurrency}>
                        <SelectTrigger className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                            <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                            {currencyList.map(code => (
                                <SelectItem key={code} value={code}>
                                    {code}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Swap Button */}
                <button
                    onClick={handleSwap}
                    className="rounded-full p-2 border border-white/10 hover:bg-white/10 transition-colors mt-6 sm:mt-8"
                    aria-label="Swap currencies"
                >
                    <ArrowLeftRight className="w-5 h-5 text-white" />
                </button>

                {/* To Currency */}
                <div className="w-full">
                    <label className="block text-sm text-white/70 mb-1">To</label>
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                        <SelectTrigger className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                            <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                            {currencyList.map(code => (
                                <SelectItem key={code} value={code}>
                                    {code}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}
