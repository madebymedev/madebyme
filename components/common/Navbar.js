'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href) => {
    if (typeof window !== 'undefined') {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <header className={`font-[Quicksand] transition-all duration-500 overflow-hidden rounded-xl border border-white/20 shadow-xl bg-white/5 backdrop-blur-xl fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[85%] z-50 px-6 ${isOpen ? 'py-6' : 'py-3'}`}
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide text-white">
          madebyme<span className="text-[#d1b5aa]">.dev</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-white">
          {['Home', 'About', 'Projects', 'Pricing'].map((item) => (
            <a
              key={item}
              href={
                item === 'About' ? '/about' :
                  item === 'Home' ? '/' : // ✅ Corrected here
                    item === 'Pricing' ? '/pricing' :
                      item === 'Projects' ? '/projects' :
                        `#${item.toLowerCase()}`
              }
              onClick={() => setIsOpen(false)}
              className="relative px-3 py-1 transition-all duration-300 rounded-md hover:bg-white/10 hover:text-[#e8ded1]"
            >
              {item}
            </a>
          ))}

        </nav>

        <a
          href="/contact"
          className="hidden md:inline-block group relative px-5 py-2 rounded-full font-semibold text-sm text-white bg-white/10 backdrop-blur-[6px] border border-white/20 overflow-hidden shadow-md transition-all duration-300"
        >
          <span className="absolute inset-0 rounded-full pointer-events-none border border-transparent group-hover:border-transparent before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#e8ded1] before:via-[#d1b5aa] before:to-[#e8ded1] before:bg-[length:200%_200%] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:animate-border-gradient z-0"></span>
          <span className="relative z-10 group-hover:text-[#3a2f2b] transition-colors duration-300">
            Let’s Talk
          </span>
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl ml-4"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div
        ref={contentRef}
        className={`mt-4 flex flex-col items-center space-y-4 transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        {['Home', 'About', 'Projects', 'Pricing'].map((item) => {
          const href =
            item === 'About' ? '/about' :
              item === 'Home' ? '/' : // ✅ Corrected here
                item === 'Pricing' ? '/pricing' :
                  item === 'Projects' ? '/projects' :
                    `#${item.toLowerCase()}`;

          const isAnchor = href.startsWith('#');

          return (
            <a
              key={item}
              href={href}
              onClick={(e) => {
                if (isAnchor) {
                  e.preventDefault();
                  handleLinkClick(href);
                } else {
                  setIsOpen(false);
                }
              }}
              className="text-white text-base font-medium hover:text-[#e8ded1] transition"
            >
              {item}
            </a>
          );
        })}


        <a
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-2 text-center px-4 py-2 rounded-full bg-[#e8ded1] text-[#3a2f2b] font-semibold text-sm hover:bg-[#d1b5aa] transition"
        >
          Let’s Talk
        </a>

      </div>

      <style jsx>{`
        @keyframes border-gradient {
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

        .before\:animate-border-gradient::before {
          animation: border-gradient 4s ease infinite;
        }
      `}</style>
    </header>
  );
}