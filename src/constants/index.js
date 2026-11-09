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
} from '../assets';
import lazaros from '../assets/recommenders/lazaros.jpeg';
import michael from '../assets/recommenders/michael.jpeg';
import massood from '../assets/recommenders/massood.jpeg';
import hassib from '../assets/recommenders/hassib.jpeg';
import deshon from '../assets/recommenders/deshon.jpeg';
import joe from '../assets/recommenders/joe.jpeg';
import frontend from '../assets/certs/frontend.png';
import testgrollia from '../assets/certs/testgrollia.png';

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
    title: 'Leading teams',
    detail:
      'I hire people carefully, mentor them in public, and keep the team moving when priorities shift.',
  },
  {
    title: 'Building products',
    detail:
      'I still write and review code. Mostly React, Next.js, TypeScript, Node, and Rails.',
  },
  {
    title: 'Working with AI',
    detail:
      'I have shipped RAG features with embeddings and citations. Useful ones, not demos for the sake of demos.',
  },
];

const stats = [
  {
    value: '10+',
    label: 'Years of experience',
    detail: 'Mostly SaaS and fintech products',
  },
  {
    value: '40%',
    label: 'Fewer production bugs',
    detail: 'After we tightened reviews and ownership',
  },
  {
    value: '60%',
    label: 'Less manual follow-up',
    detail: 'From automating debt recovery outreach',
  },
  {
    value: '3→1',
    label: 'Days to onboard',
    detail: 'After adding Zoho Sign into the flow',
  },
];

