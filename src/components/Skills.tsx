import languages from "../data/languages.ts";
import frameworks from "../data/frameworks.ts";
import databases from "../data/databases.ts";
import tools from "../data/tools.ts";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-componentColor text-portfolioText p-6 sm:p-8 md:p-12 text-center w-[calc(100%-2rem)] sm:w-full max-w-5xl mx-auto rounded-xl mb-16 md:mb-32 border-borderColor border hover:shadow-lg transition-shadow mt-8 md:mt-20 overflow-hidden"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        Compétences
      </h1>

      {/* Langages de programmation */}
      <section className="group bg-componentColor2 text-black p-6 sm:p-8 md:p-10 text-center w-full max-w-4xl mx-auto border-borderColor border hover:shadow-lg transition-shadow rounded-xl mb-6 sm:mb-10">
        <h2 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 group-hover:underline">
          Langages de programmation
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {languages.map((language) => (
            <div key={language.id} className="flex items-center justify-center">
              <a
                href={language.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={language.imageUrl}
                  alt={language.name}
                  className={`${
                    language.name === "JAVA"
                      ? "size-20 sm:size-28 md:size-32"
                      : "size-16 sm:size-24 md:size-28"
                  } object-contain mx-auto transition-transform duration-200 hover:scale-110`}
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks & Librairies */}
      <section className="group bg-componentColor2 text-black p-6 sm:p-8 md:p-10 text-center w-full max-w-4xl mx-auto border-borderColor border hover:shadow-lg transition-shadow rounded-xl mb-6 sm:mb-10">
        <h2 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 group-hover:underline">
          Frameworks & Librairies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {frameworks.map((framework) => (
            <div key={framework.id} className="flex items-center justify-center">
              <a
                href={framework.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={framework.imageUrl}
                  alt={framework.name}
                  className="size-16 sm:size-24 md:size-28 object-contain mx-auto transition-transform duration-200 hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bases de données */}
      <section className="group bg-componentColor2 text-black p-6 sm:p-8 md:p-10 text-center w-full max-w-4xl mx-auto border-borderColor border hover:shadow-lg transition-shadow rounded-xl mb-6 sm:mb-10">
        <h2 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 group-hover:underline">
          Bases de données
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {databases.map((database) => (
            <div key={database.id} className="flex items-center justify-center">
              <a
                href={database.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={database.imageUrl}
                  alt={database.name}
                  className="size-16 sm:size-24 md:size-28 object-contain mx-auto transition-transform duration-200 hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Outils */}
      <section className="group bg-componentColor2 text-black p-6 sm:p-8 md:p-10 text-center w-full max-w-4xl mx-auto border-borderColor border hover:shadow-lg transition-shadow rounded-xl">
        <h2 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 group-hover:underline">
          Outils & Environnements
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {tools.map((toul) => (
            <div key={toul.id} className="flex items-center justify-center">
              <a
                href={toul.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={toul.imageUrl}
                  alt={toul.name}
                  className="size-16 sm:size-24 md:size-28 object-contain mx-auto transition-transform duration-200 hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Skills;
