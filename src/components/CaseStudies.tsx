import { motion } from 'framer-motion';
import Image from 'next/image';
import { memo } from 'react';

function CaseStudies() {
    return (
        <section id="case-studies" className="max-w-6xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold mb-12 text-center text-orange-600"
            >
                Real Results for Local Businesses
            </motion.h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className="grid md:grid-cols-2 gap-8"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg"
                >
                    <div className="flex items-center mb-4">
                        <Image
                            src="/images/testimonials/DigitalCaféExperience.png"
                            alt="Digital Café Experience"
                            width={64}
                            height={64}
                            className="rounded mr-4"
                        />
                        <div>
                            <h3 className="font-bold">Before/After: Café Website</h3>
                            <p className="text-sm text-gray-600">Online orders doubled</p>
                        </div>
                    </div>
                    <blockquote className="text-gray-700 italic">
                        &ldquo;Our café doubled online orders thanks to LocalBizLabs.&rdquo;
                    </blockquote>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white/80 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg"
                >
                    <div className="flex items-center mb-4">
                        <Image
                            src="/images/testimonials/ModernStoreEfficiency.png"
                            alt="Modern Store Efficiency"
                            width={64}
                            height={64}
                            className="rounded mr-4"
                        />
                        <div>
                            <h3 className="font-bold">Before/After: Retail Store App</h3>
                            <p className="text-sm text-gray-600">Inventory management streamlined</p>
                        </div>
                    </div>
                    <blockquote className="text-gray-700 italic">
                        &ldquo;Managing inventory is now effortless with their custom app.&rdquo;
                    </blockquote>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center mt-8"
            >
                <a
                    href="#contact"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors"
                >
                    See More Success Stories →
                </a>
            </motion.div>
        </section>
    );
}

export default memo(CaseStudies);
