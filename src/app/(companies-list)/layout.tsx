import CompaniesHeader from "@/components/CompaniesHeader";
import { LayoutProps } from "@/lib/types";

export default function AppLayout({ children }: LayoutProps) {
  return (
    <main className="mx-auto flex w-full min-w-[300px] max-w-5xl flex-1 flex-col p-3">
      <CompaniesHeader />
      {children}
    </main>
  );
}
