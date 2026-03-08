"use client";

export default function Footer() {
  return (
    <footer className="relative py-20 px-10 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-8 text-[12px] font-black uppercase tracking-[0.2em] text-white/40 font-mono">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/ganesh-sathya2003/" },
                { name: "Instagram", url: "https://www.instagram.com/sathya_ganesh07?igsh=ODNkYmlzMTgyNTNi" },
                { name: "Threads", url: "https://www.threads.com/@sathya_ganesh07" },
                { name: "GitHub", url: "https://github.com/Sathya-Ganesh007" },
              ].map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-[12px] text-white/20 font-black uppercase tracking-[0.2em] font-mono">
              © {new Date().getFullYear()} AETHER / ALL RIGHTS RESERVED
            </p>
          </div>

          <div className="text-[12px] text-white/20 font-black uppercase tracking-[0.3em] font-mono">
            CHENNAI — TOKYO — NEW YORK
          </div>
        </div>
      </div>


      {/* Large background text */}
      <div className="absolute bottom-[-10%] left-0 right-0 pointer-events-none select-none opacity-[0.03] flex justify-center">
         <h2 className="text-[25vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
            AETHER
         </h2>
      </div>
    </footer>
  );
}