const techGroups = [
  {
    title: 'How I work',
    items: [
      'Hiring and mentoring',
      'Planning and delivery',
      'Architecture reviews',
      'CI/CD and quality',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Ruby on Rails', 'GraphQL', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Cloud and AI',
    items: ['AWS', 'Docker', 'RAG pipelines', 'Vector search', 'Hugging Face'],
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
      'Got projects out about 20% faster by cleaning up process and reducing handoff friction.',
      'Brought production bugs down by roughly 40% once reviews and ownership were clearer.',
      'Made pages load about 25% faster and improved response times by around 40%.',
      'Wired RingCentral into debt recovery so agents spent 60% less time on manual follow-up.',
      'Added Zoho Sign and cut client onboarding from three days to one.',
      'Worked with clients to trim admin work by about 35%, with engineering choices tied to what the business needed.',
    ],
  },
  {
    title: 'Senior Software Developer',
    company_name: 'Intagleo',
    icon: intagleo,
    iconBg: '#1A1C1B',
    date: 'Mar 2017 — Jul 2020',
    points: [
      'Led a team of four and reported to the Head of Engineering.',
      'Helped the team move about 30% faster after we settled into a workable agile rhythm.',
      'Cut feature delivery time by around 20% by fixing architecture and review habits.',
      'Got new real-estate API integrations done in three days instead of two weeks.',
      'Took ownership of scoping, estimates, and code reviews on live products.',
    ],
  },
  {
    title: 'Ruby on Rails Developer',
    company_name: 'Techverx',
    icon: techverx,
    iconBg: '#1A1C1B',
    date: 'Sep 2013 — Feb 2017',
    points: [
      'Sat with clients, figured out what they needed, built prototypes, and shipped.',
      'Built scheduling and relocation products with Ruby on Rails and PostgreSQL.',
    ],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Snapdebt Recovery',
    role: 'Led architecture and delivery',
    problem:
      'The collections team was stuck doing outreach by hand across too many tools.',
    outcome:
      'We built an automated recovery product on Node, React, and MySQL. Manual follow-up dropped by about 60%.',
    stack: ['React', 'Node.js', 'MySQL', 'RingCentral'],
    image: snapdebt,
    demo: 'https://snapdebtrecovery.com/',
  },
  {
    id: 'project-2',
    name: 'Elephant CPA',
    role: 'Full-stack engineering',
    problem:
      'CPA firms were managing client work over email, and it created a lot of avoidable admin.',
    outcome:
      'Built a React and Node product so firms and clients could collaborate in one place.',
    stack: ['React', 'Node.js', 'MySQL'],
    image: elephant,
    demo: 'https://getelephantcpa.com/',
  },
  {
    id: 'project-3',
    name: 'Honeycomb Credit',
    role: 'Platform engineering',
    problem:
      'Small businesses and investors needed a crowdfunding product that felt trustworthy and well structured.',
    outcome:
      'Shipped the platform on Next.js, Node, and MySQL, with clearer domain boundaries in the codebase.',
    stack: ['Next.js', 'Node.js', 'MySQL', 'DDD'],
    image: honeycomb,
    demo: 'https://www.honeycombcredit.com/',
  },
  {
    id: 'project-4',
    name: 'Moonrock',
    role: 'Mobile and API work',
    problem:
      'Landlords and tenants needed a simpler way to handle day-to-day rental stuff.',
    outcome:
      'Built the React Native app and Node/MySQL backend behind it.',
    stack: ['React Native', 'Node.js', 'MySQL'],
    image: moonrock,
    demo: 'https://www.moonrockpm.com/',
  },
  {
    id: 'project-5',
    name: 'Pynwheel',
    role: 'Rails engineering',
    problem:
      'Leasing teams were still using static brochures for on-site apartment tours.',
    outcome:
      'Built a tour platform with Ruby on Rails and PostgreSQL for multifamily properties.',
    stack: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
    image: pynwheel,
    demo: 'https://pynwheeltouchscreens.com/',
  },
  {
    id: 'project-6',
    name: 'Dementia Alliance',
    role: 'Full-stack engineering',
    problem:
      'Support organizations needed a better way to coordinate care across different people and teams.',
    outcome:
      'Built the care coordination app on Ruby on Rails and PostgreSQL.',
    stack: ['Ruby on Rails', 'PostgreSQL'],
    image: dementianc,
    demo: 'https://dementianc.org/',
  },
  {
    id: 'project-7',
    name: 'Cortex',
    role: 'Side project',
    problem:
      'I wanted document Q&A that could point back to sources, not just invent answers.',
    outcome:
      'Built a small RAG app: upload PDFs, retrieve chunks with embeddings, and answer with citations using Hugging Face.',
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
      `My company worked with Irfan to develop the first version of our automated productivity software to great success. Together we tackled a new idea, and built a functional prototype in just two weeks. From there we rounded out features and incorporated user feedback (can you tell this is from a Product Manager's perspective?) and successfully built out our first version in less than 2 months. Irfan was very responsive to requested changes and willing to go above and beyond to make sure we got the best results. I hope to work together again on future projects.`,
    name: 'Michael Cariglia',
    title: 'Application Engineer Manager',
    relationship: 'Managed Irfan',
    linkedin: 'https://www.linkedin.com/in/irfanshehzadsandhu/details/recommendations/?detailScreenTabIndex=0',
    image: michael,
  },
  {
    id: 'rec-3',
    quote:
      `Irfan and the team did an amazing job building our product. Irfan is highly intelligent when it comes to software development and was asking all the right questions during the production phase. If there was ever a problem, Irfan was the first to try and find a solution. I highly recommend using both Irfan and Carbonteq for all development needs.`,
    name: 'Christopher Massood, CPA',
    title: `Masood & Company, PA CPA's`,
    relationship: 'Worked with Irfan',
    linkedin: 'https://www.linkedin.com/in/irfanshehzadsandhu/details/recommendations/?detailScreenTabIndex=0',
    image: massood,
  },
  {
    id: 'rec-4',
    quote:
      `It was a pleasure working with Irfan and the Carbonteq team. Irfan worked tirelessly to develop an MVP on a tight timeline, interpreting business needs and design, and implementing modern web functionality. When challenges arose, Irfan was able to quickly understand issues and propose recommended solutions.`,
    name: 'Hassib Amiryar',
    title: 'Agile Delivery and Project Management @ MITRE',
    relationship: 'Managed Irfan',
    linkedin: 'https://www.linkedin.com/in/irfanshehzadsandhu/details/recommendations/?detailScreenTabIndex=0',
    image: hassib,
  },
  {
    id: 'rec-5',
    quote:
      `Irfan has worked on the development of my app MoonRock PM. He was very helpful with developing and coding everything that I vision how the app should look and function. After testing for bugs, he was quick to make the fixes and changes that we recommended. Irfan is such a great and easy person to work with. Very understanding and knows how to make your vision come true!!`,
    name: `De'Shon Swafford`,
    title: 'Co-founder @ Moonrock',
    relationship: 'Worked with Irfan',
    linkedin: 'https://www.linkedin.com/in/irfanshehzadsandhu/details/recommendations/?detailScreenTabIndex=0',
    image: deshon,
  },
  {
    id: 'rec-6',
    quote:
      `I had the pleasure of working with Irfan over the last two years. He joined the team during a critical systems integration project, bringing deep experience with the complex requirements around funds transfer. That expertise was a real asset as we navigated the transition — and what set him apart was taking the time to understand not just the technical details, but also the underlying business processes and the drivers behind our decisions, which made collaboration much smoother. Irfan is genuinely easy to work with. He's receptive to feedback and cares about the people around him, which comes through in how he engages with his team.`,
    name: 'Joe Lipple',
    title: 'Chief Product Officer at Honeycomb Credit',
    relationship: 'Worked with Irfan',
    linkedin: 'https://www.linkedin.com/in/irfanshehzadsandhu/details/recommendations/?detailScreenTabIndex=0',
    image: joe,
  }
];

/*
  Certificate images (not links):
  1. Save certificate screenshots/PNGs in src/assets/certs/
     e.g. problem-solving.png, javascript.png
  2. Import them at the top of this file (or via ../assets)
  3. Set image: yourImport — the gallery shows the image; click to enlarge
*/
const certificates = [
  {
    id: 'cert-1',
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    issued: 'Certificate of Accomplishment',
    image: frontend,
  },
  {
    id: 'cert-2',
    title: 'Software Engineer',
    issuer: 'TestGorilla',
    issued: 'Verified Result · 74th Percentile',
    image: testgrollia,
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
