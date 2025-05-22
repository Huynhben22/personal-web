import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-md py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Ben Huynh
          </h3>
          <p className="text-gray-400 mb-6">Full-Stack Developer • Computer Science Student • Problem Solver</p>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { href: "mailto:HuynhBen22@yahoo.com", icon: Mail },
              { href: "https://linkedin.com/in/huynhben22", icon: Linkedin },
              { href: "https://github.com/Huynhben22", icon: Github }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">© 2024 Ben Huynh. Built with React and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;