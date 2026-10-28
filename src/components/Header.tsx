import { useEffect, useState } from "react";

interface HeaderProps {
  onNavOpen: () => void;
  onConOpen: () => void;
  onVeilleOpen: () => void;
  onCvOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavOpen, onConOpen, onCvOpen }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-componentColor shadow-lg" : "bg-portfolioBackground2"
      } text-portfolioText px-3 py-3 sm:p-4 text-center font-bold border-borderColor border-b flex flex-wrap items-center justify-center gap-2 sm:gap-4`}
    >
      <button
        onClick={onNavOpen}
        className="opeModalNav bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border border-borderColor text-portfolioText text-center text-base sm:text-xl md:text-2xl px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:shadow-lg transition-shadow"
      >
        Navigation
      </button>

      <button
        onClick={onCvOpen}
        className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border border-borderColor text-portfolioText text-center text-base sm:text-xl md:text-2xl px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:shadow-lg transition-shadow"
      >
        Télécharger CV
      </button>

      <button
        onClick={onConOpen}
        className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border border-borderColor text-portfolioText text-center text-base sm:text-xl md:text-2xl px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:shadow-lg transition-shadow"
      >
        Contact
      </button>
    </header>
  );
};

export default Header;
