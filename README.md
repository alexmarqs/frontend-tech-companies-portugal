# Tech Companies in Portugal 🚀 🇵🇹

This is a **frontend** for the github repository

## Tech stack 🧑‍💻

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn UI](https://ui.shadcn.com)
- [Vercel](https://vercel.com/) for deployment, database and file storage

## How to contribute 🤝

No requirements, just clone the repository and start coding. If you want to add a new feature, please open an issue first to discuss it.

## Technical notes 📚

- When using `searchParams` property in the page, we are turning it in a dynamic page. With that, we cannot take advantage of the pure static generation which means that features like route segment option revalidate + react cache will not work. Some alternatives are using the `unstable_cache` (that's what I'm using now) or using a client component with the hook `useSearchParams`.
