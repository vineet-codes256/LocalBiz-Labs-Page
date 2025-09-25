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
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          scale: { duration: 2 },
          boxShadow: { duration: 2 }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="sm:w-6 sm:h-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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
