import Image from "next/image";

export const NoCompaniesResults = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-2">
      <Image
        priority
        src="/assets/images/empty.png"
        height="100"
        width="100"
        className="h-auto w-auto"
        alt="Empty"
      />
      <p className="text-center">No companies found.</p>
      <p className="text-md text-center text-muted-foreground">
        Try again or check back later.
      </p>
    </div>
  );
};
