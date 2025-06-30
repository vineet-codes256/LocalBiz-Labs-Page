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
            'End-to-end automation: bookings, orders, payments, all handled.',
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

      {/* Services Offered Section */}
      <section className="max-w-4xl mx-auto px-6 text-left py-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600"
        >
          Services Offered
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-4 mb-6 text-lg"
        >
          <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            🧠 <strong>Custom Websites & Web Apps</strong>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            🛍️ <strong>E-Commerce Stores & Marketplaces</strong>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            📱 <strong>Mobile Apps (Android/iOS)</strong>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            🧾 <strong>Dashboards, Admin Panels, CMS</strong>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            🔗 <strong>Workflow Automations & API Integrations</strong>
          </motion.li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-base text-gray-700 bg-gray-50 border-l-4 border-gray-300 p-4 rounded"
        >
          ⚙️ <strong>All builds use modern stacks:</strong> React, Next.js, Firebase, Supabase, Django, Stripe, Razorpay, and more.
        </motion.div>
      </section>

      {/* Services & Pricing Section */}
      <section className="max-w-4xl mx-auto px-6 text-left py-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600"
        >
          Our Services & Pricing
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="space-y-6 mb-8"
        >
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded"
          >
            <strong>Basic Website</strong>: Static pages, contact form <br />
            <span className="text-gray-700">@₹5,999 – ₹12,000</span> <span className="text-xs text-gray-500">(Depending on the complexity of the design)</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded"
          >
            <strong>Full E-Commerce Site</strong>: Payments + Orders + Tracking + User Auth <br />
            <span className="text-gray-700">@₹30,000 – ₹60,000</span> <span className="text-xs text-gray-500">(Depending upon the complexity of design and features)</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded"
          >
            <strong>Advanced Custom Builds</strong>: Admin Dashboard + CMS + Logistics API + SEO + Maintenance <br />
            <span className="text-gray-700">@₹70,000 – ₹1.5L+</span> <span className="text-xs text-gray-500">(can go upto 10 lakhs depending upon the complexity of features)</span>
          </motion.li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-green-50 border-l-4 border-green-400 p-4 rounded text-green-700"
        >
          <strong>Referral Bonus:</strong> Anybody who brings a client will get <span className="font-bold">10% commission</span>.
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded p-4 border-l-4 border-orange-200">
            <div className="font-semibold text-orange-700 mb-1">How long does it take to build a website or app?</div>
            <div className="text-gray-700">Basic sites can be ready in 1-2 weeks. E-commerce and custom builds may take 3-8 weeks depending on features and complexity.</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded p-4 border-l-4 border-orange-200">
            <div className="font-semibold text-orange-700 mb-1">What technologies do you use?</div>
            <div className="text-gray-700">We use modern stacks like React, Next.js, Firebase, Supabase, Django, Stripe, Razorpay, and more, tailored to your needs.</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded p-4 border-l-4 border-orange-200">
            <div className="font-semibold text-orange-700 mb-1">Do you provide ongoing support?</div>
            <div className="text-gray-700">Yes! We offer maintenance, updates, and support packages to keep your business running smoothly.</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded p-4 border-l-4 border-orange-200">
            <div className="font-semibold text-orange-700 mb-1">How do I get started?</div>
            <div className="text-gray-700">Just fill out the contact form below or email us. We’ll get back to you within 24 hours!</div>
          </motion.div>
        </div>
      </section>

      {/* Contact/Lead Form Section */}
      <section className="max-w-2xl mx-auto px-6 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600 text-center"
        >
          Get in Touch
        </motion.h2>
        <form className="bg-white rounded-lg shadow-md p-6 space-y-4 border border-orange-100">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
          </div>
          <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">Send Message</button>
        </form>
      </section>

      {/* Repeated CTA Section */}
      <div className="text-center py-8">
        <motion.a
          href="mailto:hello@localbizlabs.com"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 text-lg"
        >
          Let&apos;s Build Your Website →
        </motion.a>
      </div>

      <footer className="text-center text-sm text-gray-400 py-10">
        © {new Date().getFullYear()} LOCALBIZLABS.com, A brand of Rawat Innovations Pvt. Ltd. | CIN: U62011UT2025PTC019256
        <div className="mt-4 text-gray-500">
          <strong>Contact us:</strong> hello@localbizlabs.com
        </div>
      </footer>
    </main>
  );
}
