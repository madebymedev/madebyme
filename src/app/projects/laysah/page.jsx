'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import path from 'path';

const laysahImages = {
  desktop: [
    'laysah-1.PNG', 'laysah-2.PNG', 'laysah-3.PNG', 'laysah-4.PNG', 'laysah-5.PNG',
    'laysah-6.PNG', 'laysah-7.PNG', 'laysah-8.PNG', 'laysah-9.PNG', 'laysah-10.PNG',
    'laysah-11.PNG', 'laysah-12.PNG', 'laysah-13.PNG', 'laysah-14.PNG'
  ],
  mobile: [
    'laysah-mobile-1.jpg', 'laysah-mobile-2.jpg', 'laysah-mobile-3.jpg',
    'laysah-mobile-4.jpg', 'laysah-mobile-5.jpg', 'laysah-mobile-6.jpg',
    'laysah-mobile-7.jpg', 'laysah-mobile-8.jpg', 'laysah-mobile-9.jpg',
    'laysah-mobile-10.jpg', 'laysah-mobile-11.jpg', 'laysah-mobile-12.jpg',
    'laysah-mobile-13.jpg', 'laysah-mobile-14.jpg', 'laysah-mobile-15.jpg',
    'laysah-mobile-17.jpg', 'laysah-mobile-18.jpg', 'laysah-mobile-19.jpg',
    'laysah-mobile-20.jpg', 'laysah-mobile-21.jpg', 'laysah-mobile-22.jpg',
    'laysah-mobile-23.jpg', 'laysah-mobiole-24.jpg', 'laysah-mobile-25.jpg',
    'laysah-mobile-26.jpg', 'laysah-moblile-16.jpg'
  ]
};

export default function LaysahGalleryPage() {
  return (
    <section className="mt-10 font-[Quicksand] py-24 px-6 max-w-7xl mx-auto text-[#fef7f1]">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Laysah Website Showcase
      </motion.h1>
      <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
        A stylish e-commerce website for modest fashion essentials, built with performance, elegance, and responsive design in mind.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Desktop Views</h2>
          <div className="grid grid-cols-1 gap-6">
            {laysahImages.desktop.map((file, index) => (
              <div key={index} className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={`/project_galleries/laysah/laysah-photos/desktop/${file}`}
                  alt={`Laysah desktop ${index + 1}`}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Mobile Views</h2>
          <div className="grid grid-cols-2 gap-4">
            {laysahImages.mobile.map((file, index) => (
              <div key={index} className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={`/project_galleries/laysah/laysah-photos/mobile/${file}`}
                  alt={`Laysah mobile ${index + 1}`}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
