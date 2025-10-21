import React from 'react';

const ContactSection = () => {
  return (
<section id="contact" className="py-16 px-4 backdrop-blur-sm border border-[var(--border-color)]/20 bg-[var(--card-background-color)]/80" aria-label="Contact section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[var(--text-light-color)]">Get In Touch</h2>
        <p className="text-xl mb-8 text-[var(--subtext-light)]">
          Interested in working together? Let's discuss your next project.
        </p>
        <div className="flex justify-center space-x-6 flex-wrap gap-4">
<a 
            href="mailto:paritosh.pychopath@gmail.com?subject=Paritosh%20You%20are%20Hired" 
            className="bg-[var(--primary-color)]/60 hover:bg-[var(--secondary-color)]/80 text-[var(--text-light-color)] px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border-[var(--border-color)]/20 inline-flex items-center justify-center min-w-[120px]"
            title="Send email to paritosh.pychopath@gmail.com"
          >
            Email Me
          </a>
          <a 
            href="https://github.com/mysteriousgod" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[var(--accent-color)]/60 hover:bg-[var(--modal-primary-color)]/80 text-[var(--text-light-color)] px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-[var(--border-color)]/20 inline-flex items-center justify-center min-w-[120px]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
