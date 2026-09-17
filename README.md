# Dulie Landing Page

The public landing page for Dulie, built with React and Vite.

## Local development

Install Node.js 22.12 or newer, then run:

```bash
cd Landing-Page
npm install
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

The repository's `.nvmrc` pins the recommended development version for anyone using `nvm`.

## Production build

```bash
npm run build
npm run preview
```

The deployable output will be generated in `dist/`.

## Quality checks

```bash
npm run check
```

This runs linting, formatting validation, a production build, and Playwright checks at desktop and mobile sizes.

## Before publishing

The Telegram and GitHub destinations are kept together in `src/config.js`. Update that file if either public URL changes.

Legal pages live in `public/privacy/index.html` and `public/terms/index.html`, with shared styles in `public/legal.css`. They are ordinary HTML documents and work without JavaScript or a server routing rule. The homepage footer links to both and respects `VITE_BASE_PATH`.

Read [the legal publication guide](docs/legal-publication.md) before publishing or entering these URLs into Google Cloud Console. The policies describe current local operation. Update them when hosting or data practices change.
