import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[--card-background-color]/8 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[--text-light-color]">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[--primary-color]">Professional React Developer</h3>
            <p className="text-[--subtext-light] mb-6">
              With 5+ years of experience in React development, I specialize in creating
              modern, responsive web applications using the latest React ecosystem tools.
            </p>
            <p className="text-[--subtext-light]">
              As a freelancer, I've worked on various full-stack projects, delivering
              high-quality solutions with clean, maintainable code.
            </p>
          </div>
          <div className="p-8 rounded-lg border border-white/15 bg-[--card-background-color]/12 backdrop-blur-sm">
            <h4 className="text-xl font-semibold mb-6 text-[--secondary-color]">Experience</h4>
            <ul className="space-y-3 text-[--subtext-light]">
              <li>• 5+ Years of React Development</li>
              <li>• Full-stack Project Experience</li>
              <li>• Freelance Professional</li>
              <li>• TypeScript & JavaScript Expertise</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
