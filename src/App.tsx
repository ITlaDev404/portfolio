import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Modal/Navigation";

function App() {
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);

  return (
    <>
      <Navigation isOpen={isMenuNavOpen} onClose={() => setIsMenuNavOpen(false)} />
      <div className="min-h-screen bg-portfolioBackground2 text-gray-900 flex flex-col">
        <Header onNavOpen={() => setIsMenuNavOpen(true)} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
