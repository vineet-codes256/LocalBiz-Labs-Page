'use client';

// Responsive Landing Page for LOCALBIZLABS.com with Orange Text, Elegant White Design, and Cross-Platform Support
// Stack: React + TailwindCSS + Framer Motion (for animations)

import React from 'react';
import { motion } from 'framer-motion';

export default function LocalBizLabs() {
  return (
    <main className="min-h-screen bg-white text-orange-600 font-sans">
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <motion.img
          src="/logo.png"
          alt="LocalBizLabs Logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 w-24 h-24 object-contain"
        />

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold text-orange-600 mb-4"
        >
          LocalBiz Labs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 mb-10"
        >
          Smart tech for real-world businesses. Custom websites, apps, SEO, automation, and more.
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
              className="border border-orange-500 text-orange-600 px-4 py-2 rounded-full text-sm shadow-md hover:bg-orange-600 hover:text-white hover:scale-115 transition-all"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="mailto:hello@localbizlabs.com"
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }}
          className="inline-block bg-orange-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Let&apos;s Build Your Website →
        </motion.a>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-left py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-6"
        >
          Why LocalBiz Labs?
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
          className="list-disc list-inside text-base sm:text-lg space-y-4"
        >
          {[
            'We build tailor-made digital storefronts with seamless UX/UI.',
            'End-to-end automation: bookings, orders, payments — all handled.',
            'SEO tools and digital marketing to boost your local reach.',
            'Real-time analytics and support to scale as you grow.'
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

      <footer className="text-center text-sm text-gray-400 py-10">
        © {new Date().getFullYear()} LOCALBIZLABS.com — A brand of Rawat Innovations Pvt. Ltd. | CIN: U62011UT2025PTC019256
        <div className="mt-4 text-gray-500">
          <strong>Contact us:</strong> hello@localbizlabs.com
        </div>
      </footer>
    </main>
  );
}
