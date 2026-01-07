import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
/*import Contact from "./components/Contact";*/
import Veille from "./components/Modal/Veille";
import Footer from "./components/Footer";
import Navigation from "./components/Modal/Navigation";
import ContactModal from "./components/Modal/ContactModal";

function App() {
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);
  const [isMenuConOpen, setIsMenuConOpen] = useState(false);
  const [isMenuVeilleOpen, setIsMenuVeilleOpen] = useState(false);

  return (
    <>
      <Navigation
        isOpen={isMenuNavOpen}
        onClose={() => setIsMenuNavOpen(false)}
      />
      <ContactModal
        isOpenContact={isMenuConOpen}
        onCloseContact={() => setIsMenuConOpen(false)}
      />
      <Veille
        isOpenVeille={isMenuVeilleOpen}
        onCloseVeille={() => setIsMenuVeilleOpen(false)}
      />
      <div className="min-h-screen bg-portfolioBackground2 text-gray-900 flex flex-col">
        <Header
          onNavOpen={() => setIsMenuNavOpen(true)}
          onConOpen={() => setIsMenuConOpen(true)}
          onVeilleOpen={() => setIsMenuVeilleOpen(true)}
        />

        <Hero />
        <About />
        <Skills />
        <Projects />
        {/*<Contact />*/}
        <Footer />
      </div>
    </>
  );
}

export default App;
