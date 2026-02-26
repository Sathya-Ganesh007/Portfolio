"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const selectedWorks = [
  {
    title: "Auditly360",
    category: "AI Auditing Platform",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    link: "https://auditly360.com"
  },
  {
    title: "To-Do List",
    category: "Productivity App",
    img: "/converted_image.png",
    link: "https://to-do-list-007-app.netlify.app/"
  },
  {
    title: "TitanFit",
    category: "Fitness App",
    img: "/TitanFit.png",
    link: "https://fitness-page-taupe.vercel.app/"
  },
  {
    title: "EcoSphere",
    category: "Sustainability Dashboard",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Vortex UI",
    category: "Design System",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="works" className="py-32 px-10 bg-black">

      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex justify-between items-end">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white">
            SELECTED <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>WORK</span>
          </h2>
          <div className="hidden md:flex items-center gap-4 text-[#CCFF00] font-black tracking-[0.2em] text-[12px] font-mono">
            <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            LIVE WORK
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {selectedWorks.map((work, i) => (
             <ProjectCard key={i} work={work} index={i} />
           ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex justify-center pt-20"
        >
          <button className="px-12 py-4 border border-white/10 text-white text-[12px] font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black font-mono">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}


function ProjectCard({ work, index }: { work: any, index: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <motion.div
      ref={container}
      style={{ scale }}
      className={`group relative overflow-hidden rounded-3xl bg-neutral-900 ${index % 3 === 2 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
    >
      <a href={work.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <img 
          src={work.img} 
          alt={work.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        
        <div className="absolute bottom-10 left-10 p-2 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
           <span className="text-[12px] font-black tracking-[0.1em] text-white/40 uppercase font-mono">{work.category}</span>
           <h3 className="text-3xl font-bold tracking-tighter text-white uppercase">{work.title}</h3>
        </div>

        <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
           </svg>
        </div>
      </a>
    </motion.div>
  );
}
