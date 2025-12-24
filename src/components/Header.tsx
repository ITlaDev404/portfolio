const Header = () => {
  return (
    <header className="bg-componentColor text-protfolioText p-4 text-center text-2xl font-bold shadow-lg">
      <button className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 mr-4 px-4 py-2 rounded  ">
        Navigation{" "}
      </button>
      <button
        onClick={() => window.open("https://drive.google.com/file/d/1HUvkICiB2hwOcd40q_M3aKo1G25wBHAq/view?usp=drive_link", "_blank", "noopener,noreferrer")
        }
        className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 px-4 py-2 rounded  "
      >
        Télécharger CV
      </button>
      <button className="bg-componentColor2 hover:bg-componentColor3 active:bg-componentColor border-solid border-borderColor text-portfolioText text-center bg-center text-2xl  grid-cols-1 ml-4 px-4 py-2 rounded ">
        Contact
      </button>
    </header>
  );
};

export default Header;
