import React from 'react';
import './App.css';
import LiquidEther from './LiquidEther';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ zIndex: 1 }}
        />
      </div>
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ContactSection /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
