import { Smartphone, BrainCircuit, CalendarCheck, Database } from 'lucide-react';
import { motion } from 'motion/react';
import InfrastructureSimulator from './InfrastructureSimulator';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Interacción",
            description: "El cliente escribe por WhatsApp de forma natural, sin fricción de bajar aplicaciones externas.",
            icon: <Smartphone className="w-8 h-8 text-cyan-400" />
        },
        {
            number: "02",
            title: "Inteligencia",
            description: "El agente procesa la intención, verifica disponibilidad y aplica al instante tus reglas de negocio.",
            icon: <BrainCircuit className="w-8 h-8 text-cyan-400" />
        },
        {
            number: "03",
            title: "Sincronización",
            description: "Se bloquea el espacio en tu calendario automáticamente en tiempo real sin intervención humana.",
            icon: <CalendarCheck className="w-8 h-8 text-cyan-400" />
        },
        {
            number: "04",
            title: "Control",
            description: "Toma decisiones estratégicas con reportes claros y estructurados sobre el rendimiento de tu atención y flujo de pacientes/clientes.",
            icon: <Database className="w-8 h-8 text-cyan-400" />
        }
    ];

    return (
        <section id="como-funciona" className="py-32 px-6 bg-brand-bg relative overflow-hidden">
            {/* Background radial effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-radial opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] glow-radial opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    {...fadeIn}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Cómo Funciona</h2>
                    <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6" />
                    <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
                        Un flujo de trabajo completamente automatizado que opera en piloto automático para que te enfoques en brindar un gran servicio.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[110px] left-[12%] right-[12%] h-[2px] bg-white/5">
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-accent-start/0 via-brand-accent-start to-brand-accent-start/0 w-full animate-[pulse_3s_ease-in-out_infinite]" />
                    </div>

                    <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative group flex flex-col items-center"
                            >
                                {/* Connecting Line (Mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden absolute left-1/2 -bottom-10 h-10 w-[2px] bg-white/5 z-0">
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent-start/0 via-brand-accent-start to-brand-accent-start/0 animate-[pulse_3s_ease-in-out_infinite]" />
                                    </div>
                                )}

                                {/* Card */}
                                <div className="glass w-full p-8 rounded-3xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500 relative z-10 bg-[#0A0B10]/80 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_rgba(0,210,255,0.15)] h-full flex flex-col items-center text-center">

                                    {/* Glowing background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                                    {/* Number & Icon Container */}
                                    <div className="mb-8 relative w-full flex justify-center">
                                        <span className="absolute -top-4 -left-2 text-[80px] font-display font-bold text-white/5 select-none leading-none group-hover:text-white/10 transition-colors duration-500">
                                            {step.number}
                                        </span>
                                        <div className="w-20 h-20 rounded-2xl bg-[#0F131A] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:border-cyan-500/50 shadow-xl relative z-20">
                                            {step.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-display font-bold mb-4 text-white relative z-20">{step.title}</h3>
                                    <p className="text-brand-secondary leading-relaxed text-[15px] flex-1 relative z-20">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 pt-24 border-t border-white/5">
                    <InfrastructureSimulator />
                </div>
            </div>
        </section>
    );
}
