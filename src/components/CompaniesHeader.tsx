import * as motion from "motion/react-client";
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

      <motion.h1
        className="relative z-[5] px-1 font-mono font-bold text-4xl max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Discover Leading Tech Companies in Portugal 🇵🇹
      </motion.h1>
    </section>
  );
}
