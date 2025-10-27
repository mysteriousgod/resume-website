import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-[--card-background-color]/8 backdrop-blur-sm ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[--text-light-color]">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg border border-white/15 bg-[--card-background-color]/12 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 text-[--primary-color]">Frontend</h3>
            <ul className="space-y-3 text-[--subtext-light]">
              <li>React & React Hooks</li>
              <li>TypeScript/JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Redux</li>
              <li>React Router</li>
            </ul>
          </div>
          <div className="p-8 rounded-lg border border-white/15 bg-[--card-background-color]/12 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 text-[--primary-color]">Tools & Libraries</h3>
            <ul className="space-y-3 text-[--subtext-light]">
              <li>Material-UI</li>
              <li>Styled Components</li>
              <li>Next.js</li>
              <li>Webpack</li>
              <li>Vite</li>
            </ul>
          </div>
          <div className="p-8 rounded-lg border border-white/15 bg-[--card-background-color]/12 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 text-[--primary-color]">Full Stack</h3>
            <ul className="space-y-3 text-[--subtext-light]">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>API Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
