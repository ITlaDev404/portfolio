import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="bg-componentColor text-black p-12 text-center border-borderColor border hover:shadow-lg-b mb-40 hover:">
      <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-20">
            <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-center space-x-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Voir la démo
                  </a>
                )}
                {project.sourceCodeUrl && (
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
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
