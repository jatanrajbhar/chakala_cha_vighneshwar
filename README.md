# Chakala Cha Vighneshwar

Official website for **Chakala Sarvajanik Ganesh Utsav Mandal** — one of Andheri East's largest youth-led Ganesh Utsav celebrations.

**Live:** https://chakalachavigneshwar.vercel.app

## About

Ten years ago, a group of five teenagers founded the Chakala Sarvajanik Ganesh Utsav Mandal. Unlike many other mandals, this one is entirely youth-led, funded by personal savings and dedication. Chakala Cha Vighneshwar upholds Maharashtra's rich traditions with exceptional artistry, intricate decorations, and grand festivities.

## Features

- Parallax hero section with animated logo
- About section with scrolling background effects
- Ganesh Utsav gallery showcasing celebrations from 2017–2025
- Sabhasad (team members) grid with auto-matched photos
- Contact section with embedded Google Maps
- Donation section (coming soon)
- English / Marathi language toggle
- Fully responsive design optimized for mobile
- Compressed images for fast loading

## Tech Stack

- **React 18** with TypeScript
- **Vite 7** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Framer Motion** for animations
- **React Router** for routing
- **Vercel** for hosting

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Install & Run

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/          # Images (hero, logos, team photos, utsav gallery)
  components/      # Page sections (Header, Hero, About, GaneshUtsav, etc.)
  components/ui/   # shadcn/ui components
  hooks/           # Custom React hooks
  lib/             # Utilities and i18n translations
  pages/           # Route pages (Index, NotFound)
  test/            # Test setup and specs
```

## Language Support

The site supports English (default) and Marathi. Translations are defined in `src/lib/i18n.tsx`. Toggle between languages using the button in the header.
#

