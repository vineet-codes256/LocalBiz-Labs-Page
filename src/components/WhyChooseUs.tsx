import { motion } from 'framer-motion';
import { memo } from 'react';

function WhyChooseUs() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16 bg-orange-50/50 rounded-lg mx-6">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold mb-12 text-center text-orange-600"
            >
                Why LocalBizLabs?
            </motion.h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
                className="grid md:grid-cols-2 gap-8"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-start space-x-4"
                >
                    <div className="text-3xl">⚡</div>
                    <div>
                        <h3 className="font-bold mb-1">Fast Delivery</h3>
                        <p className="text-gray-600">Go live in days, not months.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-start space-x-4"
                >
                    <div className="text-3xl">💰</div>
                    <div>
                        <h3 className="font-bold mb-1">Affordable Pricing</h3>
                        <p className="text-gray-600">Plans starting at just ₹5,999.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-start space-x-4"
                >
                    <div className="text-3xl">🔧</div>
                    <div>
                        <h3 className="font-bold mb-1">End-to-End Solutions</h3>
                        <p className="text-gray-600">We handle design, hosting, payments, and support.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-start space-x-4"
                >
                    <div className="text-3xl">🎁</div>
                    <div>
                        <h3 className="font-bold mb-1">Referral Bonus</h3>
                        <p className="text-gray-600">Earn 10% commission for every client you send.</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default memo(WhyChooseUs);
