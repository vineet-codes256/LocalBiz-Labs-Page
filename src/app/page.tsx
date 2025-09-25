'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Static imports for above-the-fold components
import Header from '../components/Header';
import Hero from '../components/Hero';

// Dynamic imports for below-the-fold components
const Transformations = dynamic(() => import('../components/Transformations'));
const WhyChooseUs = dynamic(() => import('../components/WhyChooseUs'));
const Services = dynamic(() => import('../components/Services'));
const Pricing = dynamic(() => import('../components/Pricing'));
const CaseStudies = dynamic(() => import('../components/CaseStudies'));
const ReferralBanner = dynamic(() => import('../components/ReferralBanner'));
const About = dynamic(() => import('../components/About'));
const FAQ = dynamic(() => import('../components/FAQ'));
const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="max-w-2xl mx-auto px-6 py-10"><div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div></div>
});
const Footer = dynamic(() => import('../components/Footer'));

export default function LocalBizLabs() {
  // Rate limit state
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const RATE_LIMIT_SECONDS = 60;

  // Dark mode state
  const [isDark, setIsDark] = useState(false);

  // Email validation helper
  const isValidEmail = (email: string) => {
    // Simple regex for demonstration; can be improved
    // Improved regex: checks for valid characters, domain, and TLD (2-24 chars)
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    const now = Date.now();
    if (lastSubmitTime && now - lastSubmitTime < RATE_LIMIT_SECONDS * 1000) {
      return;
    }
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value;
    const businessType = (form.elements.namedItem('businessType') as HTMLInputElement)?.value;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;
    if (!isValidEmail(email)) {
      return;
    }
    setIsSubmitting(true);
    const data = { name, phone, businessType, email, message };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setLastSubmitTime(Date.now());
      } else {
        console.error('Failed to send message');
      }
    } catch {
      console.error('Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <main id="main-content" className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-br from-orange-50 via-white to-orange-100 text-orange-600'} font-sans relative overflow-hidden transition-colors duration-500`}>
      <motion.button
        onClick={() => setIsDark(!isDark)}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDark}
        className={`fixed top-1 right-1 z-40 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${isDark ? 'bg-gradient-to-br from-orange-50 via-white to-orange-100' : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          initial={{ rotate: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
          className='text-xl block'
          role="img"
          aria-hidden="false"
          aria-label={isDark ? 'Sun icon for light mode' : 'Moon icon for dark mode'}
        >
          {isDark ? '☀️' : '🌙'}
        </motion.span>
      </motion.button>

      <Header />

      <Hero isDark={isDark} />

      <Transformations />

      <WhyChooseUs />

      <Services />

      <Pricing />

      <CaseStudies />

      <ReferralBanner />

      <About />

      <FAQ />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919548816875" // Updated phone number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-all"
        whileHover={{ scale: 1.1 }}
        animate={{ scale: [1, 1.125, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </motion.a>

      <Contact onSubmit={handleSubmit} isSubmitting={isSubmitting} lastSubmitTime={lastSubmitTime} RATE_LIMIT_SECONDS={RATE_LIMIT_SECONDS} />

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

      <Footer />
    </main>
  );
}
