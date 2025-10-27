import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectsSection = () => {
  const [loadedIframes, setLoadedIframes] = useState<Record<number, boolean>>({});
  const [errorIframes, setErrorIframes] = useState<Record<number, boolean>>({});

  const projects: Project[] = [
    {
      id: 1,
      title: 'SRSPatna',
      description: 'Professional website showcasing services and portfolio. Built with React and modern web technologies.',
      liveUrl: 'https://www.srspatna.com/',
      githubUrl: 'https://github.com/mysteriousgod'
    },
    {
      id: 2,
      title: 'Home Services App',
      description: 'Full-stack application for home services booking with real-time features and user management.',
      liveUrl: 'https://home-services-app-cyan.vercel.app/',
      githubUrl: 'https://github.com/mysteriousgod'
    }
  ];

  const handleIframeLoad = (projectId: number) => {
    setLoadedIframes(prev => ({ ...prev, [projectId]: true }));
  };

  const handleIframeError = (projectId: number) => {
    setErrorIframes(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="py-16 px-4 bg-[--card-background-color]/8 backdrop-blur-sm ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[--text-light-color]">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-lg border border-white/15 bg-[--card-background-color]/12 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col md:flex-row gap-6"
            >
              {/* Project Content - Left Side */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-[--secondary-color]">{project.title}</h3>
                <p className="text-[--subtext-light] mb-4">{project.description}</p>
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[--primary-color]/60 hover:bg-[--secondary-color]/80 text-white px-4 py-2 rounded text-sm transition-all duration-300 backdrop-blur-sm border border-white/20"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[--accent-color]/60 hover:bg-[--modal-primary-color]/80 text-white px-4 py-2 rounded text-sm transition-all duration-300 backdrop-blur-sm border-white/20"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              {/* Project Live Preview - Right Side */}
              <div className="flex-1 min-w-0">
                <div className="overflow-hidden rounded-lg border border-white/20 h-full">
                  {!loadedIframes[project.id] && !errorIframes[project.id] && (
                    <div className="w-full h-80 bg-gray-200/20 flex items-center justify-center rounded">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[--primary-color]"></div>
                    </div>
                  )}
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className={`w-full h-80 rounded transition-opacity duration-300 ${loadedIframes[project.id] ? 'opacity-100' : 'opacity-0'
                      } ${errorIframes[project.id] ? 'hidden' : 'block'}`}
                    onLoad={() => handleIframeLoad(project.id)}
                    onError={() => handleIframeError(project.id)}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-pointer-lock allow-downloads"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  {errorIframes[project.id] && (
                    <div className="w-full h-80 bg-gray-200/20 flex items-center justify-center rounded">
                      <span className="text-gray-500 text-sm">Live preview not available</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
