import { Company } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

type CompanyItemProps = {
  company: Company;
};

export default function CompanyItem({
  company: { name, description, locations, categories, slug, isFeatured },
}: CompanyItemProps) {
  return (
    <Link
      className={cn(
        "group flex w-full gap-2 rounded-md border p-5 hover:cursor-pointer hover:bg-muted/40",
        isFeatured && "bg-gradient-to-r from-green-400/35 to-red-500/35",
      )}
      href={`/company/${slug}`}
    >
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <h3 className="line-clamp-1 flex items-center justify-center gap-2 text-lg font-medium">
            {name} {isFeatured && <FeatureCompanyBadge />}
          </h3>
          <Categories categories={categories || []} />
        </div>
        <p className="line-clamp-2 text-sm italic text-muted-foreground">
          {description}
        </p>
        <Locations locations={locations || []} />
      </div>
      <ChevronRight
        className="shrink-0 self-center text-muted-foreground"
        size={24}
      />
    </Link>
  );
}

export const Locations = ({ locations }: { locations: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-1 text-xs font-medium">
      <MapPin className="shrink-0" size={16} />
      {locations.map((location, index) => {
        return (
          <React.Fragment key={index}>
            <p className="text-nowrap">{location}</p>
            {index !== locations.length - 1 && (
              <span className="text-muted-foreground">•</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const Categories = ({
  categories,
}: {
  categories: string[] | string;
}) => {
  const categoriesArray = Array.isArray(categories) ? categories : [categories];

  return (
    <div className="flex flex-wrap items-center justify-center gap-1">
      {categoriesArray.map((category, index) => (
        <Badge
          key={index}
          variant="secondary"
          className="text-nowrap rounded-md text-xs font-semibold tracking-wider"
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

const FeatureCompanyBadge = () => {
  return (
    <Badge
      variant="secondary"
      className="flex items-center justify-between gap-1 text-nowrap rounded-md text-xs font-semibold tracking-wider"
    >
      <span className="bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent">
        Featured
      </span>
      <span>🔥</span>
    </Badge>
  );
};
