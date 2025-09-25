import { motion } from 'framer-motion';

export default function ReferralBanner() {
    return (
        <section className="bg-orange-100 py-12">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl font-bold mb-4 text-orange-800"
                >
                    Refer a business. Earn 10% commission. No limits.
                </motion.h2>
                <motion.a
                    href="#contact"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                >
                    Start Referring →
                </motion.a>
            </div>
        </section>
    );
}
