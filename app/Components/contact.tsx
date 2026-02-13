"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/5"
      >
        {/* Animated Background Gradients inside the card */}
        <div className="absolute inset-0 -z-10">
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-transparent opacity-50" />
           <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-primary/20 via-transparent to-transparent opacity-50" />
           <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mx-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-xs font-medium text-white/80">Join Us Now</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight text-white max-w-4xl mx-auto">
            Each Project we Undertake <br />
            <span className="text-white/60">is a Unique Opportunity.</span>
          </h2>

          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
            Looking for a Full Stack Developer for your next AI-assisted project? Let's connect and build something extraordinary.
          </p>

          <div className="pt-6">
            <button className="px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:opacity-90 transition-all hover:scale-105 glow-blue text-lg">
              Book an Appointment
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
