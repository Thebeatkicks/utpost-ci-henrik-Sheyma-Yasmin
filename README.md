# Utpost

Plattform för friluftsdestinationer. Redaktionella guider, användarnas egna turer och bilder.

## Kom igång

```bash
npm install
docker compose -f docker-compose.dev.yml up -d
npm run seed
npm start
```

Appen ligger sen på http://localhost:3000 och API:et på http://localhost:4000.

## Struktur

- `api/` – Express + Postgres (Drizzle)
- `web/` – React + Vite
- `client/` – **ny klient i Vue 3 + Vue Router** (port 3001). Guidevyn är portad (vecka 1). Har lint (ESLint + Prettier), ett röktest (Vitest) och ett bygge – men ingenting kör dem automatiskt än. Det är labben.

## Kommandon (kör från roten)

    npm run dev:client        # Vue-klienten på :3001 (API:et måste köra: npm run dev:api)
    npm run lint              # ESLint på client/
    npm run format:check      # Prettier – bara kontroll, ändrar inget
    npm test                  # Vitest, en gång, avslutar
    npm run build             # vite build av client/

## Deploy

Fråga Marcus.
