import Image from "next/image";

type EmptyStateProps = {
  title: string;
  description?: string;
  imagePath?: string;
};

export const EmptyState = ({
  title,
  description,
  imagePath,
}: EmptyStateProps) => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-2">
      <Image
        priority
        src={imagePath || "/empty.png"}
        height="100"
        width="100"
        className="h-auto w-auto"
        alt="Empty"
      />
      <p className="text-center font-calsans">{title}</p>
      {description && (
        <p className="text-md text-center text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};
