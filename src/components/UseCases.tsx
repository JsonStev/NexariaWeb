import React from 'react';
import { motion } from 'motion/react';
import {
    Stethoscope,
    Scissors,
    Flower2,
    Wrench,
    Scale,
    Mic
} from 'lucide-react';

const cases = [
    {
        title: "Clínicas y Consultorios",
        description: "Gestión de agendas médicas, confirmación de citas y reprogramacion de citas en automatico.",
        icon: <Stethoscope className="w-8 h-8 text-cyan-400" />
    },
    {
        title: "Barberías y Salones",
        description: "Reserva de turnos por especialista y gestión de flujo de clientes en tiempo real a través de WhatsApp.",
        icon: <Scissors className="w-8 h-8 text-cyan-400" />
    },
    {
        title: "Spas y Centros de Estética",
        description: "Selección de servicios personalizados, paquetes de tratamiento y agendamiento automático.",
        icon: <Flower2 className="w-8 h-8 text-cyan-400" />
    },
    {
        title: "Talleres Automotrices",
        description: "Agendamiento de mantenimientos preventivos, alertas de estado de reparación y recepción de vehículos 24/7.",
        icon: <Wrench className="w-8 h-8 text-cyan-400" />
    },
    {
        title: "Abogados y Consultores",
        description: "Clasificación de consultas legales, recolección de información previa y agendamiento de sesiones de asesoría.",
        icon: <Scale className="w-8 h-8 text-cyan-400" />
    },
    {
        title: "Coaches y Profesionales",
        description: "Gestion de sessiones, consultas de informacion y sincronización total con calendarios personales.",
        icon: <Mic className="w-8 h-8 text-cyan-400" />
    }
];

export default function UseCases() {
    return (
        <section id="casos-de-uso" className="py-32 px-6 bg-brand-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6"
                    >
                        Soluciones Inteligentes para Cada Negocio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-brand-secondary text-lg max-w-2xl mx-auto"
                    >
                        Nuestros agentes se adaptan a la lógica de tu industria para maximizar tu productividad.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="glass p-8 rounded-3xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)] hover:-translate-y-1.5 transition-all duration-500 group relative bg-white/[0.02] hover:bg-white/[0.04] overflow-hidden"
                        >
                            {/* Card background bloom effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-brand-secondary leading-relaxed group-hover:text-white transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
