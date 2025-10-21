import React from 'react';

const Header = () => {
  return (
<header className="relative z-50 text-[--text-light-color] py-4 px-4 transition-all duration-300 bg-[--card-background-color]/10 backdrop-blur-sm border border-white/10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[--primary-color]">My Resume</div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-[--secondary-color] transition-all duration-300 transform hover:-translate-y-0.5">About</a></li>
          <li><a href="#skills" className="hover:text-[--secondary-color] transition-all duration-300 transform hover:-translate-y-0.5">Skills</a></li>
          <li><a href="#projects" className="hover:text-[--secondary-color] transition-all duration-300 transform hover:-translate-y-0.5">Projects</a></li>
          <li><a href="#contact" className="hover:text-[--secondary-color] transition-all duration-300 transform hover:-translate-y-0.5">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
