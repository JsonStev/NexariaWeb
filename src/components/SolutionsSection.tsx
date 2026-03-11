/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Zap, ShieldCheck, MessageSquare, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import SolutionCard from './SolutionCard';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function SolutionsSection() {
  return (
    <section id="soluciones" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Eficiencia Real para tu Negocio</h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SolutionCard
            icon={<MessageSquare className="w-8 h-8 text-cyan-400" />}
            title="Atención 24/7 sin fricción."
            description="Tus clientes agendan, consultan y gestionan sus citas por WhatsApp de forma natural en cualquier momento."
            delay={0.1}
          />
          <SolutionCard
            icon={<TrendingUp className="w-8 h-8 text-cyan-400" />}
            title="Más Citas y Ventas"
            description="Convierte conversaciones en citas o clientes automáticamente sin perder oportunidades."
            delay={0.2}
          />
          <SolutionCard
            icon={<Zap className="w-8 h-8 text-cyan-400" />}
            title="Reducción de Costos."
            description="Automatiza tareas repetitivas y libera a tu equipo humano para que se enfoque en lo que realmente aporta valor."
            delay={0.3}
          />
          <SolutionCard
            icon={<ShieldCheck className="w-8 h-8 text-cyan-400" />}
            title="Menos Trabajo Manual."
            description="Sincronización perfecta entre calendarios y bases de datos, eliminando citas dobles y olvidos."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
