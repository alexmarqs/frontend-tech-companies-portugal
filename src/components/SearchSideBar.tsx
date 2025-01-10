"use client";

import { X } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { Button } from "./ui/button";
import { RetroContainer } from "./ui/retro-container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { useCallback } from "react";
import { SearchFilters, useSearchFilters } from "./hooks/useSearchFilters";
import { useSearchFiltersParams } from "./hooks/useSearchFiltersParams";

type SearchSideBarProps = {
  locationOptions: string[];
  categoryOptions: string[];
  extendedFilterUI?: (
    filters: SearchFilters,
    updateURL: (filters: SearchFilters) => void,
    setFilters: (filters: SearchFilters) => void,
    filtersNumber?: number,
  ) => React.ReactNode;
};

export function SearchSideBar({
  locationOptions,
  categoryOptions,
  extendedFilterUI,
}: SearchSideBarProps) {
  const { searchParams, filters: initialFilters } = useSearchFiltersParams();

  const updateURL = useCallback(
    (filters: SearchFilters) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("page");

      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      window.history.pushState(null, "", `?${params.toString()}`);
    },
    [searchParams],
  );

  const {
    filters,
    filtersNumber,
    handleSearchTerm,
    handleCategoryChange,
    handleLocationChange,
    handleResetFilters,
    setFilters,
  } = useSearchFilters({
    initialFilters,
    onFiltersChange: !extendedFilterUI ? updateURL : undefined,
  });

  return (
    <div className="w-full flex flex-col h-full justify-between">
      <RetroContainer
        variant="static"
        className="shrink-0 md:w-[300px] md:mx-auto"
      >
        <div className="px-4 py-3 w-full">
          <div className="mt-2">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="query">Search term</Label>
                <Input
                  id="query"
                  name="query"
                  onChange={(e) => {
                    handleSearchTerm(e.target.value);
                  }}
                  value={filters.query || ""}
                  placeholder="Name or description term"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={filters.category || "all"}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    {categoryOptions.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location">Location</Label>
                <Select
                  value={filters.location || "all"}
                  onValueChange={handleLocationChange}
                >
                  <SelectTrigger id="location" className="w-full">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    {locationOptions.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {!extendedFilterUI && (
                <Button
                  disabled={filtersNumber === 0}
                  variant="outline"
                  className="h-9 w-full px-2 border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={handleResetFilters}
                >
                  <X className="mr-[2px] h-4 w-4" />
                  Reset filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </RetroContainer>
      <div className="w-full">
        {extendedFilterUI &&
          extendedFilterUI(filters, updateURL, setFilters, filtersNumber)}
      </div>
    </div>
  );
}
