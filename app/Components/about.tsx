"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-10 bg-black relative">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        {/* Image Side */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative group"
        >
          <div className="relative w-full aspect-[4/5] md:w-[450px] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700">
             <img 
               src="/ganesh.png.png" 
               alt="Ganesh" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          {/* Decorative stats box */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#CCFF00] rounded-xl flex items-center justify-center p-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-black fill-current translate-x-1 -translate-y-1">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-10"
        >
          <div className="space-y-4">
             <span className="text-[12px] font-black tracking-[0.15em] text-[#CCFF00] uppercase font-mono">OUR MISSION</span>
             <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white flex flex-col uppercase">
                <span>HUMAN-CENTRIC</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>DIGITAL CRAFT</span>
             </h2>
          </div>

          <p className="text-lg text-white/50 font-medium leading-relaxed max-w-xl">
             Leading the way in crafting immersive products with artistic expression. We create products that are not only visualy stunning, but also highly functional and user-centric. Looking for a freelance partner to elevate your digital presence? You've come to the right place.
          </p>

          <div className="grid grid-cols-2 gap-px bg-white/10 pt-10 mt-10">
             <div className="bg-black py-10 pr-10 space-y-4">
                <span className="text-[12px] font-black tracking-[0.2em] text-[#CCFF00] font-mono">01</span>
                <h3 className="text-6xl font-black tracking-tighter text-white font-mono leading-none">2+</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold font-mono">Years <br /> Experience</p>
             </div>
             <div className="bg-black py-10 pl-10 space-y-4">
                <span className="text-[12px] font-black tracking-[0.2em] text-[#CCFF00] font-mono">02</span>
                <h3 className="text-6xl font-black tracking-tighter text-white font-mono leading-none">12+</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold font-mono">Selected <br /> Clients</p>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

