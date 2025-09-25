import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed top-3 left-1/2 transform -translate-x-1/2 z-30 bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg rounded-full w-[90%] max-w-4xl">
            <div className="px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/logo.png"
                            alt="LocalBizLabs logo"
                            className="object-contain rounded-full"
                            width={48}
                            height={48}
                            priority
                        />
                    </div>
                    <span className="hidden sm:block font-bold text-lg text-gray-800" style={{ fontFamily: 'Inter' }}>
                        LocalBizLabs
                    </span>
                </div>
                <motion.a
                    href="#contact"
                    className="bg-orange-600 text-white px-3 py-2 sm:px-4 rounded-full font-semibold hover:bg-orange-700 transition-colors text-sm sm:text-base whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Get free business analysis"
                >
                    <span className="hidden sm:inline">Get Free Business Analysis</span>
                    <span className="sm:hidden">Free Analysis</span>
                </motion.a>
            </div>
        </header>
    );
}
