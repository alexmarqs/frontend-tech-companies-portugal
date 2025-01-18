import { SlidersHorizontal, X } from "lucide-react";
import { useSearchQueryParams } from "./hooks/useSearchQueryParams";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type FiltersButtonProps = {
  setIsFilterOpen: (isFilterOpen: boolean) => void;
};

export const FiltersButton = ({ setIsFilterOpen }: FiltersButtonProps) => {
  const { appliedFilters, setSearchParams } = useSearchQueryParams();

  return (
    <div className="inline-flex items-center gap-2 md:hidden">
      <Button
        asChild
        onClick={() => setIsFilterOpen(true)}
        className="px-3 inline-flex hover:cursor-pointer"
      >
        <div className="flex items-cente gap-1">
          <SlidersHorizontal className="shrink-0" size={16} />
          <span>Filters</span>
          {appliedFilters.length > 0 && (
            <Badge className="text-xs px-2 m-0">{appliedFilters.length}</Badge>
          )}
        </div>
      </Button>
      {appliedFilters.length > 0 && (
        <Button variant="secondary" onClick={() => setSearchParams(null)}>
          <X className="shrink-0" size={16} />
        </Button>
      )}
    </div>
  );
};
