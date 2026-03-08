"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "नमस्ते",
  "নমস্কার",
  "నమస్తే",
  "नमस्कार",
  "வணக்கம்",
  "નમસ્તે",
  "ನಮಸ್ಕಾರ",
  "നമസ്കാരം",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "ନମସ୍କାର",
  "নমস্কাৰ",
  "السلام علیکم",
  "खुरुमजरी"
];

// Software engineering themed messages
const devMessages = [
  "Initializing core modules...",
  "Loading neural networks...",
  "Parsing metadata...",
  "Checking dependencies...",
  "Optimizing layout engines...",
  "Syncing cloud state...",
  "Building interface..."
];

export default function IndianGreeting({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [devIndex, setDevIndex] = useState(0);

  useEffect(() => {
    if (index === greetings.length - 1) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex(index + 1);
      if (index % 2 === 0) setDevIndex(prev => (prev + 1) % devMessages.length);
    }, 150);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden font-mono"
    >
      {/* Matrix-like falling code bits in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * 100 + "%" }}
            animate={{ y: "110vh" }}
            transition={{ 
              duration: Math.random() * 2 + 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 2
            }}
            className="absolute text-[10px] text-[#CCFF00]"
          >
            {Math.random() > 0.5 ? "01" : "10"}<br/>
            {Math.random().toString(16).slice(2, 8)}<br/>
            {"{...}"}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={greetings[index]}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-center md:items-start gap-4"
            >
            {/* Code Pulse Terminal Window */}
            <div className="relative w-48 h-16 mb-6 border border-[#CCFF00]/20 bg-black/40 backdrop-blur-md rounded-sm overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-4 bg-white/5 flex items-center px-2 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                <span className="text-[6px] text-white/20 ml-2 uppercase tracking-tighter">Terminal.sh</span>
              </div>
              <div className="pt-5 p-2 font-mono text-[8px] text-[#CCFF00]/60 leading-tight">
                <motion.div
                  animate={{ y: [0, -40] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <p>{`> STACK_INIT: OK`}</p>
                  <p>{`> DEPLOY_ENV: PROD`}</p>
                  <p>{`> ACCESS: GRANTED`}</p>
                  <p>{`> SYNCING_REPOS...`}</p>
                  <p>{`> FETCHING_DATA...`}</p>
                  <p>{`> PORT: 3000`}</p>
                  <p>{`> LOG: ${Math.random().toString(16).slice(2, 8)}`}</p>
                </motion.div>
              </div>
              <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(204,255,0,0.1)] pointer-events-none" />
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
              {greetings[index]}
            </h1>
              
              <motion.p 
                 key={devMessages[devIndex]}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-[#CCFF00] text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold"
              >
                {devMessages[devIndex]}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 0.6, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex justify-center relative"
        >
          <div className="absolute inset-0 bg-[#CCFF00]/5 blur-[100px] rounded-full" />
          <motion.img 
            src="/hacker-mask.png" 
            alt="Hacker Mask" 
            className="w-full max-w-md object-contain relative z-10 mix-blend-screen"
            animate={{ 
              filter: ["brightness(1) contrast(1.2)", "brightness(1.2) contrast(1.5)", "brightness(1) contrast(1.2)"],
              x: [0, -2, 2, 0],
            }}
            transition={{ 
              duration: 0.2, 
              repeat: Infinity, 
              repeatType: "mirror",
              repeatDelay: 2
            }}
          />
        </motion.div>
      </div>
      
      {/* Binary Scanline */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#CCFF00]/20 z-20"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Progress tracking */}
      <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-2">
        <div className="flex justify-between text-[10px] text-white/40 uppercase tracking-widest font-black">
          <span>Boot Sequence</span>
          <span>{Math.round(((index + 1) / greetings.length) * 100)}%</span>
        </div>
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#CCFF00]"
            initial={{ width: "0%" }}
            animate={{ width: `${((index + 1) / greetings.length) * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
