# Lemonade Stand

Website for **Lemonade Stand**, a youth entrepreneurship program in Woodstock, Georgia (Cherokee County, metro Atlanta).

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Fully static: no database, no backend. Every illustration is hand-built SVG.

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check a production build:

```bash
npm run build
npm start
```

## Edit the words

**All site copy lives in one file: [`content/site.ts`](content/site.ts).** Change text there and every page updates.

Things to fill in:

| What | Where |
| --- | --- |
| Contact email | `CONTACT_EMAIL` at the top of `content/site.ts` |
| Founder photo | Replace `public/aaron.jpg` (4:5 portrait works best) |
| Email subject lines | `getInvolved.schools.subject`, `getInvolved.sponsors.subject`, `mentorsSection.cta.subject` |

House style: no em dashes in the copy. Use commas, periods, or colons.

## Add mentors

Mentors are listed in [`data/mentors.ts`](data/mentors.ts). They show on the homepage and on `/mentors`.

```ts
{
  name: "Jane Smith",
  title: "Owner",
  company: "Smith Bakery",
  helpsWith: "Pricing, costs, and running a storefront.",
  photo: "/mentors/jane.jpg", // optional, put the file in public/mentors/
},
```

Delete the placeholder entries (the ones with `placeholder: true`) as real mentors join.

## Where things live

```
app/
  layout.tsx          fonts, SEO and Open Graph metadata
  page.tsx            the homepage (sections in order)
  mentors/page.tsx    the /mentors page
  icon.svg            favicon (the logo)
  apple-icon.png      home screen icon
  share-card/         internal page used to render the social share image
components/
  illustrations/      LemonadeStand (hero), Stage (Final Pitch), Logo, Lemon
  sections/           one file per homepage section
content/site.ts       all copy
data/mentors.ts       mentor list
public/og.png         social share image
```

## Regenerate the social share image

`public/og.png` is rendered from the real hero illustration. If you change the headline or the stand, rebuild it:

```bash
npm i -g playwright && npx playwright install chromium
npm run build && npm start
# in a second terminal:
NODE_PATH=$(npm root -g) npm run images
```

## Deploy

The site is deployed on Vercel. Every push to `main` redeploys automatically once the GitHub repo is connected to the Vercel project. To use a custom domain, add it under Vercel → Project → Settings → Domains.
