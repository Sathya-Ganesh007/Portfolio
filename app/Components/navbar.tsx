"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 h-20 bg-background/50 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-black italic tracking-tighter text-white">GANESH</span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {["Home", "About", "Portfolio", "Contact", "FAQ"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      <button className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity glow-blue">
        Get In Touch
      </button>
    </motion.nav>
  );
}
