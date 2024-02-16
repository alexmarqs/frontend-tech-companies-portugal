export default function CompaniesHeader() {
  return (
    <section className="mx-auto max-w-3xl space-y-4 py-12 text-center">
      <h1 className="font-calsans text-3xl tracking-tight">
        Tech Companies in Portugal 🇵🇹
      </h1>
      <p className="text-muted-foreground">
        The most comprehensive list of tech companies in Portugal, all in one
        place. Non official frontend that aggregates data from{" "}
        <a
          href="https://github.com/marmelo/tech-companies-in-portugal"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          marmelo/tech-companies-in-portugal
        </a>{" "}
        repository.
      </p>
    </section>
  );
}
