"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const expertiseItems = [
  {
    title: "Brand Identity",
    desc: "We create unique and memorable brand identities that resonate with your target audience.",
  },
  {
    title: "Web Experience",
    desc: "Our web experiences are designed to be immersive, intuitive, and highly functional.",
  },
  {
    title: "Motion Design",
    desc: "We use motion design to bring your brand to life and create engaging digital experiences.",
  },
  {
    title: "3D Visualization",
    desc: "Our 3D visualizations help you visualize your products and spaces in a realistic way.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-10 bg-black">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
            OUR <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>EXPERTISE</span>
          </h2>
          <p className="max-w-xs text-[12px] text-white/40 leading-relaxed uppercase tracking-[0.1em] font-mono">
            We use a refined and simple process to solve complex problems with elegant solutions.
          </p>
        </div>

        <div className="border-t border-white/10">
          {expertiseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer hover:bg-white/[0.02] transition-colors px-4"
            >
              <div className="flex items-center gap-8">
                <span className="text-white/20 font-black text-xl italic tracking-tighter font-mono">0{i + 1}</span>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white group-hover:text-[#CCFF00] transition-colors uppercase">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-12 max-w-md">
                <p className="text-sm text-white/40 leading-relaxed hidden md:block">
                  {item.desc}
                </p>
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                   <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

