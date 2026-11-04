# How to add, edit or remove a project (no developer needed)

Everything on the Projects page comes from one file: `src/data/content.js`.
You never touch the page code.

## Add a project

**1. Add the screenshot**
- Open your project in the browser, scroll to the top, and take a screenshot.
- Save it into the `public/projects/` folder, for example `public/projects/my-app.webp`.
- Best size: about 1200 x 600 px (wide), under 200 KB. JPG or WebP both work.
  (Tip: squoosh.app shrinks and converts images for free.)

**2. Add the project to `content.js`**
- Open `src/data/content.js` and find `export const projects`.
- Inside `items: [ ... ]`, paste this at the top and change the text:

```js
{
  id: '06',
  title: 'My App',
  description: 'One or two short sentences: what it does and who it is for.',
  tags: ['React', 'Tailwind'],
  image: '/projects/my-app.webp',
  imageAlt: 'Screenshot of My App showing the dashboard',
  live: 'https://my-app.vercel.app',
  code: 'https://github.com/Primate2580/my-app',
},
```

**3. Save the file.** With `npm run dev` running, the page updates by itself.

## What each line does

| Line | What it is |
| --- | --- |
| `id` | Any unique text. Shown on the coloured card if there is no image. |
| `title` | The project name. |
| `description` | Keep it to one or two sentences. |
| `tags` | The coloured pills. Unknown names still work (they get a colour automatically). |
| `image` | Path to the screenshot, starting with `/projects/`. Use `''` for a gradient card. |
| `imageAlt` | Describe what the screenshot shows (for screen readers). |
| `live` | The website address. Use `''` and the "Live site" button disappears (good for projects not deployed yet). |
| `code` | The GitHub repo address. Use `REPOS` to use the shared link at the top of the section. |

## Edit or remove
- **Edit:** change the text, save.
- **Remove:** delete the whole `{ ... },` block.
- **Reorder:** cut and paste the blocks. The first one shows first.

## Common mistakes
- Forgetting a comma `,` after a line or after the closing `}`.
- A quote mark `'` inside text (like `Don't`). Use `Don\'t` or wrap the text in `"double quotes"`.
- Image not showing: check the file really is in `public/projects/` and the name matches exactly (capital letters count).

## Publish the change
```
git add .
git commit -m "Add My App project"
git push
```
Vercel redeploys on its own after a push.

## The Experience page works the same way
Open `content.js`, find `export const experience`, and copy a block inside `items`.
Newest first. `current: true` gives the timeline dot the gradient colour.
