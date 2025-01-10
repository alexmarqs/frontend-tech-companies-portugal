"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";
import { use, useState } from "react";
import { SearchSideBar } from "./SearchSideBar";
import { useSearchFiltersParams } from "./hooks/useSearchFiltersParams";
import { Button } from "./ui/button";
import { RetroContainer } from "./ui/retro-container";

type FilterPanelButtonProps = {
  companiesCategoriesAndLocationsPromise: Promise<{
    availableCategories: string[];
    availableLocations: string[];
  }>;
};

export default function FiltersPanelButton({
  companiesCategoriesAndLocationsPromise,
}: FilterPanelButtonProps) {
  const segment = useSelectedLayoutSegment();
  const isCompanyListPage = segment === "(companies-list)";
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { appliedFilters } = useSearchFiltersParams();

  const { availableCategories = [], availableLocations = [] } = use(
    companiesCategoriesAndLocationsPromise,
  );

  if (!isCompanyListPage) {
    return null;
  }

  return (
    <>
      <Button
        asChild
        onClick={() => setIsFilterOpen(true)}
        className="px-3 inline-flex md:hidden hover:cursor-pointer"
      >
        <div className="flex items-cente gap-1">
          <SlidersHorizontal className="shrink-0" size={16} />
          <span>Filters</span>
          {appliedFilters.length > 0 && (
            <span className="text-sm">({appliedFilters.length})</span>
          )}
        </div>
      </Button>

      {isFilterOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
          <RetroContainer
            variant="static"
            className="fixed inset-y-0 left-0 w-full sm:w-[400px] bg-background border-r-2 border-accent p-6 overflow-y-auto flex flex-col justify-start items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 w-full">
              <h2 className="font-mono text-2xl font-bold">Filters</h2>
              <Button size="icon" onClick={() => setIsFilterOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="w-full h-full flex flex-col">
              <SearchSideBar
                locationOptions={availableLocations}
                categoryOptions={availableCategories}
                extendedFilterUI={(
                  filters,
                  updateURL,
                  _setFilters,
                  filtersNumber,
                ) => (
                  <div className="flex flex-col gap-2">
                    <Button
                      disabled={filtersNumber === 0}
                      variant="outline"
                      className="h-9 w-full px-2 border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => {
                        setIsFilterOpen(false);
                        updateURL({
                          query: null,
                          category: null,
                          location: null,
                        });
                      }}
                    >
                      Clear filters
                    </Button>
                    <Button
                      className="w-full"
                      variant="secondary"
                      onClick={() => {
                        setIsFilterOpen(false);
                        updateURL(filters);
                      }}
                    >
                      Apply Filters
                    </Button>
                  </div>
                )}
              />
            </div>
          </RetroContainer>
        </div>
      )}
    </>
  );
}
