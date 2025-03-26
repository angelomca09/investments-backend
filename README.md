# Investments Backend

Initialy built with `tsc --init` and `npm init`, this project uses `tsx` to run Typescript files easier (no config).
Prisma was installed with `npx prisma init --datasource-provider sqlite` and then `npx prisma generate` to generate the prisma client.

## Setup

First be sure to have a `.env` file created with the same structure as `.env.example`.

To setup prisma: `npm run db:migrate`.

To run the application: `npm run dev`.