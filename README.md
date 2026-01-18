# AMW (Fusion Starter)

A React + Vite + Tailwind SPA with an integrated Express server.

## Prerequisites

- **Node.js 22+** (recommended, matches `vite.config.server.ts` target)
- **pnpm** (the repo is pinned to `pnpm@10.x` in `package.json`)

If you don’t have pnpm:

```bash
corepack enable
corepack prepare pnpm@10.14.0 --activate
```

## Run Locally (Development)

1) Install dependencies:

```bash
pnpm install
```

2) Start the dev server:

```bash
pnpm dev
```

- App + API run on **http://localhost:8080** (single port)
- Example API endpoints:
  - `GET /api/ping`
  - `GET /api/demo`

## Build and Run (Production)

1) Build client + server:

```bash
pnpm build
```

2) Start the production server:

```bash
pnpm start
```

- Default production port is **3000**
- Change it with `PORT`:

```bash
# PowerShell
$env:PORT=4000; pnpm start

# macOS/Linux
PORT=4000 pnpm start
```

## Environment Variables

Create a `.env` file in the repo root if needed.

- `PORT` (production server port; default `3000`)
- `PING_MESSAGE` (used by `GET /api/ping`; default `"ping"`)

Example `.env`:

```bash
PING_MESSAGE=hello
PORT=3000
```

## Useful Commands

- `pnpm typecheck` — TypeScript type check
- `pnpm test` — Run Vitest
- `pnpm format.fix` — Format with Prettier

## Notes

- In dev, Express is mounted into Vite middleware (see `vite.config.ts`).
- In production, the Express server serves the built SPA from `dist/spa` and falls back to `index.html` for client-side routes (see `server/node-build.ts`).
