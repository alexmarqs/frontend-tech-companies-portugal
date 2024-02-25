"use client";

import { ChevronDown, ChevronUp, ListFilter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { useState } from "react";
import { Badge } from "./ui/badge";
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
  const initialSearchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(true);
  const [searchParamsData, setSearchParamsData] =
    useState<URLSearchParams>(initialSearchParams);

  const query = searchParamsData.get("query")?.toString();
  const category = searchParamsData.get("category")?.toString();
  const location = searchParamsData.get("location")?.toString();

  const filtersNumber = [query, category, location].filter(Boolean).length;

  const handleSearchTerm = (term: string) => {
    const params = new URLSearchParams(searchParamsData);
    params.delete("page");

    if (term) {
      params.set("query", term.trim());
    } else {
      params.delete("query");
    }

    setSearchParamsData(params);

    history.replaceState(null, "", `${pathname}?${params.toString()}`);
  };

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParamsData);
    params.delete("page");

    if (value === "all" || !value) {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    setSearchParamsData(params);

    history.replaceState(null, "", `${pathname}?${params.toString()}`);
  };

  const handleLocationChange = (value: string) => {
    const params = new URLSearchParams(searchParamsData);
    params.delete("page");

    if (value === "all" || !value) {
      params.delete("location");
    } else {
      params.set("location", value);
    }

    setSearchParamsData(params);

    history.replaceState(null, "", `${pathname}?${params.toString()}`);
  };

  return (
    <div className="sticky top-0 h-fit shrink-0 pt-1">
      <aside className="mx-auto rounded-md border px-4 py-3 backdrop-blur-lg md:w-72">
        <Collapsible
          open={isCollapsibleOpen}
          onOpenChange={setIsCollapsibleOpen}
          className="w-full"
        >
          <CollapsibleTrigger className="w-full">
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
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
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
                  value={query}
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
            </div>
          </CollapsibleContent>
        </Collapsible>
      </aside>
    </div>
  );
}
