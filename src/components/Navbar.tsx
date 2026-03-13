/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import NexariaLogo from './NexariaLogo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 m-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <NexariaLogo className="w-8 h-8" />
            <span className="text-2xl font-display font-bold gradient-text">Nexaria Labs</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-brand-accent-start transition-colors">Inicio</a>
            <a href="#soluciones" className="text-sm font-medium hover:text-brand-accent-start transition-colors">Soluciones</a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-brand-accent-start transition-colors">Cómo Funciona</a>
            <a href="#casos-de-uso" className="text-sm font-medium hover:text-brand-accent-start transition-colors">Casos de Uso</a>
            <a href="https://wa.me/50588684946?text=%C2%A1Hola%20Nexaria%20Labs!%20%F0%9F%9A%80%20Vengo%20de%20la%20web%20y%20me%20interesa%20agendar%20una%20demo%20estrat%C3%A9gica%20para%20automatizar%20procesos%20en%20mi%20negocio.%20%C2%BFPodemos%20hablar?" target='_blank'>
              <button className="btn-primary text-sm py-2.5 px-6">Agendar Demo</button>
            </a>


          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl pt-28 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center items-center">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold">Inicio</a>
              <a href="#soluciones" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold">Soluciones</a>
              <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold">Cómo Funciona</a>
              <a href="#casos-de-uso" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold">Casos de Uso</a>
              <a href="https://wa.me/50588684946?text=%C2%A1Hola%20Nexaria%20Labs!%20%F0%9F%9A%80%20Vengo%20de%20la%20web%20y%20me%20interesa%20agendar%20una%20demo%20estrat%C3%A9gica%20para%20automatizar%20procesos%20en%20mi%20negocio.%20%C2%BFPodemos%20hablar?" target='_blank'>
                <button className="btn-primary text-sm py-2.5 px-6 mt-4">Agendar Demo</button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
