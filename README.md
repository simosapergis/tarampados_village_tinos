This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Geist.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

Check out the official [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for platform-agnostic instructions.

## Email delivery

The `/api/contact` route uses [Resend](https://resend.com) to send the contact-form submissions. Configure the following environment variables before deploying:

```
RESEND_API_KEY=...
RESEND_FROM_EMAIL="Tarampados Village <contact@tarampados.gr>"
RESEND_TO_EMAIL=tarampados@gmail.com
```

