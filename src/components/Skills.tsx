import languages from "../data/languages.ts";

const Skills = () => {
  return (
    <section className="bg-componentColor text-portfolioText p-12 text-center  max-w-7xl w-7xl min-w-2xl px-4 mx-auto rounded-xl mb-12 shadow-lg   overflow-hidden">
      <h1 className="text-4xl font-bold mb-4">Compétences</h1>
      //languages de programation
      <section className="bg-componentColor2 text-black p-12 text-center pt-2.5 mr-6 ml-6 shadow-lg rounded-xl mb-12 pb-3">
        <h1 className="text-lg font-bold mb-8">languages de programation</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {languages.map((language) => (
            <div key={language.id} className="">
              <a
                href={language.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={language.imageUrl}
                  alt={language.name}
                  className="w-40 h-40 object-contain mx-auto"
                />
              </a>
              <div className="p-6">
                <div className="flex justify-center space-x-4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      //Frameworks & Librairies
      <section className="bg-componentColor2 text-black p-12 text-center pt-2.5 mr-6 ml-6 shadow-lg rounded-xl mb-12">
        <h1 className="text-lg font-bold mb-8">Frameworks & Librairies</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {languages.map((language) => (
            <div key={language.id} className="">
              <a
                href={language.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={language.imageUrl}
                  alt={language.name}
                  className="w-40 h-40 object-contain mx-auto"
                />
              </a>
              <div className="p-6">
                <div className="flex justify-center space-x-4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Skills;
