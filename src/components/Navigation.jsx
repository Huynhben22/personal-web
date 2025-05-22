import React, { useState } from 'react';
import { Menu, X, User, Brain, Code2, Database, Heart } from 'lucide-react';

const Navigation = ({ sections, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIcons = {
    about: User,
    experience: Brain,
    projects: Code2,
    skills: Database,
    personal: Heart
  };

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ben Huynh
            </h1>
            <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
              Available for Full-Time
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section) => {
              const IconComponent = sectionIcons[section.id];
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <IconComponent size={16} />
                  <span>{section.label}</span>
                </a>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
          <div className="px-4 py-3 space-y-2">
            {sections.map((section) => {
              const IconComponent = sectionIcons[section.id];
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent size={18} />
                  <span>{section.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;