import { motion } from 'framer-motion';
import Image from 'next/image';
import { memo } from 'react';

function Transformations() {
    return (
        <section id="transformations" className="max-w-6xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold mb-12 text-center text-orange-600"
            >
                Our Digital Transformations
            </motion.h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <Image
                        src="/images/transformations/DigitalShopTransformation.png"
                        alt="Digital transformation of a local shop showing before and after online presence with website and mobile app"
                        width={200}
                        height={400}
                        className="w-full h-full object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold mb-2">Transform Your Shop Online</h3>
                    <p className="text-sm text-gray-600">Turn your physical shop into a thriving online business.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <Image
                        src="/images/transformations/LocalToDigitalEvolution.png"
                        alt="Evolution from traditional local business to modern digital business with online ordering and delivery"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold mb-2">See the Digital Difference</h3>
                    <p className="text-sm text-gray-600">Real results from our digital transformation services.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <Image
                        src="/images/transformations/DigitalStoreEvolution.png"
                        alt="Digital evolution of retail store showing modern online shopping experience with mobile app and website"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold mb-2">Evolve to Stay Competitive</h3>
                    <p className="text-sm text-gray-600">Adapt and grow with modern digital tools.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <Image
                        src="/images/transformations/EmpoweredDigitalEntrepreneurs.png"
                        alt="Empowered entrepreneurs using digital tools and technology for business growth and success"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold mb-2">Empower Your Business Digitally</h3>
                    <p className="text-sm text-gray-600">Give your business the power of digital technology.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <Image
                        src="/images/transformations/BrickToDigitalConnection.png"
                        alt="Bridge connecting traditional brick-and-mortar business to digital online presence and e-commerce"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold mb-2">Bridge the Digital Divide</h3>
                    <p className="text-sm text-gray-600">Connect your traditional business to the digital world.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-white/60 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                    <Image
                        src="/images/transformations/DigitalEmpowermentBridge.png"
                        alt="Empowerment Bridge"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold mb-2">Empower Your Digital Future</h3>
                    <p className="text-sm text-gray-600">Build a bridge to your digital success story.</p>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default memo(Transformations);
