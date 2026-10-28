interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  console.log("Navigation open:", isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/20 z-999 flex items-center justify-center p-4 w-screen h-screen top-0 left-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-componentColor w-full max-w-xs sm:max-w-sm p-6 text-center transform transition-transform duration-300 ease-in-out rounded-xl relative shadow-xl"
      >
        <button
          onClick={onClose}
          className="text-portfolioText text-2xl absolute top-4 right-4 hover:font-bold active:text-gray-600"
        >
          X
        </button>
        <h2 className="text-portfolioText text-2xl sm:text-3xl font-bold mb-6">
          Navigation
        </h2>
        <ul className="text-xl sm:text-2xl ml-4 text-left space-y-3">
          <li className="hover:text-portfolioText2 hover:underline transition-transform origin-left hover:translate-x-1">
            <a href="#hero" onClick={onClose} className="block">
              #Accueil
            </a>
          </li>
          <li className="hover:text-portfolioText2 hover:underline transition-transform origin-left hover:translate-x-1">
            <a href="#about" onClick={onClose} className="block">
              #À propos
            </a>
          </li>
          <li className="hover:text-portfolioText2 hover:underline transition-transform origin-left hover:translate-x-1">
            <a href="#skills" onClick={onClose} className="block">
              #Compétences
            </a>
          </li>
          <li className="hover:text-portfolioText2 hover:underline transition-transform origin-left hover:translate-x-1">
            <a href="#projects" onClick={onClose} className="block">
              #Projets
            </a>
          </li>
          <li className="hover:text-portfolioText2 hover:underline transition-transform origin-left hover:translate-x-1">
            <a href="#contact" onClick={onClose} className="block">
              #Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
