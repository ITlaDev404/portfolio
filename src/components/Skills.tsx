import languages from "../data/languages.ts";
import frameworks from "../data/framworks.ts";
import databases from "../data/databases.ts";
import touls from "../data/touls.ts";
const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-componentColor text-portfolioText p-12 text-center  max-w-7xl w-5xl min-w-2xl px-4 mx-auto rounded-xl mb-40 border-borderColor border hover:shadow-lg mt-20  overflow-hidden"
    >
      <h1 className="text-4xl font-bold mb-4">Compétences</h1>
      {/*  languages de programation */}
      <section className="group bg-componentColor2 text-black p-12 text-center pt-2.5 w-4xl h-70 max-h-80 m-auto border-borderColor border hover:shadow-lg rounded-xl mb-12   pb-">
        <h1 className="text-lg font-bold mb-8 group-hover:underline">
          languages de programation
        </h1>
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
                  className="size-30 hover:size-35 object-contain mx-auto "
                />
              </a>
              <div className="p-6">
                <div className="flex justify-center space-x-4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*Frameworks & Librairies*/}
      <section className="group bg-componentColor2 text-black p-12 text-center pt-2.5 w-4xl h-70 max-h-80 m-auto border-borderColor border hover:shadow-lg rounded-xl mb-12   pb-">
        <h1 className="text-lg font-bold mb-8 group-hover:underline">
          Frameworks & Librairies
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {frameworks.map((framework) => (
            <div key={framework.id} className="">
              <a
                href={framework.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={framework.imageUrl}
                  alt={framework.name}
                  className="size-30 hover:size-35 object-contain mx-auto"
                />
              </a>
              <div className="p-6">
                <div className="flex justify-center space-x-4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*data bases*/}
      <section className="group bg-componentColor2 text-black p-12 text-center pt-2.5 w-4xl h-70 max-h-80 m-auto border-borderColor border hover:shadow-lg rounded-xl mb-12   pb-">
        <h1 className="text-lg font-bold mb-8 group-hover:underline">
          Bases de données
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {databases.map((database) => (
            <div key={database.id} className="">
              <a
                href={database.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={database.imageUrl}
                  alt={database.name}
                  className="size-30 hover:size-35 object-contain mx-auto"
                />
              </a>
              <div className="p-6">
                <div className="flex justify-center space-x-4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*Outils */}
      <section className="group bg-componentColor2 text-black p-12 text-center pt-2.5 w-4xl h-70 max-h-80 m-auto border-borderColor border hover:shadow-lg rounded-xl mb-12   pb-">
        <h1 className="text-lg font-bold mb-8 group-hover:underline">
          Outils & Environnements
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {touls.map((toul) => (
            <div key={toul.id} className="">
              <a href={toul.demoUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={toul.imageUrl}
                  alt={toul.name}
                  className="size-30 hover:size-35 object-contain mx-auto"
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
