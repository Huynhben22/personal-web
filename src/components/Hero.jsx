import React from 'react';
import { Mail, Linkedin, Github, ChevronDown, MapPin, GraduationCap, Calendar } from 'lucide-react';
import pfp from '../images/profile.png';

const Hero = ({ isLoaded }) => {
  return (
    <div id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className={`max-w-7xl mx-auto px-4 py-32 relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={pfp}
                alt="Ben Huynh"
                className="rounded-full w-56 h-56 object-cover border-4 border-purple-500/30 shadow-2xl"
                loading="eager"
                decoding="sync"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur opacity-30 animate-pulse"></div>
            </div>
          </div>    
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Full-Stack Developer
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science student at Western Washington University, specializing in scalable web applications, 
            cloud infrastructure, and secure system architecture. Passionate about building solutions that impact thousands of users.
          </p>
          
          <div className="flex justify-center items-center space-x-6 mb-12 flex-wrap">
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={18} />
              <span>Bellingham, WA</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <GraduationCap size={18} />
              <span>Graduating June 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar size={18} />
              <span>Available for Full-Time</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { href: "mailto:HuynhBen22@yahoo.com", icon: Mail, label: "Email" },
              { href: "https://linkedin.com/in/huynhben22", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/Huynhben22", icon: Github, label: "GitHub" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="group bg-gray-800/50 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-700 hover:border-purple-500/50"
                title={link.label}
              >
                <link.icon size={24} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center pb-8">
        <ChevronDown size={32} className="text-gray-400 animate-bounce mx-auto" />
      </div>
    </div>
  );
};

export default Hero;