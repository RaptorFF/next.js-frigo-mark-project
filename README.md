This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Let's go!

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Email obavestenja za rezervacije

Kada korisnik posalje rezervaciju, aplikacija cuva rezervaciju u bazi i salje email vlasniku firme.

Ako zelis da rezervacije idu samo na email (bez upisa u bazu), postavi:

- `RESERVATIONS_EMAIL_ONLY=true`

1. Napravi `.env.local` fajl na osnovu `.env.example`.
2. Popuni SMTP podatke i `OWNER_EMAIL`.

Obavezne promenljive:

- `DATABASE_URL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE` (`true` za port 465, inace `false`)
- `SMTP_USER`
- `SMTP_PASS`
- `OWNER_EMAIL`

Opcione promenljive:

- `MAIL_FROM` (ako nije postavljen, koristi se `SMTP_USER`)
- `RESERVATIONS_EMAIL_ONLY` (`true` za slanje samo email-a, bez baze)
