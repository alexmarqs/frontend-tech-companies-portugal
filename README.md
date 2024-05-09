# Tech Companies in Portugal 🇵🇹

The main goal is to provide a better way to explore tech companies in Portugal.

## Features 🚀

- List of tech companies in Portugal synced with [tech-companies-in-portugal](https://github.com/marmelo/tech-companies-in-portugal)
- Search for companies (name and description terms)
- Filter by location
- Filter by category
- SEO friendly - Open Graph and Twitter Cards meta tags included (shareable links)
- Responsive design

## Tech stack 🧑‍💻

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn UI](https://ui.shadcn.com) - UI components
- [Vercel](https://vercel.com/) - Hosting and CI/CD
- [Upstash](https://upstash.com/) - Redis as a service for analytics
- [Tremor](https://www.tremor.so/) - React components to build charts and dashboards

## How to contribute 🤝

No requirements, just open a pull request with your changes.
If you want to add a new feature, please open an issue first to discuss it.

## Technical notes 📝

Currently, our Next.js middleware incorrectly counts prefetched pages as views due to caching issues. We could exclude the prefetch pages (checking some headers) from the middleware match configuration, but then navigation via the Link component won’t trigger analytics. Disabling prefetching is an option, though it might slow down navigation. Alternatively, we could shift to client-side analytics tracking for more accuracy. This will need consideration for future updates.
