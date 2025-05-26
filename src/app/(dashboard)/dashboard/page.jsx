// File: src/app/dashboard/page.jsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from 'recharts'

const RANGE_OPTIONS = ['day','7d' ,'30d']
const COLORS = ['#e8ded1', '#d1b5aa', '#8866e9', '#ffa0bf', '#fc766a']

export default function DashboardHome() {
  const [chartData, setChartData] = useState([])
  const [countryData, setCountryData] = useState([])
  const [loading, setLoading] = useState(true)
  const [range, setRange] = useState('7d')

  useEffect(() => {
    async function fetchAnalytics() {
      setLoading(true)
      const res = await fetch(`/api/analytics?period=${range}`)
      const data = await res.json()
      setChartData(data.timeseries || [])
      setCountryData(data.countries || [])
      setLoading(false)
    }
    fetchAnalytics()
  }, [range])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-20"
    >
      <h2 className="text-3xl font-bold mb-4 text-[#fef7f1]">Welcome to your dashboard</h2>
      <p className="text-white/70 mb-6">Here’s a visual overview of your website performance over time.</p>

      <div className="flex gap-3 mb-10 flex-wrap">
        {RANGE_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => setRange(opt)}
            className={`px-4 py-2 rounded-full border text-sm transition-all backdrop-blur-md ${range === opt ? 'bg-[#e8ded1] text-[#3a2f2b]' : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'}`}
          >
            Last {opt.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MetricChart title="Unique Visitors per Day" dataKey="visitors" data={chartData} loading={loading} />
        <MetricChart title="Total Pageviews per Day" dataKey="pageviews" data={chartData} loading={loading} />
        <MetricChart title="Bounce Rate Over Time" dataKey="bounce_rate" data={chartData} loading={loading} suffix="%" />
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 shadow-xl w-full">
          <h3 className="text-lg font-semibold text-[#fef7f1] mb-2">Top Countries by Visitors</h3>
          {loading ? (
            <p className="text-white/60 text-sm">Loading...</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={countryData}
                  dataKey="visitors"
                  nameKey="country"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#e8ded1"
                  label
                >
                  {countryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', border: 'none', borderRadius: '10px', color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function MetricChart({ title, dataKey, data, loading, suffix = '' }) {
  const hasEnoughData = data.length > 4

  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-4 shadow-xl h-64">
      <h3 className="text-lg font-semibold text-[#fef7f1] mb-2">{title}</h3>
      {loading ? (
        <p className="text-white/60 text-sm">Loading...</p>
      ) : data.length === 0 ? (
        <p className="text-white/60 text-sm">No data available</p>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          {hasEnoughData ? (
            <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="date" stroke="#aaa" fontSize={11} />
              <YAxis stroke="#aaa" fontSize={11} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', border: 'none', borderRadius: '10px', color: '#fff' }}
                formatter={(value) => [`${value}${suffix}`, title]}
              />
              <Line type="monotone" dataKey={dataKey} stroke="#e8ded1" strokeWidth={2} dot={false} />
            </LineChart>
          ) : (
            <BarChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="date" stroke="#aaa" fontSize={11} />
              <YAxis stroke="#aaa" fontSize={11} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', border: 'none', borderRadius: '10px', color: '#fff' }}
                formatter={(value) => [`${value}${suffix}`, title]}
              />
              <Bar dataKey={dataKey} fill="#e8ded1" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      )}
    </div>
  )
}
