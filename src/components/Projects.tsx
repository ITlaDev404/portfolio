import projects from '../data/projects';

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-componentColor text-portfolioText px-4 py-10 sm:px-8 md:p-12 text-center border-borderColor border hover:shadow-lg transition-shadow mb-20 md:mb-40 w-full max-w-7xl mx-auto rounded-xl"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-200 hover:-translate-y-1"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-44 sm:h-48 object-cover"
            />
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700 text-sm sm:text-base mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-auto">
                {project.demo && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 hover:bg-gray-600 text-white text-sm sm:text-base font-bold py-2 px-4 rounded transition-colors w-full sm:w-auto"
                  >
                    Voir la démo
                  </a>
                )}
                {project.sourceCodeUrl && (
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white text-sm sm:text-base font-bold py-2 px-4 rounded transition-colors w-full sm:w-auto"
                  >
                    Code Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
