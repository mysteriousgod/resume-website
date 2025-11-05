import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "SRSPatna",
      description: "Professional website showcasing services and portfolio. Built with React and modern web technologies.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      demo: "https://www.srspatna.com/",
      github: "https://github.com/mysteriousgod",
    },
    {
      title: "Home Services App",
      description: "Full-stack application for home services booking with real-time features and user management.",
      tags: ["React", "Node.js", "MongoDB", "Real-time"],
      demo: "https://home-services-app-cyan.vercel.app",
      github: "https://github.com/mysteriousgod",
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {featuredProjects.map((project, index) => (
        <Card key={index} className="glass glass-hover overflow-hidden h-full flex flex-col">
          <div className="p-6 flex-1 flex flex-col">
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
                href={project.github}
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
                href={project.demo}
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
        </Card>
      ))}
    </div>
  );
};

export default FeaturedProjects;
