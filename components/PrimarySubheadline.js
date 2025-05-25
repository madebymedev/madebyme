'use client';

import { motion } from 'framer-motion';

export default function PrimaryHeadline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="font-[Quicksand] relative z-10 text-left px-4 sm:px-6 md:px-0 max-w-4xl mx-auto py-20"
    >
      {/* What I Do */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-3 flex items-center text-[#e8ded1]">
          <span className="inline-block w-6 h-6 mr-2 rounded-full bg-white/10 text-white text-sm flex items-center justify-center border border-white/20">⟲</span>
          What I Do
        </h2>
        <p className="text-white/70 max-w-2xl leading-relaxed">
          I&apos;m a freelance website creator focused on <span className="text-[#e8ded1] font-medium">elegant UI</span>,
          <span className="text-[#e8ded1] font-medium"> clean code</span>, and <span className="text-[#e8ded1] font-medium">unforgettable experiences</span>.
        </p>
      </div>

      {/* Featured Projects */}
      <div>
        <h2 className="text-xl font-semibold mb-3 flex items-center text-[#e8ded1]">
          <span className="inline-block w-6 h-6 mr-2 rounded-full bg-white/10 text-white text-sm flex items-center justify-center border border-white/20">✦</span>
          Featured Projects
        </h2>
        <p className="text-white/70 mb-8">Curated work that blends design with direction.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Portfolio Website", "E-Commerce Platform", "Landing Page"].map((title) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-xl p-6 bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#e8ded1] transition-all duration-300 text-white"
            >
              <h3 className="font-semibold text-[#e8ded1] mb-2">{title}</h3>
              <p className="text-white/60 text-sm">Curated work that blends design with direction.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
