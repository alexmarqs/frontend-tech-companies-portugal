import { Skeleton } from "@/components/ui/skeleton";
import { LayoutProps } from "@/lib/types";
import { Suspense } from "react";

export default function CompanyPageLayout({ children }: LayoutProps) {
  return <Suspense fallback={<CompanyLoading />}>{children}</Suspense>;
}

const CompanyLoading = () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center p-3">
      <Skeleton className="h-60 w-full rounded-md" />
    </div>
  );
};
