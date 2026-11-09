import {
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
  certProblemSolving,
  certJavascript,
  certNodejs,
  certSql,
  certReact,
} from '../assets';
import lazaros from '../assets/recommenders/lazaros.jpeg';

export const socials = {
  linkedin: 'https://www.linkedin.com/in/irfanshehzadsandhu/',
  github: 'https://github.com/irfanshehzadsandhu',
  resume:
    'https://drive.google.com/file/d/1SwtyiECHtZWW2SyVm0PPzZPgwuhhDPtQ/view?usp=sharing',
  email: 'irfanshehzadsandhu@gmail.com',
};

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Work' },
  { id: 'experience', title: 'Experience' },
  { id: 'recommendations', title: 'Recommendations' },
  { id: 'credentials', title: 'Credentials' },
  { id: 'contact', title: 'Contact' },
];

const capabilities = [
  {
    title: 'Engineering leadership',
    detail:
      'Hiring, mentoring, and operating teams that ship reliably under real product pressure.',
  },
  {
    title: 'Full-stack delivery',
    detail:
      'Hands-on across Next.js, React, TypeScript, Node.js, Rails, and production data layers.',
  },
  {
    title: 'AI / RAG systems',
    detail:
      'Practical LLM workflows — retrieval, embeddings, citation-grounded answers, Hugging Face pipelines.',
  },
];

const stats = [
  {
    value: '10+',
    label: 'Years experience',
    detail: 'SaaS, fintech & enterprise products',
  },
  {
    value: '40%',
    label: 'Fewer production bugs',
    detail: 'Stronger code review & quality practices',
  },
  {
    value: '60%',
    label: 'Less manual follow-up',
    detail: 'Automated debt recovery with RingCentral',
  },
  {
    value: '3→1',
    label: 'Days to onboard',
    detail: 'Custom Zoho Sign integration',
  },
];

