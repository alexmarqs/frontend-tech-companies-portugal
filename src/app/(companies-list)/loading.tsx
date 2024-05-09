import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative mt-4 flex flex-1 flex-col gap-6 md:flex-row">
      <div className="flex h-fit shrink-0 flex-col gap-4 md:flex-col-reverse">
        <Skeleton className="h-52 w-full rounded-md md:w-60" />
      </div>
      <div className="flex-1 space-y-4">
        <Skeleton className="h-36 w-full rounded-md" />
        <Skeleton className="h-36 w-full rounded-md" />
        <Skeleton className="h-36 w-full rounded-md" />
      </div>
    </div>
  );
}
