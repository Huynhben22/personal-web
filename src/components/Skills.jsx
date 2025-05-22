import React from 'react';
import { Server, Monitor, Database, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Java', 'Python', 'Go', 'C/C++', 'Django', '.NET'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend Development',
      icon: Monitor,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'MudBlazor'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database & Data',
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'DynamoDB', 'SQL', 'PowerBI', 'Tableau'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Azure', 'AWS', 'Digital Ocean', 'CI/CD', 'Containerization', 'Git'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div id="skills" className="py-24 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Full-stack expertise across modern technologies</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-purple-500/30">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6 mx-auto`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-xl text-center hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;