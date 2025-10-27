import React from 'react';
import SpotlightCard from './SpotlightCard';

const HeroSection = () => {
  return (
    <section className="glass-effect text-[--text-light-color] py-32 px-4 border border-white/15 bg-[--card-background-color]/10 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto text-center">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <h1 className="text-5xl font-bold mb-4 text-[--text-light-color]">React Developer</h1>
          <p className="text-xl mb-8 text-[--subtext-light]">5+ Years of Professional Experience</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/mysteriousgod"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[--primary-color]/60 hover:bg-[--secondary-color]/80 text-white px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:transform hover:-translate-y-1"
            >
              GitHub Profile
            </a>
            <a
              href="#projects"
              className="bg-[--accent-color]/60 hover:bg-[--modal-primary-color]/80 text-white px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:transform hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default HeroSection;
