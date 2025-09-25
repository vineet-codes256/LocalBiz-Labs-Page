import { motion } from 'framer-motion';
import { memo } from 'react';

function Pricing() {
    return (
        <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center text-orange-600"
            >
                Simple, Transparent Pricing
            </motion.h2>

            {/* Ribbon */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-red-500 text-white text-center py-2 px-4 rounded-full mb-10 mx-auto max-w-md"
            >
                Introductory Offer – First 10 Clients Get 50% Off
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className="grid md:grid-cols-3 gap-8 mb-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <h3 className="text-xl font-bold mb-2">Starter</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-4">₹5,999</div>
                    <ul className="text-sm text-gray-600 space-y-2 mb-4">
                        <li>1-page website like this one</li>
                        <li>Mobile-friendly</li>
                        <li>1 week delivery</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white/80 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center relative"
                >
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs">Popular</div>
                    <h3 className="text-xl font-bold mb-2">Growth</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-4">₹25,000+</div>
                    <ul className="text-sm text-gray-600 space-y-2 mb-4">
                        <li>Dynamic website</li>
                        <li>E-commerce</li>
                        <li>CMS</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/80 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <h3 className="text-xl font-bold mb-2">Pro</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-4">₹1.5L+</div>
                    <ul className="text-sm text-gray-600 space-y-2 mb-4">
                        <li>Custom apps</li>
                        <li>Automation</li>
                        <li>AI integrations</li>
                    </ul>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
            >
                <a
                    href="mailto:hello@localbizlabs.com"
                    className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-colors text-lg font-bold"
                >
                    Book Your Plan Today
                </a>
            </motion.div>
        </section>
    );
}

export default memo(Pricing);
