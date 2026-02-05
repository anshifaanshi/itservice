import { useRef } from 'react';
import { featuresData } from '../assets/dummy-data';
import Title from './Title';
import { motion } from 'framer-motion';

export default function Features() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    
    return (
        <section id="features" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Our 360-Degree Service Ecosystem"
                    heading="Ready to Go Digital? Lead the Way."
                    description="From the first line of code to the final frame of a brand film, we build integrated digital experiences that drive real ROI."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuresData.map((feature, i) => (
                        <motion.div
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            key={i}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add("transition", "duration-300", "hover:border-white/15", "hover:-translate-y-1");
                                }
                            }}
                            className="rounded-2xl p-6 bg-white/3 border border-white/6"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4 text-blue-400">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Brand Conclusion */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-bold">
                        Ekho Digix: Future-Proofing Your Digital Success
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
