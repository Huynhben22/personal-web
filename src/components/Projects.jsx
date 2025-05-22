import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  return (
    <div id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Impactful solutions serving thousands of users</p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-purple-500/30">
              <div className="mb-6">
                <img
                  src={project.logo}
                  alt={`${project.title} preview`}
                  className="w-full h-48 rounded-xl object-cover border border-gray-600"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="space-y-2 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-sm text-cyan-400">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {highlight}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-3 py-1 rounded-lg text-sm border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
                >
                  <ExternalLink size={16} />
                  <span>View Live</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition-all"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;