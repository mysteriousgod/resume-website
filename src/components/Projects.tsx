import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
// import project1 from "@/assets/project1.jpg";
// import project2 from "@/assets/project2.jpg";
// import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization and reporting features.",
    // image: project1,
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com",
    demo: "https://home-services-app-cyan.vercel.app",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern online shopping experience with seamless checkout and inventory management.",
    // image: project2,
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://www.srspatna.com",
  },
  {
    title: "Task Management App",
    description: "Intuitive productivity tool with drag-and-drop functionality and team collaboration.",
    // image: project3,
    tags: ["React", "Firebase", "Framer Motion", "Zustand"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass glass-hover overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    // src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
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
                  <div className="flex gap-4">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
