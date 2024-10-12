import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  snapdebt,
  elephant,
  honeycomb,
  moonrock,
  pynwheel,
  carbonteq,
  techverx,
  intagleo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile Developer',
    icon: ux,
  },
  {
    title: 'Software Design and Architecture',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Engineering Manager',
    company_name: 'Carbonteq',
    icon: carbonteq,
    iconBg: '#333333',
    date: 'Aug 2020 - Current',
  },
  {
    title: 'Sr. Software Developer',
    company_name: 'Intagleo',
    icon: intagleo,
    iconBg: '#333333',
    date: 'Mar 2017 - July 2020',
  },
  {
    title: 'Ruby on Rails Developer',
    company_name: 'Techverx',
    icon: techverx,
    iconBg: '#333333',
    date: 'September 2013 - Feb 2017',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Snapdebt Recovery',
    description: 'Debt recovery the right way',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: snapdebt,
    demo: 'https://snapdebtrecovery.com/',
  },
  {
    id: 'project-2',
    name: 'Elephant CPA',
    description:
      'Streamlining The Relationship Between CPAs And Clients',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: elephant,
    demo: 'https://getelephantcpa.com/',
  },
  {
    id: 'project-3',
    name: 'Honeycomb Credit',
    description: 'Find your next investment on Honeycomb',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: honeycomb,
    demo: 'https://www.honeycombcredit.com/',
  },
  {
    id: 'project-4',
    name: 'Moonrock',
    description: `Simplifying the Landlord-Tenant Relationship`,
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: moonrock,
    demo: 'https://www.moonrockpm.com/',
  },
  {
    id: 'project-5',
    name: 'Pynwheel',
    description:
      'Pynwheel is transforming multifamily property tours, one property at a time',
    tags: [
      {
        name: 'Ruby on Rails',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: pynwheel,
    demo: 'https://pynwheeltouchscreens.com/',
  },
];

export { services, technologies, experiences, projects };
