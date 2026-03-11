/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import NexariaLogo from './NexariaLogo';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 glow-radial opacity-30 -z-10" />

      <div className="max-w-4xl mx-auto text-center mb-32">
        <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-display font-bold mb-12">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </motion.h2>
        <motion.button
          {...fadeIn}
          className="btn-primary text-xl px-12 py-6 mx-auto"
        >
          Inicia tu Transformación Hoy
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 md:flex-1 flex-shrink-0">
          <NexariaLogo className="w-6 h-6" />
          <span className="text-xl font-display font-bold">Nexaria Labs</span>
        </div>
        <p className="text-brand-secondary text-sm text-center md:flex-[2]">
          © 2026 Nexaria Labs. Optimizando el futuro.
        </p>
        <div className="flex md:justify-end gap-6 md:flex-1 flex-shrink-0">
          <a href="#" className="text-brand-secondary hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-brand-secondary hover:text-white transition-colors">X (Twitter)</a>
          <a href="#" className="text-brand-secondary hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
