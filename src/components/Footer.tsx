import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-[3px] border-gray-900 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-gray-900 text-sm">
          {/* Left column - Contact info */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="font-mono">Checkout my links -⫸</p>
          </div>
          
          {/* Right column - Social links */}
          <div className="flex justify-start md:justify-end items-center space-x-4">
            <a
              href="mailto:umihuss@gmail.com"
              className="hover:underline flex items-center gap-1 hover:-translate-y-0.5 transition-transform"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/umihussaini/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 hover:-translate-y-0.5 transition-transform"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/LossFunctions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 hover:-translate-y-0.5 transition-transform"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://x.com/LossFunctions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 hover:-translate-y-0.5 transition-transform"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;