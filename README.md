# Fatima Amir Portfolio — React + Vite + Tailwind + Supabase

Note: This README contains the complete project documentation; no separate docs file is needed.

Modern portfolio built with React (Vite) and Tailwind CSS. Content is managed in Supabase and deployed to Firebase Hosting. Includes featured projects, case studies, academic work, technologies, testimonials, ongoing tasks, and a contact page.

## Tech Stack
- React 18, Vite 5
- Tailwind CSS 3
- Supabase (Postgres, RLS, public anon key)
- Firebase Hosting
- Framer Motion, React Router, React Icons

## Quick Start
- Prerequisites: Node.js 18+, npm 9+
- Install dependencies: `npm install`
- Start dev server: `npm run dev` then open `http://localhost:5173/`
- Build production: `npm run build`
- Preview production build: `npm run preview`

## Supabase Setup
- Create a Supabase project and note the `Project URL` and `anon` key.
- Update `src/supabase/supabase.js` with your project URL and anon key.
- In Supabase SQL editor:
  - Run `supabase-schema.sql` to create all tables and policies.
  - Optionally run `supabase-data-insert-updated.sql` to seed example data.
- Tables used by the app:
  - `about_me`, `projects`, `academic_projects`, `testimonials`, `stats`, `academic_background`, `timeline_data`, `technologies`, `courses`, `ongoing_tasks`.
- Data fetching: `src/supabase/usePortfolioData.js` pulls all tables and maps them into the app’s structure.

## Content Management
- Featured Projects: set `featured = true` in `projects`. Ordering uses `created_at` (newest first).
- Case Studies: navigate via `View → Case Study` for a project (`/casestudy/:id`).
- Ongoing Tasks: managed in `ongoing_tasks`. Icon keys supported: `github`, `openai`, `rocket`, `project`, `external`. Colors accept Tailwind gradients like `from-purple-500 to-pink-500`.
- Contact: `about_me.contact_email` is used to power the mailto form on `/contact`.

## Images and Performance
- Images are stored by filename and served from Supabase Storage.
- Utility `src/utils/supabaseImages.js` supports on-the-fly transforms: width, quality, and format (`webp`).
- Fallbacks are implemented in components: if a transform fails, the app tries the plain public URL, then a local asset under `public/images/projects/`.
- Tip: For transforms, use a public bucket or switch to signed URLs via a proxy if private.

## Firebase Hosting Deployment
- Install Firebase CLI: `npm i -g firebase-tools`
- Log in: `firebase login`
- Select project: `npm run firebase:use` (replace `YOUR_FIREBASE_PROJECT_ID` in `package.json` first)
- Build site: `npm run build`
- Deploy hosting: `npm run deploy:firebase`
- Note: Ensure you have a `firebase.json` and `.firebaserc` in the project root. Example `firebase.json`:

```
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "headers": [
      { "source": "**/*.@(js|css|html)", "headers": [{ "key": "Cache-Control", "value": "max-age=3600" }] },
      { "source": "assets/**", "headers": [{ "key": "Cache-Control", "value": "public, max-age=86400" }] }
    ],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

## Scripts
- `npm run dev`: Start Vite dev server.
- `npm run build`: Build to `dist/`.
- `npm run preview`: Serve `dist/` locally.
- `npm run lint`: Run ESLint.
- `npm run firebase:use`: Select Firebase project.
- `npm run serve:hosting`: Start Firebase Hosting emulator.
- `npm run deploy:firebase`: Deploy `dist/` to Firebase Hosting.

## Directory Overview
- `src/components/`: UI sections (Hero, FeaturedProject, Projects, AboutMe, Academic, OngoingTasks, Contact, etc.)
- `src/supabase/`: Supabase client and unified data hook.
- `src/utils/supabaseImages.js`: Supabase image URL helpers and transform support.
- `public/`: Static assets and image fallbacks.

## Troubleshooting
- Images not showing: verify bucket is public, filenames match, and fallbacks exist under `public/images/projects/`.
- Contact not opening: ensure `about_me.contact_email` is set in Supabase.
- Firebase deploy failing: run `npm run build` first, confirm `firebase.json` present and `.firebaserc` points to your project.

## License
Personal portfolio project. No license provided by default.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
