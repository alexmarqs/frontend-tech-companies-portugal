import CompaniesHeader from "@/components/CompaniesHeader";
import { LayoutProps } from "@/lib/types";

export default function AppLayout({ children }: LayoutProps) {
  return (
    <main className="flex-1 flex-col w-full">
      <CompaniesHeader />
      <div className="mx-auto flex w-full max-w-5xl p-3">{children}</div>
    </main>
  );
}
