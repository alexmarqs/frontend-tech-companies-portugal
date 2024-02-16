# Technical notes 📚

- When using `searchParams` property in the page, we are turning it in a dynamic page. With that, we cannot take advantage of the pure static generation which means that features like route segment option revalidate + react cache will not work. Some alternatives are using the `unstable_cache` (that's what I'm using now) or using a client component with the hook `useSearchParams`.
