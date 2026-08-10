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
  dementianc,
  cortex,
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
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Engineering Leadership',
    icon: frontend,
  },
  {
    title: 'Full Stack Development',
    icon: backend,
  },
  {
    title: 'AI / RAG Systems',
    icon: ux,
  },
  {
    title: 'Architecture & Delivery',
    icon: prototyping,
  },
];

const stats = [
  {
    value: '10+',
    label: 'Years Experience',
    detail: 'SaaS, fintech & enterprise products',
  },
  {
    value: '40%',
    label: 'Fewer Production Bugs',
    detail: 'Stronger code review & quality practices',
  },
  {
    value: '60%',
    label: 'Less Manual Follow-up',
    detail: 'Automated debt recovery with RingCentral',
  },
  {
    value: '3→1',
    label: 'Days to Onboard',
    detail: 'Custom Zoho Sign integration',
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
    points: [
      'Cut project delivery time by 20% through process optimization and tighter team collaboration.',
      'Lowered production bug rates by 40% with stronger code review standards.',
      'Improved page load times by 25% and system response times by 40% via performance work and query optimization.',
      'Automated debt recovery with RingCentral APIs, reducing manual follow-up time by 60%.',
      'Designed a Zoho Sign integration that cut client onboarding from three days to one.',
      'Helped clients reduce administrative workload by 35% while aligning tech strategy to business goals.',
    ],
  },
  {
    title: 'Sr. Software Developer',
    company_name: 'Intagleo',
    icon: intagleo,
    iconBg: '#333333',
    date: 'Mar 2017 - July 2020',
    points: [
      'Led a team of four developers while reporting to the Head of Engineering.',
      'Raised team productivity by 30% after introducing agile delivery practices.',
      'Decreased feature delivery times by 20% and drove architecture and quality improvements.',
      'Cut new real-estate API integration time from two weeks to three days.',
      'Owned requirements gathering, estimations, and code reviews across ongoing products.',
    ],
  },
  {
    title: 'Ruby on Rails Developer',
    company_name: 'Techverx',
    icon: techverx,
    iconBg: '#333333',
    date: 'September 2013 - Feb 2017',
    points: [
      'Partnered directly with clients to scope needs, build proofs of concept, and ship new applications.',
      'Delivered scheduling and relocation workflow products on Ruby on Rails and PostgreSQL.',
    ],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Snapdebt Recovery',
    description:
      'Loan recovery platform built with Node.js, React, and MySQL using clean architecture — automated follow-ups that cut manual work by 60%.',
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
      'CPA–client collaboration product that reduced administrative overhead for accounting workflows on a Node.js and React stack.',
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
    description:
      'Crowdfunding web app for investors and small businesses — Node.js, React, and MySQL with domain-driven design.',
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
    description:
      'React Native app simplifying landlord–tenant relationships, backed by Node.js and MySQL with clean architecture.',
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
      'Multifamily property tour platform built with Ruby on Rails and PostgreSQL to modernize on-site leasing experiences.',
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
  {
    id: 'project-6',
    name: 'Dementia Alliance',
    description:
      'Care coordination web app for dementia support organizations — Ruby on Rails and PostgreSQL.',
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
    image: dementianc,
    demo: 'https://dementianc.org/',
  },
  {
    id: 'project-7',
    name: 'Cortex',
    description:
      'Personal RAG app — upload PDFs, retrieve with embeddings, and get citation-grounded answers via Hugging Face workflows.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'rag',
        color: 'pink-text-gradient',
      },
    ],
    image: cortex,
    demo: 'https://cortex-rho-one.vercel.app/documents',
  },
];

export { services, stats, technologies, experiences, projects };
