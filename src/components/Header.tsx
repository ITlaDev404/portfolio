import { useEffect, useState } from "react";

interface HeaderProps {
  onNavOpen: () => void;
  onConOpen: () => void;
  onVeilleOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavOpen, onConOpen, onVeilleOpen }) => {
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
      className={` sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-componentColor shadow-lg" : "bg-portfolioBackground2"
      } duration-300  text-protfolioText p-4 text-center text-2xl font-bold  border-borderColor border-b`}
    >
      <button
        onClick={onNavOpen}
        className="opeModalNav bg-componentColor2 hover:bg-componentColor3  active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 mr-4 px-4 py-2 rounded hover:shadow-lg  "
      >
        Navigation
      </button>

      <button
        onClick={() =>
          window.open(
            "./Languages_img/CV.pdf",
            "_blank",
            "noopener,noreferrer"
          )
        }
        className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 px-4 py-2 rounded  hover:shadow-lg"
      >
        Télécharger CV
      </button>
      <button
        onClick={onConOpen}
        className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 ml-4 px-4 py-2 rounded hover:shadow-lg mr-4"
      >
        Contact
      </button>
      
      <button
        onClick={onVeilleOpen}
        className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 ml-4 px-4 py-2 rounded hover:shadow-lg mr-4"
      >
        Veille
      </button>
    </header>
  );
};

export default Header;
