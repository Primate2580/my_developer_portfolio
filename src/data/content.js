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
  numeral: '03',
  // icon: 'monitor' | 'server' | 'wrench' (see iconMap in components/Skills.jsx)
  groups: [
    { title: 'Front-end', icon: 'monitor', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'] }, // TODO
    { title: 'Back-end', icon: 'server', items: ['Python', 'Django'] }, // TODO
    { title: 'Tools', icon: 'wrench', items: ['Git & GitHub', 'Vite', 'Supabase'] }, // TODO
  ],
}

export const projects = {
  label: 'Work',
  numeral: '04',
  cta: 'View project',
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
