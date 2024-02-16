import CompaniesHeader from "@/components/CompaniesHeader";
import { LayoutProps } from "@/lib/types";

export default function AppLayout({ children }: LayoutProps) {
  return (
    <main className="mx-auto flex min-w-[300px] max-w-5xl flex-1 flex-col p-3">
      <CompaniesHeader />
      <section className="relative flex flex-1 flex-col gap-4 md:flex-row">
        {children}
      </section>
    </main>
  );
}
