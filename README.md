# Mini Property Board

Small full-stack app to list properties and add a new one.

Frontend: Vue 3 + Vite + Tailwind (dark UI).

Backend: Express + Prisma + SQLite.

Monorepo: pnpm workspaces (apps/_, packages/_).

# Tech

Web: Vue 3, Vue Router, Tailwind v4 (via tailwindcss/vite), Vee-Validate + Zod, Axios

API: Express, Prisma (SQLite), Zod

# Prereqs

Node 20+

pnpm 9+

```bash
corepack enable
corepack prepare
pnpm@latest --activate
```

## Setup

# 1) install all deps

```bash
pnpm install
```

# 2) API env

```bash
printf 'DATABASE_URL="file:./dev.db"\nPORT=5174\n' > apps/api/.env
```

# 3) Web env (points FE to API)

```bash
printf 'VITE_API_URL=http://localhost:5174/api\n' > apps/web/.env.local
```

# 4) init DB + seed

```bash
pnpm -F @mpb/api prisma:gen
pnpm -F @mpb/api prisma:migrate
pnpm -F @mpb/api seed
```

Run (dev)

# terminal A (API)

```bash
pnpm -F @mpb/api dev
```

# terminal B (Web)

```bash
pnpm -F @mpb/web dev
```

Web: http://localhost:5173

API: http://localhost:5174/api/properties

## License

Ahamed Alavi.
