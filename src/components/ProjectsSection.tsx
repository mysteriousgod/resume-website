import React from 'react';

const ProjectsSection = () => {
  return (
<section id="projects" className="py-16 px-4 bg-[--card-background-color]/8 backdrop-blur-sm border border-white/8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[--text-light-color]">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
<div className="p-6 rounded-lg border border-white/15 bg-[--card-background-color]/12 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 text-[--secondary-color]">SRSPatna</h3>
            <p className="text-[--subtext-light] mb-4">
              Professional website showcasing services and portfolio. Built with React and modern web technologies.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.srspatna.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[--primary-color]/60 hover:bg-[--secondary-color]/80 text-white px-4 py-2 rounded text-sm transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/mysteriousgod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[--accent-color]/60 hover:bg-[--modal-primary-color]/80 text-white px-4 py-2 rounded text-sm transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                GitHub
              </a>
            </div>
          </div>
<div className="p-6 rounded-lg border border-white/15 bg-[--card-background-color]/12 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 text-[--secondary-color]">Home Services App</h3>
            <p className="text-[--subtext-light] mb-4">
              Full-stack application for home services booking with real-time features and user management.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://home-services-app-cyan.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[--primary-color]/60 hover:bg-[--secondary-color]/80 text-white px-4 py-2 rounded text-sm transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/mysteriousgod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[--accent-color]/60 hover:bg-[--modal-primary-color]/80 text-white px-4 py-2 rounded text-sm transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
