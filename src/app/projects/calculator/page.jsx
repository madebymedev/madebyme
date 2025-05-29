'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CalculatorDisplay from './components/CalculatorDisplay'
import CalculatorButtons from './components/CalculatorButtons'
import { Calculator } from 'lucide-react'

export default function CalculatorPage() {
    const [expression, setExpression] = useState('')
    const [result, setResult] = useState('')

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setExpression('')
            setResult('')
        } else if (value === '=') {
            try {
                const evalResult = Function(`"use strict"; return (${expression})`)()
                setResult(evalResult.toString())
            } catch {
                setResult('Error')
            }
        } else {
            setExpression((prev) => prev + value)
        }
    }

    return (
        <div className="font-[Quicksand] mt-20 min-h-screen w-full px-4 py-12 flex flex-col items-center justify-start text-white">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-flex flex-wrap justify-center items-center gap-3 text-4xl md:text-5xl font-bold text-center">
                    Calculator
                    <Calculator className="w-10 h-10 text-white" />
                </span>
            </motion.h1>

            <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-xl p-4 mb-8 shadow-lg border border-white/10">
                <CalculatorDisplay expression={expression} result={result} />
            </div>

            <div className="w-full max-w-md">
                <CalculatorButtons onClick={handleButtonClick} />
            </div>
        </div>
    )
}
