/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative pt-48 pb-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glow-radial -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-8"
        >
          <Sparkles className="w-3 h-3" />
          Automatización Inteligente de Alto Nivel
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8"
        >
          Automatiza con IA <span className="gradient-text">Recupera tu Tiempo</span> y Multiplica tus Ingresos.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg text-brand-secondary/90 max-w-2xl mx-auto mb-12 leading-[1.8]"
        >
          Construimos infraestructura lógica y agentes inteligentes de alta calidad que automatizan los procesos críticos de tu negocio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#como-funciona">
            <button className="btn-primary w-full sm:w-auto">
              Ver Agente en Acción
              <ChevronRight className="w-5 h-5" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
