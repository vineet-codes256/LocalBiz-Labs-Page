import { motion } from 'framer-motion';

interface ContactProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    isSubmitting: boolean;
    lastSubmitTime: number | null;
    RATE_LIMIT_SECONDS: number;
}

export default function Contact({ onSubmit, isSubmitting, lastSubmitTime, RATE_LIMIT_SECONDS }: ContactProps) {
    return (
        <section className="max-w-2xl mx-auto px-6 py-10">
            <motion.h2
                id="contact-heading"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600 text-center"
            >
                Get in Touch
            </motion.h2>
            <form
                className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6 space-y-4 border border-white/30"
                onSubmit={onSubmit}
                noValidate
                role="form"
                aria-labelledby="contact-heading"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        aria-describedby="name-error"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        placeholder="Your full name"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        aria-required="true"
                        aria-describedby="phone-error"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        placeholder="+91 98765 43210"
                    />
                </div>
                <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Type <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="businessType"
                        name="businessType"
                        required
                        aria-required="true"
                        aria-describedby="businessType-error"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        placeholder="e.g., Restaurant, Retail, Services"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        placeholder="your.email@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        aria-required="true"
                        aria-describedby="message-error"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-vertical"
                        placeholder="Tell us about your project and requirements..."
                    />
                </div>
                <button
                    type="submit"
                    disabled={
                        isSubmitting ||
                        (!!lastSubmitTime && Date.now() - lastSubmitTime < RATE_LIMIT_SECONDS * 1000)
                    }
                    aria-disabled={
                        isSubmitting ||
                        (!!lastSubmitTime && Date.now() - lastSubmitTime < RATE_LIMIT_SECONDS * 1000)
                    }
                    className={`w-full bg-orange-600 text-white font-bold py-3 rounded-full shadow-lg transition-colors duration-300 ${isSubmitting || (!!lastSubmitTime && Date.now() - lastSubmitTime < RATE_LIMIT_SECONDS * 1000)
                        ? 'opacity-60 cursor-not-allowed'
                        : 'hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2'
                        }`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center text-gray-600 mt-6"
            >
                Prefer to reach out directly? DM us on <a href='https://wa.me/919548816875' className="text-orange-600 hover:underline">WhatsApp</a>, <a href="https://www.instagram.com/localbizlabs/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Instagram</a> or email <a href="mailto:hello@localbizlabs.com" className="text-orange-600 hover:underline">hello@localbizlabs.com</a>.
            </motion.p>
        </section>
    );
}
