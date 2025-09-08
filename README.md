# Cali Health Connect

A modern single‑page app for a medical clinic: services, doctors, reviews, and a contact form that sends emails and stores submissions via Supabase Edge Functions.

## Tech Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix)
- TanStack Query
- Supabase (Database, Edge Functions)

## Features

- Landing with hero, services, about, doctors, reviews, and contact form
- Contact form: Supabase Edge Function `send-contact-email` + Resend
- Saves submissions to `contact_submissions`
- Reviews with simple captcha and moderation (`reviews` table)
- Client‑side routing with `react-router-dom`

## Getting Started

1) Install dependencies
```sh
npm i
```

2) Create an `.env` (or `.env.local`) with your Supabase keys
```sh
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

3) Run the app
```sh
npm run dev
```

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run preview` — preview the build
- `npm run lint` — linting

## Supabase Notes

- Edge Function: `supabase/functions/send-contact-email` (stores submission and sends emails via Resend)
- Tables used (see `src/integrations/supabase/types.ts`):
  - `contact_submissions`, `doctors`, `reviews`

## Deployment

- Build: `npm run build` (output in `dist/`)
- Vercel recommended. SPA routing fallback is configured via `vercel.json` so direct links to nested routes won’t 404.

## License

MIT
