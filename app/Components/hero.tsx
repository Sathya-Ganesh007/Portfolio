"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-start px-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] -z-10 animate-glow" />
      
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 glass-card px-4 py-2 rounded-full w-fit"
          >
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded leading-none">NEW</span>
            <span className="text-xs font-medium text-white/80 tracking-tight">No. 1 Studio of 2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-medium tracking-tight leading-[0.9] text-white"
          >
            Ganesh V <br />
            <span className="text-white/60">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground font-light max-w-md leading-relaxed"
          >
            We specialize in crafting unique digital presence that help businesses grow and stand out in their industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:opacity-90 transition-opacity">
              Connect With Us
            </button>
            <button className="px-8 py-4 glass-card text-white font-bold rounded-xl hover:bg-white/5 transition-colors">
              What is Landin?
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-video rounded-3xl overflow-hidden glass-card group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop" 
            alt="Showcase"
            className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-transform group-hover:scale-110">
                <Play className="fill-black text-black ml-1 w-6 h-6" />
             </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Live Experience</span>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full mt-32 max-w-6xl mx-auto opacity-30">
        <div className="flex flex-wrap justify-between items-center gap-10 grayscale brightness-200">
           {["LOGO", "IPSUM", "VOLUM", "BRAND"].map((text) => (
             <span key={text} className="text-2xl font-black italic tracking-tighter">{text}</span>
           ))}
        </div>
      </div>
    </section>
  );
}
