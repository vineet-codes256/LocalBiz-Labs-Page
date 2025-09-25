import { motion } from 'framer-motion';
import { memo } from 'react';

function Services() {
    return (
        <section id="services" className="max-w-6xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold mb-12 text-center text-orange-600"
            >
                What We Do for Local Businesses
            </motion.h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <div className="text-4xl mb-4">🌐</div>
                    <h3 className="font-bold mb-2">Websites</h3>
                    <p className="text-sm text-gray-600">Mobile-friendly, Google-optimized, and ready in a week.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <div className="text-4xl mb-4">🛒</div>
                    <h3 className="font-bold mb-2">E-commerce</h3>
                    <p className="text-sm text-gray-600">Sell online with payments, orders, and delivery tracking.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="font-bold mb-2">Apps & Dashboards</h3>
                    <p className="text-sm text-gray-600">Custom tools for gyms, cafés, retailers, and more.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="font-bold mb-2">Automation & AI</h3>
                    <p className="text-sm text-gray-600">WhatsApp bots, AI assistants, and workflow tools.</p>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
            >
                <a
                    href="#pricing"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors"
                >
                    See Full Services →
                </a>
            </motion.div>
        </section>
    );
}

export default memo(Services);
