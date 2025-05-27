'use client'

import { useState } from 'react'
import { Repeat } from 'lucide-react'
import { motion } from 'framer-motion'
import UnitConverterForm from './components/UnitConverterForm'
import ConvertedUnitResult from './components/ConvertedUnitResult'
import UnitCategoryTabs from './components/UnitCategoryTabs'
import { categories } from './utils/unitCategories'

export default function UnitConverterPage() {
  const [category, setCategory] = useState('Length')
  const [fromUnit, setFromUnit] = useState('Meter')
  const [toUnit, setToUnit] = useState('Kilometer')
  const [inputValue, setInputValue] = useState('1')
  const [result, setResult] = useState(null)

  return (
    <div className="mt-20 font-[Quicksand] min-h-screen w-full px-4 py-12 flex flex-col items-center justify-start text-white">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-3">
          Unit Converter
          <Repeat className="w-10 h-10"/>
        </span>
      </motion.h1>

      <UnitCategoryTabs
        selected={category}
        setSelected={setCategory}
        setFromUnit={setFromUnit}
        setToUnit={setToUnit}
      />

      <UnitConverterForm
        category={category}
        fromUnit={fromUnit}
        toUnit={toUnit}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setFromUnit={setFromUnit}
        setToUnit={setToUnit}
        setResult={setResult}
      />

      <ConvertedUnitResult
        inputValue={inputValue}
        fromUnit={fromUnit}
        toUnit={toUnit}
        result={result}
      />
    </div>
  )
}
