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

import { useSearchQueryParams } from "./hooks/useSearchQueryParams";

type SearchSideBarProps = {
  locationOptions: string[];
  categoryOptions: string[];
  extendedUI?: () => React.ReactNode;
  onReset?: () => void;
};

export function SearchSideBar({
  locationOptions,
  categoryOptions,
  extendedUI,
  onReset,
}: SearchSideBarProps) {
  const { setSearchParams, searchParams, appliedFilters } =
    useSearchQueryParams();

  return (
    <div className="w-full flex flex-col h-full gap-4 justify-between">
      <RetroContainer
        variant="static"
        className="shrink-0 md:w-[290px] md:mx-auto"
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
                    setSearchParams(
                      { query: e.target.value },
                      { throttleMs: 250 },
                    );
                  }}
                  value={searchParams.query || ""}
                  placeholder="Name or description term"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={searchParams.category || "all"}
                  onValueChange={(value) =>
                    setSearchParams({ category: value })
                  }
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
                  value={searchParams.location || "all"}
                  onValueChange={(value) =>
                    setSearchParams({ location: value })
                  }
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

              <Button
                variant="outline"
                disabled={appliedFilters.length === 0}
                className="h-9 w-full px-2 border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
                onClick={() => {
                  setSearchParams(null);
                  onReset?.();
                }}
              >
                <X className="mr-[2px] h-4 w-4" />
                Reset filters
              </Button>
              {extendedUI && extendedUI()}
            </div>
          </div>
        </div>
      </RetroContainer>
    </div>
  );
}
