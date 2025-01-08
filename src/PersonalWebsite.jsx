import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon, XIcon } from 'lucide-react';
import wwuLogo from './images/WWU_logo.PNG'  
import lobydLogo from './images/lobyd.PNG'  
import scheduleLogo from './images/scheduleOP.PNG'  
import soundCapitalLogo from './images/soundcapital_logo.jpg'
import shellLogo from './images/shell.png'
import pfp from './images/profile.jpg'

const PersonalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ['About', 'Experience', 'Projects', 'Skills'];
  
  const experience = [
    {
      title: 'Undergraduate Research Assistant',
      company: 'Western Washington University',
      logo: wwuLogo,
      date: 'September 2024 - Present',
      points: [
        'Conducted comprehensive research on telehealth software systems to ensure compliance with HIPPA regulations',
        'Evaluated and documented encryption protocols and authentication mechanisms',
        'Identified security vulnerabilities and proposed solutions'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Sound Capital Loans',
      logo: soundCapitalLogo,
      date: 'June 2024 - Present',
      points: [
        'Developed a KPI engine for executive oversight using SQL and data extraction',
        'Optimized database performance with PowerBI and Tableau',
        'Contributed to web technology migration using .NET and MudBlazor'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Lobyd Corp.',
      logo: lobydLogo,
      date: 'September 2023 - March 2024',
      points: [
        'Contributed to a software development team building a full-stack car purchasing application',
        'Implemented responsive design principles',
        'Collaborated with React experts on application development'
      ]
    }
  ];

  const projects = [
    {
      title: 'Schedule Optimizer',
      description: 'Full-stack web application serving 3,000+ monthly users that generates conflict-free course schedules',
      logo: scheduleLogo,
      tech: ['Go', 'TypeScript', 'React', 'Protobuf'],
      link: 'https://cwooper.me/schedule-optimizer'
    },
    {
      title: 'C Shell',
      description: 'Custom Unix shell implementation demonstrating OS principles and process control',
      logo: shellLogo,
      tech: ['C', 'Unix', 'System Programming'],
      link: 'https://github.com/Huynhben22/C-Shell'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Ben Huynh
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {section}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-purple-600"
              >
                {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="about" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center relative z-10">
            <div className="mb-8 flex justify-center">
              <img
                src={pfp}
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-xl"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Software Engineer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Computer Science student at Western Washington University, passionate about building innovative solutions
              and creating impactful user experiences.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:HuynhBen22@yahoo.com" 
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <MailIcon size={24} className="text-purple-600" />
              </a>
              <a href="https://linkedin.com/in/huynhben22" 
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <LinkedinIcon size={24} className="text-purple-600" />
              </a>
              <a href="https://github.com" 
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <GithubIcon size={24} className="text-purple-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6 flex justify-center">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <p className="text-gray-500 mb-4">{job.date}</p>
                <ul className="space-y-2">
                  {job.points.map((point, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="mb-6">
                  <img
                    src={project.logo}
                    alt={`${project.title} preview`}
                    className="w-full h-48 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Java', 'Python', 'C/C++', 'PostgreSQL', 'Git', 'RESTful APIs', 'Go', 'System Design'].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">
                Web & Cloud
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Azure', '.NET', 'Apache', 'TypeScript', 'React', 'JavaScript', 'HTML/CSS'].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>© 2024 Ben Huynh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;