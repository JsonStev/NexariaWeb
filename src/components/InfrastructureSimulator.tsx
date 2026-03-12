import React, { useState } from 'react';
import { Calendar, Table, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function InfrastructureSimulator() {
    const [step, setStep] = useState(0);

    const handleSimulate = () => {
        if (step > 0) return;
        setStep(1); // User clicked
        setTimeout(() => setStep(2), 800);  // Bot replies
        setTimeout(() => setStep(3), 2000); // Calendar event
        setTimeout(() => setStep(4), 3200); // Sheets row
        setTimeout(() => setStep(5), 4000); // Success badge
    };

    const reset = () => setStep(0);

    return (
        <div className="bg-brand-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    {...fadeIn}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Simulador</h2>
                    <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
                        Observa en tiempo real cómo nuestro agente se conecta con tus herramientas para sincronizar la información automáticamente.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative overflow-hidden">

                    {/* Badge de éxito */}
                    <div className={`absolute top-[30%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#0A0B10] border border-cyan-500 px-5 py-3 rounded-full flex items-center gap-2 shadow-[0_0_40px_rgba(0,210,255,0.4)] transition-all duration-500 whitespace-nowrap ${step >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
                        <Zap className="w-5 h-5 text-brand-accent-start" />
                        <span className="font-bold tracking-wide text-white text-sm">⚡ Acción Exitosa</span>
                    </div>

                    {/* Left Column: WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass rounded-3xl border-white/10 overflow-hidden flex flex-col h-[520px] sm:h-[600px] shadow-2xl relative min-w-0 w-full"
                    >
                        {/* WA Header */}
                        <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                            <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center">
                                <span className="text-cyan-400 font-bold">N</span>
                            </div>
                            <div>
                                <h3 className="text-white font-medium">Nexaria Agent</h3>
                                <p className="text-xs text-brand-secondary flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    En línea
                                </p>
                            </div>
                        </div>

                        {/* WA Body */}
                        <div className="flex-1 bg-[#0B141A] p-5 flex flex-col gap-4 overflow-hidden relative">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                            <div className="flex justify-center mb-2 relative z-10">
                                <span className="bg-[#1F2C34] text-brand-secondary text-[11px] px-3 py-1 rounded-lg uppercase tracking-wider font-medium">Hoy</span>
                            </div>

                            {/* Bot greeting */}
                            <div className="bg-[#202C33] text-white p-3 rounded-2xl rounded-tl-sm self-start max-w-[85%] text-[15px] relative z-10 shadow-sm">
                                ¡Hola! Soy el asistente de Nexaria. ¿En qué puedo ayudarte hoy?
                            </div>

                            {/* User message (Simulated) */}
                            <div className={`bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[85%] text-[15px] relative z-10 shadow-sm transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                Quiero agendar una cita para el próximo martes a las 10:00 AM.
                            </div>

                            {/* Bot response */}
                            <div className={`bg-[#202C33] text-white p-3 rounded-2xl rounded-tl-sm self-start max-w-[85%] text-[15px] relative z-10 shadow-sm transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                ¡Perfecto! He agendado tu cita para el martes a las 10:00 AM. Te esperamos en nuestras instalaciones.
                            </div>
                        </div>

                        {/* WA Footer / Action */}
                        <div className="bg-[#1F2C34] p-5 border-t border-white/5 flex items-center justify-center shrink-0">
                            {step === 0 ? (
                                <button
                                    onClick={handleSimulate}
                                    className="btn-primary w-full shadow-[0_0_20px_rgba(0,210,255,0.15)] py-4 text-[15px]"
                                >
                                    Simular Agendamiento de Cita
                                </button>
                            ) : (
                                <button
                                    onClick={reset}
                                    className="text-brand-secondary hover:text-white transition-colors text-[15px] py-4"
                                >
                                    Reiniciar Simulación
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column: Backend Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col gap-6 h-auto lg:h-[600px] min-w-0 w-full"
                    >

                        {/* Google Calendar Mockup */}
                        <div className="glass rounded-2xl border-white/10 flex-1 flex flex-col overflow-hidden shadow-xl">
                            <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10 shrink-0">
                                <Calendar className="w-4 h-4 text-brand-accent-start" />
                                <span className="text-sm font-medium">Calendario</span>
                            </div>
                            <div className="flex-1 p-4 flex min-h-0">
                                <div className="w-14 border-r border-white/10 flex flex-col justify-between py-4 text-xs text-brand-secondary font-medium">
                                    <span>09:00</span>
                                    <span>10:00</span>
                                    <span>11:00</span>
                                    <span>12:00</span>
                                </div>
                                <div className="flex-1 relative border-t border-white/5 my-4 ml-4">
                                    {/* Grid lines */}
                                    <div className="absolute w-full h-px bg-white/5 top-1/3" />
                                    <div className="absolute w-full h-px bg-white/5 top-2/3" />

                                    {/* Event */}
                                    <div className={`absolute top-1/3 left-0 right-2 h-1/3 bg-cyan-500/20 border border-cyan-400 border-l-4 border-l-cyan-400 rounded p-2 overflow-hidden transition-transform duration-500 ease-out origin-center ${step >= 3 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                                        <p className="text-[10px] font-bold text-white mb-1 truncate">Cita Agendada: Juan Pérez</p>
                                        <p className="text-[10px] text-cyan-200">10:00 AM - 11:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Sheets Mockup */}
                        <div className="glass rounded-2xl border-white/10 flex-1 flex flex-col overflow-hidden shadow-xl">
                            <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10 shrink-0">
                                <Table className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm font-medium">Reporte de Actividad</span>
                            </div>
                            <div className="flex-1 overflow-x-auto overflow-y-auto min-h-0 bg-black/20 text-sm">
                                <table className="w-full text-left">
                                    <thead className="text-[11px] text-brand-secondary uppercase tracking-wider bg-white/5 sticky top-0 z-10">
                                        <tr>
                                            <th className="px-3 py-3 font-medium">ID</th>
                                            <th className="px-3 py-3 font-medium">Nombre</th>
                                            <th className="px-3 py-3 font-medium">Fecha</th>
                                            <th className="hidden sm:table-cell px-3 py-3 font-medium">Servicio</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 whitespace-nowrap">
                                        <tr className="text-brand-secondary/70">
                                            <td className="px-3 py-3">#001</td>
                                            <td className="px-3 py-3">Ana Martínez</td>
                                            <td className="px-3 py-3">Lunes, 09:00 AM</td>
                                            <td className="hidden sm:table-cell px-3 py-3">Consulta Inicial</td>
                                        </tr>
                                        <tr className="text-brand-secondary/70">
                                            <td className="px-3 py-3">#002</td>
                                            <td className="px-3 py-3">Carlos Ruiz</td>
                                            <td className="px-3 py-3">Lunes, 11:30 AM</td>
                                            <td className="hidden sm:table-cell px-3 py-3">Revisión</td>
                                        </tr>
                                        {/* Animated New Row */}
                                        <tr className={`transition-all duration-700 bg-cyan-500/10 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                                            <td className="px-3 py-3 text-cyan-400 font-medium font-mono">#003</td>
                                            <td className="px-3 py-3 text-white font-medium">Juan Pérez</td>
                                            <td className="px-3 py-3 text-white">Martes, 10:00 AM</td>
                                            <td className="hidden sm:table-cell px-3 py-3 text-white">Seguimiento</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}
