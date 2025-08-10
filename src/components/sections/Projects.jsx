import { projectList } from "@/data/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-300 dark:bg-gray-800 px-5 py-5 mt-5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-white">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 px-2 py-1 rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.live || project.github) && (
                <div className="mt-3 flex justify-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white text-sm px-4 py-1 rounded transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>

          ))}
        </div>
      </div>
      <div class="img-container">
        {projectList.map((project, idx) => 
        project.image ? (
          <div class="img-item">
            <img src={project.image}  alt=" "/>
          </div>
        ) : null
        
      )}
      </div>
    </section>
  );
};
