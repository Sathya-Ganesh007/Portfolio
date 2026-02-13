"use client";

import React from "react";
import { motion } from "framer-motion";

const results = [
  // {
  //   city: "Job Management",
  //   company: "Full Stack App",
  //   tag: "SUPABASE",
  //   desc: "Built a centralized platform with third-party integrations and scalable architecture.",
  //   stats: ["Node.js", "REST APIs", "Postman"],
  //   img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  // },
  {
    city: "Auditly360",
    company: "Performance Platform",
    tag: "AI POWERED",
    desc: "frontend Developer of AI-powered website audit system with optimized performance.",
    stats: ["React.js", "Next.js", "Tailwind CSS"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    city: "Smart Todo",
    company: "Productivity",
    tag: "NEW",
    desc: "Created a task management dashboard with priority and due-date tracking.",
    stats: ["Next.js", "TypeScript", "Responsive"],
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-32 px-10 bg-black">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-xs font-medium text-white/80">Results</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight text-white max-w-4xl mx-auto">
            Delivering Tangible Results <br />
            <span className="text-white/60 text-5xl md:text-6xl">That Propel Your Success</span>
          </h2>

          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
             At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success.
          </p>

          <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity glow-blue">
             Book a 15-min call
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {results.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/5"
             >
               <img 
                 src={item.img} 
                 alt={item.company} 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
               
               <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-3xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                       <CheckCircleIcon size={12} className="text-white" />
                    </div>
                    <span className="font-bold text-white text-lg">{item.city}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-white/80">{item.company}</span>
                    {item.tag && (
                      <span className="bg-primary text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">{item.tag}</span>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                     {item.stats.map((stat, si) => (
                       <span key={si} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/60 font-medium">
                          {stat}
                       </span>
                     ))}
                  </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon({ size = 16, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
