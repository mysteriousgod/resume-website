import React from 'react';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';


const HeroSection = () => {
  return (
    <section className="glass-effect text-[--text-light-color] py-32 px-4 border border-white/15 bg-[--card-background-color]/10 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto text-center">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <h1 className="text-5xl font-bold mb-4 text-[--text-light-color]">React Developer</h1>
          <p className="text-xl mb-8 text-[--subtext-light]">5+ Years of Professional Experience</p>
          <motion.div
            className="flex gap-6 justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            {/* <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a> */}
            <motion.a
              href="mailto:paritosh.pychopath@gmail.com?subject=Paritosh%20You%20are%20Hired"
              className="glass glass-hover p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default HeroSection;
