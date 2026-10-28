interface CvModalProps {
  isOpenCv: boolean;
  onCloseCv: () => void;
}

const CvModal: React.FC<CvModalProps> = ({ isOpenCv, onCloseCv }) => {
  if (!isOpenCv) {
    return null;
  }

  const openCv = (fileName: string) => {
    window.open(
      `${import.meta.env.BASE_URL}Languages_img/${fileName}`,
      "_blank",
      "noopener,noreferrer"
    );
    onCloseCv();
  };

  return (
    <div
      onClick={onCloseCv}
      className="fixed inset-0 bg-black/20 z-999 flex items-center justify-center p-4 w-screen h-screen top-0 left-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-componentColor w-full max-w-xs sm:max-w-md p-6 text-center transform transition-transform duration-300 ease-in-out rounded-xl relative shadow-xl"
      >
        <button
          onClick={onCloseCv}
          className="text-portfolioText text-2xl absolute top-4 right-4 hover:font-bold active:text-gray-600 hover:underline"
        >
          X
        </button>
        <h2 className="text-portfolioText text-2xl sm:text-3xl font-bold mb-6 pr-6">
          Choisir un CV
        </h2>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => openCv("Tlati_Ilyes_CV_dev.pdf")}
            className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border border-borderColor text-portfolioText font-bold text-base sm:text-lg px-4 py-3 rounded-lg hover:shadow-md transition-all cursor-pointer"
          >
            💻 CV Développeur Web Full Stack
          </button>
          <button
            onClick={() => openCv("Tlati_Ilyes_Cv_systeme.pdf")}
            className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border border-borderColor text-portfolioText font-bold text-base sm:text-lg px-4 py-3 rounded-lg hover:shadow-md transition-all cursor-pointer"
          >
            🖥️ CV Administrateur Systèmes &amp; Réseaux
          </button>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
