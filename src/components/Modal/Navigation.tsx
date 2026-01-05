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
    <div className="fixed inset-0 bg-black/20 bg-opacity-200 z-999 flex justify-start text-center w-screen h-screen top-0 left-0">
      <div className="bg-componentColor w-64 h-full p-4 justify-center transform transition-transform duration-300 ease-in-out  max-w-prose mx-auto rounded-xl">
        <button
          onClick={onClose}
          className="text-protfolioText text-2xl float-right"
        >
          ❌
        </button>
        <h2 className="text-protfolioText text-2xl font-bold mb-4">
          Navigation
        </h2>
        <ul>
          <li>
            <a href="#hero" onClick={onClose}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" onClick={onClose}>
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" onClick={onClose}>
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" onClick={onClose}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onClose}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
