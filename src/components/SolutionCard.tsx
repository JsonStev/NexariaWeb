import React from 'react';
import { motion } from 'motion/react';

export default function SolutionCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className="glass p-8 rounded-3xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)] hover:-translate-y-1.5 transition-all duration-500 group relative bg-white/[0.02] hover:bg-white/[0.04]"
        >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-500">
                {icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
            <p className="text-brand-secondary leading-relaxed">{description}</p>
        </motion.div>
    );
}
