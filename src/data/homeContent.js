// Text for the new home page (the left-hand list, the cover cards, the GitHub graph).
// Kept in its own file so updating the layout never overwrites your edits in content.js.

// Home page: the left-hand list and the cover cards on the right.
// `id` must stay as it is (the page uses it to find each card). Change `label` freely.
export const home = {
  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ],
  open: 'Open page',
}

// GitHub activity graph on the home page. Only the public contribution counts are shown,
// never repository names or files. Change `username` if your GitHub name changes.
export const github = {
  title: 'GitHub Activity',
  username: 'Primate2580',
  url: 'https://github.com/Primate2580',
  summary: (n) => `${n.toLocaleString('en')} contributions in the last year`,
  less: 'Less',
  more: 'More',
  error: "GitHub activity couldn't be loaded right now.",
  errorLink: 'View my profile on GitHub',
}
