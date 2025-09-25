import { motion } from 'framer-motion';

interface HeroProps {
    isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
    return (
        <section id="home" className="relative max-w-6xl mx-auto py-20 md:py-24 px-4 sm:px-6 text-center" style={{ perspective: '1000px' }}>
            <motion.h1
                initial={{ opacity: 0, y: -10, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-4 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent leading-tight"
            >
                Get Your Business Online in 7 Days – Fast, Affordable, Professional.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, rotateY: 20 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-10 drop-shadow-sm`}
            >
                Websites, apps, and automations that bring you more customers and save you time.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
            >
                <motion.a
                    href="mailto:hello@localbizlabs.com"
                    className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Book a Free Consultation
                </motion.a>
                <motion.a
                    href="#case-studies"
                    className="inline-block border-2 border-orange-600 text-orange-600 font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    See Our Work
                </motion.a>
            </motion.div>
        </section>
    );
}
