import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
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
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: 'https://www.srspatna.com',
      githubUrl: 'https://github.com/mysteriousgod/school.git'
    },
    {
      id: 2,
      title: 'Home Services App',
      description: 'Full-stack application for home services booking with real-time features and user management.',
      tags: ["React", "Node.js", "MongoDB", "Real-time"],
      liveUrl: 'https://home-services-app-cyan.vercel.app',
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and creative designs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass glass-hover overflow-hidden h-full flex flex-col md:flex-row gap-6">
              {/* Project Content - Left Side */}
              <div className="p-6 flex-1 flex flex-col md:w-1/2">
                <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="glass">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
              {/* Project Live Preview - Right Side */}
              <div className="flex-1 min-w-0 md:w-1/2 relative h-80 md:h-auto">
                <div className="overflow-hidden rounded-lg border border-white/20 h-full w-full absolute md:relative">
                  {!loadedIframes[project.id] && !errorIframes[project.id] && (
                    <div className="w-full h-full bg-gray-200/20 flex items-center justify-center rounded">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[--primary-color]"></div>
                    </div>
                  )}
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className={`w-full h-full rounded transition-opacity duration-300 ${loadedIframes[project.id] ? 'opacity-100' : 'opacity-0'
                      } ${errorIframes[project.id] ? 'hidden' : 'block'}`}
                    onLoad={() => handleIframeLoad(project.id)}
                    onError={() => handleIframeError(project.id)}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-pointer-lock allow-downloads"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  {errorIframes[project.id] && (
                    <div className="w-full h-full bg-gray-200/20 flex items-center justify-center rounded">
                      <span className="text-gray-500 text-sm">Live preview not available</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
