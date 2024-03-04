"use client";

import { ChevronDown, ChevronUp, ListFilter, X } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SearchSideBarProps = {
  locationOptions: string[];
  categoryOptions: string[];
};

export function SearchSideBar({
  locationOptions,
  categoryOptions,
}: SearchSideBarProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const location = searchParams.get("location");

  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(true);

  const filtersNumber = [query, category, location].filter(Boolean).length;

  const handleSearchTerm = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");

    if (value !== "all") {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handleLocationChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");

    if (value !== "all") {
      params.set("location", value);
    } else {
      params.delete("location");
    }

    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handleResetFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    params.delete("query");
    params.delete("category");
    params.delete("location");

    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="h-fit shrink-0 pt-1 md:sticky md:top-0 ">
      <aside className="mx-auto rounded-md border px-4 py-3 md:w-72">
        <Collapsible
          open={isCollapsibleOpen}
          onOpenChange={setIsCollapsibleOpen}
          className="w-full"
        >
          <CollapsibleTrigger className="group w-full">
            <div className="text-md flex items-center justify-between font-medium">
              <div className="flex items-center gap-1">
                <ListFilter className="h-4 w-4" />
                Filters
                {filtersNumber > 0 && (
                  <Badge className="rounded-full px-2" variant="secondary">
                    {filtersNumber}
                  </Badge>
                )}
              </div>
              {isCollapsibleOpen ? (
                <div className="rounded-full bg-transparent p-2 group-hover:bg-muted ">
                  <ChevronUp className="h-4 w-4" />
                </div>
              ) : (
                <div className="rounded-full bg-transparent p-2 group-hover:bg-muted ">
                  <ChevronDown className="h-4 w-4" />
                </div>
              )}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="query">Search term</Label>
                <Input
                  id="query"
                  name="query"
                  onChange={(e) => {
                    handleSearchTerm(e.target.value);
                  }}
                  value={query || ""}
                  placeholder="Name or description term"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={category || "all"}
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
                  value={location || "all"}
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
              <Button
                disabled={filtersNumber === 0}
                variant="outline"
                className="h-9 w-full px-2"
                onClick={handleResetFilters}
              >
                <X className="mr-[2px] h-4 w-4" />
                Reset filters
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </aside>
    </div>
  );
}
