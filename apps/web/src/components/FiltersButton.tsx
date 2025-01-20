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
        onClick={() => setIsFilterOpen(true)}
        className="px-3 inline-flex hover:cursor-pointer space-x-1"
        aria-label="Open filters"
      >
        <SlidersHorizontal className="shrink-0" size={16} aria-hidden="true" />
        <span>Filters</span>
        {appliedFilters.length > 0 && (
          <Badge className="text-xs px-2 m-0">{appliedFilters.length}</Badge>
        )}
      </Button>
      {appliedFilters.length > 0 && (
        <Button
          variant="secondary"
          onClick={() => setSearchParams(null)}
          aria-label="Clear filters"
        >
          <X className="shrink-0" size={16} aria-hidden="true" />
        </Button>
      )}
    </div>
  );
};
