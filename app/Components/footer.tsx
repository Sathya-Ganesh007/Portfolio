"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 px-10 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4">
          <div className="w-10 h-6">
            <svg viewBox="0 0 100 50" className="w-full h-full text-white fill-current">
                <path d="M25,10 C15,10 5,20 5,30 C5,40 15,50 25,50 C35,50 45,40 55,30 C65,20 75,10 85,10 C95,10 105,20 105,30 C105,40 95,50 85,50 C75,50 65,40 55,30 C45,20 35,10 25,10 Z" fill="none" stroke="currentColor" strokeWidth="8" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground font-light max-w-xs leading-relaxed">
            Elevating digital experiences through exceptional design and precision engineering.
          </p>
        </div>

        <div className="flex gap-10">
           {["Privacy", "Terms", "Instagram", "Twitter"].map((link) => (
             <a key={link} href="#" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                {link}
             </a>
           ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/5 text-center">
         <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
            &copy; {new Date().getFullYear()} Landin Agency. All Rights Reserved.
         </p>
      </div>
    </footer>
  );
}
