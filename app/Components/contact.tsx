"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-xl"
        >
          <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
            LET'S BUILD <br />
            <span className="text-[#CCFF00]">THE FUTURE</span>
          </h2>
          <p className="max-w-xs text-[12px] text-white/40 leading-relaxed font-medium uppercase tracking-[0.1em] font-mono">
            Have a project in mind? I'm currently accepting new clients for Q4 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12 flex flex-col items-end w-full md:w-auto mt-10 md:mt-0"
        >
          <div className="relative group">
            <a 
              href="mailto:ganeshusuals@gmail.com" 
              className="text-4xl md:text-7xl font-bold tracking-tighter text-white transition-colors"
            >
              ganeshusuals@gmail.com
            </a>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500" />
          </div>

          <div className="flex gap-12 text-[12px] font-black uppercase tracking-[0.2em] text-white/60 font-mono">
             {["Instagram", "Twitter", "LinkedIn"].map((link) => (
               <a key={link} href="#" className="hover:text-white transition-colors">
                  {link}
               </a>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


