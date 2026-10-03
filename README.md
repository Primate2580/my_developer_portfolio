# primeswitch-portfolio

Personal portfolio of Alabi Tosin Samson (primeswitch). Built with Vite, React and Tailwind CSS v4.

## Scripts
- `npm install`: install dependencies
- `npm run dev`: start the dev server
- `npm run build`: production build into `dist/`
- `npm run preview`: preview the production build
- `npm run lint`: check the code

## Editing content
All text lives in **`src/data/content.js`**. Search for `TODO` to find placeholders.

| What | Where |
| --- | --- |
| Your photo | save as `src/assets/profile.jpg` (see `src/assets/README.md`) |
| Project screenshots | `public/projects/`, then set `image` in `content.js` |
| Your CV | replace `public/cv.pdf` (keep the file name) |

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io), a free service that emails you each message. The site has no server of its own, so the form needs your Formspree address.

1. Create a free account at formspree.io and click **New form**.
2. Copy the form's endpoint. It looks like `https://formspree.io/f/abcdwxyz`.
3. Locally: copy `.env.example` to `.env` and paste the endpoint:
   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz
   ```
   Then **restart** `npm run dev` (Vite only reads `.env` when it starts).
4. On your host (Vercel / Netlify): add the same variable under **Settings > Environment Variables**, then redeploy. Variables are baked in at build time, so a redeploy is required after any change.

If `VITE_FORM_ENDPOINT` is missing, the site does **not** break. The form shows a friendly note with your email address instead, and the Send button stays inactive.

Spam protection: the form has a hidden "honeypot" field. Bots fill it in, people never see it; a filled honeypot is silently dropped.

The endpoint is not a secret (it is visible in the page's code by design). Formspree lets you restrict which domains may use it in the form's settings.
