import { motion } from 'framer-motion';
import Image from 'next/image';
import { memo } from 'react';

function About() {
    return (
        <section id="about" className="max-w-4xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold mb-8 text-center text-orange-600"
            >
                Who We Are
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center mb-8"
            >
                <p className="text-lg text-gray-700 mb-6">
                    We&apos;re engineers and problem-solvers on a mission to help local businesses grow with digital tools once reserved for big companies.
                </p>
                <Image
                    src="/logo.png"
                    alt="LocalBizLabs logo - Digital solutions for local businesses"
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600">Based in Dehradun, serving businesses across India.</p>
            </motion.div>
        </section>
    );
}

export default memo(About);
