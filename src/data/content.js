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
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind', 'React', 'Python', 'Django'],
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
    { title: 'Front-end', icon: 'monitor', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'] }, // TODO
    { title: 'Back-end', icon: 'server', items: ['Python', 'Django'] }, // TODO
    { title: 'Tools', icon: 'wrench', items: ['Git & GitHub', 'Vite', 'Supabase'] }, // TODO
  ],
}

export const projects = {
  title: 'Projects',
  intro: 'A selection of things I have built.',
  live: 'Live site',
  code: 'Code',
  // Screenshots: save them in /public/projects and set `image` below (1200 x 750 px works best).
  // Leave `image` empty to show a gradient placeholder instead.
  items: [
    {
      id: '01',
      title: 'Project One', // TODO
      description: 'A short one-line description of what it does and why it matters.', // TODO
      tags: ['React', 'Tailwind'],
      image: '', // TODO: '/projects/project-one.jpg'
      imageAlt: 'Screenshot of Project One', // TODO: describe what the screenshot shows
      live: 'https://example.com', // TODO: live URL
      code: 'https://github.com/Primate2580', // TODO: repository URL
    },
    {
      id: '02',
      title: 'Project Two', // TODO
      description: 'A short one-line description of what it does and why it matters.', // TODO
      tags: ['Django', 'Python'],
      image: '', // TODO: '/projects/project-two.jpg'
      imageAlt: 'Screenshot of Project Two', // TODO
      live: 'https://example.com', // TODO
      code: 'https://github.com/Primate2580', // TODO
    },
    {
      id: '03',
      title: 'Project Three', // TODO
      description: 'A short one-line description of what it does and why it matters.', // TODO
      tags: ['JavaScript', 'Supabase'],
      image: '', // TODO: '/projects/project-three.jpg'
      imageAlt: 'Screenshot of Project Three', // TODO
      live: 'https://example.com', // TODO
      code: 'https://github.com/Primate2580', // TODO
    },
  ],
}

export const experience = {
  title: 'Experience',
  intro: 'Where I have worked and learned.',
  // Newest first. `current: true` fills the timeline dot with the gradient.
  items: [
    {
      role: 'Web / Software Developer',
      company: 'HGSL',
      dates: 'Start year - Present', // TODO
      current: true,
      bullets: [
        'Describe what you build and ship day to day.', // TODO
        'Add a concrete outcome, ideally with a number.', // TODO
        'Add another outcome: speed, reach, or time saved.', // TODO
      ],
    },
    {
      role: 'Front-end Developer in Training', // TODO: or your education / learning milestone
      company: 'Self-directed learning', // TODO
      dates: 'Year - Year', // TODO
      current: false,
      bullets: [
        'Completed project-based courses in HTML, CSS, JavaScript and React.', // TODO
        'Built portfolio projects to practise real-world skills.', // TODO
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
