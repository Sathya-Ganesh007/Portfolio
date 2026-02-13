"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-10 bg-black relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 p-2 bg-white/5 mx-auto lg:mx-0 max-w-md">
             <img 
               src="/ganesh.png.png" 
               alt="Ganesh" 
               className="w-full h-full object-cover rounded-[2.5rem] object-top"
             />
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-xs font-medium text-white/80">About Landin</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight text-white">
            Transforming Ideas <br />
            <span className="text-white/60">Into Scalable Realities.</span>
          </h2>

          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            I am a Full Stack Developer specializing in AI-assisted development. With a strong foundation in Computer Science and hands-on experience in building scalable applications, I bridge the gap between complex backend logic and intuitive frontend design.
          </p>

          <div className="space-y-4 pt-4">
             {[
               "Expertise in Python, JavaScript & TypeScript.",
               "Building with React.js, Next.js & Node.js.",
               "Modern database management with Supabase & MySQL."
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-3">
                 <CheckCircle2 className="text-primary w-5 h-5" />
                 <span className="text-sm text-white/90">{text}</span>
               </div>
             ))}
          </div>

          <div className="flex flex-wrap items-center gap-10 pt-6">
             <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity glow-blue">
                View About Landin
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