const techGroups = [
  {
    title: 'Leadership & delivery',
    items: [
      'Team hiring & mentoring',
      'Agile delivery',
      'Architecture reviews',
      'CI/CD & quality gates',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
  },
  {
    title: 'Backend & data',
    items: ['Node.js', 'Ruby on Rails', 'GraphQL', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Cloud & AI',
    items: ['AWS', 'Docker', 'RAG pipelines', 'Vector retrieval', 'Hugging Face'],
  },
];

const experiences = [
  {
    title: 'Engineering Manager',
    company_name: 'Carbonteq',
    icon: carbonteq,
    iconBg: '#1A1C1B',
    date: 'Aug 2020 — Present',
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
    iconBg: '#1A1C1B',
    date: 'Mar 2017 — Jul 2020',
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
    iconBg: '#1A1C1B',
    date: 'Sep 2013 — Feb 2017',
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
    role: 'Engineering lead — architecture & delivery',
    problem:
      'Collections teams were drowning in manual outreach across scattered tools, slowing recovery and burning agent time.',
    outcome:
      'Shipped a loan recovery platform with automated follow-ups that cut manual work by 60%, using clean architecture on Node.js, React, and MySQL.',
    stack: ['React', 'Node.js', 'MySQL', 'RingCentral'],
    image: snapdebt,
    demo: 'https://snapdebtrecovery.com/',
  },
  {
    id: 'project-2',
    name: 'Elephant CPA',
    role: 'Full-stack delivery & product engineering',
    problem:
      'CPA firms needed a cleaner way to collaborate with clients without email chaos and repetitive admin work.',
    outcome:
      'Built a CPA–client collaboration product that reduced administrative overhead for accounting workflows on Node.js and React.',
    stack: ['React', 'Node.js', 'MySQL'],
    image: elephant,
    demo: 'https://getelephantcpa.com/',
  },
  {
    id: 'project-3',
    name: 'Honeycomb Credit',
    role: 'Platform engineering',
    problem:
      'Small businesses and investors needed a trustworthy crowdfunding experience with clear domain boundaries.',
    outcome:
      'Delivered a crowdfunding web app with domain-driven design on Next.js, Node.js, and MySQL.',
    stack: ['Next.js', 'Node.js', 'MySQL', 'DDD'],
    image: honeycomb,
    demo: 'https://www.honeycombcredit.com/',
  },
  {
    id: 'project-4',
    name: 'Moonrock',
    role: 'Mobile & API architecture',
    problem:
      'Landlords and tenants lacked a simple shared surface for day-to-day property relationships.',
    outcome:
      'Shipped a React Native app backed by Node.js and MySQL with clean architecture for property management workflows.',
    stack: ['React Native', 'Node.js', 'MySQL'],
    image: moonrock,
    demo: 'https://www.moonrockpm.com/',
  },
  {
    id: 'project-5',
    name: 'Pynwheel',
    role: 'Rails product engineering',
    problem:
      'Multifamily leasing teams needed modern on-site tour experiences beyond static brochures.',
    outcome:
      'Built a multifamily property tour platform on Ruby on Rails and PostgreSQL to modernize leasing touchpoints.',
    stack: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
    image: pynwheel,
    demo: 'https://pynwheeltouchscreens.com/',
  },
  {
    id: 'project-6',
    name: 'Dementia Alliance',
    role: 'Full-stack engineer',
    problem:
      'Dementia support organizations needed coordinated care workflows across scattered stakeholders.',
    outcome:
      'Delivered a care coordination web app on Ruby on Rails and PostgreSQL for support organizations.',
    stack: ['Ruby on Rails', 'PostgreSQL'],
    image: dementianc,
    demo: 'https://dementianc.org/',
  },
  {
    id: 'project-7',
    name: 'Cortex',
    role: 'Personal RAG product',
    problem:
      'Document Q&A without grounded citations creates hallucination risk and weak trust.',
    outcome:
      'Built a personal RAG app — upload PDFs, retrieve with embeddings, and get citation-grounded answers via Hugging Face workflows.',
    stack: ['Next.js', 'TypeScript', 'RAG', 'Hugging Face'],
    image: cortex,
    demo: 'https://cortex-rho-one.vercel.app/documents',
  },
];

/*
  Replace quote / name / title / linkedin with your LinkedIn recommendation text.
  Prefer a mix of managers, peers, direct reports, and clients.

  Profile photos:
  1. Save a square headshot in src/assets/recommenders/ (e.g. lazaros.jpg)
  2. Import it at the top of this file
  3. Set image: lazaros on the recommendation (initials used only if image is omitted)
*/
const recommendations = [
  {
    id: 'rec-1',
    quote: `I have been working with Irfan for several months now. He is very dedicated and knowledgeable. Because of his work ethic and very professional behavior, Irfan earned my trust from the very early stage of our collaboration. It's quite admirable how his focus was on the quality of the work instead of easy and fast payments. 
Because of that, I decided after our initial contract to offer him a stable position in my company. 
I believe in him and I know that he has a great passion for what he is doing.`,
    name: 'Lazaros Kalfas',
    title: 'Software Engineer at ReviewDoc',
    relationship: 'Managed Irfan',
    linkedin: 'https://www.linkedin.com/in/irfanshehzadsandhu/details/recommendations/?detailScreenTabIndex=0',
    image: lazaros,
  },
  {
    id: 'rec-2',
    quote:
      'Working with Irfan as an EM was one of the clearest growth periods of my career. He unblocks hard problems, protects focus, and still stays close enough to the code to earn trust from senior ICs.',
    name: 'Replace With Recommender',
    title: 'Senior Software Engineer · Company',
    relationship: 'Reported to Irfan',
    linkedin: 'https://www.linkedin.com/in/irfanshahzad/',
    initials: 'RR',
  },
  {
    id: 'rec-3',
    quote:
      'Irfan translates business constraints into technical plans that actually ship. On our fintech work he owned outcomes end-to-end — architecture, people, and the operational details that keep production calm.',
    name: 'Replace With Recommender',
    title: 'Product Partner · Company',
    relationship: 'Worked with Irfan',
    linkedin: 'https://www.linkedin.com/in/irfanshahzad/',
    initials: 'RR',
  },
  {
    id: 'rec-4',
    quote:
      'Rare combination of full-stack strength and management maturity. Irfan improved our review culture, cut noise from the roadmap, and made cross-team delivery feel intentional instead of heroic.',
    name: 'Replace With Recommender',
    title: 'Engineering Peer · Company',
    relationship: 'Peer',
    linkedin: 'https://www.linkedin.com/in/irfanshahzad/',
    initials: 'RR',
  },
];

/*
  Replace credentialUrl with your public HackerRank certificate verify links.
  Swap SVG placeholders for official badge images if you prefer.
*/
const certificates = [
  {
    id: 'cert-1',
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    issued: 'Verified credential',
    credentialUrl: 'https://www.hackerrank.com/certificates',
    image: certProblemSolving,
  },
  {
    id: 'cert-2',
    title: 'JavaScript',
    issuer: 'HackerRank',
    issued: 'Verified credential',
    credentialUrl: 'https://www.hackerrank.com/certificates',
    image: certJavascript,
  },
  {
    id: 'cert-3',
    title: 'Node.js',
    issuer: 'HackerRank',
    issued: 'Verified credential',
    credentialUrl: 'https://www.hackerrank.com/certificates',
    image: certNodejs,
  },
  {
    id: 'cert-4',
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    issued: 'Verified credential',
    credentialUrl: 'https://www.hackerrank.com/certificates',
    image: certSql,
  },
  {
    id: 'cert-5',
    title: 'React',
    issuer: 'HackerRank',
    issued: 'Verified credential',
    credentialUrl: 'https://www.hackerrank.com/certificates',
    image: certReact,
  },
];

export {
  capabilities,
  stats,
  techGroups,
  experiences,
  projects,
  recommendations,
  certificates,
};
