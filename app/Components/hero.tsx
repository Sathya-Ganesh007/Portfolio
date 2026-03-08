"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-black">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />
      
      <div className="max-w-6xl w-full mx-auto text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 border border-white/5 bg-white/[0.03] backdrop-blur-md">
             <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
             <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white/60 font-mono text-center">Available for AI & Scalable System Projects</span>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="space-y-6 sm:space-y-8"
        >
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[15rem] font-black tracking-tighter leading-[0.8] flex flex-col items-center select-none uppercase">
            <span className="text-white">SOFTWARE</span>
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>ENGINEER</span>
          </h1>
          
          <p className="max-w-xs sm:max-w-md md:max-w-lg mx-auto text-[11px] sm:text-[14px] md:text-[16px] text-white/40 font-medium leading-relaxed font-mono uppercase tracking-widest pt-2 sm:pt-4">
            Helping startups and businesses turn ideas into AI-powered, scalable backend architecture, and modern cloud-based applications.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-white text-black text-[12px] sm:text-[14px] font-bold uppercase tracking-[0.1em] transition-all hover:bg-[#CCFF00] font-mono cursor-pointer"
          >
            <span>View Works</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Floating Abstract Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] max-w-5xl aspect-square z-0 pointer-events-none"
      >
        <motion.img
          src="/hero-abstract.png"
          alt="Abstract Art"
          className="w-full h-full object-contain filter blur-[20px] md:blur-[40px]"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </motion.div>

      {/* Floating abstract elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
      </div>


      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-10 flex items-center gap-2"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 font-mono">SCROLL</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-3 h-3 text-white/40 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
