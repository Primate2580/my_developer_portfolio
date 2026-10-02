// ======================================================================
// ALL SITE TEXT LIVES HERE.
// Search for "TODO" to find everything you still need to replace.
// Components read from this file, so you never edit them to change copy.
// ======================================================================

export const site = {
  brand: 'primeswitch',
  name: 'Alabi Tosin Samson', // TODO: confirm how you want your name displayed
  title: 'Web & Software Developer',
  location: 'Nigeria', // TODO: add your city if you want it shown
  email: 'TODO@your-email.com', // TODO: your real email
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  headline: 'I build the web.', // TODO: your headline (keep the full stop)
  subtitle: 'Front-end developer, primeswitch.', // TODO
  text: 'I design and build fast, accessible interfaces with React and Tailwind. Currently shipping client projects at HGSL.', // TODO: replace with your own two lines
  primaryCta: { label: 'Explore more', href: '#work' },
  secondaryCta: { label: 'Contact', href: '#contact' },
  numeral: '01',
  verticalLabel: 'Portfolio',
  meta: 'React - Tailwind - Django', // TODO
}

export const about = {
  label: 'About',
  numeral: '02',
  statement: ['I turn ideas into', 'fast, polished websites.'], // TODO: your two-line statement
  bio: "I'm a web developer based in Nigeria. I build interfaces with React and Tailwind and back ends with Python and Django. I like work where design and code meet, and I learn best by shipping real projects.", // TODO: rewrite in your own words
  facts: [
    { label: 'Location', value: 'Nigeria' }, // TODO: add your city if you like
    { label: 'Role', value: 'Web / Software Developer' },
    { label: 'Focus', value: 'React interfaces' }, // TODO
  ],
  // Your photo goes in src/assets/profile.jpg (see the README in that folder)
  photoAlt: 'Portrait of Alabi Tosin Samson', // TODO: describe your photo, e.g. "Tosin smiling, wearing a blue shirt"
}

export const skills = {
  label: 'Skills',
  groups: [
    { title: 'Front-end', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'] }, // TODO
    { title: 'Back-end', items: ['Python', 'Django'] }, // TODO
    { title: 'Tools', items: ['Git & GitHub', 'Vite', 'Supabase'] }, // TODO
  ],
}

export const projects = {
  label: 'Work',
  items: [
    {
      id: '01',
      title: 'TODO: Project One',
      description: 'TODO: One line about what it does and why it matters.',
      tags: ['React', 'Tailwind'],
      image: '', // TODO: /projects/project-one.jpg
      live: '#', // TODO: live URL
      code: '#', // TODO: GitHub URL
    },
    {
      id: '02',
      title: 'TODO: Project Two',
      description: 'TODO: One line about what it does and why it matters.',
      tags: ['Django', 'Python'],
      image: '',
      live: '#',
      code: '#',
    },
    {
      id: '03',
      title: 'TODO: Project Three',
      description: 'TODO: One line about what it does and why it matters.',
      tags: ['JavaScript'],
      image: '',
      live: '#',
      code: '#',
    },
  ],
}

export const experience = {
  label: 'Experience',
  items: [
    {
      role: 'Web / Software Developer',
      company: 'HGSL',
      dates: 'TODO: Start - Present',
      bullets: [
        'TODO: A concrete outcome you delivered.',
        'TODO: Another outcome, ideally with a number.',
      ],
    },
    {
      role: 'TODO: Education / learning milestone',
      company: 'TODO',
      dates: 'TODO',
      bullets: ['TODO: What you learned or built.'],
    },
  ],
  cv: '/cv.pdf', // TODO: add your CV to /public/cv.pdf
}

export const contact = {
  label: 'Contact',
  headline: "Let's talk.",
  text: 'TODO: One or two lines inviting people to reach out.',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Primate2580' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/TODO' }, // TODO: your LinkedIn URL
  // TODO: add X/Twitter, etc. if you want them
]
