import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center p-3">
      <Skeleton className="h-60 w-full rounded-md" />
    </div>
  );
}
