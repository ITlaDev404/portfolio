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
    <div className="fixed inset-0 bg-black/20 bg-opacity-200 z-999 flex justify-start text-center w-screen h-screen top-0 left-0">
      <div className="bg-componentColor m-auto   w-80 h-80 p-4 justify-center transform transition-transform duration-300 ease-in-out  max-w-prose mx-auto rounded-xl">
        <button
          onClick={onCloseContact}
          className="text-protfolioText text-2xl float-right hover:font-bold active:text-gray-600"
        >
          X
        </button>
        <h2 className="text-protfolioText text-3xl font-bold mb-10 -auto ">
          Contact
        </h2>
        <ul className="text-2xl ml-5 text-left  ">
          <li className="hover:text-3xl mb-10 hover:text-portfolioText2 hover:underline size-2/12 hover:size-3/13">
            <a
              href="mailto:ilyes.tlati@proton.me"
              onClick={onCloseContact}
              className="flex items-center gap-4"
            >
              <img src="./Languages_img/email.png" className="" />
              Email
            </a>
          </li>
          <li className="hover:text-3xl mb-1.5 hover:text-portfolioText2 hover:underline size-10 hover:size-12">
            <a
              href="https://github.com/ITlaDev404"
              className="flex items-center gap-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./Languages_img/github.svg"
                className="  object-contain"
              />
              <p>GitHub</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactModal;
