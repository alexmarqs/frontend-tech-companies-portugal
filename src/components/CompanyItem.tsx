import { Company } from "@/lib/types";
import { ChevronRight, MapPin } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

type CompanyItemProps = {
  company: Company;
};

export default function CompanyItem({
  company: { name, description, locations, categories },
}: CompanyItemProps) {
  return (
    <div className="group flex w-full gap-2 rounded-md border p-5 hover:cursor-pointer hover:bg-muted/40">
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full gap-4">
          <div className="flex-grow space-y-3">
            <div className="space-y-1">
              <div className="group flex items-center gap-2">
                <h3 className="line-clamp-1 text-lg font-medium">{name}</h3>
              </div>
              <p className="line-clamp-2 text-sm italic text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
          <Categories categories={categories || []} />
        </div>
        <Locations locations={locations || []} />
      </div>
      <ChevronRight className="shrink-0 self-center" size={24} />
    </div>
  );
}

const Locations = ({ locations }: { locations: string[] }) => {
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

const Categories = ({ categories }: { categories: string[] | string }) => {
  const categoriesArray = Array.isArray(categories) ? categories : [categories];

  return (
    <div>
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
    </div>
  );
};
