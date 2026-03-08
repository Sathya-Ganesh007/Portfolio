"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Rocket, ShieldCheck } from "lucide-react";
import Navbar from "@/Components/navbar";
import Link from "next/link";

const projectTypes = [
  "AI Integration",
  "SaaS Platform",
  "Backend Architecture",
  "Mobile App",
  "Other"
];

const budgetRanges = [
  "$1k - $5k",
  "$5k - $15k",
  "$15k - $50k",
  "$50k+",
  "To be discussed"
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    work: "AI Integration",
    budget: "$5k - $15k",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#CCFF00] selection:text-black">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Copy */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] italic">
                LEAVE <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)" }}>THE REST</span> <br />
                TO ME.
              </h1>
              <p className="max-w-md text-white/40 font-mono text-sm uppercase tracking-widest leading-relaxed">
                Got a big idea? Need AI or scalable systems? I take pride in engineering solutions that scale. Tell me what you&apos;re building.
              </p>
            </motion.div>

            <div className="space-y-8 pt-10">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                     <Rocket className="w-5 h-5 text-[#CCFF00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-tighter">Fast Execution</h3>
                    <p className="text-xs text-white/40 uppercase tracking-widest leading-tight mt-1">From architecture design to deployment in record time.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                     <ShieldCheck className="w-5 h-5 text-[#CCFF00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-tighter">Secure & Scalable</h3>
                    <p className="text-xs text-white/40 uppercase tracking-widest leading-tight mt-1">Ensuring production-grade reliability for your backend.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8 p-8 md:p-12 border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-3xl"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 font-mono ml-1">Name</label>
                      <input 
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#CCFF00] transition-all font-mono text-sm placeholder:text-white/20"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 font-mono ml-1">E-Mail</label>
                       <input 
                         required
                         type="email"
                         placeholder="hello@world.com"
                         className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#CCFF00] transition-all font-mono text-sm placeholder:text-white/20"
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 font-mono ml-1">Type of Project</label>
                     <div className="relative group">
                        <select 
                          className="w-full bg-transparent border-b border-white/10 py-3 outline-none appearance-none cursor-pointer focus:border-[#CCFF00] transition-colors font-mono text-sm"
                          value={formData.work}
                          onChange={(e) => setFormData({...formData, work: e.target.value})}
                        >
                          {projectTypes.map(t => <option key={t} className="bg-neutral-900 border-none">{t}</option>)}
                        </select>
                        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 font-mono ml-1">Project Budget</label>
                     <div className="flex flex-wrap gap-2 mt-2">
                        {budgetRanges.map(b => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({...formData, budget: b})}
                            className={`px-4 py-2 border text-[10px] sm:text-[12px] font-mono leading-none tracking-tight transition-all rounded-full ${formData.budget === b ? 'bg-[#CCFF00] text-black border-[#CCFF00]' : 'border-white/10 text-white/60 hover:border-white/30'}`}
                          >
                            {b}
                          </button>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 font-mono ml-1">Message</label>
                     <textarea 
                       required
                       placeholder="Briefly describe your vision..."
                       className="w-full bg-transparent border border-white/10 p-4 min-h-[120px] outline-none focus:border-[#CCFF00] transition-colors font-mono text-sm rounded-xl resize-none mt-2"
                       value={formData.message}
                       onChange={(e) => setFormData({...formData, message: e.target.value})}
                     />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-white text-black py-5 uppercase font-black tracking-[0.2em] text-xs transition-colors hover:bg-[#CCFF00] flex justify-center items-center gap-3 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "CONFIRMING CLIENT..." : "INITIATE TRANSMISSION"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center p-12 md:p-20 text-center border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-3xl"
                >
                  <div className="w-20 h-20 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center mb-8">
                     <CheckCircle2 className="w-10 h-10 text-[#CCFF00]" />
                  </div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic text-white leading-none">Transmission <br /> Success.</h2>
                  <p className="text-white/40 font-mono text-sm uppercase tracking-widest leading-relaxed mb-10 max-w-xs">
                    Inquiry received. Checking availability... Expect a response within 24 hours.
                  </p>
                  <Link 
                    href="/" 
                    className="px-8 py-3 bg-white text-black text-xs font-black uppercase tracking-[0.2em] hover:bg-[#CCFF00] transition-colors inline-block"
                  >
                    Return Home
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Decorative text marquee in background for premium look */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none opacity-[0.02] overflow-hidden whitespace-nowrap">
          <p className="text-[20vw] font-black uppercase tracking-tighter text-white animate-[marquee_20s_linear_infinite]">
            AI INFRASTRUCTURE BACKEND FRONTEND CLOUD SCALABILITY PERFORMANCE 
          </p>
      </div>

    </main>
  );
}
