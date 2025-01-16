import Image from "next/image";
import bgHeader from "../../public/assets/images/bg-header.webp";

export default function CompaniesHeader() {
  return (
    <section className="relative w-full overflow-hidden py-12 text-center">
      <div className="absolute inset-0 z-0 opacity-45">
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

      <h1 className="relative z-[5] px-1 font-mono font-bold text-4xl max-w-5xl mx-auto">
        Discover Leading Tech Companies in Portugal 🇵🇹
      </h1>
    </section>
  );
}
