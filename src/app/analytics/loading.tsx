import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Skeleton className="col-span-3 h-72 rounded-md" />
      <Skeleton className="col-span-3 h-[20rem] rounded-md" />
    </div>
  );
}
