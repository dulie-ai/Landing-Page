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

The Telegram and GitHub destinations are kept together in `src/config.js`. Update that file if either public URL changes. A full privacy policy, analytics, and final canonical-domain metadata can be added once the deployment domain is decided.
