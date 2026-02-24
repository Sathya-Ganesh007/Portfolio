import Navbar from "@/Components/navbar";
import Hero from "@/Components/hero";
import About from "@/Components/about";
import Expertise from "@/Components/expertise";
import Projects from "@/Components/projects";
import Contact from "@/Components/contact";
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

