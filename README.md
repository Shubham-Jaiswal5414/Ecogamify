# Ecogamify
# EcoGamify

A modern, full-stack Next.js 14 + React 18 + TailwindCSS web application for gamified sustainability and education.

## Features
- Landing page with hero, counters, feature cards, testimonials, CTA
- Gamification: leaderboard, AR-based challenges (WebXR/Three.js), eco-points
- NGO & Institution: directory, signup form, impact stories
- Impact tracking: dynamic charts (Recharts/Chart.js), metrics API, downloadable PDF report
- Research & Education: NEP 2020, UNESCO, case studies, interactive flow
- Technical & Security: tech stack page, OAuth login (Google/GitHub), JWT API auth
- Contact & Partnerships: contact form, reasons to partner
- Beautiful, responsive, accessible UI with gradients, glassmorphism, soft shadows, dark mode, Framer Motion animations
- Modular, reusable components (ShadCN UI, Radix UI)

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TailwindCSS 3.4
- ShadCN UI + Radix UI
- Framer Motion
- Recharts / Chart.js
- Prisma ORM + MongoDB/PostgreSQL
- NextAuth (OAuth/JWT)
- Three.js/WebXR

## Setup Instructions
1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your database (MongoDB/PostgreSQL) and configure `.env`
4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the dev server:
   ```bash
   npm run dev
   ```

## Demo Data
- Demo users, NGOs, and impact metrics are seeded in the database for testing.

## Folder Structure
- `/app` - Next.js app router pages
- `/components` - Reusable UI components
- `/styles` - Global styles
- `/public` - Static assets
- `/prisma` - Prisma schema
- `/api` - API routes

---
For more details, see each feature page and API route.
