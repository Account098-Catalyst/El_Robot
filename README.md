# EVG

Interactive mission game built with React, Vite, TypeScript, Tailwind, and Framer Motion.

## Local Development

1. Install Node.js LTS (v20+ recommended): https://nodejs.org/
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Open the local URL shown in terminal (usually `http://localhost:8080`).

## Build

```bash
npm run build
```

This outputs static files in `dist/`.

## Deploy To GitHub Pages

This project is already configured for GitHub Pages (`HashRouter` + relative Vite base).

### Option A: Automatic Deploy (Recommended)

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.

Then in GitHub repo settings:
- `Settings` -> `Pages`
- Source: `GitHub Actions`

### Option B: Manual Deploy (Local Command)

1. Create a GitHub repository and push this code.
2. Deploy:

```bash
npm run deploy
```

3. In GitHub, go to repo settings:
	- `Settings` -> `Pages`
	- Source: `Deploy from a branch`
	- Branch: `gh-pages` / root

After a minute or two, your site should be available at:

`https://<your-github-username>.github.io/<your-repo-name>/`

## Mobile Access

1. Open the GitHub Pages URL on your phone browser.
2. If the old version appears, refresh without cache (or wait 1-2 minutes for CDN propagation).
3. Optional: add to home screen from your browser menu.

## Useful Commands

```bash
npm run dev
npm run build
npm run preview
npm run test
npm run lint
npm run deploy
```
