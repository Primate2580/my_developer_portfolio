// ======================================================================
// ALL SITE TEXT LIVES HERE.
// Search for "TODO" to find everything you still need to replace.
// Pages read from this file, so you never edit them to change copy.
// ======================================================================

export const site = {
  brand: 'primeswitch',
  name: 'Alabi Tosin Samson', // TODO: confirm how you want your name displayed
  firstName: 'Alabi Tosin', // hero line 1
  lastName: 'Samson', // hero line 2
  title: 'Web & Software Developer',
  location: 'Ibadan Nigeria', // TODO: add your city if you want it shown
  email: 'primate2580@mail.com', // TODO: your real email
}

// `to` is the page address. The header and footer both build their links from this list.
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

export const header = {
  cta: { label: 'Hire Me', to: '/contact' },
}

export const hero = {
  status: 'Open to new projects', // TODO: or "Available for freelance work"
  greeting: "Hey there! I'm",
  // The typing line cycles through these roles
  introPrefix: "I'm a",
  roles: ['Creative Coder', 'Front-end Developer', 'React Developer'], // TODO
  text: 'I design and build fast, accessible interfaces with React and Tailwind, with Python and Django behind them. Currently shipping client projects at HGSL.', // TODO: replace with your own two lines
  // Colourful pills under the paragraph. `color` picks the pill colour (see Pill.jsx)
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind', 'React', 'WordPress', 'Node.js', 'Python', 'Django'],
  primaryCta: { label: 'View My Work', to: '/projects' },
  secondaryCta: { label: "Let's Talk", to: '/contact' },
  followLabel: 'Follow me:',
  // Two small floating cards next to the portrait
  stats: [
    { value: 'React', label: 'Main stack' },
    { value: 'HGSL', label: 'Working at' },
  ],
  // The code card next to the portrait. Edit the lines, keep the shape.
  code: { name: 'Tosin', skills: ['React', 'Django'], passion: 'Building the web' }, // TODO
}

// Short "What I do" strip under the hero on the home page. icon: 'globe' | 'monitor' | 'server'
export const services = {
  title: 'What I do',
  items: [
    {
      icon: 'monitor',
      title: 'Websites',
      text: 'Fast, responsive sites for businesses and portfolios, built with React and Tailwind.', // TODO
    },
    {
      icon: 'globe',
      title: 'WordPress sites',
      text: 'Custom WordPress builds you can update yourself, without touching code.', // TODO
    },
    {
      icon: 'server',
      title: 'Web apps',
      text: 'Full-stack apps with Node.js, Express and MongoDB, or Firebase when you need to move fast.', // TODO
    },
  ],
}

// Bar shown at the bottom of every page except Contact
export const cta = {
  title: 'Have a project in mind?',
  text: "Tell me what you're building and I'll get back to you.", // TODO
  button: { label: "Let's talk", to: '/contact' },
}

export const about = {
  title: 'About me',
  intro: 'A developer who learns by shipping real projects.',
  statement: ['I turn ideas into', 'fast, polished websites.'], // TODO: your two-line statement
  bio: "I'm a web developer based in Nigeria. I build interfaces with React and Tailwind and back ends with Python and Django. I like work where design and code meet, and I learn best by shipping real projects.", // TODO: rewrite in your own words
  facts: [
    { label: 'Location', value: 'Nigeria' }, // TODO: add your city if you like
    { label: 'Role', value: 'Web / Software Developer' },
    { label: 'Focus', value: 'React interfaces' }, // TODO
  ],
  // Your photo goes in src/assets/profile.jpg (see the README in that folder)
  photoAlt: 'Portrait of Alabi Tosin Samson', // TODO: describe your photo, e.g. "Tosin smiling, wearing a blue shirt"
  ctas: {
    primary: { label: 'See my projects', to: '/projects' },
    secondary: { label: 'Download CV', href: '/cv.pdf', filename: 'Alabi-Tosin-Samson-CV.pdf' },
  },
}

