# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js Version Warning

Both apps use **Next.js 16.x** — this version has breaking changes from what was common in training data. APIs, conventions, and file structure may differ. Read `node_modules/next/dist/docs/` in the relevant app before writing Next.js-specific code. Heed deprecation notices.

## Monorepo Structure

This repo contains two independent Next.js apps plus root-level Supabase dependencies:

- **`rug-log/`** — Minimal Next.js 16.2.3 app. Plain Tailwind CSS v4, no component library.
- **`next-app/`** — Next.js 16.1.7 app with shadcn/ui, Radix UI, Turbopack, and dark mode.
- **Root `package.json`** — Holds only `@supabase/ssr` and `@supabase/supabase-js`; not wired into either app yet.

Each app has its own `node_modules` and must be run from its own directory.

## Commands

All commands below are run from inside the respective app directory (`rug-log/` or `next-app/`).

### `rug-log/`
```bash
npm run dev        # start dev server
npm run build      # production build
npm run lint       # ESLint
```

### `next-app/`
```bash
npm run dev        # start dev server with Turbopack
npm run build      # production build
npm run lint       # ESLint
npm run format     # Prettier (formats *.ts, *.tsx)
npm run typecheck  # tsc --noEmit
```

Neither app has a test runner configured yet.

## Architecture

### App Router & Component Model
Both apps use the Next.js App Router (`app/` directory). Components are Server Components by default; add `"use client"` only when needed (event handlers, hooks, browser APIs).

### `next-app/` Patterns
- **shadcn/ui** — components live in `components/ui/` as copy-paste source files (configured via `components.json`, style: `radix-nova`, icons: `lucide`).
- **CVA (Class Variance Authority)** — used for component variant styling (see `components/ui/button.tsx`).
- **`cn()` utility** — `lib/utils.ts` exports a `clsx` + `tailwind-merge` helper; use it for all conditional class merging.
- **Dark mode** — managed by `next-themes` via `ThemeProvider` in `components/theme-provider.tsx`. Theme is toggled with the `D` key (keyboard shortcut wired in the provider). CSS variables use the oklch color space.

### Styling (both apps)
- TailwindCSS v4 — uses the new `@import "tailwindcss"` syntax (not `@tailwind base/components/utilities`).
- PostCSS pipeline via `@tailwindcss/postcss`.
- TypeScript path alias: `@/*` maps to the app root directory.

### Supabase
Root-level Supabase packages (`@supabase/ssr`, `@supabase/supabase-js`) are installed but not integrated into either app. No environment variables, client setup, or database schema exists yet.
