"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

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
              className="border-b border-white/10 hover:bg-white/[0.02] transition-colors px-2 sm:px-4"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full py-8 sm:py-10 lg:py-12 flex justify-between items-center gap-4 sm:gap-8 cursor-pointer text-left group"
              >
                <div className="flex items-center gap-5 sm:gap-8">
                  <span className="text-white/20 font-black text-lg sm:text-xl italic tracking-tighter font-mono">0{i + 1}</span>
                  <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase transition-colors ${openIndex === i ? "text-[#CCFF00]" : "text-white group-hover:text-[#CCFF00]"}`}>
                    {item.title}
                  </h3>
                </div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? "bg-white border-white" : "border-white/10 group-hover:bg-white group-hover:border-white"}`}>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${openIndex === i ? "text-black" : "text-white group-hover:text-black"}`} />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm sm:text-base text-white/40 leading-loose pb-8 sm:pb-10 lg:pb-12 max-w-2xl">
                      {item.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
