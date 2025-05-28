"use client";
// Refined Landing Page for LOCALBIZLABS.com with Premium White Theme and Smooth Animations
// Stack: React + TailwindCSS + Framer Motion (for animations)

import { motion } from 'framer-motion';

export default function LocalBizLabs() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-6"
        >
          LOCALBIZLABS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10"
        >
          Get Your Business Online — Fast & Affordable. Smart Websites • Booking Tools • Google Maps • Branding
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {['Websites', 'Mobile Apps', 'E-Commerce', 'Local SEO', 'Automation'].map((item, index) => (
            <span
              key={index}
              className="bg-slate-800 text-white px-5 py-2 rounded-full text-sm shadow-md hover:scale-105 transition-transform"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="mailto:hello@localbizlabs.com"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-slate-900 text-white font-bold py-3 px-8 rounded-full shadow-lg"
        >
          Let&apos;s Build Your Website →
        </motion.a>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-left py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-800 mb-6"
        >
          Why LocalBizLabs?
        </motion.h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="list-disc list-inside text-lg text-slate-700 space-y-4"
        >
          {[ 
            'Tailor-made digital storefronts with seamless UX/UI.',
            'End-to-end automation: bookings, orders, payments — all handled.',
            'SEO tools and digital marketing to boost your local reach.',
            'Real-time analytics and support to scale as you grow.',
            'Mobile-optimized websites delivered in just 3–5 days.'
          ].map((text, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <footer className="text-center text-sm text-slate-400 py-10">
        © {new Date().getFullYear()} LOCALBIZLABS.com — A brand of Rawat Innovations Pvt. Ltd. | CIN: U62011UT2025PTC019256
      </footer>
    </main>
  );
}
