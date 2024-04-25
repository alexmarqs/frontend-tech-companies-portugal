import Image from "next/image";
import bgHeader from "../../public/bg-header.webp";

export default function CompaniesHeader() {
  return (
    <section className="relative overflow-hidden rounded-md py-11 text-center">
      <div className="absolute inset-0 z-0 opacity-35">
        <Image
          src={bgHeader}
          fill
          quality={50}
          className="object-cover object-center"
          priority
          placeholder="blur"
          alt="Background Tech Companies in Portugal"
        />
      </div>

      <div className="relative z-10 space-y-3 px-6">
        <h1 className="font-calsans text-3xl tracking-tight">
          Explore Tech Companies in Portugal 🇵🇹
        </h1>
        <p className="text-accent-foreground">
          The most comprehensive list of tech companies in Portugal, all in one
          place. Non official frontend that aggregates data from{" "}
          <a
            href="https://github.com/marmelo/tech-companies-in-portugal"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-[2px]"
          >
            marmelo/tech-companies-in-portugal
          </a>{" "}
          repository.
        </p>
      </div>
    </section>
  );
}
