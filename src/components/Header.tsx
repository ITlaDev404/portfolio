import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
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
      } duration-300  text-protfolioText p-4 text-center text-2xl font-bold  border-borderColor border-b-1`}
    >
      <button
        onClick={() => setIsMenuOpen(true)}
        className="bg-componentColor2 hover:bg-componentColor3  active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 mr-4 px-4 py-2 rounded hover:shadow-lg  "
      >
        Navigation
      </button>
      <button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1HUvkICiB2hwOcd40q_M3aKo1G25wBHAq/view?usp=drive_link",
            "_blank",
            "noopener,noreferrer"
          )
        }
        className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 px-4 py-2 rounded  hover:shadow-lg"
      >
        Télécharger CV
      </button>
      <button className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 ml-4 px-4 py-2 rounded hover:shadow-lg">
        Contact
      </button>
    </header>
  );
};

export default Header;
