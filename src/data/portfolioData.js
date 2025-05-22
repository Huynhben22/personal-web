import wwuLogo from '../images/WWU_logo.png';
import lobydLogo from '../images/lobyd.png';
import scheduleLogo from '../images/scheduleOP.png';
import soundCapitalLogo from '../images/soundcapital_logo.jpg';
import shellLogo from '../images/shell.png';

export const experienceData = [
  {
    title: 'Undergraduate Research Assistant',
    company: 'Western Washington University',
    logo: wwuLogo,
    date: 'September 2024 - Present',
    type: 'Full-Stack Development',
    points: [
      'Built HIPAA-compliant telehealth platform with Django backend and React TypeScript frontend',
      'Integrated Jitsi Meet API with secure authentication protocols',
      'Deployed on Digital Ocean with scalable cloud infrastructure',
      'Implemented comprehensive security protocols for HIPAA compliance'
    ],
    tech: ['Django', 'React', 'TypeScript', 'Digital Ocean', 'API Integration']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Sound Capital Loans',
    logo: soundCapitalLogo,
    date: 'June 2024 - Present',
    type: 'Enterprise Development',
    points: [
      'Engineered KPI engine increasing executive oversight by 45% using complex SQL and Azure integration',
      'Built responsive loan extension functionality improving user experience across devices',
      'Led web technology migration to .NET and MudBlazor, improving workflows by 40%',
      'Automated data extraction from Azure and HubSpot systems'
    ],
    tech: ['.NET', 'SQL', 'Azure', 'MudBlazor', 'HubSpot API']
  },
  {
    title: 'Web Development Intern',
    company: 'Lobyd Corp.',
    logo: lobydLogo,
    date: 'September 2023 - March 2024',
    type: 'Frontend Development',
    points: [
      'Contributed to full-stack car purchasing application with team of 5 developers',
      'Implemented responsive design principles for cross-device compatibility',
      'Collaborated with React experts on application architecture',
      'Applied modern web development best practices'
    ],
    tech: ['React', 'JavaScript', 'CSS', 'Responsive Design']
  }
];

export const projectsData = [
  {
    title: 'Schedule Optimizer',
    description: 'Full-stack web application serving 3,000+ monthly users with 200x performance improvement',
    logo: scheduleLogo,
    tech: ['Go', 'TypeScript', 'React', 'Protobuf', 'Concurrent Programming'],
    highlights: [
      '200x speed improvement with Go backend',
      '80% increase in recommendation accuracy',
      '65% reduction in user error rates',
      'Real-time filtering and calendar visualization'
    ],
    link: 'https://cwooper.me/schedule-optimizer',
    github: 'https://github.com/username/schedule-optimizer'
  },
  {
    title: 'HIPAA-Compliant Telehealth Platform',
    description: 'Secure video conferencing platform with comprehensive healthcare compliance',
    logo: wwuLogo,
    tech: ['Django', 'React', 'TypeScript', 'Jitsi Meet API', 'Digital Ocean'],
    highlights: [
      'Full HIPAA compliance implementation',
      'Secure video conferencing integration',
      'MVC architecture with testable code',
      'Cloud deployment with scalability'
    ],
    link: '#',
    github: '#'
  },
  {
    title: 'C Shell Implementation',
    description: 'Custom Unix shell with 95% compatibility and 40% efficiency improvement',
    logo: shellLogo,
    tech: ['C', 'Unix', 'System Programming', 'Memory Management'],
    highlights: [
      '40% improvement in command execution',
      'Full fork-exec process model',
      '95% Unix shell compatibility',
      'Optimized memory allocation'
    ],
    link: '#',
    github: 'https://github.com/Huynhben22/C-Shell'
  }
];