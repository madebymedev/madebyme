'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhatIUseSection() {
  const tools = [
    {
      name: 'Next.js',
      description: 'Frontend framework for building fast, modern web apps.',
      glow: 'from-[#000000] to-[#1f1f1f]',
      logo: '/logos/nextjs.png',
    },
    {
      name: 'Sanity',
      description: 'Headless CMS for structured content and real-time collaboration.',
      glow: 'from-[#431c5d] to-[#8e44ad]',
      logo: '/logos/sanity.png',
    },
    {
      name: 'SupaBase',
      description: 'PostgreSQL-based backend with realtime and auth.',
      glow: 'from-[#003d2f] to-[#00c896]',
      logo: '/logos/supabase.png',
    },
    {
      name: 'Zustand',
      description: 'Minimal and scalable state management for React.',
      glow: 'from-[#111827] to-[#374151]',
      logo: '/logos/zustand.png',
    },

    {
      name: 'Vercel',
      description: 'Fast, reliable hosting for modern websites — perfect for deploying Next.js apps.',
      glow: 'from-[#111827] to-[#374151]',
      logo: '/logos/vercel.png',
    },

    {
      name: 'Stripe',
      description: 'A secure, developer-friendly platform for accepting online payments.',
      glow: 'from-[#0a2540] to-[#635bff]',
      logo: '/logos/stripe.png',
    },

    {
      name: 'Formspree',
      description: 'A simple tool to handle form submissions without needing a custom backend — perfect for contact forms.',
      glow: 'from-[#ff4b4b] to-[#ffa8a8]',
      logo: '/logos/formspree.png',
    },

    {
      name: 'Tailwind CSS',
      description: 'A utility-first CSS framework that lets me build custom, responsive designs quickly — all without leaving my HTML.',
      glow: 'from-[#06b6d4] to-[#3b82f6]',
      logo: '/logos/tailwindcss.png',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-10 py-20 px-6 max-w-6xl mx-auto text-center font-[Quicksand]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#fef7f1] mb-12">
        What I Use to Build
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            className={`relative p-6 rounded-2xl bg-white/5 border border-white/20 text-center shadow-lg backdrop-blur group overflow-hidden hover:scale-[1.03] transition-all duration-300`}
          >
            <div
              className={`absolute -inset-[2px] z-0 rounded-2xl bg-gradient-to-br ${tool.glow} opacity-25 blur-2xl group-hover:opacity-40 transition duration-500`}
            ></div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-14 h-14 mb-4 flex items-center justify-center">
                <Image
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#e8ded1] mb-2">{tool.name}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {tool.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
