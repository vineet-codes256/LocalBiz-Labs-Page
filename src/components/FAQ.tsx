import { motion } from 'framer-motion';

export default function FAQ() {
    return (
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
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white/60 backdrop-blur-sm rounded p-4 border border-white/20 shadow-md">
                    <div className="font-semibold text-orange-700 mb-1">I don&apos;t know tech. Can you handle everything?</div>
                    <div className="text-gray-700">Yes, from hosting to updates, we manage everything.</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white/60 backdrop-blur-sm rounded p-4 border border-white/20 shadow-md">
                    <div className="font-semibold text-orange-700 mb-1">What if I need changes later?</div>
                    <div className="text-gray-700">All plans include support and optional maintenance packages.</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white/60 backdrop-blur-sm rounded p-4 border border-white/20 shadow-md">
                    <div className="font-semibold text-orange-700 mb-1">How fast can I go live?</div>
                    <div className="text-gray-700">Starter sites go live in 7 days. Advanced builds 3–6 weeks.</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white/60 backdrop-blur-sm rounded p-4 border border-white/20 shadow-md">
                    <div className="font-semibold text-orange-700 mb-1">Do you provide training?</div>
                    <div className="text-gray-700">Yes, we train your staff to use dashboards and tools.</div>
                </motion.div>
            </div>
        </section>
    );
}
