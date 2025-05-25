// File: src/app/client-portal/page.jsx
'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function ClientPortalIntroPage() {
    const router = useRouter()

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-[Quicksand] flex items-center justify-center min-h-screen overflow-x-hidden px-4 py-12 sm:py-20 bg-gradient-to-br from-[#e8ded1]/10 via-[#d1b5aa]/10 to-[#3a2f2b]/10"
        >
            <div className="max-w-4xl w-full mx-auto text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl relative">
                <div className="absolute -inset-1 z-[-1] blur-2xl opacity-30 bg-[conic-gradient(at_top_left,_#e8ded1,_#d1b5aa,_#8866e9,_#ffa0bf,_#fc766a)] rounded-3xl" />

                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#fef7f1] mb-6 leading-snug">
                    Introducing the{' '}
                    <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide text-white">
                        madebyme<span className="text-[#d1b5aa]">.dev</span>
                    </span>{' '}
                    client portal
                </h1>


                <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                    A premium feature that gives you 24/7 access to your project dashboard. Monitor progress, track analytics, view delivery timelines, and get ongoing support — all in one place.
                </p>

                <div className="grid md:grid-cols-2 gap-6 text-white/80 text-left mb-12">
                    {[
                        'Real-time visitor & pageview analytics',
                        'Delivery status updates and timelines',
                        'Invoice tracking (optional)',
                        'Secure client-only access',
                        'Private communication and support',
                        'Access to performance dashboards & reports'
                    ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="text-[#e8ded1] text-lg">✔</span>
                            <p>{feature}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => router.push('/login')}
                    className="relative group px-6 py-3 rounded-full font-semibold text-[#3a2f2b] bg-[#e8ded1] backdrop-blur-md overflow-hidden transition-all border-[#1c1c1c] shadow-[0_0_40px_#ffffff33]"
                >
                    <span className="absolute inset-0 rounded-full bg-white blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-0"></span>
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#e8ded1] via-[#d1b5aa] to-[#e8ded1] bg-[length:200%_200%] animate-gradient-move transition-opacity duration-700 z-0"></span>
                    <span className="absolute inset-0 before:absolute before:left-[-75%] before:top-0 before:h-full before:w-[150%] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:rounded-full before:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></span>
                    <span className="relative z-10">Login to Your Portal</span>
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