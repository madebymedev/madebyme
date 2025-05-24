'use client';

export default function Footer() {
  return (
    <footer className="w-full mt-32 text-sm text-white/70 text-center border-t border-white/10 pt-12 pb-8 backdrop-blur bg-white/5 rounded-t-3xl font-[Quicksand]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="mb-2">© {new Date().getFullYear()} madebyme.dev — Crafted with care in Belgium.</p>
        <p className="text-white/50">Let’s build something timeless, together.</p>
      </div>
    </footer>
  );
}
