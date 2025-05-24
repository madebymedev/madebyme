'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://formspree.io/f/mkgralna', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            const result = await response.json();

            if (result.ok) {
                setSuccess(true);
                e.target.reset();
            } else {
                setError(true);
            }
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-10 font-[Quicksand] py-24 px-6 max-w-4xl mx-auto text-[#fef7f1]"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Let’s Talk</h2>
            <p className="text-center text-white/70 mb-12">
                If you're interested in what I offer, feel free to reach out to me!
            </p>

            {/* Contact boxes */}
            <div className="flex flex-col items-center justify-center gap-8 mb-10 md:flex-row">
                {[{ icon: <Mail />, label: 'Email', value: 'contact@madebyme.dev' },
                { icon: <Phone />, label: 'Phone', value: '+32 471 37 16 19' }].map(({ icon, label, value }) => (
                    <div key={label} className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden w-full max-w-sm">
                        <div className="absolute -inset-1 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#e8ded1,_#d1b5aa,_#ffa0bf,_#8866e9,_#fc766a)]"></div>
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="w-7 h-7 text-[#e8ded1]">{icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#e8ded1] mb-1">{label}</h3>
                                <p className="text-white/70 text-sm">{value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="group relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur space-y-6 overflow-hidden max-w-xl mx-auto w-full focus-within:ring-2 focus-within:ring-[#e8ded1] transition-all duration-500"
            >
                <div className="absolute -inset-1 -z-10 rounded-3xl opacity-0 blur-2xl group-hover:opacity-40 group-hover:animate-gradient-glow bg-[conic-gradient(at_top_left,_#fc766a,_#ffa0bf,_#e8ded1,_#d1b5aa,_#8866e9)] transition-opacity duration-700"></div>

                {/* Fields */}
                {[
                    { label: 'Name', name: 'name', type: 'text' },
                    { label: 'Phone', name: 'phone', type: 'text' },
                    { label: 'Email', name: 'email', type: 'email' },
                ].map(({ label, name, type }) => (
                    <div key={name}>
                        <label className="block text-sm mb-1 text-white/70">{label}</label>
                        <input
                            type={type}
                            name={name}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all duration-300 ease-in-out transform focus:scale-[1.02]"
                        />
                    </div>
                ))}

                <div>
                    <label className="block text-sm mb-1 text-white/70">Your Message</label>
                    <textarea
                        name="message"
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all duration-300 ease-in-out transform focus:scale-[1.02]"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`relative inline-block w-full text-center px-6 py-3 rounded-full font-semibold text-sm ${loading ? 'opacity-50 cursor-not-allowed' : 'text-white bg-white/10'
                        } backdrop-blur-[6px] border border-white/20 overflow-hidden shadow-md transition-all duration-300 group`}
                >
                    <span className="absolute inset-0 rounded-full pointer-events-none border border-transparent group-hover:border-transparent before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#e8ded1] before:via-[#d1b5aa] before:to-[#e8ded1] before:bg-[length:200%_200%] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:animate-border-gradient z-0"></span>
                    <span className="relative z-10 group-hover:text-[#3a2f2b] transition-colors duration-300">
                        {loading ? 'Sending...' : 'Send Message'}
                    </span>
                </button>

                {/* Status Messages */}
                {success && (
                    <div className="flex items-center justify-center gap-2 text-[#fef7f1] mt-4 text-center">
                        <CheckCircle className="w-5 h-5" />
                        <span>Your message has been sent</span>
                    </div>
                )}

                {error && (
                    <div className="flex items-center justify-center gap-2 text-[#fef7f1] mt-4 text-center">
                        <AlertCircle className="w-5 h-5" />
                        <span>Something went wrong. Please try again</span>
                    </div>
                )}

            </form>

            {/* Animations */}
            <style jsx>{`
        @keyframes gradient-glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes border-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-glow {
          background-size: 400% 400%;
          animation: gradient-glow 8s ease infinite;
        }

        .before\\:animate-border-gradient::before {
          animation: border-gradient 4s ease infinite;
        }
      `}</style>
        </motion.section>
    );
}
