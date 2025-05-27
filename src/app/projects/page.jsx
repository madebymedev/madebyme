'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Business Website',
    description: 'A professional website for a car dealership, allowing users to browse available vehicles, get quotes, and schedule appointments for buying or selling cars.',
    tech: ['React', 'Tailwind CSS', 'Next.js', 'Formspree'],
    image: '/projects/debrugautos.jpg',
  },
  {
    title: 'Laysah',
    description: 'An elegant e-commerce platform for selling abayas, headscarves, and modest fashion essentials, featuring dynamic product listings, secure checkout, and real-time inventory management.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Sanity', 'Supabase'],
    image: '/projects/laysah.jpg',
  },
  {
    title: 'Dashboard UI',
    description: 'An analytics dashboard with data visualizations.',
    tech: ['React', 'Typescript', 'Tailwind CSS', 'Supabase'],
    image: '/projects/dashboard-ui.png',
  },
  {
    title: 'Weather App',
    description: 'A sleek weather app that shows real-time weather info using the OpenWeather API.',
    tech: ['React', 'Tailwind CSS', 'OpenWeather API'],
    image: '/projects/weather.png',
    url: '/projects/weather-app',
  },
  {
    title: 'Currency Converter',
    description: 'A beautifully designed currency converter with real-time exchange rates using the Exchangerate.host API.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'ExchangeRate API'],
    image: '/projects/currency-converter.png',
    url: '/projects/currency-converter',
  }



];

export default function ProjectsPage() {
  return (
    <section className="mt-10 font-[Quicksand] py-24 px-6 max-w-6xl mx-auto text-[#fef7f1]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Projects</h2>
      <p className="text-center text-white/70 mb-16">My latest work in design & development</p>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            className="group relative rounded-3xl border border-white/10 backdrop-blur bg-white/5 p-6 overflow-hidden hover:scale-[1.02] transition-transform"
          >
            <div className="absolute -inset-1 -z-10 opacity-0 blur-2xl group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#e8ded1,_#d1b5aa,_#8866e9,_#ffa0bf,_#fc766a)] rounded-3xl transition-opacity duration-700"></div>
            <img src={project.image} alt={project.title} className="rounded-xl mb-4 w-full h-48 object-cover border border-white/10" />
            <h3 className="text-2xl font-semibold mb-2 text-[#fef7f1]">{project.title}</h3>
            <p className="text-white/70 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                className="inline-block mt-5 px-4 py-2 text-sm font-semibold rounded-full text-[#3a2f2b] bg-[#e8ded1] hover:bg-[#d1b5aa] transition-colors"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
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
    </section>
  );
}
