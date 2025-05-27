'use client'

import { useState, useEffect } from 'react'
import { CandlestickChart } from 'lucide-react'
import { motion } from 'framer-motion'
import ConverterForm from './components/Converterform'
import ConvertedResult from './components/ConvertedResult'
import { fetchConversionRate } from './utils/fetchRate'
import { getCurrencyList } from './utils/getCurrencylist'

export default function CurrencyConverterPage() {
    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('EUR')
    const [converted, setConverted] = useState(null)
    const [currencyList, setCurrencyList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        getCurrencyList().then(setCurrencyList)
    }, [])

    useEffect(() => {
        if (!amount || !fromCurrency || !toCurrency) return
        handleConvert()
    }, [amount, fromCurrency, toCurrency])

    const handleConvert = async () => {
        setLoading(true)
        setError(false)
        try {
            const result = await fetchConversionRate(fromCurrency, toCurrency, amount)
            setConverted(result)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-20 relative font-[Quicksand] min-h-screen text-[#fef7f1] overflow-hidden"
        >
            {/* Fancy background glow */}
            <div className="absolute -inset-1 -z-10 blur-2xl opacity-30"></div>

            <div className="relative z-10 py-20 px-4 max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 flex justify-center">
                    <span className="inline-flex items-center gap-3">
                        Currency converter
                        <CandlestickChart className="w-10 h-10 text-white" />
                    </span>
                </h1>


                <ConverterForm
                    amount={amount}
                    setAmount={setAmount}
                    fromCurrency={fromCurrency}
                    setFromCurrency={setFromCurrency}
                    toCurrency={toCurrency}
                    setToCurrency={setToCurrency}
                    currencyList={currencyList}
                />

                {error && <p className="text-red-400 mt-4">Something went wrong. Try again.</p>}
                {converted !== null && !loading && (
                    <ConvertedResult
                        amount={amount}
                        from={fromCurrency}
                        to={toCurrency}
                        result={converted}
                    />
                )}
            </div>
        </motion.section>
    )
}
