'use client';

import { MapPin, Clock4, ShieldCheck, MousePointerClick, LineChart, Users, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="font-[Quicksand] mt-10 relative z-10 py-24 px-6 max-w-5xl mx-auto text-[#fef7f1]"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Me</h1>

      <p className="text-center text-lg max-w-2xl mx-auto mb-10 text-white/80">
        I&apos;m a developer based in Belgium with a passion for creating scalable solutions and building client dashboards. My mission is to empower others through technology, overcoming challenges with resilience and dedication.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        {[{ icon: MapPin, title: 'Situated', value: 'Belgium' }, { icon: Clock4, title: 'Timezone', value: 'UTC+2' }, { icon: ShieldCheck, title: 'Experience', value: '3 years' }].map(({ icon: Icon, title, value }, i) => (
          <div
            key={i}
            className="group relative min-h-[120px] flex flex-col justify-center items-center rounded-xl border border-white/10 backdrop-blur bg-white/5 px-4 py-6 overflow-hidden hover:scale-[1.01] transition-transform"
          >
            <div className="absolute -inset-1 -z-10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#d1b5aa,_#c1d2d3,_#9aa0ff,_#ffa0bf,_#e8ded1)] rounded-xl" />
            <Icon className="w-6 h-6 mb-2 text-white/70" />
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-sm text-white/60">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="group relative rounded-3xl border border-white/10 backdrop-blur bg-white/5 p-6 overflow-hidden hover:scale-[1.01] transition-transform flex flex-col justify-center items-center text-center">
          <div className="absolute -inset-1 -z-10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#d1b5aa,_#c1d2d3,_#9aa0ff,_#ffa0bf,_#e8ded1)] rounded-3xl" />
          <h3 className="text-2xl font-semibold mb-6">My Experience</h3>
          <ul className="space-y-4 w-full">
            <li className="rounded-xl px-4 py-3 bg-gradient-to-br from-white/10 to-white/5 text-white text-center">
              Experienced in building high-performance, scalable frontends with <strong>Next.js</strong>.
            </li>
            <li className="rounded-xl px-4 py-3 bg-gradient-to-br from-[#fc766a]/30 to-[#e8ded1]/10 text-white text-center">
              Used <strong>Supabase</strong> to manage real-time backend features, auth, and data syncing.
            </li>
            <li className="rounded-xl px-4 py-3 bg-gradient-to-br from-[#8866e9]/30 to-[#e8ded1]/10 text-white text-center">
              Structured dynamic content with <strong>Sanity</strong> for CMS-driven apps.
            </li>
            <li className="rounded-xl px-4 py-3 bg-gradient-to-br from-[#e8ded1]/30 to-[#2f2f2f]/10 text-white text-center">
              State management and global UI control handled via <strong>Zustand</strong>.
            </li>
          </ul>
        </div>

        <div className="group relative rounded-3xl border border-white/10 backdrop-blur bg-white/5 p-6 overflow-hidden hover:scale-[1.01] transition-transform flex flex-col items-center text-center">
          <div className="absolute -inset-1 -z-10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#d1b5aa,_#c1d2d3,_#9aa0ff,_#ffa0bf,_#e8ded1)] rounded-3xl" />
          <h3 className="text-2xl font-semibold mb-6 underline underline-offset-11">My Goals</h3>
          <ul className="mt-12 grid grid-cols-2 grid-rows-2 gap-8 text-white/80 text-base w-full">
            <li className="flex flex-col items-center">
              <MousePointerClick className="w-9 h-9 text-[#e8ded1] mb-2" />
              <span className="text-sm">Continue as a freelance developer for the nearby future</span>
            </li>
            <li className="flex flex-col items-center">
              <LineChart className="w-9 h-9 text-[#e8ded1] mb-2" />
              <span className="text-sm">Build scalable solutions for clients</span>
            </li>
            <li className="flex flex-col items-center">
              <Users className="w-9 h-9 text-[#e8ded1] mb-2" />
              <span className="text-sm">Branch out and eventually grow a team</span>
            </li>
            <li className="flex flex-col items-center">
              <Crown className="w-9 h-9 text-[#e8ded1] mb-2" />
              <span className="text-sm">Become a senior developer</span>
            </li>
          </ul>
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
