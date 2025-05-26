'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mt-15 font-[Quicksand] relative w-full bg-cover bg-center text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 h-max w-min-screen flex flex-col justify-center items-center text-center px-4 max-w-3xl mx-auto pt-32 pb-16"
      >
        <p className="text-lg text-[#e8ded1]/80 mb-2">Hi, —</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-[#fef7f1] drop-shadow">
          I build stunning, responsive websites<br className="hidden sm:block" />
          that speak your brand’s language.
        </h1>
        <p className="text-lg sm:text-xl text-[#e8ded1]/70 font-medium mb-8">
          Modern. <span className="mx-2">•</span> Bold. <span className="mx-2">•</span> Purposeful.
        </p>

        {/* CTA Button */}
        <a href='/projects' className="relative group px-6 py-3 rounded-full font-semibold text-[#3a2f2b] bg-[#e8ded1] backdrop-blur-md overflow-hidden transition-all duration-300 border-[#1c1c1c] shadow-[0_0_40px_#ffffff33]">
          <span className="absolute inset-0 rounded-full bg-white blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-0"></span>
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#e8ded1] via-[#d1b5aa] to-[#e8ded1] bg-[length:200%_200%] animate-gradient-move transition-opacity duration-700 z-0"></span>
          <span className="absolute inset-0 before:absolute before:left-[-75%] before:top-0 before:h-full before:w-[150%] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:rounded-full before:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></span>
          <span className="relative z-10">View My Work</span>
          <style jsx>{`
            @keyframes gradient-move {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }

            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              50% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(200%);
              }
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
        </a>
      </motion.div>
    </motion.section>
  );
}
