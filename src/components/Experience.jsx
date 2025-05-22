import React from 'react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <div id="experience" className="py-24 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Building scalable solutions across the full stack</p>
        
        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500/30">
              <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0 text-center lg:text-left">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-20 h-20 rounded-xl object-cover mx-auto lg:mx-0 border border-gray-600"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{job.title}</h3>
                      <p className="text-purple-400 font-semibold mb-1">{job.company}</p>
                      <p className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full inline-block">{job.type}</p>
                    </div>
                    <p className="text-gray-400 text-sm lg:text-right mt-2 lg:mt-0">{job.date}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start leading-relaxed">
                        <span className="text-purple-400 mr-3 mt-1 flex-shrink-0">▶</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 px-3 py-1 rounded-lg text-sm border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;