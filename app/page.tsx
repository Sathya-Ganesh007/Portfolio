"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/Components/navbar";
import Hero from "@/Components/hero";
import About from "@/Components/about";
import Expertise from "@/Components/expertise";
import Projects from "@/Components/projects";
import Contact from "@/Components/contact";
import Footer from "@/Components/footer";
import IndianGreeting from "@/Components/IndianGreeting";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Skip loader if the user has already visited in this session
    if (sessionStorage.getItem("hasSeenGreeting")) {
      setIsLoading(false);
    }
  }, []);

  const handleGreetingComplete = () => {
    sessionStorage.setItem("hasSeenGreeting", "true");
    setIsLoading(false);
  };

  if (!isMounted) {
    // Prevents hydration mismatch and flashes a smooth black background while mounting
    return <main className="relative min-h-screen bg-black"></main>;
  }

  return (
    <main className="relative min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <IndianGreeting key="loader" onComplete={handleGreetingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            <Hero />
            <About />
            <Expertise />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

