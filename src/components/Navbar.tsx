import React from 'react';
import { Sparkles, Github, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 bg-[#FFFDF8] border-b-[3px] border-gray-900 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold tracking-tight">
              <a href="#" className="hover:opacity-80 transition-opacity flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#FE4A60]" />
                <span className="text-gray-900">Umi's</span>
                <span className="text-[#FE4A60]">Automations</span>
              </a>
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/LossFunctions/Umi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:-translate-y-0.5 transition-transform flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 text-[#ffc480] mr-1 fill-current" />
                <span>999+ 🤪</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;