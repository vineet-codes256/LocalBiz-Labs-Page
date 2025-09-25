import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold text-orange-600 mb-4">LocalBizLabs</h3>
                        <p className="text-sm text-gray-600">Helping local businesses go digital.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li><a href="#services" className="hover:text-orange-600">Websites</a></li>
                            <li><a href="#services" className="hover:text-orange-600">E-commerce</a></li>
                            <li><a href="#services" className="hover:text-orange-600">Apps</a></li>
                            <li><a href="#services" className="hover:text-orange-600">Automation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li><a href="#about" className="hover:text-orange-600">About</a></li>
                            <li><a href="#case-studies" className="hover:text-orange-600">Case Studies</a></li>
                            <li><a href="#pricing" className="hover:text-orange-600">Pricing</a></li>
                            <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://www.instagram.com/localbizlabs/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors" aria-label="Follow us on Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="mailto:hello@localbizlabs.com" className="text-gray-600 hover:text-orange-600 transition-colors" aria-label="Send us an email">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth=".25" aria-hidden="true">
                                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-500 mb-4">
                    Made with &nbsp;
                    <motion.svg
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.125, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-4 h-4 inline-block"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width={16} height={16}
                    >
                        <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#ff0000" />
                    </motion.svg>
                    &nbsp; by <a href="https://rawatinnovations.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Rawat Innovations Pvt. Ltd.</a>
                </div>
                <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Rawat Innovations Pvt. Ltd.</p>
                    <p className="mt-2">Refer and Earn 10% commission on every successful referral. <a href="#contact" className="text-orange-600 hover:underline">Start Referring →</a></p>
                </div>
            </div>
        </footer>
    );
}
