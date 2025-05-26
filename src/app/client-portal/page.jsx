// File: src/app/client-portal/page.jsx
'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'

export default function ClientPortalIntroPage() {
    const router = useRouter()

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-15 font-[Quicksand] flex items-center justify-center min-h-screen overflow-x-hidden px-4 py-12 sm:py-20 "
        >
            <div className="max-w-4xl w-full mx-auto text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl relative">
                <div className="absolute -inset-1 z-[-1] blur-2xl opacity-30 bg-[conic-gradient(at_top_left,_#e8ded1,_#d1b5aa,_#8866e9,_#ffa0bf,_#fc766a)] rounded-3xl" />

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#fef7f1] mb-2 tracking-tight">
                    madebyme<span className="text-[#d1b5aa]">.dev</span>
                </h1>
                <h2 className="mt-9 text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-2 mb-6">
                    Introducing the client portal
                </h2>



                <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                    A premium feature that gives you 24/7 access to your project dashboard. Monitor progress, track analytics, view delivery timelines, and get ongoing support — all in one place.
                </p>

                <div className="flex justify-center">
                    <div className="grid md:grid-cols-2 gap-6 text-white/80 text-left mb-12 max-w-3xl w-full">
                        {[
                            'Real-time visitor & pageview analytics',
                            'Delivery status updates and timelines',
                            'Invoice tracking (optional)',
                            'Secure client-only access',
                            'Private communication and support',
                            'Access to performance dashboards & reports'
                        ].map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <Check className="text-[#e8ded1] w-5 h-5 mt-1" />
                                <p>{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <button
                    onClick={() => router.push('/login')}
                    className="cursor-pointer inline-block group relative px-6 py-3 rounded-full font-semibold text-sm text-white bg-white/10 backdrop-blur-[6px] border border-white/20 overflow-hidden shadow-md transition-all duration-300"
                >
                    <span className="absolute inset-0 rounded-full pointer-events-none border border-transparent group-hover:border-transparent before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#e8ded1] before:via-[#d1b5aa] before:to-[#e8ded1] before:bg-[length:200%_200%] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:animate-border-gradient z-0"></span>
                    <span className="text-lg relative z-10 group-hover:text-[#3a2f2b] transition-colors duration-300">
                        Login to Your portal
                    </span>
                </button>
            </div>

            <style jsx>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(200%); }
        }

        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 6s ease infinite;
        }

        .before\:animate-shimmer::before {
          content: '';
          animation: shimmer 2.5s ease-in-out infinite;
        }
      `}</style>
        </motion.section>
    )
}