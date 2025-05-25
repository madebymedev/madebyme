'use client';

import { useEffect, useState } from 'react';
import { Check, X, DollarSign, MessageCircle, Clock, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const plans = [
    {
      title: 'Starter',
      price: '€300+',
      features: [
        '1–3 page static website',
        'Responsive design',
        'Basic contact form',
        '1 week delivery',
        '1 revision',
        'One-time payment',
      ],
    },
    {
      title: 'Professional',
      price: '€600+',
      features: [
        '5–7 page website with CMS',
        'Advanced forms',
        '2 week delivery',
        '2 revisions',
        'One-time payment',
      ],
    },
    {
      title: 'Premium',
      price: '€1500+',
      features: [
        '7+ pages fully custom dev',
        'Client dashboard/portal',
        '3+ weeks delivery',
        '3+ revisions',
        'One-time payment',
      ],
    },
  ];

  return (
    <section className="mt-10 font-[Quicksand] py-24 px-6 max-w-6xl mx-auto text-[#fef7f1]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Pricing Plans</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
            className={`rounded-3xl border border-white/10 bg-white/5 p-8 text-center ${!isMobile ? 'hover:scale-[1.02] transition-transform group relative' : ''}`}
          >
            {!isMobile && (
              <div className={`absolute -inset-1 -z-20 opacity-0 blur-2xl transition-all duration-700 ease-in-out group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#d1b5aa,_#c1d2d3,_#9aa0ff,_#ffa0bf,_#e8ded1)] rounded-3xl`} />
            )}
            <h3 className="text-2xl font-semibold mb-2 z-10 relative">{plan.title}</h3>
            <p className="text-xl font-bold mb-4 z-10 relative">{plan.price}</p>
            <ul className="space-y-2 text-sm text-white/80 z-10 relative">
              {plan.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border border-white/10 text-sm md:text-base text-white/80 rounded-xl overflow-hidden shadow-xl">
            <thead>
              <tr className="bg-white/10 text-[#fef7f1]">
                <th className="px-6 py-3 font-semibold">Features</th>
                <th className="px-6 py-3 font-semibold text-center">Starter</th>
                <th className="px-6 py-3 font-semibold text-center">Professional</th>
                <th className="px-6 py-3 font-semibold text-center">Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1–3 page website', true, true, true],
                ['5–7 page website', false, true, true],
                ['CMS integration', false, true, true],
                ['Custom dashboard', false, false, true],
                ['Responsive design', true, true, true],
                ['Basic contact form', true, false, false],
                ['Advanced forms', false, true, true],
                ['3+ revisions', false, false, true],
                ['One-time payment', true, true, true],
              ].map(([feature, s, p, pr], idx) => (
                <tr key={idx} className="border-t border-white/10 hover:bg-white/5 transition duration-300">
                  <td className="px-6 py-3">{feature}</td>
                  <td className="px-6 py-3 text-center">{s ? <Check className="w-5 h-5 text-[#fef7f1] inline" /> : <X className="w-5 h-5 text-[#fef7f1] inline" />}</td>
                  <td className="px-6 py-3 text-center">{p ? <Check className="w-5 h-5 text-[#fef7f1] inline" /> : <X className="w-5 h-5 text-[#fef7f1] inline" />}</td>
                  <td className="px-6 py-3 text-center">{pr ? <Check className="w-5 h-5 text-[#fef7f1] inline" /> : <X className="w-5 h-5 text-[#fef7f1] inline" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-glow {
          background-size: 400% 400%;
          animation: gradient-glow 8s ease infinite;
        }
      `}</style>

      <div className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Me?</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center text-base">
          {[
            { icon: <DollarSign className="w-10 h-10 mb-4 text-[#e8ded1] mx-auto" />, title: 'One-Time Payment', desc: 'No monthly fees. Just a single upfront cost.' },
            { icon: <MessageCircle className="w-10 h-10 mb-4 text-[#e8ded1] mx-auto" />, title: 'Always Available', desc: 'Clients appreciate fast, responsive communication.' },
            { icon: <Clock className="w-10 h-10 mb-4 text-[#e8ded1] mx-auto" />, title: 'Tailored to You', desc: 'Each website is built for your brand’s goals.' },
            { icon: <Settings className="w-10 h-10 mb-4 text-[#e8ded1] mx-auto" />, title: 'Ongoing Support', desc: 'I stay in touch even after the project is done.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${!isMobile ? 'hover:scale-[1.02] transition-transform group relative' : ''}`}
            >
              {!isMobile && (
                <div className="absolute -inset-1 -z-20 opacity-0 blur-2xl group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#ffa0bf,_#c1d2d3,_#fc766a,_#e8ded1,_#8866e9)] rounded-2xl transition-all duration-700 ease-in-out"></div>
              )}
              <div className="text-3xl mb-3 z-10 relative">{item.icon}</div>
              <h4 className="font-semibold text-lg text-[#fef7f1] mb-2 z-10 relative">{item.title}</h4>
              <p className="text-white/70 leading-relaxed text-sm z-10 relative">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 max-w-3xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-8 text-white/80 text-base">
          <div>
            <h3 className="text-xl font-semibold text-[#fef7f1] mb-2">What do I need to get started?</h3>
            <p>Once you choose a plan, I’ll send over a short form to collect basic info like your goals, content, and any inspiration. We’ll then schedule a kickoff to begin!</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#fef7f1] mb-2">Can I upgrade to a bigger plan later?</h3>
            <p>Yes, you can upgrade at any time. We’ll assess what’s needed and apply the cost difference accordingly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#fef7f1] mb-2">Do you offer refunds?</h3>
            <p>Due to the custom nature of the work, I don’t offer refunds. However, I work closely with clients to ensure satisfaction every step of the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
