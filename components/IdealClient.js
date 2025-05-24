'use client';

import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Tags, Settings, Wrench, CheckCircle, XCircle } from 'lucide-react';

export default function IdealClientSection() {
  const positive = [
    {
      icon: <Rocket className="w-5 h-5 text-[#fef7f1]/80" />,
      label: 'New brands with big vision',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#fef7f1]/80" />,
      label: 'Founders who value design',
    },
    {
      icon: <Rocket className="w-5 h-5 text-[#fef7f1]/80" />,
      label: 'You want to stand out',
    },
  ];

  const negative = [
    {
      icon: <Tags className="w-5 h-5 text-[#fef7f1]/60" />,
      label: 'You just want the cheapest site',
    },
    {
      icon: <Settings className="w-5 h-5 text-[#fef7f1]/60" />,
      label: "You don't care about design",
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#fef7f1]/60" />,
      label: "You won't invest in long term",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="font-[Quicksand] relative z-10 py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#fef7f1] mb-12 text-center">
        Who This Is For — and Who It’s Not
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Best Fit */}
          <div className="group relative min-h-[400px] max-w-[400px] flex flex-col p-8 rounded-4xl border border-white/20 backdrop-blur bg-white/5 hover:scale-[1.01] transition-transform overflow-hidden">
            <div className="absolute -inset-1 -z-10 rounded-4xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#d1b5aa,_#c1d2d3,_#9aa0ff,_#ffa0bf,_#e8ded1)]"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="text-4xl w-10 h-10 text-[#e8ded1] opacity-80" />
              </div>
              <h3 className="text-3xl font-bold text-[#fef7f1] text-center mb-8">
                Best fit for
              </h3>
              <ul className="mt-12 space-y-4 text-center">
                {positive.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-3 text-white/90">
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Not the Best Fit */}
          <div className="group relative min-h-[320px] max-w-[400px] flex flex-col p-8 rounded-4xl border border-white/20 backdrop-blur bg-white/5 hover:scale-[1.01] transition-transform overflow-hidden">
            <div className="absolute -inset-1 -z-10 rounded-4xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#d1b5aa,_#c1d2d3,_#9aa0ff,_#ffa0bf,_#e8ded1)]"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <XCircle className="w-10 h-10 text-[#d58585] opacity-80" />
              </div>
              <h3 className="text-3xl font-bold text-[#fef7f1] text-center mb-8">
                Not the best fit if
              </h3>
              <ul className="mt-12 space-y-4 text-center">
                {negative.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-3 text-white/70">
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-glow {
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
        .animate-gradient-glow {
          background-size: 400% 400%;
          animation: gradient-glow 8s ease infinite;
        }
      `}</style>
    </motion.section>
  );
}
