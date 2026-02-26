"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-20 bg-black/50 backdrop-blur-xl border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg font-black tracking-tighter text-white font-mono">GANESH</span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {["Work", "Services", "Studio"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors font-mono"
          >
            {item}
          </Link>
        ))}
      </div>

      <button className="px-6 py-2 border border-white/20 text-white text-[12px] font-medium uppercase tracking-[0.1em] transition-all hover:bg-white hover:text-black font-mono">
        Start Project
      </button>


    </motion.nav>
  );
}


