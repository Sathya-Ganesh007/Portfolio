"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-10 bg-black relative">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 sm:gap-16 lg:gap-24">
        {/* Image Side */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative group w-full sm:w-auto lg:-mt-16"
        >
          <div className="relative w-full sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[450px] aspect-[4/5] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700">
             <img
               src="/ganesh.png.png"
               alt="Ganesh"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Decorative arrow box */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-[#CCFF00] rounded-xl flex items-center justify-center p-4">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-black fill-current translate-x-1 -translate-y-1">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-10 lg:space-y-12 mt-10 sm:mt-8 lg:mt-0"
        >
          <div className="space-y-5 sm:space-y-6">
             <span className="text-[11px] sm:text-[12px] font-black tracking-[0.15em] text-[#CCFF00] uppercase font-mono">MY MISSION</span>
             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] text-white flex flex-col uppercase">
                <span>BUILDING INFRASTRUCTURE</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>THAT DOESN'T BREAK</span>
             </h2>
          </div>

          <p className="text-base sm:text-lg text-white/50 font-medium leading-loose max-w-xl tracking-wide">
             I engineer AI-powered applications and cloud-native backend systems with scalable architecture, clean design, and production-grade reliability — transforming complex ideas into secure, high-performance software built for real-world scale.
          </p>

          <div className="grid grid-cols-2 gap-px bg-white/10 pt-8 sm:pt-10 mt-8 sm:mt-10">
             <div className="bg-black py-8 sm:py-10 pr-8 sm:pr-10 space-y-3 sm:space-y-4">
                <span className="text-[12px] font-black tracking-[0.2em] text-[#CCFF00] font-mono">01</span>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white font-mono leading-none">2+</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold font-mono">Years <br /> Experience</p>
             </div>
             <div className="bg-black py-8 sm:py-10 pl-8 sm:pl-10 space-y-3 sm:space-y-4">
                <span className="text-[12px] font-black tracking-[0.2em] text-[#CCFF00] font-mono">02</span>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white font-mono leading-none">12+</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold font-mono">Selected <br /> Clients</p>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