export const skills = {
  title: 'Skills',
  intro: 'The tools I use to design, build and ship.',
  // icon: 'monitor' | 'server' | 'wrench' (see iconMap in pages/Skills.jsx)
  groups: [
    { title: 'Front-end', icon: 'monitor', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML & CSS', 'WordPress'] }, // TODO
    { title: 'Back-end', icon: 'server', items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Python', 'Django'] }, // TODO
    { title: 'Tools', icon: 'wrench', items: ['Git & GitHub', 'Vite', 'Supabase'] }, // TODO
  ],
}

// ----------------------------------------------------------------------------
// ONE link for every "Code" button. Right now it opens your GitHub repositories page.
// NOTE: that address only works while you are logged in to GitHub. Visitors may see an error.
// Better: point each project's `code` at its own repo (https://github.com/Primate2580/repo-name),
// or change this one line to https://github.com/Primate2580?tab=repositories
// ----------------------------------------------------------------------------
const REPOS = 'https://github.com/Primate2580?tab=repositories'

// ============================================================================
// HOW TO ADD A PROJECT (no code changes needed):
//   1. Take a screenshot of the project, save it as a .webp or .jpg in public/projects/
//      (about 1200 x 600 px, under 200 KB). Example: public/projects/my-app.webp
//   2. Copy the template below, paste it at the TOP of `items`, and fill it in.
//   3. Save. The page updates by itself (restart `npm run dev` only if it does not).
//
//   {
//     id: '06',                              // any unique text; shown on the gradient if no image
//     title: 'My App',
//     description: 'One or two short sentences: what it does and who it is for.',
//     tags: ['React', 'Tailwind'],           // shown as coloured pills
//     image: '/projects/my-app.webp',        // '' = gradient placeholder
//     imageAlt: 'Screenshot of My App showing the dashboard', // describe what is visible
//     live: 'https://my-app.vercel.app',     // '' = the "Live site" button is hidden
//     code: REPOS,                           // or 'https://github.com/Primate2580/my-app'
//   },
//
// To remove a project, delete its whole { ... }, block. To reorder, move the blocks.
// ============================================================================
export const projects = {
  title: 'Projects',
  intro: 'A selection of things I have built.',
  live: 'Live site',
  code: 'Code',
  items: [
    {
      id: '01',
      title: 'LABOD Concepts',
      description: 'Multi-page portfolio website for an architecture studio in Lagos, with project galleries and a full-screen menu.',
      tags: ['React', 'Vite', 'Tailwind'],
      image: '/projects/labod.webp',
      imageAlt: 'LABOD Concepts home page: a lit modern pod house at dusk with the studio name in large white letters',
      live: 'https://labod-concepts.vercel.app/',
      code: REPOS,
    },
    {
      id: '02',
      title: 'Tech.Care',
      description: 'Patient dashboard that loads its data from an API: a patient list, blood pressure history chart and vital signs.',
      tags: ['React', 'Tailwind', 'Vite', 'API'],
      image: '/projects/tech-care.webp',
      imageAlt: 'Tech.Care dashboard with a patient list, a blood pressure chart and heart, temperature and respiratory cards',
      live: 'https://tech-care-two-ashen.vercel.app/patients/jessica-taylor',
      code: REPOS,
    },
    {
      id: '03',
      title: 'Budget Tracker',
      description: 'Multi-page budget tracker in naira with a dashboard, transactions and reports, plus income and expense charts.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '/projects/budget-tracker.webp',
      imageAlt: 'Budget Tracker dashboard showing income, expenses and balance cards with a bar chart and a doughnut chart',
      live: 'https://multipagebudgettracker.vercel.app/#dashboard',
      code: REPOS,
    },
    {
      id: '04',
      title: 'DEV Community Clone',
      description: 'A clone of the DEV Community home page, built to practise layout and styling from a real site.',
      tags: ['HTML', 'CSS'],
      image: '/projects/devio-clone.webp',
      imageAlt: 'Clone of the DEV Community home page with a left menu, a feed card and an active discussions list',
      live: 'https://devio-clone.vercel.app/homepage.html#',
      code: REPOS,
    },
    {
      id: '05',
      title: 'primeswitch Portfolio',
      description: 'This site: a multi-page portfolio with light and dark themes, built from scratch.',
      tags: ['React', 'Tailwind', 'Vite'],
      image: '/projects/portfolio.webp',
      imageAlt: 'The primeswitch portfolio home page with the name Alabi Tosin Samson and skill tags',
      live: '', // TODO: add the live address once it is deployed
      code: REPOS,
    },
     {
      id: '06',
      title: 'phonic music app',
      description: 'A spotify clone that allows users to search for music and play it, built with React, Tailwind and Vite.',
      tags: ['React', 'Tailwind', 'Vite'],
      image: '/projects/phonic.jpg',
      imageAlt: 'The primeswitch portfolio home page with the name Alabi Tosin Samson and skill tags',
      live: 'https://phonic-xi.vercel.app/', 
      code: REPOS,
    },
  ],
}

export const experience = {
  title: 'Experience',
  intro: 'Where I have worked and what I have built.',
  // Newest first. `current: true` fills the timeline dot with the gradient.
  items: [
    {
      role: 'Web / Software Developer',
      company: 'HGSL',
      dates: '2025 - Present', // TODO
      current: true,
      bullets: [
        'Built the official HGSL company website.',
        'Updated the website for a client, Blossom Luxury Homes and Apartment.',
        'Currently building a WordPress website for chrismene.org.',
      ],
    },
    {
      role: 'Course Designer and Instructor',
      company: 'Online students',
      dates: '2024 - Present', // TODO
      current: true,
      bullets: [
        'Designed an 8-week web design course in HTML, CSS and a little JavaScript.',
        'Students build several websites through the course, then finish with a clone of a real site.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'primeswitch (independent projects)',
      dates: '2023 - 2026', // TODO
      current: false,
      bullets: [
        'Built the LABOD Concepts architecture portfolio for a client with React, Vite and Tailwind.',
        'Built Tech.Care, a patient dashboard that loads its data from an API.',
        'Built a multi-page budget tracker and a DEV Community clone, and this portfolio.',
      ],
    },
    {
      role: 'Front-end Developer in Training',
      company: 'Self-directed learning',
      dates: '2021 - present', // TODO
      current: false,
      bullets: [
        'Learned HTML, CSS, JavaScript, React, Python and Django through project-based practice.',
        'Learned Node.js, Express, MongoDB and Firebase for the back end.',
      ],
    },
  ],
  // Replace /public/cv.pdf with your real CV (keep the same file name)
  cv: { href: '/cv.pdf', label: 'Download CV', filename: 'Alabi-Tosin-Samson-CV.pdf' },
}

export const contact = {
  title: "Let's talk",
  intro: "Have a project in mind, or just want to say hello? Send me a message and I'll get back to you.", // TODO
  emailLabel: 'Email me directly',
  socialsLabel: 'Find me online',
  form: {
    intro: 'All fields are required.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    sending: 'Sending...',
    successTitle: 'Message sent',
    successText: "Thanks for reaching out. I'll reply as soon as I can.", // TODO
    another: 'Send another message',
    errorText: "Something went wrong and your message wasn't sent. Please try again, or email me directly:",
    notConnected: "The contact form isn't connected yet. Please email me directly:",
  },
}

// icon: 'github' | 'linkedin' | 'globe' (see components/ui/socialIconMap.js)
export const socials = [
  { label: 'GitHub', handle: 'Primate2580', icon: 'github', href: 'https://github.com/Primate2580' },
  { label: 'LinkedIn', handle: 'Alabi Tosin Samson', icon: 'linkedin', href: 'https://www.linkedin.com/in/alabi-tosin-samson-07b2a9210/' },
  { label: 'Website', handle: 'primeswitch.com', icon: 'globe', href: 'https://primeswitch.com' },
]

export const notFound = {
  title: 'Page not found',
  text: "That page doesn't exist. It may have moved, or the address has a typo.",
  cta: { label: 'Back to home', to: '/' },
}

export const footer = {
  meta: 'Built with React, Tailwind and Vite',
  rights: 'All rights reserved.',
}
