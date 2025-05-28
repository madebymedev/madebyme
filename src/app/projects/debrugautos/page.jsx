'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const debrugImages = {
  desktop: [
    'debrugautos-1.PNG', 'debrugautos-2.PNG', 'debrugautos-3.PNG', 'debrugautos-4.PNG',
    'debrugautos-5.PNG', 'debrugautos-6.PNG', 'debrugautos-7.PNG', 'debrugautos-8.PNG',
    'debrugautos-9.PNG', 'debrugautos-10.PNG', 'debrugautos-11.PNG'
  ],
  mobile: [
    'debrugautos-mobile-1.jpg', 'debrugautos-mobile-2.jpg', 'debrugautos-mobile-3.jpg',
    'debrugautos-mobile-4.jpg', 'debrugautos-mobile-5.jpg', 'debrugautos-mobile-6.jpg',
    'debrugautos-mobile-7.jpg', 'debrugautos-mobile-8.jpg', 'debrugautos-mobile-9.jpg',
    'debrugautos-mobile-10.jpg', 'debrugautos-mobile-11.jpg', 'debrugautos-mobile-12.jpg',
    'debrugautos-mobile-13.jpg', 'debrugautos-mobile-14.jpg', 'debrugautos-mobile-15.jpg',
    'debrugautos-mobile-16.jpg', 'debrugautos-mobile-17.jpg', 'debrugautos-mobile-18.jpg',
    'debrugautos-mobile-19.jpg', 'debrugautos-mobile-20.jpg', 'debrugautos-mobile-21.jpg',
    'debrugautos-mobile-22.jpg', 'debrugautos-mobile-23.jpg', 'debrugautos-mobile-24.jpg'
  ]
};

export default function DeBrugAutosGalleryPage() {
  return (
    <section className="mt-10 font-[Quicksand] py-24 px-6 max-w-7xl mx-auto text-[#fef7f1]">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        De Brug Auto's Showcase
      </motion.h1>
      <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
        A clean and informative business site for a car dealership. Includes vehicle listings, inquiry forms, and responsive layout.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Desktop Views</h2>
          <div className="grid grid-cols-1 gap-6">
            {debrugImages.desktop.map((file, index) => (
              <div key={index} className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={`/project_galleries/debrugautos/debrugautos-photos/desktop/${file}`}
                  alt={`De Brug Autos desktop ${index + 1}`}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Mobile Views</h2>
          <div className="grid grid-cols-2 gap-4">
            {debrugImages.mobile.map((file, index) => (
              <div key={index} className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={`/project_galleries/debrugautos/debrugautos-photos/mobile/${file}`}
                  alt={`De Brug Autos mobile ${index + 1}`}
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
