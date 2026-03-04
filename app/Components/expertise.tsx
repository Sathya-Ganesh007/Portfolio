"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const expertiseItems = [
  {
    title: "SOFTWARE DEVELOPMENT",
    desc: "I build scalable, efficient, and maintainable software solutions tailored to business needs. From frontend interfaces to backend systems, I focus on clean architecture and performance.",
  },
  {
    title: "WEB APPLICATIONS",
    desc: "I develop responsive and user-friendly web applications using modern technologies. My goal is to create fast, secure, and intuitive digital experiences.",
  },
  {
    title: "UI / FRONTEND DEVELOPMENT",
    desc: "I craft interactive and visually appealing user interfaces using modern frameworks and tools. Clean code and smooth user experience are my priorities.",
  },
  {
    title: "SYSTEM DESIGN & OPTIMIZATION",
    desc: "I design structured system architectures and optimize applications for performance, scalability, and reliability to ensure long-term growth.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-10 bg-black">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none">
            HOW I BUILD <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>SOFTWARE</span>
          </h2>
          <p className="w-full md:max-w-sm text-sm sm:text-base text-white/60 leading-loose uppercase tracking-wider font-mono mt-2">
            My process is grounded in a structured SDLC approach — defining clear requirements, architecting scalable systems, implementing clean and maintainable code, validating through rigorous testing, and deploying with performance, reliability, and production readiness at the core.
          </p>
        </div>

        {/* List */}
        <div className="border-t border-white/10">
          {expertiseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-white/10 py-8 sm:py-10 lg:py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 lg:gap-8 cursor-pointer hover:bg-white/[0.02] transition-colors px-2 sm:px-4"
            >
              <div className="flex items-center gap-5 sm:gap-8">
                <span className="text-white/20 font-black text-lg sm:text-xl italic tracking-tighter font-mono">0{i + 1}</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white group-hover:text-[#CCFF00] transition-colors uppercase">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 sm:gap-12 w-full lg:w-auto lg:max-w-md">
                <p className="text-sm sm:text-base text-white/40 leading-loose flex-1 lg:flex-initial">
                  {item.desc}
                </p>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all shrink-0">
                   <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
