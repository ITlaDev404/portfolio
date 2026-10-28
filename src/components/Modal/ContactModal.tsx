interface NavigationProps {
  isOpenContact: boolean;
  onCloseContact: () => void;
}

const ContactModal: React.FC<NavigationProps> = ({
  isOpenContact,
  onCloseContact,
}) => {
  console.log("Navigation open:", isOpenContact);

  if (!isOpenContact) {
    return null;
  }

  return (
    <div
      onClick={onCloseContact}
      className="fixed inset-0 bg-black/20 z-999 flex items-center justify-center p-4 w-screen h-screen top-0 left-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-componentColor w-full max-w-xs sm:max-w-sm p-6 text-center transform transition-transform duration-300 ease-in-out rounded-xl relative shadow-xl"
      >
        <button
          onClick={onCloseContact}
          className="text-portfolioText text-2xl absolute top-4 right-4 hover:font-bold active:text-gray-600 hover:underline"
        >
          X
        </button>
        <h2 className="text-portfolioText text-2xl sm:text-3xl font-bold mb-8">
          Contact
        </h2>
        <ul className="text-xl sm:text-2xl ml-4 text-left space-y-6">
          <li className="hover:text-portfolioText2 hover:underline transition-transform origin-left hover:translate-x-1">
            <a
              href="mailto:ilyes.tlati@proton.me"
              onClick={onCloseContact}
              className="flex items-center gap-4"
            >
              <img
                src="./Languages_img/email.png"
                alt="Email"
                className="size-8 sm:size-10 object-contain shrink-0"
              />
              <span>Email</span>
            </a>
          </li>
          <li className="hover:text-portfolioText2 hover:underline transition-transform origin-left hover:translate-x-1">
            <a
              href="https://github.com/ITlaDev404"
              className="flex items-center gap-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./Languages_img/github.svg"
                alt="GitHub"
                className="size-8 sm:size-10 object-contain shrink-0"
              />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactModal;
