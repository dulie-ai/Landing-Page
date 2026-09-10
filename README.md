# Dulie website

The public landing page for Dulie, built with React and Vite.

## Local development

Install Node.js 22.12 or newer, then run:

```bash
cd website
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

The deployable output will be generated in `website/dist/`.

## Quality checks

```bash
npm run check
```

This runs linting, formatting validation, a production build, and Playwright checks at desktop and mobile sizes.

## Configuration

Copy `.env.example` to `.env.local` and replace the placeholder values. Vite only exposes variables prefixed with `VITE_` to browser code.

## Before publishing

Configure the real Telegram and GitHub URLs in `.env.local`. The marketing copy, privacy page, social preview image, testimonials, analytics, and final launch metadata should be completed once the final content and domain are decided.
